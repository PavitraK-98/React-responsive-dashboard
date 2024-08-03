import {
  IconButton,
  TextField,
  Toolbar,
  InputAdornment,
  Box,
  Stack,
  Avatar,
  Badge,
} from "@mui/material";
import {
  Apps,
  SearchOutlined,
  NotificationsNoneOutlined,
  EmailOutlined,
  SettingsOutlined,
} from "@mui/icons-material";
import MuiAppBar from "@mui/material/AppBar";
import { styled } from "@mui/material/styles";
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
  return (
    <AppBar position="fixed" open={open} sx={{ bgcolor: "#263238" }}>
      <Toolbar>
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
          <TextField
            variant="outlined"
            placeholder="Search"
            sx={{
              // Root class for the input field
              "& .MuiOutlinedInput-root": {
                color: "#FFFFFF",
                height: "34px",
                fontSize: '1.1rem',
                fontWeight: 300,
                // Class for the border around the input field
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "#37474f",
                  borderWidth: "1px",
                  color: '3FFFFFF',
                },
              },
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlined sx={{ color: "#FFFFFF", ml: "-8px" }} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Stack direction="row" spacing={1}>
            <IconButton size="small" sx={{ backgroundColor: "#9e9e9e" }}>
              <EmailOutlined fontSize="small" />
            </IconButton>
            <IconButton size="small" sx={{ backgroundColor: "#9e9e9e" }}>
              <Badge variant="dot" color="secondary">
                <NotificationsNoneOutlined fontSize="small"/>
              </Badge>
            </IconButton>
            <IconButton size="small" sx={{ backgroundColor: "#9e9e9e" }}>
              <SettingsOutlined fontSize="small" />
            </IconButton>
            <Avatar 
              alt="Remy Sharp" 
              src={AccountProfile} 
              sx={{ width: 30, height: 30 }}
            />
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
