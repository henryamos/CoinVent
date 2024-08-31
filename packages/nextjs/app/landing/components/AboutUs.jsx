// components/WhyCoinvent.js
import Image from "next/image";
import AboutIcon from "../../../public/icons/blockchain.png";

const WhyCoinvent = () => {
  return (
    <section className="flex flex-col md:flex-row p-12 h-auto bg-[#011B32]">
      <div className="md:w-4/12 text-center leading-loose md:text-left">
        <h2 className="text-3xl leading-loose font-bold">Why Coinvent?</h2>
        <p className="mt-4 text-left">
          Coinvent is a decentralized crowdfunding platform built on the Ethereum blockchain that enables entrepreneurs to raise funds for their projects on a global scale in cryptocurrency. 
        </p>
        <p>
          We aim to leverage Optimism's scalability, low transaction fees, and compatibility with Ethereum to enhance user experience.
        </p>
      </div>
      <div className="md:w-8/12 flex flex-wrap justify-center md:justify-start mt-8 md:mt-0">
        <div className="w-1/2 p-4 text-center flex flex-col items-center">
          <Image src={AboutIcon} alt="Icon 1" className="w-12 h-12" />
          <h4 className="mt-2 font-bold">Premium Security for you</h4>
          <p className="mt-2 text-center">
            We host data on distributed network and without the need for traditional financial intermediaries.
          </p>
        </div>
        <div className="w-1/2 p-4 text-center flex flex-col items-center">
          <Image src={AboutIcon} alt="Icon 2" className="w-12 h-12" />
          <h4 className="mt-2 font-bold">Fund cutting-end</h4>
          <p className="mt-2 text-center">
            We give you the chance to showcase your tech startup projects publicly to enable you meet your goals.
          </p>
        </div>
        <div className="w-1/2 p-4 text-center flex flex-col items-center">
          <Image src={AboutIcon} alt="Icon 1" className="w-12 h-12" />
          <h4 className="mt-2 font-bold">Fund and launch your start-up</h4>
          <p className="mt-2 text-center">
            We help tech startups to get funds that enable them to launch projects.
          </p>
        </div>
        <div className="w-1/2 p-4 text-center flex flex-col items-center">
          <Image src={AboutIcon} alt="Icon 2" className="w-12 h-12" />
          <h4 className="mt-2 font-bold">Leverages Blockchain</h4>
          <p className="mt-2 text-center">
            We use blockchain technology to offer secure transactions and a reliable environment for managing funds and investor relationships.
          </p>
        </div>
        {/* Add more icon items as needed */}
      </div>
    </section>
  );
};

export default WhyCoinvent;