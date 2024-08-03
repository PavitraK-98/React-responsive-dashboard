import { Box, Card, Typography, Avatar, Rating } from "@mui/material";
import Profile from '../../Assets/Profile.jpg';
import Profile1 from '../../Assets/Profile1.jpg';
import Profile2 from '../../Assets/Profile2.jpg';
import { Star } from "@mui/icons-material";
//-------------------------------------------------------------
export default function CustomerFeedback() {

    const data = [
        {
            id: 1,
            photo: Profile,
            name: "Jenny Wilson",
            rating: 2.8,
            discription: "Sint est culpa laboris deserunt minim elit voluptate in incididunt cillum irure. Ut in officia ipsum pariatur consectetur qui amet nisi veniam sit. Ullamco mollit irure nulla minim ipsum in ea magna Lorem magna in."
        },
        {
            id: 2,
            photo: Profile1,
            name: "Jenny Wilson",
            rating: 3.3,
            discription: "Laboris incididunt laboris aliqua consequat dolor. Tempor sint est id culpa nostrud reprehenderit qui consectetur aliqua ipsum ullamco amet."
        },
        {
            id: 3,
            photo: Profile2,
            name: "Jenny Wilson",
            rating: 4,
            discription: "Sint est culpa laboris deserunt minim elit voluptate in incididunt cillum irure. Ut in officia ipsum pariatur consectetur qui amet nisi veniam sit. Ullamco mollit irure nulla minim ipsum in ea magna Lorem magna in."
        }
    ]
  //------------------------------------------------------------------

  return (
    <Card sx={{ height: 445, overflowY: "scroll", overflowX: "hidden", backgroundColor: "#263238" }}>
      <Box sx={{ pl: 2, pt: 1, color:'#FFFFFF' }}>
        <Typography variant="h6" gutterBottom sx={{ mb: 0, fontWeight: 600 }}>
          Customer's Feedback
        </Typography>
      </Box>
      <Box sx={{px:2, py:1, color:'#FFFFFF'}}>
      {data.map((i) => {
        return (
            <Box key={i.id}>
                <Typography variant="h6" gutterBottom sx={{display:'flex', flexDirection:'row', justifyContent:'left', alignItems:'center', gap: 1}}>
                    <Avatar alt={i.name} src={i.photo}  sx={{ width: 25, height: 25 }} />
                    {i.name}
                </Typography>
                <Rating 
                    name="read-only" 
                    value={i.rating} 
                    precision={0.5} 
                    readOnly 
                    emptyIcon={<Star style={{ opacity: 0.55, color:'#f5f5f5' }} fontSize="inherit" />}
                />
                <Typography variant="body2" gutterBottom>
                    {i.discription}
                </Typography>
            </Box>
        )
      })}
    </Box>
    </Card>
  );
}
