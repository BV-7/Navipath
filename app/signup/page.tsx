import React from 'react'
import Link from 'next/link'

function Signup(){
    
    return( 
        <>
            <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
                <div style={{display: "flex", flexDirection:'column', gap:'2em', margin:"5vh 0",padding:"3em", border:"1px solid lightgray", borderRadius:"10px", boxShadow:"0 4px 8px rgba(0, 0, 0, 0.1)", alignItems:'center', justifyContent:'center', height:'70vh', width:'30vw'}}>
                    <h1 style={{fontSize:'5vh'}}>Sign up</h1>
                    <input type="text" id='name' placeholder='Username' style={{padding:'1vh', fontSize:'2vh', borderRadius:'5px', border:'1px solid gray', width:'20vw'}}/>
                    <input type="mail" placeholder='E-mail' style={{padding:'1vh', fontSize:'2vh', borderRadius:'5px', border:'1px solid gray', width:'20vw'}}/>
                    <input type="password" placeholder="Password" style={{padding:'1vh', fontSize:'2vh', borderRadius:'5px', border:'1px solid gray', width:'20vw'}} />
                    <input type="password" placeholder="Confirm Password" style={{padding:'1vh', fontSize:'2vh', borderRadius:'5px', border:'1px solid gray', width:'20vw'}} />
                    <button style={{padding:'1vh', fontSize:'2vh', borderRadius:'5px', border:'none', backgroundColor:'#0070f3', color:'white', cursor:'pointer', width:'20vw'}}>Signup</button>
                    <p style={{fontSize:'1.8vh'}}>Already have an account? <Link href="../login" style={{color:'#0070f3'}}>Login</Link></p>
                </div>
            </div>
        </>
    );
}

export default Signup;