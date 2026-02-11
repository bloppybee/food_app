import Container from "react-bootstrap/Container";
import { Row, Col, Card } from "react-bootstrap";
import { menu_list } from "../../Assests/assets/frontend_assets/assets";
import './ExploreMenu.css'

function MenuBar({ category, setCategory }) {
  return (
    <Container className="my-5">
      <h3 className="text-center mb-4 fw-bold">Explore our menu</h3>

      <div className="overflow-auto hide-scrollbar">
        <div className="d-flex gap-4 justify-content-start">
          {menu_list.map((menu) => (
            <div key={menu.menu_name} style={{ minWidth: "140px" }}>
              <Card
                className="border-0 text-center"
                onClick={() => setCategory(menu.menu_name)}
                style={{ cursor: "pointer" }}
              >

                <Card.Img
                  src={menu.menu_image}
                  className="rounded-circle p-3"
                />
                <Card.Body className="p-2">
                  <Card.Text className="fw-semibold">
                    {menu.menu_name}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

export default MenuBar