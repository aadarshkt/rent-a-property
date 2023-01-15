import { InputLabel, Select } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from '@mui/material/FormControl';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const DropdownMenu = ({ data, label, value, handleChange }) => {
  console.log(data);
  console.log(value);
  return (
    <FormControl sx={{width: 300 }}>
    <InputLabel>{label}</InputLabel>
    <Select
      multiple
      value={value}
      onChange={handleChange}
      input={<OutlinedInput label={label} />}
      MenuProps={MenuProps}
    >
      {data.map((item) => (
        <MenuItem key={item.id} name={item.value} value={item.value}>
          {item.value}
        </MenuItem>
      ))}
    </Select>
    </FormControl>
  );
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
