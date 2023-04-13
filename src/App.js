import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';

setTimeout(() => {
  fetch('https://fakestoreapi.com/products/1')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
}, 5000);

export default function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        //.then((json) => console.log(json))
        .then((products) => {
          setProducts(products);
        })
        .catch((error) => console.log(error));
    }, 1000);
  }, []);
  console.log(products);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <h2>Funciona</h2>
      <img
        src="https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"
        width="100"
        alt="imagen"
      />
      {/*ahora el map */}
      {products.map(({ image, title, description }) => (
        <>
          <div
            display="flex"
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
          >
            <img src={image} width="100" />
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
        </>
      ))}
    </div>
  );
}
