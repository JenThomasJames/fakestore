import Card from "../components/Card";
import Button from "../components/Button";
import ProductView from "./ProductPage.module.css";
import Row from "../components/Row";
import Column from "../components/Column";
import sampleData from "../components/sampleData";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  const [wishlistColors, setWhilistColor] = useState({});

  const addToWishList = (productId) => {
    setWhilistColor((prevColors) => ({
      ...prevColors,
      [productId]: prevColors[productId] === "" ? "red" : "",
    }));
  };

   useEffect(()=>{
    // setProducts(fetch("https://fakestoreapi.com/products")
    // .then((res) => {
    //   return res.json();
    // })
    // .then((response) => {
    //   console.log(response);
    // })
    // .catch(() => {
    //   console.log("Error");
    // }));
    
   },[])

  return (
    <div className={ProductView.productShowSection}>
      {/* {wishlistColors} */}
      {sampleData.map((product) => {
        return (
          <Card key={product.id} cardSize="small">
            {/* <div onClick={()=>addToWishList(product.id)} className={`${ProductView.circle }`}  style ={{backgroundColor:whilistColor}} ></div> */}

            <div
              onClick={() => addToWishList(product.id)}
              className={`${ProductView.circle}`}
              style={{ backgroundColor: wishlistColors[product.id] || "" }}
            >
              {" "}
              {wishlistColors[product.id]}
            </div>

            <img src={product?.image} alt="" />
            <h2 className={ProductView.titleClass}>{product?.title}</h2>
            <p className={ProductView.ratingp}>{product?.rating?.rate}</p>
            <Row>
              <Column>
                <label htmlFor="">Price</label>
                <p>{`$ ${product?.price}`}</p>
              </Column>
              <Button>Add to Cart</Button>
            </Row>
          </Card>
        );
      })}
    </div>
  );
};

export default ProductPage;
