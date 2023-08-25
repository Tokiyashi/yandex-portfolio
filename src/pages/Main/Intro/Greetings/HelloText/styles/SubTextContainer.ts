import {Box, styled} from "@mui/material";

const SubTextContainer = styled(Box)`
  display: flex;
  padding: 1rem;
  border-radius: 1.5rem;
  background-color: ${({theme}) => theme.palette.secondary.dark};
  filter: drop-shadow(0.6rem 0.6rem 0 #000);
  margin: 5rem 0 4rem 24rem`;
export default SubTextContainer;