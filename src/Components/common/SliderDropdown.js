import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import Slider from "@mui/material/Slider";
import { Box } from "@mui/system";

function labelText(value1, value2) {
  return `$${value1} - $${value2}`;
}

const SliderDropdown = ({value, setValue}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleChange = (e, newValue) => {
    setValue(newValue)
  };
  return (
    <div>
      <p
        aria-haspopup="true"
        onClick={handleClick}
      >
        {labelText(value[0],value[1])}
      </p>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem>
          {" "}
          <Box sx={{ width: 300, height: 50, display: 'flex', flexDirection:'row',alignItems: 'center', p: 5}}>
            <Slider
              getAriaLabel={() => "Minimum distance"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              step={1000}
              max={50000}
              min={500}
              disableSwap
            />
          </Box>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default SliderDropdown;
