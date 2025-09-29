import express from "express";
import Stripe from "stripe";
import cors from "cors";

const app = express();
app.use(cors());
const stripe = new Stripe("pk_test_TYooMQauvdEDq54NiTphI7jx"); // Replace with your Stripe secret key

app.use(express.json());

app.post("/create-checkout-session", async (req, res) => {
  const { amount } = req.body;
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Hackademy Zone Investment",
            },
            unit_amount: amount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:5000/success",
      cancel_url: "http://localhost:5000/cancel",
    });
    res.json({ id: session.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
