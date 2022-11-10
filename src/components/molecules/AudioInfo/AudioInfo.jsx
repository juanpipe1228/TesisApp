import { useTabNavigation } from "../../../hooks/useTabNav";
import { Card } from "react-bootstrap";
import AudioMicOne from "../AudioMic1/AudioMicOne";
import AudioMicTwo from "../AudioMic1/AudioMicTwo";
import AudioMicThree from "../AudioMic1/AudioMicThree";
import TabsComponent from "../../atoms/Tabs/TabsComponent"

export default function AudioInfo() {
  const tabValue = useTabNavigation(0);
  const optionsTab = ["Mic 1", "Mic 2", "Mic 3"];
  return (
    <div className="py-4">
        <div>
            <div>
                <TabsComponent {...tabValue} options = {optionsTab}/>
                {tabValue.value === 0 ?  <AudioMicOne/> : 
                tabValue.value === 1 ?  <AudioMicTwo/> : 
                <AudioMicThree/> }
            </div>
        </div>
    </div>
  )
}