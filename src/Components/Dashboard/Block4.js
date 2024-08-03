import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  Typography,
} from "@mui/material";
import {
  ExpandMore,
  MyLocationOutlined,
  LunchDining,
  RamenDining,
} from "@mui/icons-material";
import { useState } from "react";

//-------------------------------------------------------------
export default function Block4() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  //------------------------------------------------------------------

  return (
    <Card sx={{ maxHeight: 230, overflowY:'scroll', overflowX:'hidden', backgroundColor: "#263238" }}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{py:1, backgroundColor: "#263238", color:'#FFFFFF'}}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMore
              sx={{
                color: "#OOOOOO",
                backgroundColor: "#e0e0e0",
                borderRadius: "25px",
              }}
            />
          }
        >
          <MyLocationOutlined
            style={{
              color: "#f44336",
              backgroundColor: "#ffcdd2",
              padding: "4px",
              borderRadius: "25px",
              fontSize: "2.2rem",
            }}
          />{" "}
          <Typography style={{marginLeft:'8px', fontSize:'1.5rem'}}>Goals</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{py:1, backgroundColor: "#263238", color:'#FFFFFF'}}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMore
              style={{
                color: "#OOOOOO",
                backgroundColor: "#e0e0e0",
                borderRadius: "25px",
              }}
            />
          }
        >
          <LunchDining
            style={{
              color: "#0d47a1",
              backgroundColor: "#bbdefb",
              padding: "4px",
              borderRadius: "25px",
              fontSize: "2.2rem",
            }}
          />{" "}
          <Typography style={{marginLeft:'8px', fontSize:'1.5rem'}}>Popular Dishes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{py:1, backgroundColor: "#263238", color:'#FFFFFF'}}
      >
        <AccordionSummary
          expandIcon={
            <ExpandMore
              style={{
                color: "#OOOOOO",
                backgroundColor: "#e0e0e0",
                borderRadius: "25px",
              }}
            />
          }
        >
          <RamenDining
            style={{
              color: "#0277bd",
              backgroundColor: "#b3e5fc",
              padding: "4px",
              borderRadius: "25px",
              fontSize: "2.2rem",
            }}
          />
          <Typography style={{marginLeft:'8px', fontSize:'1.5rem'}}>Menus</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </Card>
  );
}
