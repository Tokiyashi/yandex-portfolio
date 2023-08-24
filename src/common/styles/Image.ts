import {Box, styled} from "@mui/material";

type Props = {
  src: string;
}

const Image = styled(Box)`
  background: url("${({src}: Props) => src}") no-repeat center;
  background-size: cover;
  display: flex;
  min-height: 100%;
  min-width: 100%;
`;
export default Image;