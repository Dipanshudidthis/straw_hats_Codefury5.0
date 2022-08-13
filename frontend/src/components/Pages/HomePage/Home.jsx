import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { Grid } from '@material-ui/core';
import Leftbar from './Leftbar';
import Feed from './Feed';
import Add from './Add';


function Home() {
  
  return (
    <>
      <div>
        <Navbar />
         <Grid container>                                 {/* style={{background: "#F6F6EB"}} */}
          <Grid item sm={2} xs={2}>
            <Leftbar />
          </Grid>
          <Grid item sm={7} xs={10}>
            <Feed />
          </Grid>
        </Grid>
        <Add />
      </div>
    </>
  );
}

export default Home;
