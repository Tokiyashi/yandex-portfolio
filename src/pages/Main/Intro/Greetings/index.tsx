import Container from "./styles/Container";
import MyImage from "./MyImage";
import HelloText from "./HelloText";

const Greetings = () => {
  return (
    <Container>
      <HelloText/>
      <MyImage/>
    </Container>
  );
};

export default Greetings;