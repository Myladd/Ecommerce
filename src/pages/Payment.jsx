import Header from "layouts/PublicHeader";
import React from "react";
import {useSelector} from "react-redux";

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
                        <span className="text-primary">سبد شما</span>
                        <span className="badge bg-primary rounded-pill">{state.length}</span>
                    </h4>
                    <ul className="list-group mb-3">
                        {state.map(itemList)}
                        <li className="list-group-item d-flex justify-content-between">
                            <span>مجموع </span>
                            <strong>${total}</strong>
                        </li>
                    </ul>

                </div>
                <div className="col-md-7 col-lg-8">
                    <h4 className="mb-3">اطلاعات پرداخت</h4>
                    <form className="needs-validation" noValidate="">
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label htmlFor="firstName" className="form-label">نام</label>
                                <input type="text" className="form-control" id="firstName" placeholder="نام" value=""
                                       required=""/>
                                <div className="invalid-feedback">
                                    نام خود را وارد کنید
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label htmlFor="lastName" className="form-label">نام خانوادگی</label>
                                <input type="text" className="form-control" id="lastName" placeholder="نام خانوادگی" value=""
                                       required=""/>
                                <div className="invalid-feedback">
                                    نام خانوادگی خود را وارد کنید
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="username" className="form-label">نام کاربری</label>
                                <div className="input-group has-validation">
                                    {/*<span className="input-group-text">@</span>*/}
                                    <input type="text" className="form-control" id="username" placeholder="نام کاربری"
                                           required=""/>
                                    <div className="invalid-feedback">
                                        Your username is required.
                                    </div>
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="email" className="form-label">ایمیل <span
                                    className="text-muted">(اختیاری)</span></label>
                                <input type="email" className="form-control" id="email" placeholder=""/>
                                <div className="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                            </div>

                            <div className="col-12">
                                <label htmlFor="address" className="form-label">آدرس</label>
                                <input type="text" className="form-control" id="address" placeholder=""
                                       required=""/>
                                <div className="invalid-feedback">
                                    آدرس خود را وارد کنید.
                                </div>
                            </div>

                            <div className="col-md-5">
                                <label htmlFor="country" className="form-label">استان</label>
                                <select className="form-select" id="country" required="">
                                    <option value="">انتخاب...</option>
                                    <option>تهران</option>
                                </select>
                                <div className="invalid-feedback">
                                    یک استان راانتخاب کنید
                                </div>
                            </div>

                            <div className="col-md-4">
                                <label htmlFor="state" className="form-label">شهر</label>
                                <select className="form-select" id="state" required="">
                                    <option value="">انتخاب...</option>
                                    <option>تهران</option>
                                </select>
                                <div className="invalid-feedback">
                                    یک شهر را انتخاب کنید
                                </div>
                            </div>
                        </div>

                        <hr className="my-4"/>

                        <button className="w-100 btn btn-success btn-lg" type="submit">ادامه پرداخت
                        </button>
                    </form>
                </div>
            </div>
        </div>

    </>
  );
}

export default Payment;
