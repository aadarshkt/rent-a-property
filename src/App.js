import { useEffect, useState } from "react";
import { data } from "./data";
import { DropdownMenu } from './Components/common/DropdownMenu'
import Result from "./Components/Result";
import SliderDropdown from "./Components/common/SliderDropdown";
import Button from '@mui/material/Button';
import { Box } from "@mui/system";
import DatePicker from "./Components/common/DatePicker";
import dayjs from 'dayjs';
import { createTheme, ThemeProvider, Typography } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: [
      'Poppins',
    ].join(','),
    allVariants: {
      color: "#000028"
    },
  },
})

function App() {
  const locations = data.map((property) => {
    return { id: property.id, value: property.location };
  });
  const prices = data.map((property) => {
    return { id: property.id, value: property.price}
  })
  const dates = data.map((property) => {
    return { id: property.id, value: property.price };
  })

  const uniqueTypes = new Set();
  const types = data.map((property) => {return {id: property.id, value: property.propertyType}});
  const typesFilter = types.filter(({value}) => {
    if(uniqueTypes.has(value)) return false;
    else{
      uniqueTypes.add(value);
      return true;
    }
  })
  const [location, setLocation] = useState([]);
  const [date, setDate] = useState(dayjs('2020-08-18T21:11:54'));
  const [price, setPrice] = useState([500, 50000]);
  const [type, setType] = useState([]);
  const [result, setResult] = useState(data);

  const handleSubmit = () => {

    const locationIds = new Set(),typeStrings = new Set();
    for(let i=0;i<location.length;i++){
      locationIds.add(location[i]);
    }
    for(let i=0;i<type.length;i++){
      typeStrings.add(type[i]);
    }
    const result = data.filter((property) => (typeStrings.has(property.propertyType) || locationIds.has(property.id)) && ((property.price >= price[0]) && (property.price <= price[1])));
    setResult(result);
    console.log(result);
  }
  const handleLocation = (e) => {
    setLocation(e.target.value);
  }
  const handlePrice = (e) => {
    setPrice(e.target.value);
  }
  const handleType = (e) => {
    setType(e.target.value);
    console.log(e.target.value);
  }
  
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{p: 5, backgroundColor: '#F8F7FD'}}>
    <Box sx={{display: 'flex', flexDirection: 'column'}}>
    <Typography variant="h4" Poppins sx={{fontWeight: 'bold', pb: 3}}>Search Properties for Rent</Typography>
      <Box sx={{display: 'flex',justifyContent: 'space-between', alignItems: 'center', px: 2, py: 3, background: 'white', borderRadius: 2}}>
        <DropdownMenu data={locations} label="Location" value={location} handleChange={handleLocation} />
        <DatePicker value={date} setValue={setDate} />
        <SliderDropdown value={price} setValue={setPrice}/>
        <DropdownMenu data={typesFilter} value={type} label="PropertyType" handleChange={handleType} />
        <Button variant="contained" onClick={handleSubmit} sx={{px: 3}} disableElevation>
          Search
        </Button>
      </Box>
      </Box>
    <Box sx={{py: 3}}>
      <Result data={result}/>
    </Box>
    </Box>
    </ThemeProvider>
  );
}

export default App;
