import Container from "./styles/Container";
import MeAtSchool from "@/pages/About/Images/styles/MeAtSchool";
import meAtSchool from "@/assets/meAtSchool.jpg"
import arrow from '@/assets/Vector 7.svg'
import coloredArrow from '@/assets/Vector 8.svg'
import Image from '@/common/styles/Image'

const Images = () => {
  return (
    <Container>
      <MeAtSchool src={meAtSchool}/>
      <Image width='35rem' height='20rem' src={coloredArrow}>
        <Image width='35rem' height='20rem' src={arrow}/>
      </Image>
    </Container>
  );
};

export default Images;