import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import DATA from "../Data";
import { useDispatch } from "react-redux";
import { addItem, delItem } from "../redux/actions";

const ProductDetail = () => {
  // tangkap klikan user
  const produkId = useParams();
  const productDetail = DATA.filter((value) => value.id == produkId.id);
  const product = productDetail[0];
  console.log(product);

  // Function untuk watchlist

  const [watchlistBtn, setWatchlistBtn] = useState("Add to Watch List");

  const dispatch = useDispatch();

  const handleWatchlist = (value) => {
    if (watchlistBtn === "Add to Watch List") {
      dispatch(addItem(product));
      setWatchlistBtn("Remove From Watch List");
    } else {
      dispatch(delItem(product));
      setWatchlistBtn("Add to Watch List");
    }
  };
  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto">
            <img src={product.img} alt={product.title} height="400px" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{product.title}</h1>
            <hr />
            <h2 className="my-4">Rp. {product.price}</h2>
            <p className="lead">{product.desc}</p>
            <button
              onClick={() => handleWatchlist(product)}
              className="btn btn-outline-primary my-5"
            >
              {watchlistBtn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
