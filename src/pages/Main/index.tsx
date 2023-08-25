import Intro from "@/pages/Main/Intro";
import About from "@/pages/Main/About";
import CssTrick from "@/pages/Main/CssTrick";
import {Fragment} from "react";

const Main = () => {
  return (
    <Fragment>
      <Intro/>
      <About/>
      <CssTrick/>
    </Fragment>
  );
};

export default Main;