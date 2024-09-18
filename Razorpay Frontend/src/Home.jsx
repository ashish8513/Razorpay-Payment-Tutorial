import React from "react";
import Card from "./Card";
import axios from "axios";

const Home = (ashish) => {
  const checkoutHandler = async (amount) => {
    const {
      data: { key },
    } ;
//Bro,don't copy-paste. Try to do it yourself. Best of luck!
    const {
      data: { order },
    } ,{
      amount,
    });

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Ashish Pvt. Ltd.",
      description: "Tutorial of RazorPay",
      image: "https://avatars.githubusercontent.com/u/141730191?v=4",
      order_id: order.id,
      callback_url: "http://localhost:4000/api/paymentverification",
      prefill: {
        name: "Ashish Prabhakar",
        email: "ashishprabhakar1010@gmail.com",
        contact: "*********",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl px-4 sm:px-8">
        <Card
          amount={5000}
          img={
            "http://i1.adis.ws/i/canon/eos-r5_front_rf24-105mmf4lisusm_32c26ad194234d42b3cd9e582a21c99b"
          }
        />
      </div>
    </div>
  );
};

export default Home;
