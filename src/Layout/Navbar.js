import {
  Apps,
  Logout,
  Settings,
  AccountCircle,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import AccountProfile from "../Assets/Profile.jpg";
// ----------------------------------------------------------------------
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

// ----------------------------------------------------------------------

export default function Navbar({ open, handleDrawerOpen }) {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1224px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const [anchorEl, setAnchorEl] = useState(null);
  const openAccountMenu = Boolean(anchorEl);

  const handleClickOpenAccountMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseAccountMenu = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" open={open} sx={{ bgcolor: "#263238" }}>
      <Toolbar>
        {isDesktopOrLaptop && (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(open && { display: "none" }),
                }}
              >
                <Apps style={{ color: "white" }} />
              </IconButton>
            </Box>
            <Box>
              <IconButton
                size="small"
                aria-haspopup="true"
                onClick={handleClickOpenAccountMenu}
                aria-controls={openAccountMenu ? "account-menu" : undefined}
                aria-expanded={openAccountMenu ? "true" : undefined}
              >
                <Avatar
                  alt="Remy Sharp"
                  src={AccountProfile}
                  sx={{ width: 32, height: 32 }}
                />
              </IconButton>
            </Box>
            <Menu
              id="account-menu"
              anchorEl={anchorEl}
              open={openAccountMenu}
              onClose={handleCloseAccountMenu}
              onClick={handleCloseAccountMenu}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    backgroundColor: "#263238",
                    color: "#FFFFFF",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "#263238",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleCloseAccountMenu}>
                <Box>
                  <Avatar
                    alt="Remy Sharp"
                    src={AccountProfile}
                    sx={{ width: 14, height: 14 }}
                  />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "15px", fontWeight: 700 }}>
                    Remy Sharp
                  </Typography>
                  <Typography sx={{ fontSize: "12px" }}>Developer</Typography>
                </Box>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleCloseAccountMenu}>
                <ListItemIcon>
                  <AccountCircle fontSize="small" sx={{ color: "#FFFFFF" }} />
                </ListItemIcon>
                My Profile
              </MenuItem>
              <MenuItem onClick={handleCloseAccountMenu}>
                <ListItemIcon>
                  <Settings fontSize="small" sx={{ color: "#FFFFFF" }} />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={handleCloseAccountMenu}>
                <ListItemIcon>
                  <Logout fontSize="small" sx={{ color: "#FFFFFF" }} />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        )}

        {isTabletOrMobile && (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(open && { display: "none" }),
                }}
              >
                <Apps style={{ color: "white" }} />
              </IconButton>
            </Box>
            <Box>
              <IconButton
                size="small"
                aria-haspopup="true"
                onClick={handleClickOpenAccountMenu}
                aria-controls={openAccountMenu ? "account-menu" : undefined}
                aria-expanded={openAccountMenu ? "true" : undefined}
              >
                <Avatar
                  alt="Remy Sharp"
                  src={AccountProfile}
                  sx={{ width: 32, height: 32 }}
                />
              </IconButton>
            </Box>
            <Menu
              id="account-menu"
              anchorEl={anchorEl}
              open={openAccountMenu}
              onClose={handleCloseAccountMenu}
              onClick={handleCloseAccountMenu}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    backgroundColor: "#263238",
                    color: "#FFFFFF",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "#263238",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleCloseAccountMenu}>
                <Box>
                  <Avatar
                    alt="Remy Sharp"
                    src={AccountProfile}
                    sx={{ width: 14, height: 14 }}
                  />
                </Box>
                <Box>
                  <Typography sx={{ fontSize: "15px", fontWeight: 700 }}>
                    Remy Sharp
                  </Typography>
                  <Typography sx={{ fontSize: "12px" }}>Developer</Typography>
                </Box>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleCloseAccountMenu}>
                <ListItemIcon>
                  <AccountCircle fontSize="small" sx={{ color: "#FFFFFF" }} />
                </ListItemIcon>
                My Profile
              </MenuItem>
              <MenuItem onClick={handleCloseAccountMenu}>
                <ListItemIcon>
                  <Settings fontSize="small" sx={{ color: "#FFFFFF" }} />
                </ListItemIcon>
                Settings
              </MenuItem>
              <MenuItem onClick={handleCloseAccountMenu}>
                <ListItemIcon>
                  <Logout fontSize="small" sx={{ color: "#FFFFFF" }} />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
