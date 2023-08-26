import MainText from "./MainText";
import Images from "./Images";
import lastPhoto from '@/assets/lastPhoto.jpg'
import Container from "./styles/Container";
import Page from "@/common/styles/Page";
import MainContent from "./styles/MainContent";
import MyLastPhoto from "@/pages/Main/About/styles/MyLastPhoto";
import {useTheme} from "@mui/material";
import {useIsMobile} from "@/utils/hooks/useIsMobile";

const About = () => {
  const theme = useTheme()
  const isMobile = useIsMobile()

  return (
    <Page sx={{backgroundColor: theme.palette.background.paper}}>
      <Container>
        <MainContent>
          <MainText/>
          <Images/>
        </MainContent>
        {!isMobile && <MyLastPhoto src={lastPhoto}/>}
      </Container>
    </Page>
  );
};

export default About;