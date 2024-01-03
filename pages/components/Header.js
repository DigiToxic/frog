import React from "react";
import ScrollButton from "./ScrollButton";
import Link from "next/link";

function Header() {
  return (
    <div className="bg-[#5a83d4] px-6 py-2 border-b-[3px] border-black">
      <div className="flex justify-between items-center">
        <img className="w-16" src="/frog_logo.png" alt="" />

        <ScrollButton targetId="Roadmap">
        <div>
          <p className="text-2xl underline">Roadmap</p>
        </div>
        </ScrollButton>

        <div className="flex justify-between items-center">
          <Link href="https://twitter.com/CrazyOnSolana">
          <img
            className="cursor-pointer w-8 mr-5 hover:scale-105 ease-in-out duration-300"
            src="/logo/twAsset_21.svg"
            alt=""
          />
          </Link>
          <Link href="https://t.me/CrazyFrogOnSOLANA">
          <img
            className="cursor-pointer w-8 mr-5 hover:scale-105 ease-in-out duration-300"
            src="/logo/tgAsset_22.svg"
            alt=""
          />
             </Link>
          <img className="cursor-pointer w-7 hover:scale-105 ease-in-out duration-300" src="/logo/dextools.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
