import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";
import { RainbowButton } from "./ui/rainbow-button";
import { ToggleMode } from "./ToggleMode";



export function Navbar() {
  return (
    <div className="flex items-center justify-between py-5">
      <Link href="/" className="flex items-center gap-2">
        <Image src={Logo} alt="Logo" className="size-10" />
        <h3 className="text-3xl font-semibold text-blue-500">
          Invoice
        </h3>
      </Link>
      <ToggleMode />
    </div>
  );
}