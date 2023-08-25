import {styled} from "@mui/material";
import Image from '@/common/styles/Image'

const MyLastPhoto = styled(Image)`
  min-height: 20rem;
  height: 50rem;
  min-width: 30%;
  border-radius: 4rem;
  border: 0.8rem solid ${({theme}) => theme.palette.secondary.main};
`;
export default MyLastPhoto;