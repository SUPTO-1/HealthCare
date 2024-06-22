
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";
import Checkoutform from "./Checkoutform";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gatway_PK);
const Payment = () => {
    const singleTest = useLoaderData();
    const {testFee} = singleTest;
    return (
        <div className="text-center w-2/3 mx-auto my-10">
       <h2 className="text-xl font-poppins font-semibold mb-10">Payment</h2>
       <h2 className="my-6 text-xl font-roboto">Test Fee :{testFee} </h2>
        <Elements stripe={stripePromise} >
          <Checkoutform singleTest={singleTest}></Checkoutform>
        </Elements>
       
        </div>
    );
};

export default Payment;