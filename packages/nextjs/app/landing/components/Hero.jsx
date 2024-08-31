// components/Hero.js
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/logo.svg";

const Hero = () => {
  return (
    <section className="text-center py-20 bg-blue-900 text-white flex flex-col items-center">
      <h1 className="text-4xl font-bold">Fuel Your Startup Journey</h1>
      <p className="mt-4 text-lg max-w-md">
        Connect with investors to launch your tech startup. Deliver compelling pitches, highlight your potential, and
        step into the spotlight.
      </p>
      <div className="mt-8 space-x-4 flex flex-col md:flex-row">
        <Link href="/create-project">
          <button className="bg-green-500 text-white px-6 py-3 rounded mt-4 md:mt-0">Launch Project</button>
        </Link>
        <button className="bg-transparent border border-green-500 text-green-500 px-6 py-3 rounded mt-4 md:mt-0">
          Explore More
        </button>
      </div>
      <div className="mt-10">
        <Image src={Logo} alt="Icon" className="mx-auto w-24 h-24 md:w-32 md:h-32" />
      </div>
    </section>
  );
};

export default Hero;
