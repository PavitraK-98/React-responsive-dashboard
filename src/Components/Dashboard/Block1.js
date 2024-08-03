import { Box, Grid, Card, Typography } from "@mui/material";
import {
  ArrowDropDownOutlined,
  ArrowDropUpOutlined,
} from "@mui/icons-material";
import Totalorders from "../../Assets/totalOrders.png";
import Cancled from "../../Assets/Cancled.png";
import Delivered from "../../Assets/Delivered.png";
import Revenue from "../../Assets/Revenue.png";

//-----------------------------------------------------------
export default function Block1() {
  return (
    <Grid container direction="row" spacing={1}>
      <Grid item xs={12} sm={12} md={6} lg={3}>
        <Card
          sx={{
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "flex-start",
            backgroundColor: "#263238",
          }}
        >
          <div
            style={{
              backgroundColor: "#90caf9",
              borderRadius: "25%",
              padding: "3px",
            }}
          >
            <img src={Totalorders} alt="total orders" width={40} height={40} />
          </div>
          <Typography
            variant="subtitle2"
            gutterBottom
            style={{
              fontWeight: 800,
              color: "#FFFFFF",
            }}
          >
            Total Orders
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography
              sx={{ fontSize: "2rem", fontWeight: 700, color: "#FFFFFF" }}
            >
              75
            </Typography>
            <Typography
              sx={{
                color: "#4caf50",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: 500,
                fontSize: "1.1rem",
              }}
            >
              <ArrowDropUpOutlined
                style={{ color: "#4caf50", fontSize: "1.5rem" }}
              />
              3%
            </Typography>
          </Box>
        </Card>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={3}>
        <Card
          sx={{
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "flex-start",
            backgroundColor: "#263238",
          }}
        >
          <div
            style={{
              backgroundColor: "#81c784",
              borderRadius: "25%",
              padding: "3px",
            }}
          >
            <img src={Delivered} alt="total orders" width={40} height={40} />
          </div>
          <Typography
            variant="subtitle2"
            gutterBottom
            style={{
              fontWeight: 800,
              color: "#FFFFFF",
            }}
          >
            Total Delivered
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography
              sx={{ fontSize: "2rem", fontWeight: 700, color: "#FFFFFF" }}
            >
              70
            </Typography>
            <Typography
              sx={{
                color: "#f44336",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: 500,
                fontSize: "1.1rem",
              }}
            >
              <ArrowDropDownOutlined
                style={{ color: "#f44336", fontSize: "1.5rem" }}
              />
              3%
            </Typography>
          </Box>
        </Card>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={3}>
        <Card
          sx={{
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "flex-start",
            backgroundColor: "#263238",
          }}
        >
          <div
            style={{
              backgroundColor: "#ef9a9a",
              borderRadius: "25%",
              padding: "3px",
            }}
          >
            <img src={Cancled} alt="total orders" width={40} height={40} />
          </div>
          <Typography
            variant="subtitle2"
            gutterBottom
            style={{
              fontWeight: 800,
              color: "#FFFFFF",
            }}
          >
            Total Cancled
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography
              sx={{ fontSize: "2rem", fontWeight: 700, color: "#FFFFFF" }}
            >
              05
            </Typography>
            <Typography
              sx={{
                color: "#4caf50",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: 500,
                fontSize: "1.1rem",
              }}
            >
              <ArrowDropUpOutlined
                style={{ color: "#4caf50", fontSize: "1.5rem" }}
              />
              3%
            </Typography>
          </Box>
        </Card>
      </Grid>

      <Grid item xs={12} sm={12} md={6} lg={3}>
        <Card
          sx={{
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            alignItems: "flex-start",
            backgroundColor: "#263238",
          }}
        >
          <div
            style={{
              backgroundColor: "#fce4ec",
              borderRadius: "25%",
              padding: "3px",
            }}
          >
            <img src={Revenue} alt="total orders" width={40} height={40} />
          </div>
          <Typography
            variant="subtitle2"
            gutterBottom
            style={{
              fontWeight: 800,
              color: "#FFFFFF",
            }}
          >
            Total Revenue
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography
              sx={{ fontSize: "2rem", fontWeight: 700, color: "#FFFFFF" }}
            >
              $12k
            </Typography>
            <Typography
              sx={{
                color: "#f44336",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontWeight: 500,
                fontSize: "1.1rem",
              }}
            >
              <ArrowDropDownOutlined
                style={{ color: "#f44336", fontSize: "1.5rem" }}
              />
              3%
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
}
