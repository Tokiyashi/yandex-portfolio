import {Box, styled} from "@mui/material";

const HelloContainer = styled(Box)`
  display: flex;
  padding: 1rem;
  border-radius: 1.5rem;
  background-color: ${({theme}) => theme.palette.secondary.main};
  filter: drop-shadow(0.6rem 0.6rem 0 #000);
`;
export default HelloContainer;