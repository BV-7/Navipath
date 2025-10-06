import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer style={{ padding: '1rem', background: '#3a3a3a', borderTop: '1px solid #ddd', textAlign: 'center' }}>
            <div><h4> Navipath &copy; 2025. All Rights Reserved.</h4></div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'5rem',marginTop:'1rem',flexWrap:'wrap',flexDirection:'row'}}>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'.5rem',flexDirection:'column'}}>
                    <p>Quick Links</p>
                    <a href="page.tsx">Home</a>
                    <a href="about.tsx">About</a>
                    <a href="Contact.tsx">Contact Us</a>
                    <a href="login.tsx">Login/Signup</a>
                </div>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'.5rem',flexDirection:'column'}}>
                    <p>Contact us</p>
                    <p>Phone: +1234567890</p>
                    <p>E-mail: <a href="mailto:mail.com">mail.com</a></p>
                </div>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'.5rem',flexDirection:'column'}}>
                    <p>Follow us</p>
                    <a href="https://www.facebook.com"><img src="../icons/facebook.png" alt="Facebook" style={{width:'5vh',height:'5vh',margin:'0 .5rem'}}/></a>
                    <a href="https://www.twitter.com"><img src="../icons/twitter.png" alt="Twitter" style={{width:'5vh',height:'5vh',margin:'0 .5rem'}}/></a>
                    <a href="https://www.instagram.com"><img src="../icons/instagram.png" alt="Instagram" style={{width:'5vh',height:'5vh',margin:'0 .5rem'}}/></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;