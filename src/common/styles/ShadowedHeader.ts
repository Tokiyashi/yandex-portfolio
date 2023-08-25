import {styled, Typography} from "@mui/material";

const ShadowedHeader = styled(Typography)`
  font-weight: bold;
  font-size: 4rem;
  text-shadow: ${({theme}) => theme.palette.primary.light} 0.2rem 0.2rem 0 ;
`;
export default ShadowedHeader;