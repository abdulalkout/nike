import React from "react";
import "./Home.css";
import Nav from "../../components/nav/Nav";
import NavExtension from "../../components/navExtension/NavExtension";
import AdsBar from "../../components/adsBar/AdsBar";
import NewProduct from "../../components/newProduct/NewProduct";
import Footer from "../../components/footer/Footer";
import ProductList from "../../components/products/ProductList";
import airJordanProducts from "../../module/airJordanProducts";
import airJordanProductsNames from "../../module/airJordanProducts";
import CategoriesList from "../../components/categories/CategoriesList";
import categories from "../../module/categories";
import GifComponent from "../../components/gifComponent/GifComponent";
import popular from "../../module/popular";

function Home() {
  return (
    <div>
      <Nav />
      <NavExtension />
      <AdsBar />
      <div className="nikeHomePageDiv">
        <img
          className="nikeHomePageImg"
          src="https://i.pinimg.com/564x/b4/8d/ed/b48ded94bce1302d3f83d6a46e3214cc.jpg"
        />
      </div>
      <NewProduct />
      <h3 style={{ marginLeft: "20px", marginBottom: "40px" }}>
        SHOP JORDAN ESSENTIALS
      </h3>
      <ProductList list={airJordanProducts} />
      <h3 style={{ margin: "70px 0 40px 20px" }}>
        JORDAN GEAR FOR THE ENTIRE FAM
      </h3>
      <CategoriesList categories={categories} />
      <GifComponent />
      <h3 style={{ marginLeft: "20px", marginBottom: "40px" }}>
        POPULAR RIGHT NOW
      </h3>
      <ProductList list={popular} />
      <Footer />
    </div>
  );
}

export default Home;
