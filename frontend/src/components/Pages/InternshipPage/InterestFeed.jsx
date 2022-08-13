import React from 'react'
import { Container, makeStyles } from '@material-ui/core';
import Internship from './Interest';
import Interest from './Interest';

const useStyles = makeStyles((theme)=>({
    container : {
        paddingTop: theme.spacing(10),
    }
}));

function InterestFeed() {
    const classes = useStyles();
    return (
        <>
        <Container className={classes.container}>
            <Interest/>
        </Container>
        </>
    )
}

export default InterestFeed
