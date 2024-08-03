import {
  Avatar,
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Profile from "../../Assets/Profile.jpg";
import Profile1 from "../../Assets/Profile1.jpg";
import Profile2 from "../../Assets/Profile2.jpg";
import Profile3 from "../../Assets/Profile3.jpg";
//------------------------------------------------------------------------
function createData(id, photo, customer, order, amount, status) {
  return { id, photo, customer, order, amount, status };
}

const rows = [
  createData(1, Profile, "Wade Warren", 159670, "$120.00", "Delivered"),
  createData(2, Profile1, "Jane Cooper", 237940, "$375.02", "Delivered"),
  createData(3, Profile2, "Guy Hawkins", 2621630, "$24.88", "Cancelled"),
  createData(4, Profile3, "Kristin Watson", 305397, "$67.00", "Pending"),
  createData(5, Profile, "Cody Fisher", 3561640, "$494.86", "Delivered"),
  createData(6, Profile1, "Savannah Nguyen", 3561630, "$213.83", "Delivered"),
];

//-------------------------------------------------------------
export default function RecentOrders() {
  //------------------------------------------------------------------

  return (
    <Card sx={{ backgroundColor: "#263238" }}>
      <Box sx={{ pl: 2, pt: 1 }}>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ mb: 0, fontWeight: 600, color: "#FFFFFF" }}
        >
          Recent Orders
        </Typography>
      </Box>
      <TableContainer sx={{ maxHeight: 430 }}>
        <Table stickyHeader>
          <TableHead sx={{ backgroundColor: "#263238" }}>
            <TableRow sx={{ backgroundColor: "#263238" }}>
              <TableCell
                style={{
                  fontWeight: 600,
                  color: "#FFFFFF",
                  backgroundColor: "#263238",
                }}
              >
                Customer
              </TableCell>
              <TableCell
                style={{
                  fontWeight: 600,
                  color: "#FFFFFF",
                  backgroundColor: "#263238",
                }}
              >
                Order No.
              </TableCell>
              <TableCell
                style={{
                  fontWeight: 600,
                  color: "#FFFFFF",
                  backgroundColor: "#263238",
                }}
              >
                Amount
              </TableCell>
              <TableCell
                style={{
                  fontWeight: 600,
                  color: "#FFFFFF",
                  backgroundColor: "#263238",
                }}
              >
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "left",
                    alignItems: "center",
                    gap: 6,
                    color: "#FFFFFF",
                  }}
                >
                  <Avatar
                    alt={row.customer}
                    src={row.photo}
                    sx={{ width: 25, height: 25 }}
                  />
                  {row.customer}
                </TableCell>
                <TableCell sx={{ color: "#FFFFFF" }}>{row.order}</TableCell>
                <TableCell sx={{ color: "#FFFFFF" }}>{row.amount}</TableCell>
                <TableCell sx={{ color: "#FFFFFF" }}>
                  {row.status === "Delivered" ? (
                    <span
                      style={{
                        backgroundColor: "#c8e6c9",
                        color: "#388e3c",
                        padding: "3px 5px 4px 5px",
                        borderRadius: "25px",
                      }}
                    >
                      {row.status}
                    </span>
                  ) : (
                    <span
                      style={{
                        backgroundColor: "#ffcdd2",
                        color: "#f44336",
                        padding: "3px 5px 4px 5px",
                        borderRadius: "25px",
                      }}
                    >
                      {row.status}
                    </span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
