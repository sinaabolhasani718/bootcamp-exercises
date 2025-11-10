import { useEffect, useState } from "react";
import "./styleTabs.css";
function Tabs() {
  const tabs = [
    { id: "1", title: "TAB 1", content: "content 1" },
    { id: "2", title: "TAB 2", content: "content 2" },
    { id: "3", title: "TAB 3", content: "content 3" },
    { id: "4", title: "TAB 4", content: "content 4" },
  ];
  const [activeTab, setActiveTab] = useState(() => {
    return localStorage.getItem("activeTab") || "1";
  });
  useEffect(() => {
    localStorage.setItem("activeTab", activeTab);
  }, [activeTab]);
  return (
    <>
      <div className="header-box">
        <h1>Tabs Component With React</h1>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={activeTab === tab.id ? "tabs-active" : "tabs-button"}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tabContent">
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id}>
                <h2>{tab.content}</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
            )
        )}
      </div>
    </>
  );
}

export default Tabs;
