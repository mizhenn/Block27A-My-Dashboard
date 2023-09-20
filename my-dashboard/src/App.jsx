
import React from 'react';
import { Container, Grid } from '@mui/material';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
// import TransactionLog from './components/TransactionLog';


function App() {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={3}>
          <Sidebar />
        </Grid>
        <Grid item xs={9}>
          <TransactionLog />
        </Grid>
        <Grid item xs={12}>
          <FAQs />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
