import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import useCart from "../../../Hooks/UseCart";

const CheckoutForm = ({amount,item}) => {
    const [,refetch] = useCart()
   
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure()
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  useEffect(() => {
    if (amount > 0) {
        axiosSecure.post('/create-payment-intent', { amount })
            .then(res => {
                setClientSecret(res.data.clientSecret);
            })
    }
}, [amount, axiosSecure])


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });


    if (error) {
      console.log("error", error);
      setCardError(error.message);
    } else {
      setCardError("");
     
    }

    setProcessing(true)


    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
        clientSecret,
        {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'unknown',
                    name: user?.displayName || 'anonymous'
                },
            },
        },
    );

    if (confirmError) {
        console.log(confirmError);
    }

   

    setProcessing(false)

    if (paymentIntent.status === 'succeeded') {
        setTransactionId(paymentIntent.id);

        const payment = {
            email: user?.email,
            transactionId: paymentIntent.id,
            amount,
            date: new Date(),
            cartItems: item._id,
            classId:item.classItemId,
            name:item.Name,
            image:item.Image,
           
          
        }

        axiosSecure.post('/payments', payment)
        .then(res => {
           
            if (res.data.insertResult.insertedId) {
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Payment done",
                    showConfirmButton: false,
                    timer: 1500,
                  });
            }
        })


    }

  };
  return (
    <div>
      <form className="w-2/3 m-8" onSubmit={handleSubmit}>
        <CardElement
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
        <button
          className="btn text-center mx-auto bg-rose-500 btn-sm mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
      {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}

    </div>
  );
};

export default CheckoutForm;
