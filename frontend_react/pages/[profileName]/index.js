import React from "react";
import { useRouter } from "next/router";

const ProfilePage = () => {
  const router = useRouter();
  const profileName = router.query.profileName;
  return <div className="contentContainer">ProfilePage {profileName}</div>;
};

export default ProfilePage;
