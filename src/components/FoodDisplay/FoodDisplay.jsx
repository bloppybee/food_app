import React from "react";
import { StoreContext } from "../contexts/StoreContext";
import { Container, Row, Col, Card } from "react-bootstrap";
import { assets, food_list } from "../../Assests/assets/frontend_assets/assets";
import Button from "react-bootstrap/Button";
import { useContext, useState } from "react";

function FoodDisplay({category }) {
  // const {food_list} = useContext(StoreContext)

  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  // Filtered list
  const filteredFoods = food_list.filter(
    (item) => category === "ALL" || category === item.category
  );


  return (
    <Container className="my-4">
      <Row className="g-4">
        <h2>Top dishes near you</h2>
        {food_list
          .filter(food =>
            category === "All" ? true : food.category === category
          )
          .map((food) => (
            <Col key={food._id} xs={12} sm={6} md={4} lg={3}>
              <Card className="h-100 shadow">
                <Card.Img variant="top" src={food.image} />
                <Card.Body>
                  <Card.Title>{food.name}</Card.Title>
                  <Card.Text className="text-muted">
                    {food.description}
                  </Card.Text>
                </Card.Body>

                <Card.Footer className="d-flex justify-content-between align-items-center border-0">
                  <strong>${food.price}</strong>

                  <div className="d-flex align-items-center gap-2 bg-white rounded-pill">
                    <Button className="rounded-pill"
                      size="sm"
                      variant="outline-danger"
                      onClick={() =>
                        removeFromCart(food._id)}
                    >
                      −
                    </Button>

                    <span className="fw-semibold">
                      {cartItems[food._id] || 0}
                    </span>

                    <Button className="rounded-pill"
                      size="sm"
                      variant="outline-success"
                      onClick={() => addToCart(food._id)}
                    >
                      +
                    </Button>
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
      </Row>
    </Container>
  )
}

export default FoodDisplay