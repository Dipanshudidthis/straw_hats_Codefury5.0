import { Grid } from '@material-ui/core';
import React from 'react';
import Leftbar from '../Pages/HomePage/Leftbar';
import Navbar from '../Pages/HomePage/Navbar';
import ChatPage from './ChatPage';


function ChatPageMain() {

  

  return (
    <>
      <div>
        <Navbar />
         <Grid container>                                 {/* style={{background: "#F6F6EB"}} */}
          <Grid item sm={2} xs={2}>
            <Leftbar />
          </Grid>
          <Grid item sm={7} xs={10}>
            <ChatPage />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default ChatPageMain;
