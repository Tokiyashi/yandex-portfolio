import Page from "@/common/styles/Page";
import MyVideo from "@/pages/Main/CssTrick/MyVideo";
import ShadowedHeader from "@/pages/Main/CssTrick/styles/ShadowedHeader";
import {Typography} from "@mui/material";
import TaskButton from "./styles/TaskButton";
import MainContent from "./styles/MainContent";
import {useNavigate} from "react-router-dom";

const CssTrick = () => {
  const navigate = useNavigate()

  function handleNavigate() {
    navigate('guess-the-number')
  }

  return (
    <Page>
      <MainContent>
        <ShadowedHeader> Учить CSS - Интересно! </ShadowedHeader>
        <MyVideo/>
        <TaskButton onClick={handleNavigate} variant='contained'>
          <Typography> К Заданию!</Typography>
        </TaskButton>
      </MainContent>
    </Page>
  );
};

export default CssTrick;