"use client"

import { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";

export default function CartProvider({ children }: { children: ReactNode }) {
  console.log('env', process.env.NEXT_PUBLIC_STRIPE_KEY)
  
  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe="pk_live_51OyFXhRxIE03rAWn7eyDBZIc9M4mWdvBiEPEv0qLSl4Zr4LWSQrc3kRQeYyKMibk0tlXiXrIG10y2WiS5WwfeH0H00YkTx5LMQ"
      successUrl="http://localhost:3000/success"
      cancelUrl="http://localhost:3000/error"
      currency="GBP"
      billingAddressCollection={true}
      shouldPersist={true}
      language="en-GB"
    >
      {children}
    </USCProvider>
  );
}
