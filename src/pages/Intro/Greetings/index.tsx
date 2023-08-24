import Container from "./styles/Container";
import MyImage from "./MyImage";
import HelloText from "./HelloText";
import Image from "@/common/styles/Image";
import flower from "@/assets/greenFlower.svg";

const Greetings = () => {
  return (
    <Container>
      <HelloText/>
      {/*<Image sx={{height: '20rem', width: '26rem', backgroundSize: 'contain'}} src={flower}/>*/}
      <MyImage/>
    </Container>
  );
};

export default Greetings;