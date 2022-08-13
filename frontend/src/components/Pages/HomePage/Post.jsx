import React, { useEffect, useState } from 'react';
import TelegramIcon from '@material-ui/icons/Telegram';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Avatar, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, IconButton, makeStyles, Typography } from '@material-ui/core';
import { useWorkoutsContext } from '../../../hooks/useWorkoutContext';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    card: {
        marginBottom: theme.spacing(5)
    },
    avatarr: {
        fontFamily: "'Staatliches', cursive",
        color: "black"
    }
}));



const Post = () => {

    const [workouts, setWorkouts] = useState(null);

    const { dispatch } = useWorkoutsContext();
    useEffect(() => {    //useEffect fires a function when 'Home' component is rendered

        const fetchWorkouts = async () => {  //making another async function inside useEffect
            const response = await fetch('/api/workouts');
            const json = await response.json();         //Converting the fetched data into json array

            if (response.ok) {  //checking if the response is okay, and if it's okay we will change some state
                setWorkouts(json);    //the array of docs is coming back as json format and we are putting that in setworkout

                console.log(workouts);
                dispatch({ type: 'SET_WORKOUTS', payload: json })   //dispatch functions fires SET_WORKOUTS that we defined in workoutcontext file and it send all data in json and that data is passed to payload
            }

        }
        fetchWorkouts();


    }, [])   //We only want to fire this once so we use an empty array that is the dependency, if dispatch changes the useeffect will re-run 


    const classes = useStyles();
    return (
        <>
            <Card className={classes.card}>
                <CardHeader className={classes.avatarr}
                    avatar={
                        <Avatar style={{ backgroundColor: "#7177f3", fontFamily: "'Rubik', sans-serif" }} aria-label="recipe">
                            <Link to='/fipro' style={{ textDecoration: "none", color: 'white' }}>T</Link>
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="TazorPay"
                    subheader="August 14, 2022"
                >TazorPay</CardHeader>
                <CardActionArea>
                    <CardMedia className={classes.media}
                        title='My Post' />
                    <CardContent>
                        <Typography gutterBottom variant='h5' style={{ fontFamily: "'Paytone One', sans-serif" }}>We at TazorPay</Typography>
                        <Typography variant='body1' style={{ fontFamily: "'Rubik', sans-serif" }}>
                            TazorPay is the only payments solution in India that allows businesses to accept, process and disburse payments with its product suite. It gives you access to all payment modes including credit card, debit card, netbanking, UPI and popular wallets including JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money and PayZapp.

                            TazorPayX supercharges your business banking experience, bringing effectiveness, efficiency, and excellence to all financial processes. With RazorpayX, businesses can get access to fully-functional current accounts, supercharge their payouts and automate payroll compliance.

                            Manage your marketplace, automate bank transfers, collect recurring payments, share invoices with customers and avail working capital loans - all from a single platform. Fast forward your business with Razorpay.
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size='small' color='primary'><ThumbUpIcon /></Button>
                    <Button size='small' color='primary'><Link to='/chathe' style={{ textDecoration: "none" }}><InsertCommentIcon /></Link></Button>
                    <Button size='small' color='primary'><TelegramIcon /></Button>
                </CardActions>
            </Card>


            <Card className={classes.card}>
                <CardHeader className={classes.avatarr}
                    avatar={
                        <Avatar style={{ backgroundColor: "#7177f3", fontFamily: "'Rubik', sans-serif" }} aria-label="recipe">
                            <Link to='/fipro' style={{ textDecoration: "none", color: 'white' }}>T</Link>
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Tutelage"
                    subheader="August 14, 2022"
                >Tutelage</CardHeader>
                <CardActionArea>
                    <CardMedia className={classes.media}
                        title='My Post' />
                    <CardContent>
                        <Typography gutterBottom variant='h5' style={{ fontFamily: "'Paytone One', sans-serif" }}>We at Tutelage</Typography>
                        <Typography variant='body1' style={{ fontFamily: "'Rubik', sans-serif" }}>
                            Tutelage will provide a joint platform for junior and senior students like a social media app to associate with each other. Seniors can share their interview experience with everyone and juniors can approach their seniors without hesitations. Generally, students hesitate to approach their seniors because they think that seniors won't like it or seniors are busy. So, in tutelage, every student can set their status/tag i.e. "Approach for guidance" or "Do not disturb". If a senior has set their tag to "Approach for guidance", juniors won't hesitate anymore to approach them</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size='small' color='primary'><ThumbUpIcon /></Button>
                    <Button size='small' color='primary'><Link to='/chathe' style={{ textDecoration: "none" }}><InsertCommentIcon /></Link></Button>
                    <Button size='small' color='primary'><TelegramIcon /></Button>
                </CardActions>
            </Card>


            <Card className={classes.card}>
                <CardHeader className={classes.avatarr}
                    avatar={
                        <Avatar style={{ backgroundColor: "#7177f3", fontFamily: "'Rubik', sans-serif" }} aria-label="recipe">
                            <Link to='/fipro' style={{ textDecoration: "none", color: 'white' }}>N</Link>
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Nikro"
                    subheader="August 14, 2022"
                >Nikro</CardHeader>
                <CardActionArea>
                    <CardMedia className={classes.media}
                        title='My Post' />
                    <CardContent>
                        <Typography gutterBottom variant='h5' style={{ fontFamily: "'Paytone One', sans-serif" }}>We at Nikro</Typography>
                        <Typography variant='body1' style={{ fontFamily: "'Rubik', sans-serif" }}>
                            Nikro’S is a global ed-tech company, providing highly adaptive, engaging and effective learning solutions to more than 150 million students around the world. Founded in India in 2011, Nikro’S mission is to make high-quality learning accessible to students everywhere.

                            The Nikro’S family of brands includes Disney-Nikro’S Early Learn, Nikro’S Future School, Epic!, Osmo, Tynker, Toppr and WhiteHat Jr, along with our beloved flagship product Nikro’S – The Learning App. Together, Nikro’S solutions support Pre-K – 12 education and a wide range of competitive exams.</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size='small' color='primary'><ThumbUpIcon /></Button>
                    <Button size='small' color='primary'><Link to='/chathe' style={{ textDecoration: "none" }}><InsertCommentIcon /></Link></Button>
                    <Button size='small' color='primary'><TelegramIcon /></Button>
                </CardActions>
            </Card>



            <Card className={classes.card}>
                <CardHeader className={classes.avatarr}
                    avatar={
                        <Avatar style={{ backgroundColor: "#7177f3", fontFamily: "'Rubik', sans-serif" }} aria-label="recipe">
                            <Link to='/fipro' style={{ textDecoration: "none", color: 'white' }}>H</Link>
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Herling"
                    subheader="August 14, 2022"
                >Herling</CardHeader>
                <CardActionArea>
                    <CardMedia className={classes.media}
                        title='My Post' />
                    <CardContent>
                        <Typography gutterBottom variant='h5' style={{ fontFamily: "'Paytone One', sans-serif" }}>We at Herling</Typography>
                        <Typography variant='body1' style={{ fontFamily: "'Rubik', sans-serif" }}>
                            In 2020, post-Covid, Herling also launched India’s only ZERO MDR card acceptance terminals – BharatSwipe. Currently serving over 50 lakh merchants across 35 cities, the company has grown business 30x in 2019 and is a leader in UPI offline transactions, having processed 5 crore+ UPI transactions a month (annualized TPV of US$ 5+ Bn). The company’s list of marquee investors includes Beenext, Sequoia, SteadView Capital, Ribbit Capital, Coatue Management LLC, Insight Partners, and Amplo.The company has already facilitated disbursement of over Rs. 500 crores to its merchants since launch. Herling has raised US$ 142.5 million till date. </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size='small' color='primary'><ThumbUpIcon /></Button>
                    <Button size='small' color='primary'><Link to='/chathe' style={{ textDecoration: "none" }}><InsertCommentIcon /></Link></Button>
                    <Button size='small' color='primary'><TelegramIcon /></Button>
                </CardActions>
            </Card>



            <Card className={classes.card}>
                <CardHeader className={classes.avatarr}
                    avatar={
                        <Avatar style={{ backgroundColor: "#7177f3", fontFamily: "'Rubik', sans-serif" }} aria-label="recipe">
                            <Link to='/fipro' style={{ textDecoration: "none", color: 'white' }}>T</Link>
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="SilverMen"
                    subheader="August 14, 2022"
                >SilverMen</CardHeader>
                <CardActionArea>
                    <CardMedia className={classes.media}
                        title='My Post' />
                    <CardContent>
                        <Typography gutterBottom variant='h5' style={{ fontFamily: "'Paytone One', sans-serif" }}>We at SilverMen</Typography>
                        <Typography variant='body1' style={{ fontFamily: "'Rubik', sans-serif" }}>
                            SilverMen’S is a global ed-tech company, providing highly adaptive, engaging and effective learning solutions to more than 150 million students around the world. Founded in India in 2011, SilverMen’S mission is to make high-quality learning accessible to students everywhere.

                            The SilverMen’S family of brands includes Disney-SilverMen’S Early Learn, SilverMen’S Future School, Epic!, Osmo, Tynker, Toppr and WhiteHat Jr, along with our beloved flagship product SilverMen’S – The Learning App. Together, SilverMen’S solutions support Pre-K – 12 education and a wide range of competitive exams. </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size='small' color='primary'><ThumbUpIcon /></Button>
                    <Button size='small' color='primary'><Link to='/chathe' style={{ textDecoration: "none" }}><InsertCommentIcon /></Link></Button>
                    <Button size='small' color='primary'><TelegramIcon /></Button>
                </CardActions>
            </Card>

        </>
    )
}

export default Post