import React from 'react';

const Header: React.FC = () => {
    return (
        <header style={{ padding: '1rem', background: '#000000', borderBottom: '1px solid #ddd', display:'flex', alignItems:'center',gap:'.5rem',justifyContent:'space-between', height:'10vh'}}>
            <div style={{display:'flex',alignItems:'center',gap:'.5rem'}}>
                <img src="..\favicon.ico" alt="logo" style={{width:'3.3vh',height:'3.3vh'}}/>
                <h1 style={{ margin: 0, fontSize: '5vh' }}>Navipath</h1>
            </div>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' ,fontSize:'2.35vh'}}>
                <a href="page.tsx">Home</a>
                <a href="about.tsx">About</a>
                <a href="Contact.tsx">Contact Us</a>
                <a href="login.tsx"><button>Login/Signup</button></a>
            </div>
        </header>
    );
};

export default Header;