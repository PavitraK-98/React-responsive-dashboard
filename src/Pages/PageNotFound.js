//  material
import { Button, Typography, Container } from '@mui/material';

//-----------------------------------------------------------------------------
export default function PageNotFound() {
  return (
    <Container
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 5,
      }}
    >
      <Container
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <Typography
          gutterBottom
          align="center"
          sx={{ color: '#456', fontSize: '20px', fontWeight: 400, lineHeight: '28px' }}
        >
          Page Not found
        </Typography>
        <Typography>Make sure the address is correct and the page hasn't moved.</Typography>
        <Button variant="contained" href="/dashboard">
          Home
        </Button>
      </Container>
    </Container>
  );
}
