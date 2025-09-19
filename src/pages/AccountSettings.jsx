// src/pages/AccountSettings.jsx

import { Camera } from "lucide-react"; // icon for upload

export default function AccountSettings() {
  return (
    <div className="account-settings-container">
      {/* Header */}
      <div className="account-settings-header">
        <h2>Account Settings</h2>
      </div>

      {/* Profile Section */}
      <div className="profile-section">
        {/* Avatar + Camera Button */}
        <div className="profile-pic-container">
          <img
            src="/images/profile_pic.jpg"
            alt="Profile"
            className="profile-pic"
          />
          <button className="camera-button">
            <Camera size={14} />
          </button>
        </div>

        {/* Name + Email */}
        <div className="profile-info">
          <h3>Marry Doe</h3>
          <p>Marry@Gmail.Com</p>
        </div>

        {/* Description */}
        <p className="profile-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>

      {/* Empty bottom section */}
      <div className="empty-bottom-section">
        {/* Placeholder for future content */}
      </div>
    </div>
  );
}
