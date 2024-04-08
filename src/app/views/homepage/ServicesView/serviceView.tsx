import react from 'react'
import Image from 'next/image'
import webpic from '../../../../../public/websiteImage.jpeg'
import mobilepic from '../../../../../public/mobile.jpeg'
import databasepic from '../../../../../public/database.jpeg'

import styles from '../ServicesView/serviceViewStyles.module.css'
import './servicecustombootstrap.css'
import classnames from 'classnames'; 

import {Nav, NavLink,TabContent, TabPane, NavItem, Row, Col} from "reactstrap"

class ServicesView extends react.Component {
  state = {
    activeTab: "webTab"
  }

  toggletab(tab:string) {
      this.setState({
        activeTab: tab
      })
  }

  render() {
    return (
      <section className={styles.serviceSection}>
        <h3 className={`ps-3 ${styles.h3Style}`}>Services</h3>
        <div className={styles.tabContainer}>
        <Row>
          <Col sm={12} md={12} lg={1}>
          <Nav pills justified className='flex-lg-column'>
            <NavItem>
              <NavLink className={classnames({active: this.state.activeTab == "webTab"})} onClick={()=>this.toggletab("webTab")}>
                Web
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={classnames({active: this.state.activeTab == "mobileTab"})} onClick={()=>this.toggletab("mobileTab")}>
                Mobile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={classnames({active: this.state.activeTab == "dataTab"})} onClick={()=>this.toggletab("dataTab")}> 
                Database
              </NavLink>
            </NavItem>
          </Nav>
          </Col>
          <Col sm={12} md={12} lg={11}>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="webTab">
              <Image src={webpic} alt="Website Tab Image" className={`img-fluid rounded ${styles.serviceImgs}`} priority={true}/>
              <div className={styles.paragraphContainer}>
                <p>
                  Whether you need a simple single page site or a fully functional ecommerce platform, we have the skills to deliver exactly 
                  what you need. Our team specializes in developing full-stack websites that can adapt and grow as your business expands. 
                </p>
                <p>
                  With our expertise in frontend technologies like React, we create stunning user interfaces that are both visually appealing and secure, eliminating any 
                  concerns about interface breaches.
                </p>
                <p>
                  When it comes to backend development, we prioritize security by utilizing trusted frameworks like Django or Spring Boot, 
                  ensuring that your data remains safe and protected. To find out more about our services, please <a href="/webservices">click here</a>.
                </p>
              </div>
            </TabPane>
            <TabPane tabId="mobileTab">
              <Image src={mobilepic } alt="Mobile Tab Image" className={`img-fluid rounded ${styles.serviceImgs}`} priority={true}/>
                <div className={styles.paragraphContainer}>
                  <p>
                    With the increasing popularity of mobile apps, we offer the option to convert your web application into a mobile app. Whether you need a dating 
                    app or any other type of app, we have the skills to build it for you. 
                  </p>
                  <p>
                    Our proficiency in iOS and Android mobile languages enables us to make your application available on both platforms. Moreover, we specialize in developing 
                    full stack mobile applications that leverage the same methodologies and principles used in web backend languages and databases. To find out more, <a href="/mobileservices">click here</a>.
                  </p>
                </div>
            </TabPane>
            <TabPane tabId="dataTab">
              <Image src={databasepic} alt="Database Tab Image" className={`img-fluid rounded ${styles.serviceImgs}`} priority={true}/>
              <div className={styles.paragraphContainer}>
                <p>
                  Our team is dedicated to providing comprehensive database solutions, whether it's maintaining your existing database, enhancing its functionality, or constructing a 
                  data warehouse. With expertise in SQL-based technology and certifications, we can customize our services to meet your specific requirements. 
                </p>
                <p>
                  Additionally, we leverage NoSQL technology and employ frontend tools to offer our clients a visual interface for managing and controlling database operations. 
                  Our solutions are designed to scale effortlessly and ensure hassle-free maintenance. For further information, please <a href="/databaseservices">click here</a>.
                </p>
              </div>
            </TabPane>
          </TabContent>
          </Col>
          </Row>
        </div>
        
      </section>
    )
  }
}

export const servicesSection = <ServicesView />