import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import {
  Home,
  AssessmentOutlined,
  AssignmentTurnedInOutlined,
  FolderZipOutlined,
  LocalMallOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

// ----------------------------------------------------------------------

const NAV_ITEMS = [
  {
    title: "Home",
    icon: <Home />,
    path: "/",
  },
  {
    title: "Assessment",
    icon: <AssessmentOutlined />,
    path: "/assessment",
  },
  {
    title: "Records",
    icon: <AssignmentTurnedInOutlined />,
    path: "/records",
  },
  {
    title: "Drafts",
    icon: <FolderZipOutlined />,
    path: "/drafts",
  },
  {
    title: "Cart",
    icon: <LocalMallOutlined />,
    path: "/cart",
  },
];

//-----------------------------------------------------------------------

export default function Sidebar({ open }) {
  const navigate = useNavigate();

  return (
    <List>
      {NAV_ITEMS.map((i) => (
        <Tooltip title={i.title} key={i.title} placement="right">
          <ListItem key={i.title} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={() => navigate(i.path)}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "#FFFFFF",
                }}
              >
                {i.icon}
              </ListItemIcon>
              <ListItemText primary={i.title} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </Tooltip>
      ))}
    </List>
  );
}
