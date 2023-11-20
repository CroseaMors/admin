import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './App.css';

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '90%', bgcolor: 'gold', marginTop: '10px', marginLeft: '5%', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="CREATE USER" />
        <Tab label="SEARCH USER" />
        <Tab label="PARKING SLOTS" />
      </Tabs>
    </Box>
    
  );
  <Container maxWidth="sm">
    
  </Container>
}

