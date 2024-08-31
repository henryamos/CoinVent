// pages/project-detail.js
import Image from "next/image";
import detailsImg from "../../public/images/detailsImg.jpg";
import ProjectStats from "./components/ProjectStats";
import ProjectOverview from "./components/ProjectOverview";
import Tabs from "./components/Tabs";
import ProjectLayout from "./components/layout";
import Link from "next/link";

export default function page() {
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
    <ProjectLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-white">Robinhood (0X168048....7838)</h1>
          <Link href='/withdraw'>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Withdraw</button>
          </Link>
        </div>

        <Image src={detailsImg} alt="Project Detail" className="w-full mb-8 rounded-lg" />
        <Tabs tabs={tabs} />
        <div className="mt-8">
          <ProjectStats />
        </div>
      </div>
    </ProjectLayout>
  );
}
