import React from 'react';
import Nav from '../homecomponents/nav';
import Solutions from '../common/solutions';
import Footer from '../homecomponents/footer';

function About(props) {
    return (
        <div>
            <div>
                <Nav/>
            </div>
            <div className='w-[60%] m-auto mt-8 mb-8'>
                <div>
                    <p className='text-xl leading-normal'>
                        <span className='text-xl font-medium'>SIMSERVERS.IO</span>is a sub-brand to  <span>CDLP HUB LTD</span> ,
                         a leading Digital service provider that creates solutions
                         to problems and makes life easy for individuals in the society.
                         We are a company that is prepared to empower individuals and business owners.
                    </p>
                </div>

                    <div className='text-xl leading-normal mt-8'>
                        <p className='font-medium mb-4'>WHY CHOOSE US?</p>
                        <p>We understand that you have many options and decisions to make if you should
                             choose us or our competitors, but guess what? With SIMSERVERS.IO, you can 
                             connect to multiple devices to a single account, Our platform can 
                             significantly process more transactions than any other platform
                        </p>
                    </div>

                    <div className='text-xl leading-normal mt-8'>
                        <p className='font-medium mb-4'>Benefits</p>
                        <ol className='ml-4'>
                            <li className='list-decimal'>SIMSERVER.IO will upgrade your skills in utilizing technology.</li>
                            <li className='list-decimal'>It reduces stress by vending data and airtime without dialing USSD code.</li>
                            <li className='list-decimal'>Seamless transactions with instant delivery </li>
                            <li className='list-decimal'>The quickest way to convert Data and airtime to cash</li>
                            <li className='list-decimal'>Make cool cash from your comfort zone</li>
                        </ol>
                    </div>
                    <div className='text-xl leading-normal mt-8'>
                        <p className='font-medium mb-2'>REQUIREMENT </p>
                        <p className='mb-2'>As a successful subscriber of Starter or Power package, the following are required;</p>
                        <ul className='ml-4'>
                            <li className='list-disc'>Devices with stable and strong network.</li>
                            <li className='list-disc'>Best device to use for the app is Android 11</li>
                            <li className='list-disc'>Connected to power supply </li>
                            <li className='list-disc'>Regular funds in Naira balance </li>
                            <li className='list-disc'>Airtime/data in the registered SIM for transactions </li>
                        </ul>
                    </div>

                    <div className='text-xl leading-normal mt-8'>
                        <p className='font-medium mb-4'>REVIEWS FROM EXISTING CUSTOMERS  </p>
                        <ul className='ml-4'>
                            <li className='list-disc'>I subscribed a few months ago to give it a try and today, I am glad I made such a decision.
                             SIMSERVER.IO has improved my data business beyond my imagination. Thank you!</li>

                            <li className='list-disc'>I have no issue using this automation platform. I would recommend it to anyone who is 
                            interested in making cool cash from Data and Airtime vending</li>

                            <li className='list-disc'>Thanks to SIMSERVERS.IO my data business has been booming and my transactions are delivering
                             at a faster rate and my customers are happy.
                            </li>

                            <li className='list-disc'>A colleague introduced the platform to me last month after I developed my website for data vending.
                             It is working perfectly for my data and airtime business, I have no regrets whatsoever. Thank you Simservers.io  </li>

                            <li className='list-disc'>This automation platform is the best, I am currently using Simservers 
                            and I am also trying SME CLOUD out very soon (smile).</li>
                        </ul>
                    </div>
            </div>
            <div>
                <Solutions/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default About