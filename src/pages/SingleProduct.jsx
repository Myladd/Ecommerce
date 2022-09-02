import { Skeleton } from "@chakra-ui/react";
import Header from "layouts/PublicHeader";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import {useDispatch} from "react-redux";
import {addItem, delItem} from "../redux/actions";

function SingleProduct() {
  const { id } = useParams();
  console.log(id);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()

  const handleAdd = ()=>{
    dispatch(addItem(product))
  }

  // const dispatch = useDispatch()
  // const addProduct = (product) => {
  //   dispatch(addCart(product))
  // }

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      console.log(product);
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return (
      <>
        <>
          <div className="col-md-8">
            <Skeleton height={350} width={500} />
          </div>
          <div className="col-md-4">
            <Skeleton height={350} />
          </div>
        </>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img src={product.image} alt="..." height="400px" width="400px" />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead">Rating {product.rating && product.rating.rate}</p>
          <h3>{product.price}</h3>
          <p className="lead">{product.description}</p>
          <button onClick={()=> handleAdd()} className="btn btn-outline-success px-4 py-2 my-4">افزودن به سبد</button>
          <button className="btn btn-success ms-2 px-3 py-2 mx-2 my-4">سبد خرید</button>
        </div>
      </>
    );
  };
  return (
    <>
      <Header />
      <div>
        <div className="container py-5">
          <div className="row py-5">{loading ? <Loading /> : <ShowProduct />}</div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
