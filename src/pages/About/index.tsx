import MainText from "./MainText";
import Images from "./Images";
import lastPhoto from '@/assets/lastPhoto.jpg'
import Container from "./styles/Container";
import Page from "@/common/styles/Page";
import MainContent from "./styles/MainContent";
import MyLastPhoto from "@/pages/About/styles/MyLastPhoto";

const About = () => {
  return (
    <Page>
      <Container>
        <MainContent>
          <MainText/>
          <Images/>
        </MainContent>
        <MyLastPhoto cover src={lastPhoto}/>
      </Container>
    </Page>
  );
};

export default About;