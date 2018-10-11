import React, { Component } from "react";
import {Grid, Row, Col} from "react-bootstrap"


function JobListing({ title, dates, responsibilities }) {
  const listItems = responsibilities.map((responsibility) =>
    <li>{responsibility}</li>
  );

  return (
    <Col xs={12} md={6} >
      <h3 className="text-center">{title}</h3>
      {dates}
      <div>
        {listItems}
      </div>
    </Col>
  );
}


const currentJob = {
  title: "Software Developer, AAA National",
  workingDates: "Nov 2015 - Current",
  responsibilities: [ "Developed a solution to leverage Chase Paymentech SDK to process payments without the application.",
    "Implemented a modern software development environment by setting up Continuous Integration, Continuous Deployment, automated Selenium testing and development environments using Jenkins.",
    "Participates in daily scrum meetings and bi weekly sprint planning",
    "Migrated from SVN to GIT, while moving the team to a gitflow model"]
};

const deloitteJob = {
  title: "Solution Developer, Deloitte",
  workingDates: "Apr 2015 - Nov 2015",
  responsibilities: [ "Lead on case creation and federal file interfaces",
    "Handles partner integration meetings",
    "Data reporting",
    "Quality assurance"]
};

const aaaContractJob = {
  title: "Software Engineer Contractor, AAA National",
  workingDates: "Oct 2013 - Mar 2015",
  responsibilities: [ "Develops full stack features based on requirements for AAA’s D3 Roadside assistance software",
    "Handles the creation and maintenance of unit and integration tests",
    "Maintains a steady codebase with SVN and code reviews"]
};

const indieboxJob = {
  title: "Full Stack Developer, Indiebox",
  workingDates: "May 2014 - May 2015",
  responsibilities: [ "Develops and maintains the shipping and financial tools using Ruby on Rails scripts",
    "Maintains a steady codebase with GIT and code reviews",
    "Develops full stack features",
    "Quality assurance"]
};

const skyparlorJob = {
  title: "Software Engineer, Sky Parlor Studios",
  workingDates: "Jun 2012 - Aug 2013",
  responsibilities: [ "Ideation prototyping",
    "Develops and maintains the user interface",
    "Develops native (Objective-C and Java) plugins",
    "Develops automated push notification and mailer service"]
};

const skyparlorInternship = {
  title: "Intern, Sky Parlor Studios",
  workingDates: "Dec 2011 - Jun 2012",
  responsibilities: [ "Ideation prototyping",
    "Quality assurance and usability testing"]
};

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row >
            <Col xs={6} md={4} className="text-center">
              <h1 class="resume-header">Skills</h1>
            </Col>
            <Col xs={12} md={8}>
                <Col md={3}>
                  <li>Java 8</li>
                  <li>JSP</li>
                  <li>Servlets</li>
                  <li>JMS</li>
                </Col>
                <Col md={3}>
                  <li>PowerMock</li>
                  <li>HTML</li>
                  <li>JavaScript</li>
                  <li>reactJS</li>
                </Col>
                <Col md={3}>
                  <li>JQuery</li>
                  <li>SQL</li>
                  <li>MyBatis</li>
                  <li>Maven</li>
                </Col>
                <Col md={3}>
                  <li>Selenium</li>
                  <li>H2</li>
                  <li>Jenkins</li>
                  <li>AWS</li>
                </Col>

            </Col>
          </Row>
          <hr />
            <h1 class="resume-header text-center">Experience</h1>
            <Row >
              <JobListing title={currentJob.title}
                          dates={currentJob.workingDates}
                          responsibilities={currentJob.responsibilities}>
              </JobListing>
              <JobListing title={deloitteJob.title}
                          dates={deloitteJob.workingDates}
                          responsibilities={deloitteJob.responsibilities}>
              </JobListing>
            </Row>

            <Row >
              <JobListing title={aaaContractJob.title}
                          dates={aaaContractJob.workingDates}
                          responsibilities={aaaContractJob.responsibilities}>
              </JobListing>
              <JobListing title={indieboxJob.title}
                          dates={indieboxJob.workingDates}
                          responsibilities={indieboxJob.responsibilities}>
              </JobListing>
            </Row>

            <Row >
              <JobListing title={skyparlorJob.title}
                          dates={skyparlorJob.workingDates}
                          responsibilities={skyparlorJob.responsibilities}>
              </JobListing>
              <JobListing title={skyparlorInternship.title}
                          dates={skyparlorInternship.workingDates}
                          responsibilities={skyparlorInternship.responsibilities}>
              </JobListing>
            </Row>

          <hr />
          <Row className="text-center">
            <h1 class="resume-header">EDUCATION</h1>
            <Col xs={12} md={12}>
              Bachelor of Science, Game Development – Full Sail University (2011)
            </Col>
          </Row>
          <hr />
          <Row className="text-center">
            <h1 class="resume-header">CERTIFICATES</h1>
            <Col xs={12} md={12}>
              AWS Certified Developer - Associate (Apr 2018)
            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
}

export default Resume;