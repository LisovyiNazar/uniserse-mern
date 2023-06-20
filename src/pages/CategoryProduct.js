import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/CategoryProductStyles.css";
import axios from "axios";
const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);
  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `https://universe-api.onrender.com/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="container mt-3 category">
        <h4 className="text-center">Жанр - {category?.name}</h4>
        <h6 className="text-center">Знайдено книг: {products?.length}</h6>
        <div className="row">
          <div className="col-md-9 offset-1">
            <div className="d-flex flex-wrap">
              {products?.map((p) => (
                <div className="card m-2" key={p._id}>
                  <div className='img-container'>
                    <img
                      src={`https://universe-api.onrender.com/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top"
                      alt={p.bookName}
                    />
                  </div>
                  <div className="card-body">
                    <div className="card-name-price">
                      <h5 className="card-title">{p.bookName}</h5>
                      <h5 className="card-title card-price">
                        {p.price}₴
                      </h5>
                    </div>
                    <p className="card-text ">
                      {p.description.length >= 60 ? `${p.description.substring(0, 60)}...` : p.description }
                    </p>
                    <div className="card-name-price">
                      <button
                        className="btn btn-info ms-1 light"
                        onClick={() => navigate(`/product/${p.slug}`)}
                      >
                        Переглянути
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategoryProduct;
