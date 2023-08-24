import me from '@/assets/me.png'
import Container from "./styles/Container";
import OverflowingImage from "./styles/OverflowingImage";
import Image from "@/common/styles/Image";
import star from "@/assets/star.png";

const MyImage = () => {
  return (
    <Container>
      <OverflowingImage src={me}/>
    </Container>
  );
};

export default MyImage;