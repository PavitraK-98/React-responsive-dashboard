import { ArrowDropUpOutlined } from "@mui/icons-material";
import { Card, Box } from "@mui/material";
import Chart from "react-apexcharts";

//-------------------------------------------------------------
export default function Block2() {

  const options = {
    chart: {
      height: 300,
      type: "radialBar",
    },
    stroke: {
      lineCap: "round",
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          show: true,
          name: {
            show: true,
            fontSize: '13px',
            fontFamily: undefined,
            fontWeight: 600,
            color:'#FFFFFF',
            offsetY: 17,
            formatter: function (val) {
              return val; 
            }
          },
          value: {
            show: true,
            fontSize: '16px',
            fontFamily: undefined,
            fontWeight: 700,
            color:'#FFFFFF',
            offsetY: -17,
            formatter: function (val) {
              return val + '%'
            }
          },
          total: {
            show: false,
            offsetY: -15,
            color:'#FFFFFF',
            fontSize: "14px",
            label: "Goal Completed",
          },
        },
      },
    },
    labels: ["Goal"],
    series: [70],
    subtitle: {
      text: '*The values here has been rounded off',
      align: 'flex-end',
      floating: false,
      color: '#FFFFFF',
      offsetY: 95,
    },
  };

  //------------------------------------------------------------------

  return (
    <Card sx={{ px: 2, py: 2 , display:'flex', flexDirection:'row', backgroundColor: "#263238"}}>
        <Box
          sx={{
            width:'50%',
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              fontSize: "0.9rem",
              fontWeight: 800,
              color: "#FFFFFF"
            }}
          >
            Net Profit
          </div>
          <div
            style={{
              fontSize: "2rem",
              fontWeight: 800,
              color: "#FFFFFF"
            }}
          >
            $ 6759.25
            <div
              style={{
                color: "#4caf50",
                fontWeight: 500,
                fontSize: "1.1rem",
                display:'flex',
                justifyContent:'left',
                alignItems:'center'
              }}
            >
              <ArrowDropUpOutlined
                style={{ color: "#4caf50", fontSize: "1.5rem" }}
              />
              3%
            </div>
          </div>
        </Box>

        <Box sx={{width:'50%'}}>
          <Chart
            options={options}
            series={options.series}
            type="radialBar"
            height={135}
            width="100%"
          />
        </Box>
    </Card>
  );
}
