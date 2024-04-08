import React from 'react'
import styles from './mobileserviceviewstyle.module.css'
import { Button, Container, Row, Col, Card, CardBody } from 'reactstrap'

export class MobileServicesSection extends React.Component {
    render(): React.ReactNode {
        return (
            <main style={{paddingTop: "95px", color: "rgb(75, 68, 104)"}}>
                <section className={`${styles.ServiceSectionHeader} ${styles.headerTint}`}>
                    <div className={styles.innerHeaderContainer}>
                        <h1>Mobile Services</h1>
                        <p style={{padding: "0 16px"}}>Experience affordable mobile services that can cater to millions of users simultaneously.</p>
                        <Button style={{backgroundColor:"lightcoral", borderColor:"lightcoral"}}>More Services</Button>
                    </div>
                </section>
                <section className={`bg-light py-5 py-xl-8 ${styles.infoSection}`}>
                    <Container className='overflow-hidden'>
                        <Row className='justify-content-md-center'>
                            <Col sm={12} md={10} lg={8} xl={7}>
                                <h3 className="fs-6 mb-2 text-secondary text-center text-uppercase">What Mobile Services We Provide?</h3>
                                <h2 className="display-5 mb-5 text-center">Our comprehensive mobile services encompass everything from small full stack application development to the maintenance of existing applications.</h2>
                                <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                            </Col>
                        </Row>
                        <Row className="gy-4">
                            <Col xs={12} sm={6} xl={4}>
                                <Card className="border-0 border-bottom border-warning shadow-sm">
                                    <CardBody className="card-body text-center p-4 p-xxl-5">
                                        <svg width={56} height={56} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                            <path d="M80 0C44.7 0 16 28.7 16 64V448c0 35.3 28.7 64 64 64H304c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H80zM192 400a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                                        </svg>
                                        <h4 className="mb-4">Mobile Design</h4>
                                        <p className="mb-4 text-secondary">
                                            We utilize native languages for the developing iOS and Android mobile applications, while also employing 
                                            React Native for simpler mobile applications that adheres to industry standards.
                                        </p>
                                        <a href="https://www.ibm.com/topics/mobile-application-development" target="_blank" className="fw-bold text-decoration-none link-warning">
                                            Learn More
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                            </svg>
                                        </a>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs={12} sm={6} xl={4}>
                                <Card className="border-0 border-bottom border-warning shadow-sm">
                                    <CardBody className="card-body text-center p-4 p-xxl-5">
                                        <svg width={56} height={56} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path d="M448 156.1c0-4.5-.1-9-.2-13.5a196.3 196.3 0 0 0 -2.6-29.4 99.6 99.6 0 0 0 -9.2-28A94.1 94.1 0 0 0 394.8 44a99.2 99.2 0 0 0 -28-9.2 195 195 0 0 0 -29.4-2.6c-4.5-.1-9-.2-13.5-.2H124.1c-4.5 0-9 .1-13.5 .2-2.5 .1-4.9 .2-7.4 .3a171.7 171.7 0 0 0 -22.1 2.3 103.1 103.1 0 0 0 -21.2 6.1q-3.5 1.5-6.8 3.1a94.7 94.7 0 0 0 -18.4 12.3c-1.9 1.6-3.7 3.3-5.4 5A93.9 93.9 0 0 0 12 85.2a99.5 99.5 0 0 0 -9.2 28 196.3 196.3 0 0 0 -2.5 29.4c-.1 4.5-.2 9-.2 13.5v199.8c0 4.5 .1 9 .2 13.5a196.1 196.1 0 0 0 2.6 29.4 99.3 99.3 0 0 0 9.2 28A94.3 94.3 0 0 0 53.2 468a99.5 99.5 0 0 0 28 9.2 195 195 0 0 0 29.4 2.6c4.5 .1 9 .2 13.5 .2H323.9c4.5 0 9-.1 13.5-.2a196.6 196.6 0 0 0 29.4-2.6 99.6 99.6 0 0 0 28-9.2A94.2 94.2 0 0 0 436 426.8a99.3 99.3 0 0 0 9.2-28 194.8 194.8 0 0 0 2.6-29.4c.1-4.5 .2-9 .2-13.5V172.1c0-5.4 0-10.7 0-16.1zm-69.9 241c-20-38.9-57.2-29.3-76.3-19.5-1.7 1-3.5 2-5.3 3l-.4 .3c-39.5 21-92.5 22.5-145.9-.4A234.6 234.6 0 0 1 45 290.1a230.6 230.6 0 0 0 39.2 23.4c56.4 26.4 113 24.5 153 0-57-43.9-104.6-101-141.1-147.2a197.1 197.1 0 0 1 -18.8-25.9c43.7 40 112.7 90.2 137.5 104.1-52.6-55.5-98.9-123.9-96.7-121.7 82.8 83.4 159.2 130.6 159.2 130.6 2.9 1.6 5 2.9 6.7 4a127.4 127.4 0 0 0 4.2-12.5c13.2-48.3-1.7-103.6-35.3-149.2C329.6 141.8 375 229.3 356.4 303.4c-.4 1.7-1 3.4-1.4 5.1 38.5 47.4 28 98.2 23.1 88.6z"/>
                                        </svg>
                                        <h4 className="mb-4">Swift</h4>
                                        <p className="mb-4 text-secondary">
                                            Our frontend iOS mobile application utilizes a combination of SwiftUI/Obj-C, UIkit, and Core Data to create stunning 
                                            user interfaces that enhance user engagement and experience.
                                        </p>
                                        <a href="https://www.swift.org/" target='_blank' className="fw-bold text-decoration-none link-warning">
                                            Learn More
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                            </svg>
                                        </a>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs={12} sm={6} xl={4}>
                                <Card className="border-0 border-bottom border-warning shadow-sm">
                                    <CardBody className="card-body text-center p-4 p-xxl-5">
                                        <svg width={56} height={56} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path d="M420.6 301.9a24 24 0 1 1 24-24 24 24 0 0 1 -24 24m-265.1 0a24 24 0 1 1 24-24 24 24 0 0 1 -24 24m273.7-144.5 47.9-83a10 10 0 1 0 -17.3-10h0l-48.5 84.1a301.3 301.3 0 0 0 -246.6 0L116.2 64.5a10 10 0 1 0 -17.3 10h0l47.9 83C64.5 202.2 8.2 285.6 0 384H576c-8.2-98.5-64.5-181.8-146.9-226.6"/>
                                        </svg>
                                        <h4 className="mb-4">Kotlin</h4>
                                        <p className="mb-4 text-secondary">
                                            We utilize Kotlin/Java, Gradle build tools, XML styling, and SQLite to develop Android mobile applications with an 
                                            intelligent user interface, enabling clients to seamlessly resume their activities.
                                        </p>
                                        <a href="https://kotlinlang.org/" target='_blank' className="fw-bold text-decoration-none link-warning">
                                            Learn More
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                            </svg>
                                        </a>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs={12} sm={6} xl={4}>
                                <Card className="border-0 border-bottom border-warning shadow-sm">
                                    <CardBody className="card-body text-center p-4 p-xxl-5">
                                        <svg width={56} height={56} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                            <path d="M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4 .4 67.6 .1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"/>
                                        </svg>
                                        <h4 className="mb-4">Docker</h4>
                                        <p className="mb-4 text-secondary">
                                            We deploy applications using Docker which effectively manage and scale your application while providing isolation, minimal penalties and 
                                            trade-offs along with an additional layer of security.
                                        </p>
                                        <a href="https://www.docker.com/" className="fw-bold text-decoration-none link-warning">
                                            Learn More
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                            </svg>
                                        </a>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs={12} sm={6} xl={4}>
                                <Card className="border-0 border-bottom border-warning shadow-sm">
                                    <CardBody className="card-body text-center p-4 p-xxl-5">
                                        <svg width={56} height={56} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/>
                                        </svg>
                                        <h4 className="mb-4">React Native</h4>
                                        <p className="mb-4 text-secondary">
                                            We employ React Native for our smaller mobile applications, enabling deployment on both iOS and Android platforms
                                            solely for applications with minimal complexity and features.
                                        </p>
                                        <a href="https://reactnative.dev/" target='_blank' className="fw-bold text-decoration-none link-warning">
                                            Learn More
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                            </svg>
                                        </a>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs={12} sm={6} xl={4}>
                                <Card className="border-0 border-bottom border-warning shadow-sm">
                                    <CardBody className="card-body text-center p-4 p-xxl-5">
                                        <svg width={56} height={56} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                            <path d="M14 95.8C14 42.9 56.9 0 109.8 0H274.2C327.1 0 370 42.9 370 95.8C370 129.3 352.8 158.8 326.7 175.9C352.8 193 370 222.5 370 256C370 308.9 327.1 351.8 274.2 351.8H272.1C247.3 351.8 224.7 342.4 207.7 326.9V415.2C207.7 468.8 163.7 512 110.3 512C57.5 512 14 469.2 14 416.2C14 382.7 31.2 353.2 57.2 336.1C31.2 319 14 289.5 14 256C14 222.5 31.2 193 57.2 175.9C31.2 158.8 14 129.3 14 95.8zM176.3 191.6H109.8C74.2 191.6 45.4 220.4 45.4 256C45.4 291.4 74 320.2 109.4 320.4C109.5 320.4 109.7 320.4 109.8 320.4H176.3V191.6zM207.7 256C207.7 291.6 236.5 320.4 272.1 320.4H274.2C309.7 320.4 338.6 291.6 338.6 256C338.6 220.4 309.7 191.6 274.2 191.6H272.1C236.5 191.6 207.7 220.4 207.7 256zM109.8 351.8C109.7 351.8 109.5 351.8 109.4 351.8C74 352 45.4 380.8 45.4 416.2C45.4 451.7 74.6 480.6 110.3 480.6C146.6 480.6 176.3 451.2 176.3 415.2V351.8H109.8zM109.8 31.4C74.2 31.4 45.4 60.2 45.4 95.8C45.4 131.4 74.2 160.2 109.8 160.2H176.3V31.4H109.8zM207.7 160.2H274.2C309.7 160.2 338.6 131.4 338.6 95.8C338.6 60.2 309.7 31.4 274.2 31.4H207.7V160.2z"/>
                                        </svg>
                                        <h4 className="mb-4">Figma Design</h4>
                                        <p className="mb-4 text-secondary">
                                            All mobile applications use figma for frontend design, with embedded figma designs included in the technical documents to 
                                            construct user interfaces that adhere to industry standards.
                                        </p>
                                        <a href="https://www.figma.com/" target="_blank" className="fw-bold text-decoration-none link-warning">
                                            Learn More
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                            </svg>
                                        </a>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        )
    }
}