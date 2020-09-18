const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HS5BHB8UiAjb0EHjKyxyjJVPbdd91ysHIp2ykSPrTtkZIRRwKik7TGxgjlVl0Y21p3OSy9L8ykCHIn4VOm6VTcv0074tsD7KX"
);

//API

//App config
const app = express();

//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//API Routes
app.get("/", (req, res) => {
  res.status(200).send("Hello Merve");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment Request Received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen
exports.api = functions.https.onRequest(app);

//example endpoint
//http://localhost:5001/clone-72603/us-central1/api
