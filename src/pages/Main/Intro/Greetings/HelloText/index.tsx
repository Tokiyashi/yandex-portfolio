import HelloContainer from "./styles/HelloContainer";
import {Typography, useTheme} from "@mui/material";
import Container from "./styles/Container";
import MyName from "./styles/MyName";
import Image from "@/common/styles/Image";
import cursor from "@/assets/cursor.svg";
import SubTextContainer from "@/pages/Main/Intro/Greetings/HelloText/styles/SubTextContainer";

const HelloText = () => {

  return (
    <Container>
      <HelloContainer>
        <Typography fontWeight='bold' fontSize='2.4rem'>Привет, меня зовут</Typography>
      </HelloContainer>
      <MyName>Никита Роговский</MyName>
      <SubTextContainer >
        <Typography fontWeight='bold' fontSize='2.4rem'>Фронтенд - разработчик</Typography>
      </SubTextContainer>
      <Image height='5rem' src={cursor}/>
    </Container>
  );
};

export default HelloText;
