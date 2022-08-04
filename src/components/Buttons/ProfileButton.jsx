import React, { useContext, useState } from 'react';
import { MenuItem } from '@mui/material';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import { LoginContext, LoginDispatchContext, logoutAction } from '@contexts';
import { useNavigate } from 'react-router-dom';
import StyledMenu from './styles';

export default function CustomizedMenus(props) {
  const navigate = useNavigate();
  const dispatch = useContext(LoginDispatchContext);
  const { isLoggedIn } = useContext(LoginContext);
  const { updateReportBugModal, updateRequestFeatureModal } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const moveToPath = (path) => {
    navigate(path);
  };

  const onLogOut = () => {
    logoutAction(dispatch);
    moveToPath('/');
  };
  const loginLogoutButton = () => {
    if (isLoggedIn) {
      return (
        <MenuItem
          onClick={() => {
            onLogOut();
          }}
          disableRipple
        >
          Sign Out
        </MenuItem>
      );
    }
    return (
      <MenuItem onClick={() => moveToPath('/login')} disableRipple>
        Log In
      </MenuItem>
    );
  };

  return (
    <div>
      <AccountBoxOutlinedIcon
        onClick={handleClick}
        fontSize="large"
        color="primary"
        sx={{ cursor: 'pointer' }}
      />
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{ zIndex: '1600' }}
      >
        <MenuItem
          onClick={() => {
            moveToPath('/account');
          }}
          disableRipple
        >
          Profile
        </MenuItem>
        <MenuItem
          onClick={() => {
            moveToPath('/documentation');
          }}
          disableRipple
        >
          Documentation
        </MenuItem>
        <MenuItem
          onClick={() => {
            moveToPath('/demos');
          }}
          disableRipple
        >
          Demos
        </MenuItem>
        <MenuItem onClick={updateRequestFeatureModal} disableRipple>
          Request a Feature
        </MenuItem>
        <MenuItem onClick={updateReportBugModal} disableRipple>
          Report a Bug
        </MenuItem>
        {loginLogoutButton()}
      </StyledMenu>
    </div>
  );
}
