import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

function App() {
  const stripe = useStripe();
  const elements = useElements();

  async function getPaymentMethod() {
    if (!stripe || !elements) {
      return;
    }
    console.log(elements);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      elements: elements,
    });
    console.log(paymentMethod);
    console.log(error);
  }
  return (
    <main>
      <CardElement />
      <button onClick={getPaymentMethod}>Get Payment Method</button>
    </main>
  );
}

export default App;
