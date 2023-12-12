import React from "react";
import CardContainer from "../../../components/main-component/card-container";
import styles from "./styles.module.css";
import ImageContainer from "../../../components/child-components/image-container";
import { userProfile } from "../../../dummy-data";

const CreatePost = () => {
  return <CardContainer className={styles.container}>
    <div>
        <ImageContainer isForIcon={false} isOnline={false} imagePath={userProfile.profilePic} width={40} height={40}/>
    </div>
    <div>
        
    </div>
  </CardContainer>;
};

export default CreatePost;
