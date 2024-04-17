import react from 'react'
import Image from 'next/image'
import contactpic from '../../../../../public/contactpic.jpg'
import {Validator} from '@/app/utils/validator'

import styles from '../ContactView/contactViewStyle.module.css'
import './contactcustomBootstrap.css'

import {Container, Row, Col, Form, FormGroup, Input, Button, Spinner} from 'reactstrap'

class ContactView extends react.Component{

  validator = new Validator();
  state = {
    submitbuttonInner: <div>Submit</div>,
    submitDisable: false
  }
  constructor(props: any) {
    super(props);
  }

  handleAction = async (e: any) => {
    e.preventDefault();
    const form = e.target;

    const fname = form[0];
    const lname = form[1];
    const email = form[2];
    const phone = form[3];
    const message = form[4];

    let fnameValid = this.validator.validate("name", fname.value);
    let lnameValid = this.validator.validate("name", lname.value);
    let emailValid = this.validator.validate("email", email.value);
    let phoneValid = this.validator.validate("phone", phone.value);

    if (!fnameValid){
      fname.style.borderBottomColor = "#fc5356";
    }

    if (!lnameValid){
      lname.style.borderBottomColor = "#fc5356";
    }

    if (!emailValid){
      email.style.borderBottomColor = "#fc5356";
    }

    if (!phoneValid){
      phone.style.borderBottomColor = "#fc5356";
    }

    if (fnameValid && lnameValid && emailValid && phoneValid) {
      this.setState({
        submitbuttonInner: <Spinner size="sm">Loading...</Spinner>,
        submitDisable: true
      });
      try {
        const res = await fetch(
          'https://whispering-beyond-52824-4720ec3e5ef9.herokuapp.com/inquiry/',
          {
            method:'POST',
            body: JSON.stringify({
              'firstname':fname.value,
              'lastname':lname.value,
              'email':email.value,
              'phone':phone.value,
              'message': message.value != '' ? message.value:null
            }),
            mode: 'cors',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
          }
        );
        const data = await res.json();
        
        this.setState({
          submitbuttonInner: <div>Received</div>
        });
      }
      catch (err) {
        this.setState({
          submitbuttonInner: <div>Error</div>,
          submitDisable: false
        })
      }
    }
  }

  inputBlurHandle = async (e: any) => {
    const input = e.target;

    if (input.style.borderBottomColor == "rgb(252, 83, 86)") {
      input.style.borderBottomColor = "black";
    }
  }

  render(){
    return(
      <section className={`${styles.section} ${styles.peachbg}`} id="contactus">
        <Container fluid>
          <Row>
            <Col lg={6}>
              <div className={`${styles.section_title} mt-3`}>
                <h2>Contact Us</h2>
                <p className='mt-2 d-block mx-auto mx-md-0'>Connect with us through our website or Instagram (Please check spam folder for messages, we are saving money).</p>
              </div>
            </Col>
          </Row>
          <Row className='flex-row-reverse mt-md-5 pb-3 px-3 px-md-5'>
            <Col md={7} lg={8}>
              <div className={styles.contact_form}>
                <Form id="inquiryForm" onSubmit={this.handleAction}>
                  <Row>
                    <Col md={6}>
                      <FormGroup>
                        <Input id="fname" type="text" placeholder="First Name*" className={styles.form_control} onBlur={this.inputBlurHandle}/>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Input id="lname" type="text" placeholder="Last Name*" className={styles.form_control} onBlur={this.inputBlurHandle}/>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Input id="email" type="text" placeholder="Email*" className={styles.form_control} onBlur={this.inputBlurHandle}/>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Input id="phone" type="text" placeholder="Phone*" className={styles.form_control} onBlur={this.inputBlurHandle}/>
                      </FormGroup>
                    </Col>
                    <Col sm={12}>
                      <FormGroup>
                        <Input type="textarea" id="message" placeholder="Message" className={styles.form_control} style={{resize: "none", height: "100px"}} />
                      </FormGroup>
                    </Col>
                    <Col sm={12} className='mt-md-5'>
                      <Button tag="button" type="submit" className={`d-block px-4 py-2 ms-auto me-auto me-md-0 me-2`} disabled={this.state.submitDisable}>
                        {this.state.submitbuttonInner}
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
            <Col md={5} lg={4} className='mt-4 mt-md-0'>
              <div className={styles.contact_name}>
                <h5>Mail</h5>
                <p>softwareinnovations61@gmail.com</p>
              </div>
              <div className={styles.contact_name}>
                <h5>Office</h5>
                <p>Office Location Soon,<br/>Raleigh NC</p>
              </div>
              <div className={styles.contact_name}>
                <h5>Phone</h5>
                <p>919-664-0746</p>
              </div>
              <div className={`${styles.social_share} nav`}>
                    <a className={styles.instagram} href="#">
                      <svg className='mt-1' width={30} height={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                    </a>
                    <a className={`${styles.facebook} ms-2`} href="#">
                      <svg className='mt-1' width={30} height={30} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
                    </a>
                    <a className={`${styles.linkedin} ms-2`} href="#">
                      <svg className='mt-1' width={30} height={30}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg>
                    </a>
                </div>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}

export const contactForm = <ContactView/>
