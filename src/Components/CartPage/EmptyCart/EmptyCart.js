import React from "react";
import { SingleCart } from "../SingleCart/SingleCart";
import "./EmptyCart.css"
import Navbar from "../../LandingPage/TopSection/Navbar/Navbar";
import { Footer } from "../../Footer/footer";
import { useNavigate } from "react-router-dom";
export default function EmptyCart() {

    const navigate = useNavigate();

    function handleContinue(){
        navigate('/')
    }



    return(
        <>

            <Navbar />

            <div className="cart_outer">
        <div className="div"><p>Your Shopping Basket</p></div>
        <div className="box"><h1>There are currently no items in your basket.</h1>
        <button onClick={handleContinue}>CONTINUE SHOPPING</button></div>
        <div className="bottom-box">
             </div>
    </div>;

    <Footer />
        </>
    )
}