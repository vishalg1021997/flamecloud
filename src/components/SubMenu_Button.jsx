import React from 'react';  
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';

const options = [
  'Edit Sub-Category',
];

const ITEM_HEIGHT = 40;

function SubMenu_Button() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },    
        }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}

      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === ''} sx={{fontSize:'15px'}} onClick={handleClose}>
            {option}
          </MenuItem>
        ))}
        <MenuItem><Button  color="error" sx={{textTransform:'none',m:'-10px',fontSize:'15px'}}>
        Delete
      </Button></MenuItem>
      </Menu>
    </div>
  );
}


export default SubMenu_Button