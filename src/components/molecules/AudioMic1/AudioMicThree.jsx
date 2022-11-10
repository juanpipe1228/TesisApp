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

export default function AudioMicThree() {
  const {dropdownItem3} = useItemContext()
  const [data,setData] = useState(dataMic)

  const [dropdownSong, setDrodownSong] = useState("")
  useEffect(() => {
    if(dropdownItem3){
        const filteredData =  dataMic.filter((item) => item?.id === dropdownItem3 )
        const filteredSong = filteredData[0].audios.filter((item) => item?.name == dropdownSong )
      setData(filteredSong)
    }
}, [dropdownItem3,dropdownSong]);

    const handleChange1 = (item) => {
        setDrodownSong(item)
    }
   
    
  return (
    <div className="pt-4">
    {
        dropdownItem3 ?<>
        <DropdownComponent 
          options = {songsInfo}
          selectedItem={dropdownSong}
          setSelectedItem={handleChange1}
        />
           {dropdownSong ? <div style={{display:'flex',alignItems:'center', justifyContent:'center'}}>  <AudioPlayer src={data[0]?.url}/> </div>: <span style={{color:'#ffa31a'}}>{`Seleccione una pista para el microfono: ${dataMic[dropdownItem3-1].Nombre}`}</span>}
        </> : <span style={{color:'#ffa31a'}}>Para continuar, seleccione el microfono 3</span>
    }
       
     
    </div>
  )
}