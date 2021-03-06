import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

const Formulir = ({ nama, deskripsi, harga, handleChange, handleSubmit }) => {
  return (
    <div className="mt-5">
      <Row>
        <Col>
          <h1>Tambah Data</h1>
          <hr></hr>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="nama">
              <Form.Label>Nama Makanan</Form.Label>
              <Form.Control type="text" name="nama" placeholder="Nama makanan" value={nama} onChange={(event) => handleChange(event)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="deskripsi">
              <Form.Label>Deskripsi</Form.Label>
              <Form.Control as="textarea" rows="3" name="deskripsi" value={deskripsi} onChange={(event) => handleChange(event)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="harga">
              <Form.Label>Harga</Form.Label>
              <Form.Control type="number" name="harga" placeholder="Harga" value={harga} onChange={(event) => handleChange(event)} />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Formulir;
