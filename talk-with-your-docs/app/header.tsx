"use-client";
import { ModeToggle } from "@/components/ui/ModeToggle";

import Image from "next/image";
import { HeaderActions } from "./header-actions";

const Header = () => {
  return (
    <div className="text-100xl  py-4 bg-red-800">
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
          <ModeToggle />
          <HeaderActions />
        </div>
      </div>
    </div>
  );
};

export default Header;
