import React from "react";
import PublicHeader from "../layouts/PublicHeader";
import successPay from 'assets/images/succesfull-payment.gif'
import {Button} from "@chakra-ui/react";
import {NavLink} from 'react-router-dom'
import { useSelector} from "react-redux";
function SuccessfulPayment() {

    const state = useSelector((state)=> state.addItems)

    const handleDel = ()=> {
        state.splice(0, state.length);
    }

    return (
        <>
            <PublicHeader />
            <div className="container d-flex flex-column align-items-center justify-content-center py-5">
                <h1 className='text-center fw-bold'>Thanks for choosing us.</h1>
                <img src={successPay} alt="payment" width='300px'/>
                <NavLink to='/'>
                    <Button onClick={()=>handleDel} colorScheme='teal' size='xs'>
                        Back to Products
                    </Button>
                </NavLink>
            </div>
        </>
    );
}

export default SuccessfulPayment;
