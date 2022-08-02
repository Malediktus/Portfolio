import React from "react";
import {
  Accordion,
  ProgressBar,
  Tab,
  Tabs,
} from "react-bootstrap";

const Content = () => {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          margin: "90px",
          top: "0px",
          left: "80px",
          color: "lightgrey",
          fontFamily: "'Kanit', sans-serif",
          fontSize: "50px",
        }}
      >
        <br />
        Test 123 tefgd fg
      </div>
      <div
        style={{
          position: "absolute",
          margin: "90px",
          top: "120px",
          left: "120px",
          color: "lightgrey",
          fontFamily: "'Dosis', sans-serif",
          fontSize: "25px",
        }}
      >
        <br />
        abcDEFfghjnglfdnjhkfdkkkkkkfgffffgfgfgfgfgfgfg
      </div>
      <div
        style={{
          position: "absolute",
          margin: "90px",
          top: "90px",
          left: "800px",
          width: "1000px",
          color: "lightgrey",
          fontFamily: "'Dosis', sans-serif",
          fontSize: "25px",
        }}
      >
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Accordion Item #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>

      <div
        style={{
          position: "absolute",
          margin: "90px",
          top: "450px",
          left: "80px",
          width: "400px",
          color: "lightgrey",
          fontFamily: "'Dosis', sans-serif",
          fontSize: "25px",
        }}
      >
        <ProgressBar now={60} />
        <p> My skills at ...</p>
      </div>

      <div
        style={{
          position: "absolute",
          margin: "90px",
          top: "600px",
          left: "80px",
          width: "400px",
          color: "lightgrey",
          fontFamily: "'Dosis', sans-serif",
          fontSize: "25px",
        }}
      >
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Home">
            My love is as a fever longing still, For that which longer nurseth
            the disease; Feeding on that which doth preserve the ill, The
            uncertain sickly appetite to please. My reason, the physician to my
            love, Angry that his prescriptions are not kept, Hath left me, and I
            desperate now approve Desire is death, which physic did except. Past
            cure I am, now Reason is past care, And frantic-mad with evermore
            unrest;
          </Tab>
          <Tab eventKey="profile" title="Profile">
            My love is as a fever longing still, For that which longer nurseth
            the disease; Feeding on that which doth preserve the ill, The
            uncertain sickly appetite to please. My reason, the physician to my
            love, Angry that his prescriptions are not kept, Hath left me, and I
            desperate now approve Desire is death, which physic did except. Past
            cure I am, now Reason is past care, And frantic-mad with evermore
            unrest;
          </Tab>
          <Tab eventKey="contact" title="Contact" disabled>
            My love is as a fever longing still, For that which longer nurseth
            the disease; Feeding on that which doth preserve the ill, The
            uncertain sickly appetite to please. My reason, the physician to my
            love, Angry that his prescriptions are not kept, Hath left me, and I
            desperate now approve Desire is death, which physic did except. Past
            cure I am, now Reason is past care, And frantic-mad with evermore
            unrest;
          </Tab>
        </Tabs>
      </div>

      <div
        style={{
          position: "absolute",
          margin: "90px",
          top: "450px",
          left: "600px",
          width: "400px",
          color: "lightgrey",
          fontFamily: "'Dosis', sans-serif",
          fontSize: "25px",
        }}
      >
        <ProgressBar now={30} />
        <p> My skills at ...</p>
      </div>

      <div
        style={{
          position: "absolute",
          margin: "90px",
          top: "600px",
          left: "600px",
          width: "400px",
          color: "lightgrey",
          fontFamily: "'Dosis', sans-serif",
          fontSize: "25px",
        }}
      >
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Home">
            My love is as a fever longing still, For that which longer nurseth
            the disease; Feeding on that which doth preserve the ill, The
            uncertain sickly appetite to please. My reason, the physician to my
            love, Angry that his prescriptions are not kept, Hath left me, and I
            desperate now approve Desire is death, which physic did except. Past
            cure I am, now Reason is past care, And frantic-mad with evermore
            unrest;
          </Tab>
          <Tab eventKey="profile" title="Profile">
            My love is as a fever longing still, For that which longer nurseth
            the disease; Feeding on that which doth preserve the ill, The
            uncertain sickly appetite to please. My reason, the physician to my
            love, Angry that his prescriptions are not kept, Hath left me, and I
            desperate now approve Desire is death, which physic did except. Past
            cure I am, now Reason is past care, And frantic-mad with evermore
            unrest;
          </Tab>
          <Tab eventKey="contact" title="Contact" disabled>
            My love is as a fever longing still, For that which longer nurseth
            the disease; Feeding on that which doth preserve the ill, The
            uncertain sickly appetite to please. My reason, the physician to my
            love, Angry that his prescriptions are not kept, Hath left me, and I
            desperate now approve Desire is death, which physic did except. Past
            cure I am, now Reason is past care, And frantic-mad with evermore
            unrest;
          </Tab>
        </Tabs>
      </div>

      <div
        style={{
          position: "absolute",
          margin: "90px",
          top: "450px",
          left: "1120px",
          width: "400px",
          color: "lightgrey",
          fontFamily: "'Dosis', sans-serif",
          fontSize: "25px",
        }}
      >
        <ProgressBar now={80} />
        <p> My skills at ...</p>
      </div>

      <div
        style={{
          position: "absolute",
          margin: "90px",
          top: "600px",
          left: "1120px",
          width: "400px",
          color: "lightgrey",
          fontFamily: "'Dosis', sans-serif",
          fontSize: "25px",
        }}
      >
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Home">
            My love is as a fever longing still, For that which longer nurseth
            the disease; Feeding on that which doth preserve the ill, The
            uncertain sickly appetite to please. My reason, the physician to my
            love, Angry that his prescriptions are not kept, Hath left me, and I
            desperate now approve Desire is death, which physic did except. Past
            cure I am, now Reason is past care, And frantic-mad with evermore
            unrest;
          </Tab>
          <Tab eventKey="profile" title="Profile">
            My love is as a fever longing still, For that which longer nurseth
            the disease; Feeding on that which doth preserve the ill, The
            uncertain sickly appetite to please. My reason, the physician to my
            love, Angry that his prescriptions are not kept, Hath left me, and I
            desperate now approve Desire is death, which physic did except. Past
            cure I am, now Reason is past care, And frantic-mad with evermore
            unrest;
          </Tab>
          <Tab eventKey="contact" title="Contact" disabled>
            My love is as a fever longing still, For that which longer nurseth
            the disease; Feeding on that which doth preserve the ill, The
            uncertain sickly appetite to please. My reason, the physician to my
            love, Angry that his prescriptions are not kept, Hath left me, and I
            desperate now approve Desire is death, which physic did except. Past
            cure I am, now Reason is past care, And frantic-mad with evermore
            unrest;
          </Tab>
        </Tabs>
      </div>

      <div
        style={{
          position: "absolute",
          margin: "90px",
          top: "450px",
          left: "80px",
          width: "400px",
          color: "lightgrey",
          fontFamily: "'Dosis', sans-serif",
          fontSize: "25px",
        }}
      >
        <ProgressBar now={60} />
        <p> My skills at ...</p>
      </div>

      <div
        style={{
          position: "absolute",
          margin: "90px",
          top: "1050px",
          left: "80px",
          color: "lightgrey",
          fontFamily: "'Kanit', sans-serif",
          fontSize: "50px",
        }}
      >
        <br />
        Github repos
      </div>
    </div>
  );
};

export default Content;
