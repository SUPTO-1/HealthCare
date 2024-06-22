import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLoaderData } from "react-router-dom";
import Checkoutform from "./Checkoutform";
import UseAxiosSecure from "../CustomHook/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gatway_PK);

const Payment = () => {
  const singleTest = useLoaderData();
  const { testFee } = singleTest;
  const axiosSecure = UseAxiosSecure();
  const [couponName, setCouponName] = useState("");
  const [totalFee, setTotalFee] = useState(testFee);
  const [couponRate, setCouponRate] = useState(0);

  const { data: selectedBanner } = useQuery({
    queryKey: ["activeBanner"],
    queryFn: async () => {
      const res = await axiosSecure.get("/banner/active");
      return res.data;
    },
  });

  useEffect(() => {
    if (couponName === selectedBanner?.couponName) {
      const discount = testFee * (selectedBanner.couponRate / 100);
      setTotalFee(testFee - discount);
      setCouponRate(selectedBanner.couponRate);
    } else {
      setTotalFee(testFee);
      setCouponRate(0);
    }
  }, [couponName, selectedBanner, testFee]);

  const handleCouponInputChange = (e) => {
    setCouponName(e.target.value);
  };

  const applyCoupon = () => {
    if (couponName !== selectedBanner?.couponName) {
      alert("Invalid coupon");
    }
  };

  return (
    <div className="text-center w-2/3 mx-auto my-10">
      <div className="border-2 rounded-lg shadow-xl p-4 mb-4">
        <h2 className="text-xl font-poppins font-semibold mb-10">Payment</h2>
        <h2 className="my-6 text-xl font-roboto">Test Fee: {testFee}</h2>
        <div>
          <input
            type="text"
            placeholder={selectedBanner?.couponName || "Enter coupon"}
            className="input input-bordered w-full max-w-xs"
            value={couponName}
            onChange={handleCouponInputChange}
          />
          <button className="btn btn-success ml-4 px-6" onClick={applyCoupon}>
            Apply
          </button>
        </div>
        <h2 className="my-6 text-xl text font-roboto">
          Total Fee: {totalFee}
        </h2>
      </div>
      <Elements stripe={stripePromise}>
        <Checkoutform singleTest={singleTest}></Checkoutform>
      </Elements>
    </div>
  );
};

export default Payment;
