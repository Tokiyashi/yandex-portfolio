import {Box, styled} from "@mui/material";

const Container = styled(Box)`
  display: flex;
  background-color: ${({theme}) => theme.palette.primary.main};
  width: 30rem;
  min-height: 70%;
  border-radius: 2rem;
  box-shadow: 0 0 0 0.4rem black;
`;
export default Container;