"use-client";
import { ModeToggle } from "@/components/ui/ModeToggle";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Authenticated, Unauthenticated } from "convex/react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-slate-900 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4 text-2xl">
          <Image
            src="/images/download.png"
            className="rounded"
            alt="logo"
            width={100}
            height={100}
          />
          Talk With Your Docs
        </div>

        <div>
          <Unauthenticated>
            <SignInButton />
          </Unauthenticated>
          <Authenticated>
            <div className="flex gap-4">
              <ModeToggle />
              <UserButton />
            </div>
          </Authenticated>
        </div>
      </div>
    </div>
  );
};

export default Header;
