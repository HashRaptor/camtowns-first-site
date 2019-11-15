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
  title: "Software Development Lead, AAA National",
  workingDates: "Nov 2015 - Current",
  responsibilities: [ "Developed full stack features based on requirements for Connect Suite",
    "Implemented various RESTful endpoints to expand application capabilities",
    "Implemented unit tests using JUnit and PowerMockito and automated tests with Selenium",
    "Participated in daily scrum meetings and bi weekly sprint planning",
    "Diagnosed and resolved defects across all aspects of the system including the UI layer, the service layer, and the database layer",
    "Handled the CD/CI of the builds using Jenkins",
    "Produced technical documentation describing application workflow and design specifications",
    "Maintained a steady codebase using Git version control, while sunsetting the SVN codebase."]
};

const deloitteJob = {
  title: "Solution Developer, Deloitte",
  workingDates: "Apr 2015 - Nov 2015",
  responsibilities: [ "Quality assurance",
    "Lead on case creation and federal file interfaces",
    "Handled partner integration meetings"]
};

const aaaContractJob = {
  title: "Software Engineer Contractor, AAA National",
  workingDates: "Oct 2013 - Mar 2015",
  responsibilities: [ "Developed and maintained the user interface using HTML, CSS, Sass, JavaScript, and jQuery for AAA’s D3 Roadside assistance software.",
    "Optimized and enhanced the application using Java 7 and jUnit tests. ",
    "Implemented all aspects of the software from end user interface using HTML and JavaScript through database interactions using Java 7, Oracle, and MyBatis",
    "Maintained a steady codebase using SVN version control"]
};

const indieboxJob = {
  title: "Full Stack Developer, IndieBox",
  workingDates: "May 2014 - May 2015",
  responsibilities: [ "Developed the shipping and financial tools using Ruby on Rails scripts",
    "Agile work environment",
    "Implemented new front-end features using HTML, CSS, JavaScript, jQuery, Bootstrap, Wordpress, PHP and Less",
    "Maintained a steady codebase using Git version control",
    "Worked as large conference staff when needed"]
};

const skyparlorJob = {
  title: "Software Engineer, Sky Parlor Studios",
  workingDates: "Jun 2012 - Aug 2013",
  responsibilities: [ "Ideation prototyping",
    "Developed and maintained the user interface",
    "Quality assurance and usability testing",
    "Developed native (Objective-C and Java) plugins",
    "Developed an automated push notification and mailer service using Java and the Mandrill API",
    "Developed a group and chat system for users using Java 7 and a MySQL database"]
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