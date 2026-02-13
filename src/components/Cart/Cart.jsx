import  { useContext } from "react";
import { Container, Row, Col, Image, Button, Card, Form } from "react-bootstrap";
import { StoreContext } from "../contexts/StoreContext";

function Cart() {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  return (
    <Container className="my-5">
      <h3 className="mb-4 fw-bold">Your Cart</h3>

      {/* Header row */}
      <Row className="fw-semibold text-muted border-bottom pb-2 mb-3">
        <Col xs={2}>Item</Col>
        <Col xs={3}>Title</Col>
        <Col xs={2}>Price</Col>
        <Col xs={2}>Qty</Col>
        <Col xs={2}>Total</Col>
        <Col xs={1}>Remove</Col>
      </Row>

      {food_list.map((item) => {
        if (cartItems[item._id] > 0) {
          return (
            <Row
              key={item._id}
              className="align-items-center mb-3 py-2 border-bottom"
            >
              <Col xs={2}>
                <Image src={item.image} rounded fluid />
              </Col>

              <Col xs={3}>{item.name}</Col>

              <Col xs={2}>${item.price}</Col>

              <Col xs={2}>{cartItems[item._id]}</Col>

              <Col xs={2}>
                ${item.price * cartItems[item._id]}
              </Col>

              <Col xs={1}>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => removeFromCart(item._id)}
                >
                  ✕
                </Button>
              </Col>
            </Row>
          );
        }
        return null;
      })}
<div className="cart-bottom mt-4">
  <Row className="g-4">
    
    {/* CART TOTAL */}
    <Col md={6}>
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title className="mb-3 text-uppercase">
            Cart Totals
          </Card.Title>

          <Row className="mb-2">
            <Col>Subtotal</Col>
            <Col className="text-end">${getTotalCartAmount()}</Col>
          </Row>

          <hr />

          <Row className="mb-2">
            <Col>Delivery Fee</Col>
            <Col className="text-end">${getTotalCartAmount()===0?0:2}</Col>
          </Row>

          <hr />

          <Row className="fw-bold">
            <Col>Total</Col>
            <Col className="text-end">${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</Col>
          </Row>

          <Button
            variant="success"
            className="w-100 mt-3"
          >
            PROCEED TO CHECKOUT
          </Button>
        </Card.Body>
      </Card>
    </Col>

    {/* PROMO CODE */}
    <Col md={6}>
      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title className="mb-3">
            Promo Code
          </Card.Title>

          <p className="text-muted">
            If you have a promo code, enter it here
          </p>

          <Form className="d-flex gap-2">
            <Form.Control
              type="text"
              placeholder="Promo code"
            />
            <Button variant="dark">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Col>

  </Row>
</div>

    </Container>
  );
}

export default Cart;
