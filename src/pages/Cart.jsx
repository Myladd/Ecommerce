import React from "react";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {delItem} from "../redux/actions";
import PublicHeader from "../layouts/PublicHeader";
import {NavLink} from "react-router-dom";
import empty from 'assets/images/9091-empty-sad-shopping-bag (1).gif'

function Cart() {
    const state = useSelector((state)=> state.addItems)
    const dispatch = useDispatch()

    const handleClose = (item)=> {
        dispatch(delItem(item))
    }

    let total = 0
    const itemList = (item)=>{
        total = total + item.price
        return (
            <li className="list-group-item d-flex justify-content-between lh-sm">
                <div>
                    <h6 className="my-0">{item.title}</h6>
                </div>
                <span className="text-muted">${item.price}</span>
            </li>
        )
    }


    const cartItems = (cartItem)=>{
        return (
            <>
                <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                    <div className="container py-4">
                        <button onClick={()=>handleClose(cartItem)} className="btn-close float-end" aria-label="close"></button>
                        <div className="row justify-content-center">
                            <div className="col-md-4">
                                <img src={cartItem.image} alt={cartItem.title} height="200px" width="180px"/>
                                <h3>{cartItem.title}</h3>
                                <p className="lead fw-bold">{cartItem.price} $</p>
                            </div>
                        </div>
                    </div>
                </div>
            </>

        )
    }

    const emptyCart = ()=>{
        return (
            <>
            <div className="px-4 my-5 rounded-3">
                <div className="container py-4 d-flex justify-content-center">
                    <img src={empty} alt="..." width="400px" height="400px"/>
                </div>
            </div>
            </>
        )
    }

    const button = ()=>{
        return (
            <div className='container'>
                <div className="row">
                    <NavLink to="/checkout" className='btn btn-outline-success mb-5 w-25 mx-auto'>پرداخت</NavLink>
                </div>
            </div>
        )
    }

    return (
        <>
            <PublicHeader/>
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        {state.length === 0 && emptyCart()}
                        {state.length !== 0 && state.map(cartItems)}
                    </div>
                    <div className="col-4">
                        <ul className="list-group mt-5 sticky-top">
                            {state.map(itemList)}
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total</span>
                                <strong>${total}</strong>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {state.length!== 0 && button()}
        </>
    );
}

export default Cart;
