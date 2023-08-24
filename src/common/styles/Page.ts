import {Box, styled} from "@mui/material";

const Page = styled(Box)`
  display: flex;
  max-width: 100vw;
  overflow-x: hidden;
  height: 100vh;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0 14rem;
  gap: 3rem;
  background-color: ${({theme}) => theme.palette.background.default}
`;
export default Page;