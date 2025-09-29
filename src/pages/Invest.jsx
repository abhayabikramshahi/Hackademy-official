import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe("pk_test_51XXXXXXX"); // Replace with your Stripe public key

function Invest() {
  const [amount, setAmount] = useState("");

  const handlePayment = async () => {
    if (!amount) return alert("Enter an amount to invest!");

    const stripe = await stripePromise;

    // Create a checkout session on your backend
    // Here we’ll simulate with a redirect to Stripe test payment
    const response = await fetch("http://localhost:5000/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: Number(amount) * 100 }), // Stripe expects amount in cents
    });

    const session = await response.json();
    const result = await stripe.redirectToCheckout({ sessionId: session.id });

    if (result.error) {
      alert(result.error.message);
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="bg-white shadow-2xl rounded-2xl border border-gray-200 p-10 text-center max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Invest in Hackademy Zone</h1>
        <p className="text-gray-600 mb-6">
          Support our community and gain exclusive perks. Start with any amount you like!
        </p>

        <input
          type="number"
          placeholder="Enter amount in USD"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border border-gray-300 rounded-lg px-4 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button
          onClick={handlePayment}
          className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-all w-full"
        >
          Pay Now
        </button>

        <p className="text-xs text-gray-400 mt-4">
          This is a test payment. No real charges will occur.
        </p>
      </div>
    </main>
  );
}

export default Invest;
