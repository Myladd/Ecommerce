import React from "react";
import PublicHeader from "../layouts/PublicHeader";
import successPay from 'assets/images/succesfull-payment.gif'

function SuccessfulPayment() {
    return (
        <>
            <PublicHeader />
            <div className="container d-flex flex-column align-items-center justify-content-center py-5">
                <h1 className='text-center fw-bold'>پرداخت با موفقیت انجام شد</h1>
                <img src={successPay} alt="payment"/>
            </div>
        </>
    );
}

export default SuccessfulPayment;
