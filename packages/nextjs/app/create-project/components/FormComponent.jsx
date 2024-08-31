// components/FormComponent.js
"use client";

import { useEffect, useRef, useState } from "react";
import Modal from "./Modal";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

// components/FormComponent.js

// components/FormComponent.js

// components/FormComponent.js

// components/FormComponent.js

// components/FormComponent.js

// components/FormComponent.js

// components/FormComponent.js

// components/FormComponent.js

// components/FormComponent.js

// components/FormComponent.js

// components/FormComponent.js

// components/FormComponent.js

// components/FormComponent.js

// components/FormComponent.js

// components/FormComponent.js

// components/FormComponent.js

// components/FormComponent.js

// components/FormComponent.js

// components/FormComponent.js

// components/FormComponent.js

// components/FormComponent.js

// components/FormComponent.js

// components/FormComponent.js

// components/FormComponent.js

// components/FormComponent.js

const FormComponent = () => {
  const projectTitleRef = useRef();
  const projectCategoryRef = useRef();
  const projectDescriptionRef = useRef();
  const fundingGoalsRef = useRef();
  const displayPictureRef = useRef();
  const cryptoChoiceRef = useRef();
  const projectTimelineRef = useRef();
  const teamBackgroundRef = useRef();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const { writeContractAsync, isMining, isPending, isSuccess } = useScaffoldWriteContract("CrowdFunding");
  const handleSubmit = async e => {
    e.preventDefault();

    // Check if all fields are filled
    if (
      !projectTitleRef.current.value ||
      !projectCategoryRef.current.value ||
      !projectDescriptionRef.current.value ||
      !fundingGoalsRef.current.value ||
      // !displayPictureRef.current.value ||
      !cryptoChoiceRef.current.value ||
      !projectTimelineRef.current.value ||
      !teamBackgroundRef.current.value
    ) {
      alert("Please fill in all fields.");
      return;
    }
    console.log(
      projectTitleRef.current.value,
      projectCategoryRef.current.value,
      projectDescriptionRef.current.value,
      fundingGoalsRef.current.value,
      cryptoChoiceRef.current.value,
      projectTimelineRef.current.value,
    );

    await writeContractAsync({
      functionName: "createCampaign",
      args: [
        projectTitleRef.current.value, // title: string
        projectCategoryRef.current.value, // category: string
        BigInt(fundingGoalsRef.current.value), // fundingGoal: uint256 (convert to BigInt)
        "", // image: string (assuming empty for now)
        cryptoChoiceRef.current.value, // cryptoChoice: string
        BigInt(projectTimelineRef.current.value), // duration: uint256 (convert to BigInt)
        projectDescriptionRef.current.value, // description: string
      ],
    });
    // Display modal
  };

  useEffect(() => {
    setIsModalOpen(isMining, isPending, isSuccess);
  }, [isMining, isPending, isSuccess]);
  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Reset form fields
    projectTitleRef.current.value = "";
    projectCategoryRef.current.value = "";
    projectDescriptionRef.current.value = "";
    fundingGoalsRef.current.value = "";
    displayPictureRef.current.value = "";
    cryptoChoiceRef.current.value = "";
    projectTimelineRef.current.value = "";
    teamBackgroundRef.current.value = "";
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-center text-3xl font-bold text-white mb-8">Project Creation</h2>
      <p className="text-center text-white mb-12">Create a new project by filling out the form below</p>
      <form onSubmit={handleSubmit} className="bg-[#011B22] p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
        <div className="mb-6">
          <label className="block text-white mb-2" htmlFor="projectTitle">
            Project Title
          </label>
          <input
            type="text"
            id="projectTitle"
            ref={projectTitleRef}
            className="w-full px-3 py-2 rounded-md border border-gray-300"
            placeholder="A catchy and descriptive name for your project"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-white mb-2" htmlFor="projectCategory">
            Project Category
          </label>
          <input
            type="text"
            id="projectCategory"
            ref={projectCategoryRef}
            className="w-full px-3 py-2 rounded-md border border-gray-300"
            placeholder="The category of your project. E.g Blockchain, AI, Robotic, etc"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-white mb-2" htmlFor="projectDescription">
            Project Description
          </label>
          <textarea
            id="projectDescription"
            ref={projectDescriptionRef}
            className="w-full px-3 py-2 rounded-md border border-gray-300"
            placeholder="Detail explanation of your project and how investors will benefit"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="mb-6">
          <label className="block text-white mb-2" htmlFor="fundingGoals">
            Funding Goals
          </label>
          <input
            type="text"
            id="fundingGoals"
            ref={fundingGoalsRef}
            className="w-full px-3 py-2 rounded-md border border-gray-300"
            placeholder="Specify the amount of funding needed to complete the project"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-white mb-2" htmlFor="displayPicture">
            Display Picture
          </label>
          <div className="flex items-center">
            <input
              type="file"
              id="displayPicture"
              ref={displayPictureRef}
              className="w-8/12 h-12 px-3 py-2 rounded-md border border-gray-300"
              placeholder="Add a picture"
              required
            />
            <button className="ml-4 bg-green-600 px-4 py-2 rounded-md">Select File</button>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-white mb-2" htmlFor="cryptoChoice">
            Cryptocurrency of Choice
          </label>
          <input
            type="text"
            id="cryptoChoice"
            ref={cryptoChoiceRef}
            className="w-full px-3 py-2 rounded-md border border-gray-300"
            placeholder="This platform accepts Ethereum"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-white mb-2" htmlFor="projectTimeline">
            Project Timeline
          </label>
          <input
            type="text"
            id="projectTimeline"
            ref={projectTimelineRef}
            className="w-full px-3 py-2 rounded-md border border-gray-300"
            placeholder="Duration (include starting and completion date)"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-white mb-2" htmlFor="teamBackground">
            Team Background
          </label>
          <textarea
            id="teamBackground"
            ref={teamBackgroundRef}
            className="w-full px-3 py-2 rounded-md border border-gray-300"
            placeholder="Brief background of team members; their qualifications & experience"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="text-center">
          <button type="submit" className="bg-green-500 text-white px-6 py-3 rounded-md">
            Create Project
          </button>
        </div>
      </form>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default FormComponent;
