import {Box, styled} from "@mui/material";

const Container = styled(Box)`
  display: flex;
  background-color: ${({theme}) => theme.palette.primary.main};
  width: 20%;
  min-height: 55%;
  border-radius: 2rem;
  box-shadow: 0 0 0 0.4rem black;

  @media (max-width: 1000px) {
    width: 100%;
    min-height: 40%;
  }
`;
export default Container;