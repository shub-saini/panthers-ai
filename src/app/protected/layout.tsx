import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }

  return <div>{children}</div>;
}

export default ProtectedLayout;
