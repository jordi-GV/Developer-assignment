import React from "react";
import Container from "react-bootstrap/esm/Container";
import Table from "react-bootstrap/Table";

import TableAdvertisements from "../components/TableAdevertisements";

function Home() {
  return (
    <React.Fragment>
      <Container>
        <h6 className="mt-5">Advertisements Table</h6>

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>title</th>
              <th>valid_until</th>
              <th>link</th>
            </tr>
          </thead>
          <tbody>
            <TableAdvertisements />
          </tbody>
        </Table>
      </Container>
    </React.Fragment>
  );
}

export default Home;
