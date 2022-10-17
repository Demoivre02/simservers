import React, { useEffect } from 'react';
import Button from '../common/button';
import Features from '../homecomponents/features';
import Footer from '../homecomponents/footer';
import MovingComponent from 'react-moving-text'
import {Link} from 'react-router-dom';
import Nav from '../homecomponents/nav';



function Home(props) {

    useEffect(()=>{
        alert("Welcome to SIMSERVERS.IO, you need help? We are on seat for you")
    })

    return (
        <>
        <div className='isolate' >
            <div className='z-20 ' style={{background: "linear-gradient(178.18deg, #5533FF 38.36%, #4B6DDB 102.8%)",backgroundSize:"cover", height:"100vh"}} >
            <MovingComponent
                type="fadeInFromTop"
                duration="2000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                    <Nav />
            </MovingComponent>
            <div className='flex w-[90%] mt-16 m-auto'>
                    <MovingComponent
                        type="fadeInFromLeft"
                        duration="2000ms"
                        delay="0s"
                        direction="normal"
                        timing="ease"
                        iteration="1"
                        fillMode="none">
                        <div className='  xl:mt-4 lg:mt-2 '>
                            <h1 className='text-[70px] font-[700]  text-white ml-16 lg:mt-4 xl:mt-12'>Automate</h1>
                            <h2 className='text-3xl w-[45%] lg:w-[65%] font-bold text-white font-medium ml-16 mt-4'>SIM, AIRTIME and DATA Business</h2>
                            <p className='w-[50%] lg:w-[70%] text-white font-medium text-xl ml-16 mt-8 leading-10'>
                                Tired of dialing USSD codes to vend airtime and data across to your customers? Then, you are on the right site. 
                            </p>
                            <Link to="/payment">
                                <div className='flex justify-between mt-8 ml-16  w-4/12'>
                                    <div className='w-[200px] cursor-pointer text-white bg-[#467BFB] hover:bg-transparent  pr-1 text-center  rounded-[12px]'>
                                        <p className='text-white pt-3 pb-3 hover:text-[#fff]'>Get Started</p>  
                                    </div>
                                </div>
                            </Link>
                            <div className='ml-16 mt-4'>
                                <p className='text-white'>Not Sure where to start? 
                                    <Link to="/">
                                        <span className='underline ml-2 hover:text-[#2d0e86]'>Learn More</span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </MovingComponent>
                   
                    <MovingComponent
                        type="fadeInFromRight"
                        duration="2000ms"
                        delay="0s"
                        direction="normal"
                        timing="ease"
                        iteration="1"
                        fillMode="none">
                        <div className='mr-8 w-4/5'>
                            <img className='mt-8 ' src="images/laptop 1.png" alt="laptop" />
                        </div>
                    </MovingComponent>
                </div>
            </div>
            <Features/>

            <div className='m-auto mt-12 w-1/5 text-center'>
                <div className='w-[200px] cursor-pointer bg-transparent hover:bg-[#2076FF]  pr-1 text-center border-2 border-[#2076FF] rounded-[12px]'>
                  <p className='text-[#2076FF] p-3 hover:text-[#fff]'>Get Started Here</p>  
                </div>
            </div> 
            <div className='p-12  mt-16' style={{background: "linear-gradient(178.18deg, #5533FF 38.36%, #4B6DDB 102.8%)"}}>
                <p className='text-4xl mb-6  font-bold text-white w-[100%] text-center m-auto'>Creative Solutions For</p>
                <img className='m-auto' src="images/netwoks.png" alt="" />
            </div>
        </div>
        <div>
            <Footer />
        </div>
        </>
    );
}

export default Home;