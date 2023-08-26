import HelloContainer from "./styles/HelloContainer";
import {Typography} from "@mui/material";
import Container from "./styles/Container";
import MyName from "./styles/MyName";
import Image from "@/common/styles/Image";
import cursor from "@/assets/cursor.svg";
import SubTextContainer from "@/pages/Main/Intro/Greetings/HelloText/styles/SubTextContainer";
import {useIsMobile} from "@/utils/hooks/useIsMobile";

const HelloText = () => {
  const isMobile = useIsMobile()

  return (
    <Container>
      {!isMobile &&
        <HelloContainer>
          <Typography fontWeight='bold' fontSize='2.4rem'>Привет, меня зовут</Typography>
        </HelloContainer>
      }
      <MyName>Никита Роговский</MyName>
      {!isMobile &&
        <>
          <SubTextContainer>
              <Typography fontWeight='bold' fontSize='2.4rem'>Фронтенд - Разработчик</Typography>
          </SubTextContainer>
          <Image height='5rem' src={cursor}/>
        </>
      }
    </Container>
  );
};

export default HelloText;
