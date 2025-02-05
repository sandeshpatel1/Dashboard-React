import React from "react";
import { RefreshCcw, Menu, Users, Plus, Tag, CircleCheck, Check } from "lucide-react";
import "./PageHeader.css";

const PageHeader = () => {
  return (
    <div className="page-header">
      {/* Breadcrumb Navigation */}
      <div className="breadcrumb">
        Dashboard / Lead / <span className="lead-id">LE-1023</span>
      </div>

      {/* Icons Section */}
      <div className="icons">
        {/* Left Section */}
        <div className="left">
          <h1 className="lead-title">LE-1023</h1>
        </div>

        {/* Right Section (Icons) */}
        <div className="right">
          <RefreshCcw className="icon" />
          <Menu className="icon" />
          <Users className="icon" />
          <Plus className="icon" />
          <Tag className="icon" />
        </div>
      </div>

      {/* Section Line */}
      <div className="page-section-line"></div>

      {/* Status Labels */}
      <div className="status-section">
        <div className="status-box green"><CircleCheck size={12} /></div>
        <div className="status-box green"><CircleCheck size={12} /></div>
        <div className="status-box pink">Nurturing</div>
        <div className="status-box grey">Convert</div>
        <div className="converted-status">
          <Check /> Converted
        </div>
      </div>
      <div className="page-section-line"></div>

    </div>
  );
};

export default PageHeader;
