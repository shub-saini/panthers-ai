import { AnimatedBackground } from "@/components/animated-background";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <AnimatedBackground />
      <SignIn />
    </div>
  );
}
