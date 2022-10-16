import React from "react";
import { Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import Navigation from "./navigation.layouts";
import Sidebar from "./sidebar.layout";

const MainLayouts = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Container>
        <Row>
          <div className="col-md-1">
            <Sidebar />
          </div>
          <div className="col-md-11">
            <Outlet />
          </div>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default MainLayouts;