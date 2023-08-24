import Container from "./styles/Container";
import MeAtSchool from "@/pages/About/Images/styles/MeAtSchool";
import meAtSchool from "@/assets/meAtSchool.jpg"

const Images = () => {
  return (
    <Container>
      <MeAtSchool src={meAtSchool}/>
    </Container>
  );
};

export default Images;