import { useState ,useEffect} from "react"
import AudioPlayer from "../../atoms/AudioPlayer/AudioPlayer"
import { useItemContext } from "../../../context/appContext"
import { dataMic } from "../../../data/micsData"

export default function AudioMicTwo() {
  const {dropdownItem2, dropdownSong} = useItemContext()
  const [data,setData] = useState(dataMic)

  useEffect(() => {
    if(dropdownItem2){
        const filteredData =  dataMic.filter((item) => item?.id === dropdownItem2 )
        const filteredSong = filteredData[0].audios.filter((item) => item?.name == dropdownSong )
      setData(filteredSong)
    }
}, [dropdownItem2,dropdownSong]);
    
  return (
    <div className="pt-4">
    {
        dropdownItem2 ?<>
         {dropdownSong ? <><div style={{display:'flex',alignItems:'center', justifyContent:'center'}}><span style={{color:'#ffa31a'}}>{`Micrófono: ${dataMic[dropdownItem2-1].Nombre}`}</span></div> <div style={{display:'flex',alignItems:'center', justifyContent:'center'}}><AudioPlayer src={data[0]?.url}/></div> </>: <span style={{color:'#ffa31a'}}>{`Seleccione una pista para el micrófono: ${dataMic[dropdownItem2-1].Nombre}`}</span>}
        </> : <span style={{color:'#ffa31a'}}>Para continuar, seleccione el micrófono 2</span>
    }
       
     
    </div>
  )
}