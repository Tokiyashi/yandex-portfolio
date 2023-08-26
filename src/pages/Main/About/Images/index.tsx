import Container from "./styles/Container";
import MeAtSchool from "@/pages/Main/About/Images/styles/MeAtSchool";
import meAtSchool from "@/assets/meAtSchool.jpg"
import arrow from '@/assets/Vector 7.svg'
import coloredArrow from '@/assets/Vector 8.svg'
import Image from '@/common/styles/Image'
import lastPhoto from "@/assets/lastPhoto.jpg";
import MyLastPhoto from "@/pages/Main/About/styles/MyLastPhoto";
import {useIsMobile} from "@/utils/hooks/useIsMobile";

const Images = () => {
  const isMobile = useIsMobile()

  return (
    <Container>
      <MeAtSchool src={meAtSchool}/>
      <Image width='40%' height='20rem' src={coloredArrow}>
        <Image width='100%' height='20rem' src={arrow}/>
      </Image>
      {isMobile && <MyLastPhoto src={lastPhoto}/>}
    </Container>
  );
};

export default Images;