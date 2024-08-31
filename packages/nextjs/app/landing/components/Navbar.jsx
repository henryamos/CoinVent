// components/landingPage/Navbar.js
import Link from "next/link";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

const Navbar = () => {
  return (
    <nav className="bg-[#011B32] shadow-lg text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">Coinvent</div>
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link href="/landing">Home</Link>
          </li>
          <li>
            <Link href="#">Explore</Link>
          </li>
          <li>
            <Link href="#">Sign In</Link>
          </li>
          <li>
            <Link href="#">Sign Up</Link>
          </li>
        </ul>
        <RainbowKitCustomConnectButton className="bg-green-500" />
      </div>
    </nav>
  );
};

export default Navbar;
