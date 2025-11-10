import React from 'react';

function Dashboard(){
    return (
        <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', height:'100vh'}}>
            <h1 style={{fontSize:'5vh'}}>Welcome to the Dashboard</h1>
            <p style={{fontSize:'2vh'}}>This is a protected route. You have successfully logged in.</p>
        </div>
    );  
 }      

export default Dashboard;