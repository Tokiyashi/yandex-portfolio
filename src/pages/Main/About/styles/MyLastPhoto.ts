import {styled} from "@mui/material";
import Image from '@/common/styles/Image'

const MyLastPhoto = styled(Image)`
  min-height: 70%;
  height: 90%;
  min-width: 30%;
  border-radius: 4rem;
  background-size: cover;
  border: 0.8rem solid ${({theme}) => theme.palette.secondary.main};
`;
export default MyLastPhoto;