import { Grid } from '@material-ui/core';
import React from 'react';
import Leftbar from '../HomePage/Leftbar';
import Navbar from '../HomePage/Navbar';
import InterestFeed from './InterestFeed';


function InterestPage() {

  

  return (
    <>
      <div>
        <Navbar />
         <Grid container>                                 {/* style={{background: "#F6F6EB"}} */}
          <Grid item sm={2} xs={2}>
            <Leftbar />
          </Grid>
          <Grid item sm={7} xs={10}>
            <InterestFeed />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default InterestPage;
