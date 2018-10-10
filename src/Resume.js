import React, { Component } from "react";
import {Grid, Row, Col} from "react-bootstrap"

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row >
            <Col xs={6} md={4}>
              Skills
            </Col>
            <Col xs={12} md={8}>
              Java 8, JSP, Servlets, JMS, Java API for RESTful Web Services (JAX-RS), PowerMock, HTML, JavaScript, JQuery, SQL, Maven, MyBatis, Selenium, H2
            </Col>
          </Row>
          <hr />
          <Row >
            <h1 className="text-center">JOB HISTORY</h1>
            <Col xs={6} md={6} >
              <h3 className="text-center">Software Developer, AAA National</h3>
              Nov 2015 - Current
              <div>
                <li>Develops full stack features based on requirements for Connect Suite</li>
                <li>Optimizes and enhances the application using automated tests with jUnit and Selenium.</li>
                <li>Participates in daily scrum meetings and bi weekly sprint planning</li>
                <li>Maintains a steady codebase with GIT and code reviews</li>
              </div>
            </Col>
            <Col xs={6} md={6}>
              <h3 className="text-center">Solution Developer, Deloitte</h3>
              Apr 2015 - Nov 2015
              <div>
                <li>Lead on case creation and federal file interfaces</li>
                <li>Handles partner integration meetings</li>
                <li>Data reporting</li>
                <li>Quality assurance</li>
              </div>
            </Col>
          </Row>
          <Row >
            <Col xs={6} md={6} >
              <h3 className="text-center">Software Engineer Contractor, AAA National</h3>
              Oct 2013 - Mar 2015
              <div>
                <li>Develops full stack features based on requirements for AAA’s D3 Roadside assistance software</li>
                <li>Handles the creation and maintenance of unit and integration tests</li>
                <li>Maintains a steady codebase with SVN and code reviews</li>
              </div>
            </Col>
            <Col xs={6} md={6}>
              <h3 className="text-center">Full Stack Developer, Indiebox</h3>
              May 2014 - May 2015
              <div>
                <li>Develops and maintains the shipping and financial tools using Ruby on Rails scripts</li>
                <li>Maintains a steady codebase with GIT and code reviews</li>
                <li>Develops full stack features</li>
                <li>Quality assurance</li>
              </div>
            </Col>
          </Row>
          <Row >
            <Col xs={6} md={6} >
              <h3 className="text-center">Software Engineer, Sky Parlor Studios</h3>
              Jun 2012 - Aug 2013
              <div>
                <li>Ideation prototyping</li>
                <li>Develops and maintains the user interface</li>
                <li>Develops native (Objective-C and Java) plugins</li>
                <li>Develops automated push notification and mailer service</li>
              </div>
            </Col>
            <Col xs={6} md={6}>
              <h3 className="text-center">Intern, Sky Parlor Studios</h3>
              Dec 2011 - Jun 2012
              <div>
                <li>Ideation prototyping</li>
                <li>Quality assurance and usability testing</li>
              </div>
            </Col>
          </Row>
          <hr />
          <Row className="text-center">
            <h1>EDUCATION</h1>
            <Col xs={6} md={12}>
              Bachelor of Science, Game Development – Full Sail University (2011)
            </Col>
          </Row>
          <hr />
          <Row className="text-center">
            <h1>CERTIFICATES</h1>
            <Col xs={6} md={12}>
              AWS Certified Developer - Associate (Apr 2018)
            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}

export default Resume;