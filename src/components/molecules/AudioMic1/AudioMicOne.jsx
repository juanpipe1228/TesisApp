import { useState ,useEffect} from "react"
import AudioPlayer from "../../atoms/AudioPlayer/AudioPlayer"
import { useItemContext } from "../../../context/appContext"
import { dataMic } from "../../../data/micsData"
import DropdownComponent from "../../atoms/DropDownComponent/DropdownComponent"
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
  "Pista 1",
  "Pista 2",
  "Pista 3",
]

export default function AudioMicOne() {
  const {dropdownItem1} = useItemContext()
  const [data,setData] = useState(dataMic)

  const [dropdownSong, setDrodownSong] = useState("")
  useEffect(() => {
    if(dropdownItem1){
        const filteredData =  dataMic.filter((item) => item?.id === dropdownItem1 )
        const filteredSong = filteredData[0].audios.filter((item) => item?.name == dropdownSong )
      setData(filteredSong)
    }
}, [dropdownItem1,dropdownSong]);

    const handleChange1 = (item) => {
        setDrodownSong(item)
    }
   
    
  return (
    <div className="pt-4">
    {
        dropdownItem1 ?<>
        <DropdownComponent 
          options = {songsInfo}
          selectedItem={dropdownSong}
          setSelectedItem={handleChange1}
        />
           {dropdownSong ?  <div style={{display:'flex',alignItems:'center', justifyContent:'center'}}> <AudioPlayer src={data[0]?.url}/></div> : <span style={{color:'#ffa31a'}}>{`Seleccione una pista para el micrófono: ${dataMic[dropdownItem1-1].Nombre}`}</span>}
        </> : <span style={{color:'#ffa31a'}}>Para continuar, seleccione el micrófono 1</span>
    }
       
     
    </div>
  )
}