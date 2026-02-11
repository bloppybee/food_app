import React from "react";
import {assets} from '../../Assests/assets/frontend_assets/assets'
import { Container, Row, Col } from "react-bootstrap";

function AppDownload() {
    return (
        <Container className="text-center my-5">
            <p className="fs-3 fw-semibold mb-4 ">For Better Experience Download <br /> Tomato App </p>
            <div className="d-flex justify-content-center gap-3">
                <img src={assets.play_store} alt="" />
                <img sizes="" src={assets.app_store} alt="" />
            </div>
        </Container>
    )
}

export default AppDownload