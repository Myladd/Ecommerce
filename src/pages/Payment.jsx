import Header from "layouts/PublicHeader";
import React from "react";
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

function Payment() {
    const state = useSelector((state)=> state.addItems)

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
  return (
    <>
      <Header />
        <div className="container my-5">
            <div className="row g-5">
                <div className="col-md-5 col-lg-4 order-md-last">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-primary">Your Basket</span>
                        <span className="badge bg-primary rounded-pill">{state.length}</span>
                    </h4>
                    <ul className="list-group mb-3">
                        {state.map(itemList)}
                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total </span>
                            <strong>${total}</strong>
                        </li>
                    </ul>

                </div>
                <div className="col-md-7 col-lg-8">
                    <h4 className="mb-3">Payment information</h4>
                    <form className="needs-validation" noValidate="">
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label htmlFor="firstName" className="form-label">Name</label>
                                <input type="text" className="form-control" id="firstName" placeholder="Enter your name" value=""
                                       required=""/>
                                <div className="invalid-feedback">
                                    please enter your name
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="lastName" placeholder="Enter your last name" value=""
                                       required=""/>
                                <div className="invalid-feedback">
                                    please Enter your last name
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="username" className="form-label">Username</label>
                                <div className="input-group has-validation">
                                    {/*<span className="input-group-text">@</span>*/}
                                    <input type="text" className="form-control" id="username" placeholder="Enter your username"
                                           required=""/>
                                    <div className="invalid-feedback">
                                        please enter your username
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="email" className="form-label">Email <span
                                    className="text-muted">(Optional)</span></label>
                                <input type="email" className="form-control" id="email" placeholder=""/>
                                <div className="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="address" className="form-label">Address</label>
                                <input type="text" className="form-control" id="address" placeholder="Enter your address"
                                       required=""/>
                                <div className="invalid-feedback">
                                    please enter your address
                                </div>
                            </div>

                            <div className="col-md-5">
                                <label htmlFor="country" className="form-label">State</label>
                                <select className="form-select" id="country" required="">
                                    <option value="">Choose...</option>
                                    <option>Tehren</option>
                                </select>
                                <div className="invalid-feedback">
                                    please choose a state
                                </div>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="state" className="form-label">City</label>
                                <select className="form-select" id="state" required="">
                                    <option value="">Choose...</option>
                                    <option>Tehren</option>
                                </select>
                                <div className="invalid-feedback">
                                    please choose a city
                                </div>
                            </div>
                        </div>

                        <hr className="my-4"/>
                        <NavLink to='/successful'>
                            <button className="w-100 btn btn-success btn-lg" type="submit">Continue Payment
                            </button>
                        </NavLink>
                    </form>
                </div>
            </div>
        </div>
    </>
  );
}

export default Payment;
