import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Grid } from '@mui/material';
import './App.css';
import campus from './campus.jpg';

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: '90%', bgcolor: 'gold', marginTop: '10px', marginLeft: '5%', borderTopLeftRadius: '10px', borderTopRightRadius: '10px', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px'}}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab style={{marginRight: '100px', color: 'maroon', fontWeight: 'bolder'}} label="CREATE USER" />
          <p style={{color: 'white', fontWeight: 'bolder'}}> | </p>
          <Tab style={{marginRight: '100px', marginLeft: '100px', color: 'maroon', fontWeight: 'bolder'}} label="SEARCH USER" />
          <p style={{color: 'white', fontWeight: 'bolder'}}> | </p>
          <Tab style={{marginRight: '100px', marginLeft: '100px', color: 'maroon', fontWeight: 'bolder'}} label="PARKING SLOTS" />
        </Tabs>
      </Box>

      {/* Single Editable Grid */}
      <Grid container spacing={2} className="customGrid">
        {/* Grid Item */}
        <Grid item xs={12}>
          {/* Your content for the grid item */}
          <Box className="customBox">
            {/* Content Goes Here */}
            <img className="campus" src={campus} alt="Your Alt Text" />
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
