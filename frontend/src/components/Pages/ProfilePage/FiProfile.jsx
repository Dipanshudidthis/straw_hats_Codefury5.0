import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Profile.css";


const FiProfile = () => {

    return (
        <>
            <div className="bbbbbooody">
                <div class="containerghfkhdgbv">
                    <div class="avatar-flip">
                        <Avatar style={{ backgroundColor: "#9a9eec", height: "150px", width: "150px" }} aria-label="recipe">
                            <h1 style={{ fontFamily: "roboto", fontSize: 90 }}>T</h1>
                        </Avatar>
                    </div>
                    <h2 style={{ fontFamily: "'Staatliches', cursive" }}>TazorPay</h2>
                    <label className='labelll' style={{ fontFamily: "'Staatliches', cursive" }} htmlFor="em">Email</label>
                    <h4 style={{ fontFamily: "'Rubik', sans-serif", marginBottom: "7px" }}>tazorpay@gmail.com</h4>
                    <label className='labelll' style={{ fontFamily: "'Staatliches', cursive" }} htmlFor="em">Phone Number</label>
                    <h4 style={{ fontFamily: "'Rubik', sans-serif", marginBottom: "7px" }}>9982783682</h4>
                    <label className='labelll' style={{ fontFamily: "'Staatliches', cursive" }} htmlFor="em">About</label>
                    <h4 style={{ fontFamily: "'Rubik', sans-serif", marginBottom: "7px" }}>Accept payments from customers. Automate payouts to vendors & employees. Never run out of working capital.</h4>
                    <h3 style={{ fontFamily: "'Staatliches', cursive" }}>Open for Suggestions</h3>
                   </div>
            </div>
        </>
    )
}

export default FiProfile