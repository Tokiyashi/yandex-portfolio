import {Box, styled} from "@mui/material";

type Props = {
  src: string;
  width?: string;
  height?: string;
  cover?: boolean;
}

const Image = styled(Box)`
  background: url("${({src}: Props) => src}") no-repeat center;
  background-size: ${({cover}: Props) => cover ? 'cover' : 'contain'};
  display: flex;
  min-height: ${({height}: Props) => height || '100%'};
  min-width: ${({width}: Props) => width || '100%'};
`;
export default Image;