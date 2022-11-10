import React from "react";
import TabsComponent from "../../atoms/Tabs/TabsComponent";
import { useTabNavigation } from "../../../hooks/useTabNav";
import MicGrid from "../../template/MicGrid/MicGrid";
import AudioInfo from "../../molecules/AudioInfo/AudioInfo";
import "bootstrap/dist/css/bootstrap.css";
import FrecuencyGraph from "../../molecules/FrecuencyGraph/FrecuencyGraph";

const Home = () => {
  const tabValue = useTabNavigation(0);
  const optionsTab = ["Características", "Audios"];
  return (
    <>
      <TabsComponent {...tabValue} options={optionsTab} />
      {tabValue.value === 0 ? <MicGrid /> : <AudioInfo />}
      <div className="pb-5">
        <FrecuencyGraph />
      </div>
    </>
  );
};

export default Home;
