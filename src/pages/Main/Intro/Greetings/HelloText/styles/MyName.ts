import {styled, Typography} from "@mui/material";

const MyName= styled(Typography)`
  font-weight: bold;
  font-size: 8rem;
  text-shadow: ${({theme}) => theme.palette.primary.main} 0.4rem 0.2rem 0;
  @media (max-width: 1000px) {
   font-size: 4rem;
  }

`;
export default MyName;