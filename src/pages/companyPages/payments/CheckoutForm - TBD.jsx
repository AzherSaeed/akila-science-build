import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./CheckoutForm.module.css";

const onSubmit = () => {
  axios.post("http://localhost:4242/create-checkout-session").then((res) => {
    console.log(res);
  });
};

const ProductDisplay = () => (
  <section className={styles.Section}>
    <div className={styles.product}>
      <img
        src="https://i.imgur.com/EHyR2nP.png"
        alt="The cover of Stubborn Attachments"
      />
      <div className={styles.description}>
        <h3>Stubborn Attachments</h3>
        <h5>$20.00</h5>
      </div>
    </div>
    <button type="submit" onClick={onSubmit}>
      Checkout
    </button>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function CheckoutForm() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? <Message message={message} /> : <ProductDisplay />;
}