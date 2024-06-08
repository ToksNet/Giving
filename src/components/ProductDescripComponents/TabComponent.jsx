import React, { useState } from "react";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].label);

  const renderContent = () => {
    const activeTabContent = tabs.find((tab) => tab.label === activeTab).content;
    return <div className="text-sm text-gray-700 py-4">{activeTabContent}</div>;
  };

  return (
    <div>
      <div className="flex gap-6 border-b">
        {tabs.map((tab) => (
          <h2
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`cursor-pointer pb-2 ${
              activeTab === tab.label
                ? "text-primary border-b-2 border-primary"
                : "text-gray-500"
            }`}
          >
            {tab.label}
          </h2>
        ))}
      </div>
      {renderContent()}
    </div>
  );
};

export default Tabs;
