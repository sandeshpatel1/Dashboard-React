import React, { useState } from "react";
import { Layers2, Pin, ChartColumnStacked, UserRound, BookCheck, Briefcase, HelpCircle } from "lucide-react";
import "./Sidebar.css";

const Sidebar = () => {
  const [active, setActive] = useState("Layers2");

  const icons = [
    { id: "Layers2", component: <Layers2 size={18} /> },
    { id: "Pin", component: <Pin size={18} /> },
    { id: "ChartColumnStacked", component: <ChartColumnStacked size={18} /> },
    { id: "UserRound", component: <UserRound size={18} /> },
    { id: "BookCheck", component: <BookCheck size={18} /> },
    { id: "Briefcase", component: <Briefcase size={18} /> },
    { id: "HelpCircle", component: <HelpCircle size={18} /> },
  ];

  return (
    <div className="sidebar">
      <div className="icon-container">
        {icons.map((icon) => (
          <div
            key={icon.id}
            className={`icon-item ${active === icon.id ? "active" : ""}`}
            onClick={() => setActive(icon.id)}
          >
            {icon.component}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
