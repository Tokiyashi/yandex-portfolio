import {styled} from "@mui/material";
import Image from '../../../../../common/styles/Image'

const OverflowingImage= styled(Image)`
  margin-top: -14rem;
  background-size: cover;
  transition: margin-top 0.3s ease-in-out;

  border-bottom-left-radius: 2rem;
  border-bottom-right-radius: 2rem;
  &:hover{
    margin-top: -24rem;
  }
`;
export default OverflowingImage;