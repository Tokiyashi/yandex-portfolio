import {styled, Typography} from "@mui/material";

const MyName= styled(Typography)`
  font-weight: bold;
  font-size: 8rem;
  text-shadow: ${({theme}) => theme.palette.primary.main} 0.4rem 0.2rem 0;
`;
export default MyName;