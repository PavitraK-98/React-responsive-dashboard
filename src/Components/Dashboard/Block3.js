import {
  Box,
  Card,
  CardHeader,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Chart from "react-apexcharts";

//-------------------------------------------------------------
export default function Block3() {
  const [val, setVal] = useState(10);
  const [seriesData, setSeriesData] = useState([
    14000, 5000, 9500, 7300, 2800, 7300, 2800, 3400, 4700, 4500, 12000, 4700,
    3800, 9400, 8300, 6950, 9745, 6790, 3750, 7845, 5398, 5622, 7989, 5637,
    6234, 7483, 4526, 7564, 9834, 4598,
  ]);

  const handleChange = (event) => {
    const value = parseInt(event.target.value);
    if (value === 10) {
      setSeriesData([
        14000, 5000, 9500, 7300, 2800, 7300, 2800, 3400, 4700, 4500, 12000,
        4700, 3800, 9400, 8300, 6950, 9745, 6790, 3750, 7845, 5398, 5622, 7989,
        5637, 6234, 7483, 4526, 7564, 9834, 4598,
      ]);
    } else if (value === 20) {
      setSeriesData([
        4700, 4900, 2500, 4300, 8800, 3300, 6800, 8400, 8700, 4500, 12000, 5700,
        7800, 9000, 8300, 5950, 9745, 5790, 7750, 4845, 7398, 8622, 4989, 8300,
        6950, 9745, 6790, 3750, 7845, 5398, 5622, 7989,
      ]);
    } else if (value === 30) {
      setSeriesData([
        14000, 5000, 9500, 7300, 2800, 7300, 2800, 3400, 4700, 4500, 12000,
        4700, 3800, 9400, 8300, 6950, 9745, 6790, 3750, 7845, 5398, 5622, 7989,
        4700, 4900, 2500, 4300, 8800, 3300, 6800, 8400, 8700, 4500,
      ]);
    } else {
      return null;
    }
    setVal(event.target.value);
  };

  const options = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    stroke: {
      lineCap: "round",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 6,
      },
    },
    dataLabels: {
      enabled: false,
      dropShadow: { enabled: true },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#fafafa",
        },
        formatter: function (value) {
          var val = Math.abs(value);
          if (val >= 1000) {
            val = (val / 1000).toFixed(0) + " K";
          }
          return val;
        },
      },
    },
    xaxis: {
      labels: {
        style: {
          colors: "#fafafa",
        },
      },
    },
    grid: {
      borderColor: "#FFFFFF",
    },
    series: [
      {
        data: seriesData,
      },
    ],
  };

  //------------------------------------------------------------------

  return (
    <Card sx={{ backgroundColor: "#263238" }}>
      <CardHeader
        sx={{ px: 2, py: 1 }}
        avatar={
          <Box>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ mb: 0, fontWeight: 600, color: "#FFFFFF" }}
            >
              Activity
            </Typography>
          </Box>
        }
        action={
          <Box sx={{ pr: 1, pt: 1 }}>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={val}
              onChange={handleChange}
              defaultValue={10}
              sx={{
                borderRadius: "25px",
                height: "25px",
                color: "#OOOOOO",
                backgroundColor: "#cfd8dc",
              }}
            >
              <MenuItem value={10}>Weekly</MenuItem>
              <MenuItem value={20}>Monthly</MenuItem>
              <MenuItem value={30}>Yearly</MenuItem>
            </Select>
          </Box>
        }
      />
      <div>
        <Chart
          type="bar"
          height={165}
          options={options}
          series={options.series}
        />
      </div>
    </Card>
  );
}
