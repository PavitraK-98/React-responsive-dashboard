import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  Home,
  AssessmentOutlined,
  AssignmentTurnedInOutlined,
  FolderZipOutlined,
  LocalMallOutlined,
} from "@mui/icons-material";
// ----------------------------------------------------------------------

const NAV_ITEMS = [
  {
    title: "Home",
    icon: <Home />,
  },
  {
    title: "Assessment",
    icon: <AssessmentOutlined />,
  },
  {
    title: "Records",
    icon: <AssignmentTurnedInOutlined />,
  },
  {
    title: "Drafts",
    icon: <FolderZipOutlined />,
  },
  {
    title: "Cart",
    icon: <LocalMallOutlined />,
  },
];

//-----------------------------------------------------------------------

export default function Sidebar({ open }) {
  return (
    <List>
      {NAV_ITEMS.map((i) => (
        <ListItem key={i.title} disablePadding sx={{ display: "block" }}>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
                color:'#FFFFFF'
              }}
            >
              {i.icon}
            </ListItemIcon>
            <ListItemText primary={i.title} sx={{ opacity: open ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
