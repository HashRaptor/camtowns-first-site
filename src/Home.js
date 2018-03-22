import React, { Component } from "react";
import { Grid, Row, Col } from 'react-bootstrap';
const dummySentences = [
  'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
  'Donec hendrerit tempor tellus.',
  'Donec pretium posuere tellus.',
  'Proin quam nisl, tincidunt et, mattis eget, convallis nec, purus.',
  'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  'Nulla posuere.',
  'Donec vitae dolor.',
  'Nullam tristique diam non turpis.',
  'Cras placerat accumsan nulla.',
  'Nullam rutrum.',
  'Nam vestibulum accumsan nisl.'
];

class Home extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col sm={6} md={3}>
              <code>&lt;{'Col sm={6} md={3}'} /&gt;</code>
              <br />
              {dummySentences.slice(0, 6).join(' ')}
            </Col>
            <Col sm={6} md={3}>
              <code>&lt;{'Col sm={6} md={3}'} /&gt;</code>
              <br />
              {dummySentences.slice(0, 4).join(' ')}
            </Col>
            <Col sm={6} md={3}>
              <code>&lt;{'Col sm={6} md={3}'} /&gt;</code>
              <br />
              {dummySentences.slice(0, 6).join(' ')}
            </Col>
            <Col sm={6} md={3}>
              <code>&lt;{'Col sm={6} md={3}'} /&gt;</code>
              <br />
              {dummySentences.slice(0, 2).join(' ')}
            </Col>
          </Row>
        </Grid>


        <h2>HELLO</h2>
        <p>Cras facilisis urna ornare ex volutpat, et
        convallis erat elementum. Ut aliquam, ipsum vitae
        gravida suscipit, metus dui bibendum est, eget rhoncus nibh
        metus nec massa. Maecenas hendrerit laoreet augue
        nec molestie. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus.</p>

        <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
      </div>
    );
  }
}

export default Home;