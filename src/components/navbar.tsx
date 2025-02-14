"use client";

import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const pathname = usePathname();
  const { isSignedIn } = useUser();
  const noBackgroundPaths = ["/sign-in", "/sign-up"];
  const isLandingPage = pathname === "/";

  const renderAuthButton = (type: "signin" | "signup") => {
    const isAuthPage =
      pathname === `/${type === "signin" ? "sign-in" : "sign-up"}`;
    const Component = type === "signin" ? SignInButton : SignUpButton;

    if (isAuthPage) return null;

    return (
      <Component mode='modal'>
        <Button
          variant={type === "signin" ? "ghost" : "default"}
          size='sm'
          className={
            "bg-primary text-primary-foreground hover:bg-primary/90"
            //   type === "signup"
            //   ? "bg-primary text-primary-foreground hover:bg-primary/90"
            //   : ""
          }
        >
          {type === "signin" ? "Sign in" : "Sign up"}
        </Button>
      </Component>
    );
  };

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={cn(
        "fixed top-0 left-0 right-0 flex items-center py-3 z-50 h-16",
        noBackgroundPaths.includes(pathname)
          ? ""
          : "bg-background/80 backdrop-blur-sm border-b"
      )}
    >
      <div className='flex justify-between items-center w-full container mx-auto px-7'>
        <div className='flex items-center'>
          <Link href={"/"}>
            <motion.div
              className='flex justify-center items-center text-primary'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <h1 className='text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80'>
                Panthers AI
              </h1>
            </motion.div>
          </Link>
        </div>

        {isLandingPage && (
          <motion.ul className='hidden md:flex space-x-8'>
            {["Features", "How It Works", "Testimonials"].map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className='text-muted-foreground hover:text-primary transition-colors'
                >
                  {item}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}

        <div className='flex items-center space-x-4'>
          <ThemeToggle />
          {isSignedIn ? (
            <UserButton afterSignOutUrl='/' />
          ) : (
            <>
              {renderAuthButton("signin")}
              {renderAuthButton("signup")}
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
