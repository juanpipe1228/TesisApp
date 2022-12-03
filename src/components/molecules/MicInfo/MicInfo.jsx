
import {useEffect,useState} from 'react'
import DropdownComponent from '../../atoms/DropDownComponent/DropdownComponent';
import { Card } from "react-bootstrap"
import { dataMic } from '../../../data/micsData';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Skeleton from '@mui/material/Skeleton';
import Image from '../../atoms/Image/Image'

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};

const itemsList = [
  // "Nombre" ,
  "Sensibilidad",
  "MaximoNivelElectrico",
  // "SelfNoise",
  // "PatronPolar",
]


export default function MicInfo(props) {
  const {dropDownOptions,option,handleChange,
    dropdownItem1, dropdownItem2, dropdownItem3 } = props

    const [data,setData] = useState(dataMic)
    
    useEffect(() => {
        if(dropdownItem1){
          const filteredData =  dataMic.filter((item) => item?.id === dropdownItem1  )
          setData(filteredData)
        }
        if(dropdownItem2){
          const filteredData =  dataMic.filter((item) => item?.id === dropdownItem2 )
          setData(filteredData)
        }
        if(dropdownItem3){
          const filteredData =  dataMic.filter((item) => item?.id === dropdownItem3  )
          setData(filteredData)
        }
    }, [dropdownItem1,dropdownItem2,dropdownItem3]);
   
   

  return (
    <div>
      <div className='mt-4'>
        <DropdownComponent 
          options = {dropDownOptions}
          selectedItem={option}
          setSelectedItem={handleChange}
        />

      </div>
      <div className='mt-5 my-4'>
        <div className='mb-3' style={{display:'flex',alignItems:'center', justifyContent:'center'}}>
        { 
                    dropdownItem1 ? dropdownItem1 !== -1 ? <Image src={`${dataMic[dropdownItem1-1].Image}`} alt={`${dataMic[dropdownItem1-1].Nombre}`} style={{height:'160px',width:'auto'}}/>: <Skeleton variant="image" width={40} /> :
                    dropdownItem2 ? dropdownItem2 !== -1 ? <Image src={`${dataMic[dropdownItem2-1].Image}`} alt={`${dataMic[dropdownItem2-1].Nombre}`} style={{height:'160px',width:'auto'}}/> :  <Skeleton variant="image" width={40} /> :
                    dropdownItem3 ? dropdownItem3 !== -1 ? <Image src={`${dataMic[dropdownItem3-1].Image}`} alt={`${dataMic[dropdownItem3-1].Nombre}`} style={{height:'160px',width:'auto'}}/> :  <Skeleton variant="image" width={40} /> :
                    <Skeleton variant="image" sx={{ fontSize: '1rem' }} />
        }

        </div>
        <Card>
          <div className='p-3'>
              {itemsList.map((key)=>{
              return(
                <List sx={style} component="nav" aria-label="mailbox folders">
                  <ListItem button>
                  <div style={{width:'100%'}}>
                  { 
                    dropdownItem1 ? dropdownItem1 !== -1 ? <ListItemText primary={`${key}: ${data[0]?.[key]}`} />: <Skeleton variant="text" width={40} /> :
                    dropdownItem2 ? dropdownItem2 !== -1 ? <ListItemText primary={`${key}: ${data[0]?.[key]}`} />: <Skeleton variant="text" width={40} /> :
                    dropdownItem3 ? dropdownItem3 !== -1 ? <ListItemText primary={`${key}: ${data[0]?.[key]}`} />: <Skeleton variant="text" width={40} /> :
                    <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                  }

                  </div>
                    
                  </ListItem>
                  <Divider/>
                </List>
              )
              
            })}
          </div>
        </Card>
      </div>
    </div>
  )
}
