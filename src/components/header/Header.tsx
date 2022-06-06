import AccountCircle from '@mui/icons-material/AccountCircle';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import React from "react";
import Navbar from "react-bootstrap/esm/Navbar";
import { Link } from 'react-router-dom';
import { getCurrentUser } from "../../services/authService";
import Logo from "./../../JobsyHeader.png";
import HeaderStyled from "./HeaderStyled";
import { useNavigate } from "react-router-dom";


// const pages = [{ "title": 'Home', "url": "/" },
// { "title": 'Cvs', "url": "/cvs" },
// { "title": 'Matches', "url": "/matches" }]
const userlinks = [
  { "title": 'Profile', "url": "/profile" },
  { "title": 'Logout', "url": "/logout" }]

const styles = {
  largeIcon: {
    width: 60,
    height: 60,
  },
};

interface HeaderProps {
  brandName: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  function userIsConnect() {
    return getCurrentUser();
    //TODO: save this in a global state and remove this logic to useEffact *every time global state is update
  }
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  let pages = [
    { "title": 'Login', "url": "/sign-in" },
    { "title": '', "url": "" }
  ];
  if (getCurrentUser().role === "Candidate") {
    pages = [
      pages[1],
      { "title": 'Cvs', "url": "/cvs" },
      { "title": 'Matches', "url": "/matches" },
      { "title": 'Logout', "url": "/logout" }
    ]
  }
  if (getCurrentUser().role === "HR") {
    pages = [
    { "title": 'Positions', "url": "/positions" },
    { "title": 'Logout', "url": "/logout" } ]
  }

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate();

  return (
    <HeaderStyled>
      <AppBar position="static" className="header-style">
        <Container maxWidth="xl" className="container-header">
          <Toolbar disableGutters >
            <Navbar.Brand className="jobsy-logo" onClick={() => navigate("/")}>
              <img
                alt=""
                src={Logo}
                width="90"
                height="40"
                className="d-inline-block align-top"
              />{" "}
            </Navbar.Brand>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            </Box>
            {pages.map((page) => (
              <Button
                key={page.title}
                component={Link} to={page.url}
                sx={{
                  my: 2,
                  color: '#189ab4',
                  display: 'block',
                  fontFamily: "'Quicksand', sans-serif",
                  fontSize: '16px',
                  fontWeight: 'bold',
                  paddingRight: '20px'
                }}
              >
                {page.title}
              </Button>
            ))}
            <Box sx={{ flexGrow: 0 }}>
              {userIsConnect().role === "Candidate"
                || userIsConnect().role === "HR" && (
                  <div>
                    <Tooltip title="Open settings">
                      <IconButton size="large" onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <AccountCircle fontSize="large"></AccountCircle>
                      </IconButton>
                    </Tooltip>
                    <Menu
                      sx={{ mt: '45px' }}
                      id="menu-appbar"
                      anchorEl={anchorElUser}
                      anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                      }}
                      open={Boolean(anchorElUser)}
                      onClose={handleCloseUserMenu}
                    >

                      {userlinks.map((page) => (
                        <MenuItem key={page.title} onClick={handleCloseUserMenu}>
                          <Button
                            key={page.title}
                            component={Link} to={page.url}
                          >
                            {page.title}
                          </Button>
                        </MenuItem>

                      ))}
                    </Menu>
                  </div>
                )}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HeaderStyled>
  );
};
export default Header;