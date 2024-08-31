// pages/donation.js
"use client"
import { useState } from "react";
import Layout from "../project-details/components/layout";
import ProjectOverview from "../project-details/components/ProjectOverview";
import ProjectStats from "../project-details/components/ProjectStats";
import Tabs from "../project-details/components/Tabs";
import DonationModal from "./components/DonationModal";
import detailsImg from "../../public/images/detailsImg.jpg";
import Image from "next/image";


export default function Donation() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabs = [
    { label: "Project Overview", content: <ProjectOverview /> },
    { label: "Team members", content: <p className="text-white">Team members content goes here...</p> },
    { label: "Reward/incentives", content: <p className="text-white">Reward/incentives content goes here...</p> },
    { label: "Contact information", content: <p className="text-white">Contact information content goes here...</p> },
    { label: "Community", content: <p className="text-white">Community content goes here...</p> },
    { label: "Updates", content: <p className="text-white">Updates content goes here...</p> },
    { label: "Security", content: <p className="text-white">Security content goes here...</p> },
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Robinhood (0X168048....7838)</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Donate
          </button>
        </div>
        <Image src={detailsImg} alt="Project Detail" className="w-full mb-8 rounded-lg" />
        <Tabs tabs={tabs} />
        <div className="mt-8">
          <ProjectStats />
        </div>
      </div>
      <DonationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Layout>
  );
}
