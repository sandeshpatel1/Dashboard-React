import React from "react";
import "./MainSection.css";

const MainSection = () => {
  return (
    <div className="main-section">
      {/* First Vertical Section */}
      <div className="section">
        {/* Top Section */}
        <div className="top-row">
          <span className="small-text">test</span>
          <span className="pending-task">Pending Task</span>
        </div>

        {/* Middle Section */}
        <div className="middle-row">
          <span className="person-name">Ramesh Kumar</span>
          <div className="main-buttons">
            <button className="btn green-main">Create Account</button>
            <button className="btn orange-main">Create Contact</button>
          </div>
        </div>

        {/* Lower Section */}
        <div className="lower-row">
          <span className="small-text">Ashraf</span>
          <span className="event-text">Event</span>
        </div>

        {/* Section Line */}
        <div className="main-section-line"></div>

        {/* Tab Headers */}
        <div className="tabs">
          <span>Basic Detail</span>
          <span>Account Detail</span>
          <span>Lead Detail</span>
          <span>Team</span>
          <span>Other Contact</span>
        </div>

        {/* Section Line */}
        <div className="main-section-line"></div>

        {/* Table Headers */}
        <div className="table-headers">
          <span>Title</span>
          <span>First Name</span>
          <span>Last Name</span>
        </div>

        {/* Table Row */}
        <div className="table-row">
          <span>Mr.</span>
          <span>Ramesh</span>
          <span>Kumar</span>
        </div>

        {/* Section Line */}
        <div className="main-section-line"></div>

        {/* Address Section */}
        <div className="address-section">
          <strong>Address Detail</strong>
        </div>

        {/* Address Details */}
        <div className="table-headers">
          <span>Region</span>
          <span>Country</span>
          <span>Zone</span>
        </div>

        <div className="table-row">
          <span>APAC</span>
          <span>India</span>
          <span>North</span>
        </div>

        {/* Edit Button */}
        <div className="edit-btn-container">
          <button className="edit-btn">Edit</button>
        </div>
      </div>

      {/* Second Vertical Section */}
      <div className="section">

      <div className="top-content">
          <div className="row">
            <div className="box">Activity</div>
            <div className="box">Actionables</div>
            <div className="box">Tasks</div>
            <div className="box">Notes & Films</div>
          </div>

          {/* Second Part */}
          <div className="activity-logs">
            <div className="logs">
              <div className="log-box">
                <span className="icon">📞</span>
                <span>Log a Call</span>
              </div>
              <div className="log-box">
                <span className="icon">✉️</span>
                <span>Email</span>
              </div>
              <div className="log-box">
                <span className="icon">🎉</span>
                <span>Event</span>
              </div>
            </div>

            {/* Input Fields */}
            <div className="form-fields">
              <div className="input-group">
                <label>Subject</label>
                <input type="text" required />
              </div>
              <div className="input-group">
                <label>Add Team Member</label>
                <input type="text" />
              </div>
              <div className="input-group">
                <label>Add Contact</label>
                <input type="text" />
              </div>
              <div className="input-group">
                <label>Due Date</label>
                <input type="date" />
              </div>
              <div className="input-group">
                <label>Time</label>
                <input type="time" />
              </div>
              <div className="input-group">
                <label>Description</label>
                <textarea></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <div className="submit-btn-container">
              <button className="submit-btn">Submit</button>
            </div>
          </div>

          {/* Activity Log Roadmap */}
          <div className="roadmap">
            <div className="roadmap-line">
              <div className="circle"></div>
              <span>January</span>
            </div>
            <div className="roadmap-line">
              <div className="circle"></div>
              <span>New Lead Created by Aman Raj</span>
            </div>
            <div className="roadmap-line">
              <div className="circle"></div>
              <span>Task Assigned</span>
            </div>
            <div className="roadmap-line horizontal">
              <div className="circle"></div>
              <div className="empty-circle"></div>
            </div>
          </div>

          {/* Overdue Activities Section */}
          <div className="overdue-activities">
            <h3>Overdue Activities</h3>
            <div className="overdue-boxes">
              <div className="overdue-box">
                <span>Shred Catalogue</span>
              </div>
              <div className="overdue-box">
                <span>Due Date & Time</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    

    </div>
  );
};

export default MainSection;
