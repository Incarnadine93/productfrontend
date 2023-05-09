import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataProvider";
import CheckoutForm from '../components/CheckoutForm'

const stripePromise = loadStripe("pk_test_51My1DLA0yplgZWFMkNJ8XLW0wqvsevV7BmiyfWBinyHYMWmrHTbWAcghf6dR7dj2ISTvbruitYDHxMOKqSeGAKO300YoyBBS3U");

const Checkout = () => {

    const [clientSecret, setClientSecret] = useState('');
    const {cart} = useContext(DataContext);

    useEffect( () => {
        // create paymetn intent as soon as this component FIRST renders
        // with an API call to flask 
        fetch("http://127.0.0.1:5000/pay/create-payment-intent", { 
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cart),
          })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));

        }, []);

        const appearance = {
            theme: 'stripe',
          };
        const options = {
        clientSecret,
        appearance,
        };
        return(
            <>
        {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          )}
          </>
        )


}

export default Checkout;