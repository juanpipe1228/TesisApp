import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function TabsComponent(props) {
  const { value , onChange , options}= props
  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs value={value} onChange={onChange} centered>
        {options.map((item)=>(
          <Tab label={item} />
        ))}
      </Tabs>
    </Box>
  )
}