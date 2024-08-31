// components/Tabs.js
"use client"
import { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <ul className="flex border-b mb-6">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`cursor-pointer py-2 px-4 ${
              index === activeTab ? "border-green-500 border-b-2 text-green-500" : "text-white"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </li>
        ))}
      </ul>
      <div>{tabs[activeTab].content}</div>
    </div>
  );
};

export default Tabs;
