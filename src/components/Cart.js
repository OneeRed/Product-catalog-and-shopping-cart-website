import { Container, Table, Button, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, clear } from "../rtk/slices/cart-slice";
function Cart() {

    const cart = useSelector((state) => state.cart);

    const totalPrice = cart.reduce((acc, product) => {
        acc += product.price * product.quantity;
        return acc;
    }, 0) 
    const dispatch = useDispatch()
    
  return (
    <>
      <Container>
        <h1 className="py-5">Welcome To Cart</h1>
        <Button variant="primary" className="mb-3" onClick={() => dispatch(clear())}>Clear</Button>
        <h5>Total Price: {totalPrice.toFixed(2)} $</h5>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Image</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td><Image src={product.image} alt={product.title} style={{height:'100px', width:'100px'}}></Image></td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>
              <td><Button variant="danger" onClick={() => dispatch(deleteFromCart(product))}>Delete</Button></td>
            </tr>
          ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Cart;
