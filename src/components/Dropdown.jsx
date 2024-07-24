import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

function Dropdown({ buttonLabel, menuItems }) {
  return (
    <PopupState variant="popover" popupId="dropdown-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button variant="contained" {...bindTrigger(popupState)} className='flex items-center'>
            {buttonLabel}
            <KeyboardArrowDownOutlinedIcon />
          </Button>
          <Menu {...bindMenu(popupState)}>
            {menuItems.map((item, index) => (
              <MenuItem key={index} onClick={popupState.close}>
                {item}
              </MenuItem>
              
            ))}
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}

export default Dropdown;
