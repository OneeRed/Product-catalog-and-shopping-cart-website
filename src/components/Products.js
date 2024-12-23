import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/products-slice";
import { addToCart } from "../rtk/slices/cart-slice";

function Products() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <>
      <Container className="py-5">
        <div className="row py-5">
          {products.map((product) => (
            <div className="col" key={product.id}>
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  style={{ height: "300px" }}
                  variant="top"
                  src={product.image}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>{product.price} $</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => dispatch(addToCart(product))}
                  >
                    Add To Cart
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Products;
