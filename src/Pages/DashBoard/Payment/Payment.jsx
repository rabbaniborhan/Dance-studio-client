import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Helmet } from "react-helmet-async";
import useCart from "../../../Hooks/UseCart";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_payment_PK);
const Payment = () => {
const [cart] = useCart();
const {id} = useParams();

const item = cart?.filter(pd=>pd._id==id);
const amount=(item[0]?.Price)
console.log(item)


  return (
    <div className="w-4/5">
      <Helmet>
        <title>Payment| DashBoard | Dance Studio</title>
      </Helmet>

      <div className="text-rose-500 w-96 bg-black text-center  mx-auto my-12">
          <h1 className=" border-t-2 border-b-2 border-rose-500 p-4 font-bold text-3xl uppercase ">
            my selected class
          </h1>
        </div>

      <Elements stripe={stripePromise}>
        <CheckoutForm item={item[0]} amount={amount}></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
