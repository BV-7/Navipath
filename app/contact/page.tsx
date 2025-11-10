import React from 'react'
import Map from '../ui/map'

function Contact(){
    return (
        <>
          <section id="Contact">
            <div className="flex flex-col items-center justify-center m-0 gap-[1vh] p-[2vh]">
              <h3 className="text-[5vh] m-0">Set Sail Now!!</h3>
                <div className="flex p-[5vh] gap-[10vh] justify-center items-center w-[80vw] h-[37vh]  m-0">
                  <div className="flex flex-col text-[2.3vh] ">
                    <p className="mb-5 text-[3.5vh]">Address:</p>
                    <p>275, Seashore town,</p>
                    <p>8th Ave,</p>
                    <p>Panaiyur, Chennai,</p>
                	  <p>Tamil Nadu - 600119.</p>
                  </div>
                  <div className="flex flex-col justify-center items-center gap-[1em]">
                    <p className="text-[3.5vh]">Contact us</p>
                    <div className='flex gap-[2em] text-[2.3vh]'>
                        <p>Phone: 6379670870</p>
                        <p>E-mail: <a href="mailto:mail.com">vbala3141@gmail.com</a></p>
                    </div>
                  </div>
                </div>
                <Map />
              </div>
          </section>
        </>
    );
}

export default Contact;