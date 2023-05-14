import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

export default function PaymentForm({ loading, checkOutpaymen }) {
  const stripe = useStripe();
  const elements = useElements();

  const checkOutpayment = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.error(error);
    } else {
      checkOutpaymen({ paymentMethod });
    }
  };

  return (
    <form onSubmit={checkOutpayment}>
      <CardElement
        id="card-element"
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button type="submit" disabled={!stripe || loading}>
        {loading ? "Processing..." : "Pay"}
      </button>
    </form>
  );
}
