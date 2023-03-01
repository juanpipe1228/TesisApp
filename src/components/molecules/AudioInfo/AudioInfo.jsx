import { useTabNavigation } from "../../../hooks/useTabNav";
import { Card } from "react-bootstrap";
import AudioMicOne from "../AudioMic1/AudioMicOne";
import AudioMicTwo from "../AudioMic1/AudioMicTwo";
import AudioMicThree from "../AudioMic1/AudioMicThree";
import TabsComponent from "../../atoms/Tabs/TabsComponent"
import DropdownComponent from "../../atoms/DropDownComponent/DropdownComponent"
import { useState ,useEffect} from "react"
import { useItemContext } from "../../../context/appContext";
import { dataMic } from "../../../data/micsData"

const songsInfo = [
  "Guitarra acústica (Cuerdas)",
  "Ronroco (Cuerdas)",
  "Charango (Cuerdas)",
  "Chulis (Vientos)",
  "Maltas (Vientos)",
  "Quena (Vientos)",
  "Quenacho (Vientos)",
  "Toyos (Vientos)",
  "Bastos (Vientos)",
  "Bombo andino (Percusión)",
  "Cajón peruano (Percusión)",
  "Guacharaca (Percusión)",
  "Jam Block (Percusión)",
  "Semillas (Percusión)",
  "Mix 1",
  // "Pista 2",
  // "Pista 3",
]

export default function AudioInfo() {
  const {dropdownSong, setDropdownSong } = useItemContext()

  const handleChange = (item) => {
    setDropdownSong(item)
}


  const tabValue = useTabNavigation(0);
  const optionsTab = ["Mic 1", "Mic 2", "Mic 3"];
  return (
    <div className="py-4">
        <div>
            <div className="my-4">
              <DropdownComponent 
              options = {songsInfo}
              selectedItem={dropdownSong}
              setSelectedItem={handleChange}
              />
              </div>
              <div>
                <TabsComponent {...tabValue} options = {optionsTab}/>
                {tabValue.value === 0 ?  <AudioMicOne/> : 
                tabValue.value === 1 ?  <AudioMicTwo/> : 
                <AudioMicThree/> }
                <div className="mx-5">
                  <small>NOTA: La calidad de la reproducción en los audios puede depender de la conexión a internet, si desea que esto no afecte, en las opciones del reproductor de audio se puede descargar. La calidad de los audios es 24bits/48kHz.</small>
                </div>
            </div>
        </div>
    </div>
  )
}