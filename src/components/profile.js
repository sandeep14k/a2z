import React from "react";
import styles from "../css/Profile.module.css";
import { FaFacebookF, FaTwitter, FaPinterest, FaGlobe } from "react-icons/fa";

const ProfileCard = ({ name, image, position }) => {
  return (
    <div className={styles.profileCard}>
      <div className={styles.profileID}>
        <h2 className={styles.profileName}>{name}</h2>
        <h2 className={styles.profilePosition}>{position}</h2>
      </div>
      <div>
        <img className={styles.profileImage} src={image} alt={name} />
      </div>
      <div className={styles.iconContainer}>
        <FaFacebookF className={styles.icon} />
        <FaTwitter className={styles.icon} />
        <FaPinterest className={styles.icon} />
        <FaGlobe className={styles.icon} />
      </div>
    </div>
  );
};

const Profile = () => {
  const profileData = [
    {
      name: "John Doe",
      position: "Director",
      image: "user.jpg",
    },
    {
      name: "Jane Smith",
      position: "Project Manager",
      image: "user.jpg",
    },
    {
      name: "Alice Johnson",
      position: "Operation Manager",
      image: "user.jpg",
    },
    {
      name: "Bob Brown",
      position: "Coordinator",
      image: "user.jpg",
    },
  ];

  return (
    <div className={styles.main}>
      <div>
        <h4>SPEAKERS</h4>
        <h1>Today Performers</h1>
      </div>
      <div className={styles.profilesContainer}>
        {profileData.map((profile, index) => (
          <ProfileCard
            key={index}
            name={profile.name}
            image={profile.image}
            position={profile.position}
          />
        ))}
      </div>
    </div>
  );
};

export default Profile;