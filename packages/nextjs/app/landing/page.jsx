"use client";

// import { useEffect } from "react";
// pages/index.js
import WhyCoinvent from "./components/AboutUs";
import FutureProjects from "./components/FutureProject";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import OngoingProjects from "./components/OngoingProject";

// import { useQuery } from "@apollo/client";
// import { useScaffoldContract, useScaffoldReadContract } from "~~/hooks/scaffold-eth";
// import { GET_ALL_CAMPAIGNS } from "~~/query";

export default function page() {
  // const { data, error } = useQuery(GET_ALL_CAMPAIGNS);
  // console.log(data, error);
  // const { data: campaignCount } = useScaffoldReadContract({
  //   contractName: "CrowdFunding",
  //   functionName: "campaignCount",
  // });

  // const { data: readContract } = useScaffoldContract({
  //   contractName: "CrowdFunding",
  // });

  // useEffect(() => {
  //   (async () => {
  //     if (campaignCount) {
  //       let count = Number(campaignCount);

  //       for (let index = 0; index < count; index++) {
  //         const campaign = await readContract.read?.getCampaign(BigInt(index));
  //         console.log(campaign);
  //       }
  //     }
  //   })();
  // }, [campaignCount]);

  const ongoingProjects = [
    {
      title: "Robinhood",
      status: "Ongoing",
      description:
        "Offers commission-free trading for stocks, cryptocurrencies, and ETFs. Robinhood aims to provide easy access to financial markets.",
      totalRaised: 150491562,
      fundraisingGoal: 190204512,
      startingDate: "SEP 9",
      imageUrl: "/images/img2.jpg", // Updated path
    },
    {
      title: "CryptoHub",
      status: "Ongoing",
      description:
        "CryptoHub offers secure storage solutions, real-time market data, and user-friendly tools to help navigate the cryptocurrency ecosystem.",
      totalRaised: 70555198,
      fundraisingGoal: 105154781,
      startingDate: "SEP 23",
      imageUrl: "/images/img1.jpg",
    },
    {
      title: "GitLab",
      status: "Ongoing",
      description: "Provides an integrated DevOps platform that facilitates software development and collaboration.",
      totalRaised: 12491432,
      fundraisingGoal: 78204512,
      startingDate: "Nov 1",
      imageUrl: "/images/img3.jpg",
    },
  ];

  const futureProjects = [
    {
      title: "Nuro",
      description: "Designs and deploys autonomous delivery vehicles specifically for local goods transportation.",
      totalRaised: 1204512,
      participants: 1287,
      imageUrl: "/images/img4.jpg",
      fundraisingGoal: 78204512,
      startingDate: "Nov 1",
      status: "Started",
    },
    {
      title: "UiPath",
      description:
        "UiPath provides a comprehensive platform that enables organizations to design, deploy, and manage software.",
      totalRaised: 1231004,
      participants: 2232,
      imageUrl: "/images/img5.jpg",
      fundraisingGoal: 78204512,
      startingDate: "Nov 1",
      status: "Started",
    },
    {
      title: "SpaceX",
      description: "Aims to revolutionize space travel with innovations in space exploration and rocket technology.",
      totalRaised: 1204512,
      participants: 1287,
      imageUrl: "/images/img6.jpg",
      fundraisingGoal: 78204512,
      startingDate: "Nov 1",
      status: "Started",
    },
  ];

  return (
    <Layout>
      <Hero />
      <WhyCoinvent />
      <OngoingProjects projects={ongoingProjects} />
      <FutureProjects projects={futureProjects} />
    </Layout>
  );
}
