import { currentUser } from "@clerk/nextjs/server";
import React from "react";

async function Hello() {
  const user = await currentUser();
  return <div className='mt-24'>{JSON.stringify(user)}</div>;
}

export default Hello;
