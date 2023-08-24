import Page from "@/common/styles/Page";
import MyVideo from "@/pages/CssTrick/MyVideo";
import ShadowedHeader from "@/pages/CssTrick/styles/ShadowedHeader";
import {Typography} from "@mui/material";
import TaskButton from "./styles/TaskButton";
import MainContent from "./styles/MainContent";

const CssTrick = () => {
  return (
    <Page>
      <MainContent>
        <ShadowedHeader> Учить CSS - Интересно! </ShadowedHeader>
        <MyVideo/>
        <TaskButton variant='contained'>
          <Typography> К Заданию!</Typography>
        </TaskButton>
      </MainContent>
    </Page>
  );
};

export default CssTrick;