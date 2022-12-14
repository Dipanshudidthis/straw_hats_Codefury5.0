import { Avatar } from '@material-ui/core';
import React from 'react';
import { useAuthContext } from '../../../hooks/useAuthContext';
import "./Profile.css";


const Profile = () => {


    const { user } = useAuthContext();

    return (
        <>
            <div className="bbbbbooody">
                <div class="containerghfkhdgbv">
                    <div class="avatar-flip">
                        <Avatar style={{ backgroundColor: "#9a9eec", height: "150px", width: "150px" }} aria-label="recipe">
                            <h1 style={{ fontFamily: "roboto", fontSize: 90 }}>{user.user.orgname[0]}</h1>
                        </Avatar>
                    </div>
                    <h2 style={{ fontFamily: "'Staatliches', cursive" }}>{user.user.orgname}</h2>
                    <label className='labelll' style={{ fontFamily: "'Staatliches', cursive" }} htmlFor="em">Email</label>
                    <h4 style={{ fontFamily: "'Rubik', sans-serif", marginBottom: "7px" }}>{user.user.email}</h4>
                    <label className='labelll' style={{ fontFamily: "'Staatliches', cursive" }} htmlFor="em">Phone Number</label>
                    <h4 style={{ fontFamily: "'Rubik', sans-serif", marginBottom: "7px" }}>{user.user.phoneNumber}</h4>
                    <label className='labelll' style={{ fontFamily: "'Staatliches', cursive" }} htmlFor="em">About</label>
                    <h4 style={{ fontFamily: "'Rubik', sans-serif", marginBottom: "7px" }}>{user.user.about}</h4>
                    <h3 style={{ fontFamily: "'Staatliches', cursive" }}>Open for discussion</h3>
                    {/* <p style={{ fontFamily: "'Rubik', sans-serif" }}>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit sit amet non magna ip sum dolore.</p>
                    <p>Connec dolore ipsum faucibus mollis interdum. Donec ullamcorper nulla non metus auctor fringilla.</p> */}
                </div>
            </div>
        </>
    )
}

export default Profile