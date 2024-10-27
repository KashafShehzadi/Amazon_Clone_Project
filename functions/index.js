import functions from "firebase-functions";
import express from "express";
import cors from "cors";
import Stripe from "stripe";

// Initialize Stripe with your secret key
const stripe = new Stripe("sk_test_51QBFDyK0gdPpqszMHMol0x3dCnikdbhMk4jKPJfsi5lXeE7o5rsnhwOGEiUCi7LTBFVvRXzJPCJhHzxnEV2nHgAE00imkZmot0");

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log("Payment Request Received for this amount >>> ", total);

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: total, // Subunits of the currency
            currency: "usd",
        });

        response.status(201).send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        console.error("Error creating payment intent:", error);
        response.status(500).send({ error: "Payment processing failed" });
    }
});

// Export the API as a Firebase function
export const api = functions.https.onRequest(app);
