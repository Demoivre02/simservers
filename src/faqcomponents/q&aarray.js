import {Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,TableContainer,} from '@chakra-ui/react'
import { ChakraProvider } from '@chakra-ui/react'

const QAarray=[
    {
        id:1,
        question:"How do I check “my number”on Airtel?",
        answer:"*121*3*4#"
    },
    {
        id:2,
        question:"How do you know when the APP IS ACTIVE OR NOT?",
        answer:<div className="border-2 p-2 rounded-lg">
                <p className="text-xl font-medium border-b">
                    When app active
                </p>
                <ol>
                    <li className="border-b p-1">Already connected</li>
                    <li className="border-b p-1">Already connected</li>
                </ol>
                <p className="text-xl font-medium border-b">
                    When App is not active
                </p>
                <ol>
                    <li className="border-b p-1">An error occurred</li>
                    <li className="border-b p-1">You are offline now. Bye.</li>
                    <li className="border-b p-1">Cannot invoke observe on a background thread</li>
                    <li className="border-b p-1">Yo! Please check your network.But i will keep trying as long as you have an active internet connection</li>
                </ol>
            </div>
    },
    {
        id:3,
        question:" How can I set device based MTN, Airtel, GLO and 9mobile data ?",
        answer: <div>
            <ol className='ml-4'>
                <li className="mt-2 p-1 list-decimal">Download the app <a>https://download.simservers.io</a> </li>
                <li className="mt-2 p-1 list-decimal">COPY THE DEVICE KEY FROM THE SIMSERVERS APP</li>
                <li className="mt-2 p-1 list-decimal">GO TO SIMSERVERS WEBSITE, AND LOGIN</li>
                <li className="mt-2 p-1 list-decimal"> CLICK ON REGISTER SIM SERVICES</li>
                <li className="mt-2 p-1 list-decimal">CLICK ON ADD NEW</li>
                <li className="mt-2 p-1 list-decimal">Give the device a name for easy identification</li>
                <li className="mt-2 p-1 list-decimal"> PASTE YOUR DEVICE KEY</li>
                <li className="mt-2 p-1 list-decimal">Select the sim slot for that service(SIM 1 or SIM 2)</li>
                <li className="mt-2 p-1 list-decimal">CHANGE THE DEVICE STATUS TO ACTIVE</li>
                <li className="mt-2 p-1 list-disc">
                    <div>
                        <p>SELECT  THE DEVICE PROCESS</p>  
                        <p>(how to know the device process to select)</p> 
                            <ChakraProvider>
                                <TableContainer>
                                    <Table variant='simple'>
                                        <TableCaption>data_share_1gb:device:USSD_SHARE_FULL</TableCaption>
                                        <Thead>
                                            <Tr>
                                                <Th>Actual product code</Th>
                                                <Th>Dispense channel</Th>
                                                <Th isNumeric>Device process</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            <Tr>
                                                <Td>Data_share_1gb</Td>
                                                <Td>device</Td>
                                                <Td isNumeric>USSD_SHARE_FULL</Td>
                                            </Tr>
                                        </Tbody>
                                        <Tfoot>
                                        </Tfoot>
                                    </Table>
                                </TableContainer>
                            </ChakraProvider>
                    </div>
                </li>
                <li className="mt-2 p-1 list-disc">PUT THE SIM PIN</li>
                <li className="mt-2 p-1 list-disc">CLICK ON EDIT DEVICE YOU SAVE</li>
                <li className="mt-2 p-1 list-disc">
                    <p> CLICK ON ADD CREDIT</p>
                    <small>you can add up to 2billion credit for free</small>
                </li>
            </ol>
        </div>
    },
    {
        id:4,
        question:"How can I set up my cloud based Glo data?",
        answer: <div>
            <ol className='ml-4'>
                <li className="mt-2 p-1 list-decimal">GO TO SIMSERVERS WEBSITE, AND LOGIN</li>
                <li className="mt-2 p-1 list-decimal"> CLICK ON ACTIVATE CLOUD SERVICES</li>
                <li className="mt-2 p-1 list-decimal">CLICK ON GLO CLOUD SETUP.(setup fee is #3000)</li>
                <li className="mt-2 p-1 list-decimal"> FILL THE GLO NUMBER AND CAFE PIN</li>
                <li className="mt-2 p-1 list-decimal">CLICK ACTIVATE.</li>
            </ol>
        </div>
    },
    {
        id:5,
        question:" How can I set cloud based MTN data ?",
        answer: <div>
                <ol className='ml-4'>
                    <li className="mt-2 p-1 list-decimal">GO TO SIMSERVERS WEBSITE, AND LOGIN</li>
                    <li className="mt-2 p-1 list-decimal"> CLICK ON ACTIVATE CLOUD SERVICES</li>
                    <li className="mt-2 p-1 list-decimal">CLICK ON GLO CLOUD SETUP.(setup fee is #3000)</li>
                    <li className="mt-2 p-1 list-decimal"> FILL THE GLO NUMBER AND CAFE PIN</li>
                    <li className="mt-2 p-1 list-decimal">CLICK ACTIVATE.</li>
                </ol>
            </div>
    },
    {
        id:6,
        question:"How can I set cloud based 9mobile data ",
        answer:"Not available at the moment"
    },
    {
        id:7,
        question:"How can I set cloud based Airtel data ?",
        answer:"Not available at the moment."
    },
    {
        id:8,
        question:" Do I need to insert my sim card into the device?",
        answer:"Yes"
    },
    {
        id:9,
        question:"How do I see my transactions ?",
        answer:<div>
            <p>All transactions are recorded under</p>
            <p><span className='text-xl font-medium' >USER PANEL {'>'} {'>'}</span>   RECHARGE TRANSACTIONS</p>
        </div>
    },
    {
        id:10,
        question:"Please explain the difference between break and full?",
        answer:<div>
            <p><span className='text-xl font-medium' >BREAK </span> is a term used for USSD codes that ask for commands at different stages of transaction.(multi step usage)</p>
            <p><span className='text-xl font-medium' >FULL</span> is a term used for USSD codes that can give end responses in a single dial.(single step usage)</p>
        </div>
    },
    {
        id:12,
        question:"What you need to do when your website is slow",
        answer:"To manage this,your developer should  implement transaction queueing mechanism/flow such that when there is timeout or when the system didn't receive a response from Simserver or (any other API), the transactions  should be in pending mode rather than failing and allow callback to handle the rest"
    },
    {
        id:13,
        question:"What is the meaning of “was blocking, please retry manually?",
        answer:"These are the orders that were causing issues that were cleared by the system, to reprocess them, search for them on simservers and use bulk reprocess spending on them."
    },
    {
        id:14,
        question:"Pls can I subscribe to 25tb on my main mtn line and still be able to use the phone and do other things while the app still runs?",
        answer:"Yes"
    },
    {
        id:15,
        question:" If I refund a customer for a failed order, how can I terminate it so it won't reprocess with other pending ones?",
        answer:<div>
                <p>Follow the process  below</p>
                <ol className='ml-4'>
                    <li className="mt-2 p-1 list-decimal">Delete on the app</li>
                    <li className="mt-2 p-1 list-decimal">Terminate on simservsers</li>
                    <li className="mt-2 p-1 list-decimal"> Refund</li>
                </ol>
            </div>
    },
    {
        id:16,
        question:" If I want to link another MTN sim hope my developer doesn't  need to do any integrations?",
        answer:"No developer input is needed,just ensure that the correct pin is set."
    },
    {
        id:17,
        question:"Please will my developer collect my money again to integrate the glo cloud gifting?",
        answer:"You don't need a developer again if your glo device base has been configured just change the product codes."
    },
    {
        id:18,
        question:"What are the differences between GLO GIFTING AND  CLOUD GIFTING?",
        answer:"The only difference is the channel of dispense or mode of vending."
    },
    {
        id:19,
        question:"Please is it good use *MTN SME AND AIRTEL GIFTING* ON THE SAME PHONE FORAUTOMATION.MTN SIM 1,AIRTEL SIM  2.",
        answer:"It is not advisable"
    },
    {
        id:20,
        question:" Is it possible for someone to buy data on my portal once and it's gets delivered 9 times",
        answer:"ideally, NO. But if a wrong configuration is made ,it  can be possible"
    },
    {
        id:21,
        question:"Pls  does “unlimited oops” returns fail or it will keep reprocessing until it delivers?",
        answer:"It retries five to six times then fails"
    },
    {
        id:22,
        question:" Pls how will I resend all failed orders at once? Is there a way to do that all at once?",
        answer:"Resend orders from your website"
    },
    {
        id:23,
        question:"How to resend pending orders on simservers",
        answer:<div>
        <p>Follow the process  below</p>
        <ol className='ml-4'>
            <li className="mt-2 p-1 list-decimal">.Go to <span className='text-xl font-medium'>USER PANEL</span></li>
            <li className="mt-2 p-1 list-decimal">Select <span className='text-xl font-medium'>RECHARGE TRANSACTIONS</span> </li>
            <li className="mt-2 p-1 list-decimal">Type “pending” in the search box</li>
            <li className="mt-2 p-1 list-decimal"><span className='text-xl font-medium'>recharge </span>Click on id and select <span className='text-xl font-medium'>recharge status.</span> </li>
            <li className="mt-2 p-1 list-decimal"><span className='text-xl font-medium'></span>Then click on search</li>
            <li className="mt-2 p-1 list-decimal"><span className='text-xl font-medium'></span>select all pending orders to be reprocessed</li>
            <li className="mt-2 p-1 list-decimal">Click on <span className='text-xl font-medium'>Admin group actions</span></li>
            <li className="mt-2 p-1 list-decimal">. Select <span className='text-xl font-medium'>Bulk Reprocess Pending</span></li>
        </ol>
    </div>
    },
    {
        id:24,
        question:"How do I confirm if this actually did not deliver as to refund the client? It is carrying a different phone number and a different plan completely as response?",
        answer:"Search for the number and resend."
    },
    {
        id:25,
        question:"Does GLO data ussd device based need accessibility enabled before it can be functioning well?",
        answer:" For the product code that have full,there's no need,But if you offer any of the break ones, it will be required"
    },
    {
        id:26,
        question:"Is there provision for us that wants to use *605# to sell airtel data?",
        answer:"Yes"
    },
    {
        id:27,
        question:" Can I change numbers later ?",
        answer:"Yes, When changing number again it's free"
    },
    {
        id:28,
        question:"Please have u gotten a solution to the itel phone accessibility problem?",
        answer:"Not yet, it's foundational, there is almost no solution at the moment but you can restrict itel phones to just sme that do not need accessibility."
    },
    {
        id:29,
        question:"For device based GLO data and airtime ,should I select USSD GLO FULL or BREAK?",
        answer:" Please, your product code will decide for you."
    },
    {
        id:30,
        question:" Hello team, what happens if I run out of Data, will my users get refund for every response of insufficient balance",
        answer:"Yes"
    },
    {
        id:31,
        question:"Where can I get API KEY? It was null on my API key.",
        answer:" Apikey is on your simservers.io dashboard"
    },
    {
        id:32,
        question:" How do confirm transaction status on simserver currently if you are not with the phone?",
        answer:"Website"
    },
    {
        id:33,
        question:"What is the cause of failed-1 on simserver",
        answer:"It's  a network issue."
    },
    {
        id:36,
        question:"How do we renew subscription",
        answer:"Ensure you have sufficient funds in your wallet , subscriptions are automatically charged when due."
    },
    {
        id:37,
        question:"How do you reconnect back when your device is disconnect",
        answer:"It automatically reconnects itself when there is data on the device"
    },
    {
        id:38,
        question:" Can i use simservers app on android 3.2.2",
        answer:"No"
    },
    {
        id:39,
        question:"How do I switch to a simserver device?",
        answer:"Download the app on the new device,Copy the device key ajd replace it with the one on  the website"
    },
    {
        id:40,
        question:"What's the fastest way to change mtn sme pins?",
        answer:"You can change from mymtn app"
    },
    {
        id:41,
        question:"What could cause an Airtel number not receiving msgs from Airtel?",
        answer:"call airtel"
    },
    {
        id:43,
        question:"Can the simserver app be paused?",
        answer:"No"
    },
    {
        id:44,
        question:"Can I use both data and vtu on one sim?",
        answer:"Yes"
    },
    {
        id:45,
        question:"Can 1sim push 20TB DAILY",
        answer:"Yes"
    },
    {
        id:46,
        question:" Is MTN share n sell working on simserver",
        answer:"Yes"
    },
    {
        id:47,
        question:" Can simserver push AIRTEL CG 300tb on a daily basis??",
        answer:"yes"
    },
    {
        id:48,
        question:"How can I reprocess pending when I have already deleted data base",
        answer:"Refer HOW TO REPROCESS PENDING TRANSACTION"
    },
    {
        id:49,
        question:"How can I reset MTN SME Data pin?",
        answer:"Best way is to call 180,Press 5 and wait for 3 sec,Press 0 and your call will be transferred to a representative. Don't forget to tell them to transfer you to EBU."
    },
    {
        id:50,
        question:"How much is the charge for successful transaction of Airtel corporate gifting ?",
        answer:"1Naira"
    },
    {
        id:51,
        question:"How much is SME cloud activation fees",
        answer:"Refer to the sme cloud activation page on your simservers.io account"
    },
]
    export default QAarray