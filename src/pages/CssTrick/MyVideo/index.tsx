import ReactPlayer from "react-player";
import Container from "./styles/Container";
import VideoWrapper from "@/pages/CssTrick/MyVideo/styles/VideoWrapper";
import Image from "@/common/styles/Image";
import cursor from "@/assets/cursor.svg";
import {Typography} from "@mui/material";

const Video = () => {
  return (
    <Container>
      <VideoWrapper>
        <ReactPlayer
          url='videos/vid.mp4'
          width='100%'
          height='100%'
          controls={true}
        />
      </VideoWrapper>
      <Image height='5rem' width='5rem' src={cursor}/>
    </Container>
  );
};

export default Video;