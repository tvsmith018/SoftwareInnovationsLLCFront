import React from 'react'
import {Container, Row, Col, Card, CardHeader, CardBody, CardFooter, Button} from 'reactstrap'
import '@/app/views/moreservicepage/moreServiceBootstrapcustom.css'

export class MoreserviceView extends React.Component {
    render() {
        return(
            <main className='bg-light'>
                <Container>
                    <Row className='justify-content-md-center'>
                        <Col sm={12} md={10} lg={8} xl={7}>
                            <h3 className="fs-6 mb-2 text-secondary text-center text-uppercase">Monthly Plans</h3>
                            <h2 className="display-5 mb-5 text-center">We offer a range of monthly services tailored to meet your specific requirements.</h2>
                            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                        </Col>
                    </Row>
                    <Row className='gx-4'>
                        <Col sm={6} xl={3} className='mb-3'>
                            <Card className='border border-warning'>
                                <CardHeader className='border-bottom flex-column align-items-start p-3'>
                                    <svg height={30} width={30} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 482.229 482.229" xmlSpace="preserve" fill="#000000" stroke="#000000" strokeWidth="0.00482229" className="feather feather-box text-secondary h3 stroke-width-1 mb-2"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path style={{fill:"#020202"}} d="M166.316,75.172l257.166-1.092V248.26l-141.64,0.6v31.338h142.732 c17.018,0,30.854-13.844,30.854-30.856V74.08c0-17.011-13.837-30.856-30.854-30.856H166.316c-17.018,0-30.855,13.845-30.855,30.856 v54.854h31.198L166.316,75.172z"></path> <path style={{fill:"#020202"}} d="M472.152,287.593h-190.31v36.493h173.977c14.585,0,26.41-11.824,26.41-26.417 C482.229,292.108,477.721,287.593,472.152,287.593z"></path> <path style={{fill:"#020202"}} d="M224.672,152.894H112.484c-18.313,0-33.21,14.897-33.21,33.211v46.173h18.203 c4.851,0,9.438,0.999,13.743,2.581v-48.754c0-0.694,0.56-1.264,1.264-1.264h112.188c0.703,0,1.264,0.569,1.264,1.264v155.717 h-88.492v45.159h87.229c18.314,0,33.211-14.897,33.211-33.211V186.105C257.883,167.792,242.986,152.894,224.672,152.894z M168.578,372.382c-4.039,0-7.456-2.379-9.188-5.757c-0.733-1.426-1.248-2.979-1.248-4.686c0-5.765,4.681-10.435,10.436-10.435 c5.757,0,10.436,4.67,10.436,10.435c0,1.708-0.514,3.26-1.247,4.686C176.035,370.003,172.618,372.382,168.578,372.382z"></path> <path style={{fill:"#020202"}} d="M97.478,252.245H19.998C8.969,252.245,0,261.222,0,272.25v146.756 c0,11.03,8.969,19.999,19.998,19.999h77.479c11.029,0,19.999-8.969,19.999-19.999V272.25 C117.477,261.222,108.507,252.245,97.478,252.245z M23.96,276.205h69.556v126.859H23.96V276.205z M58.745,429.287 c-2.199,0-4.164-0.89-5.663-2.262c-1.699-1.544-2.792-3.712-2.792-6.185c0-4.665,3.776-8.439,8.455-8.439 c4.648,0,8.425,3.774,8.425,8.439c0,2.473-1.093,4.64-2.778,6.185C62.895,428.397,60.93,429.287,58.745,429.287z"></path> </g> </g></svg>
                                    <h4 className="text-secondary font-weight-light mb-2">Mobile/Web Hosting</h4>
                                    <p className="font-size-sm mb-0">Basic Web and Mobile Plan for small singe webpage application.</p>
                                </CardHeader>
                                <CardHeader className='border-bottom justify-content-center py-4'>
                                    <h2 className="pricing-price">
                                        <small className="align-self-start">Start at $</small>
                                        79.99
                                        <small className="align-self-end">/month</small>
                                    </h2>
                                </CardHeader>
                                <CardBody>
                                    <ul className="list-unstyled font-size-sm mb-0">
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check text-success mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="text-secondary ml-1">Custom Domain</span></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check text-success mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="text-secondary ml-1">Monthly Maintainance</span></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check text-success mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="text-secondary ml-1">README.txt included</span></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check text-success mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="text-secondary ml-1">Requirements.txt included</span></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check text-success mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="text-secondary ml-1">24 hour Support</span></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check text-success mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="text-secondary ml-1">Technical Documentation</span></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check text-success mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="text-secondary ml-1">AWS Deployment</span></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check text-success mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="text-secondary ml-1">Much More</span></li>
                                    </ul>
                                </CardBody>
                                <CardFooter className='justify-content-center p-3'>
                                    <Button color='warning' disabled>Inquire Below</Button>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col sm={6} xl={3} className='mb-3'>
                            <Card className='border border-warning'>
                                <CardHeader className='border-bottom flex-column align-items-start p-3'>
                                    <svg style={{padding: "7px"}} width={38} height={38} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V352c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>
                                    <h4 className="text-secondary font-weight-light mb-2">Backend Server Plan</h4>
                                    <p className="font-size-sm mb-0">Plan to maintain Server for continuous upkeeping.</p>
                                </CardHeader>
                                <CardHeader className='border-bottom justify-content-center py-4'>
                                    <h2 className="pricing-price">
                                        <small className="align-self-start">Start at $</small>
                                        199.99
                                        <small className="align-self-end">/month</small>
                                    </h2>
                                </CardHeader>
                                <CardBody>
                                    <ul className="list-unstyled font-size-sm mb-0">
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check text-success mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="text-secondary ml-1">All Mobile/Web Hosting Plan</span></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check text-success mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="text-secondary ml-1">Kubernetes for Horizontal Scaling</span></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check text-success mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="text-secondary ml-1">Unlimited Bandwidth</span></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check text-success mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="text-secondary ml-1">Industry Hosting</span></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check text-success mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="text-secondary ml-1">Functionality Maintenance</span></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check text-success mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="text-secondary ml-1">Bootstrap.sh for CI/CD</span></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check text-success mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="text-secondary ml-1">Containerized Environment</span></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check text-success mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="text-secondary ml-1">Much More</span></li>
                                    </ul>
                                </CardBody>
                                <CardFooter className='justify-content-center p-3'>
                                    <Button color='warning' disabled>Inquire Below</Button>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col sm={6} xl={3} className='mb-3'>
                            <Card className='border border-warning'>
                                <CardHeader className='border-bottom flex-column align-items-start p-3'>
                                    <svg style={{padding: "7px"}} width={38} height={38} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"/></svg>
                                    <h4 className="text-secondary font-weight-light mb-2">Database Server Plan</h4>
                                    <p className="font-size-sm mb-0">Plan to maintain Database for continuous upkeeping.</p>
                                </CardHeader>
                                <CardHeader className='border-bottom justify-content-center py-4'>
                                    <h2 className="pricing-price">
                                        <small className="align-self-start">Start at $</small>
                                        349.99
                                        <small className="align-self-end">/month</small>
                                    </h2>
                                </CardHeader>
                                <CardBody>
                                    <ul className="list-unstyled font-size-sm mb-0">
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check text-success mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="text-secondary ml-1">All Backend Server Plan</span></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check text-success mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="text-secondary ml-1">.env file implemented</span></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check text-success mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="text-secondary ml-1">Monthly Analytical Reports</span></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check text-success mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="text-secondary ml-1">Database Cleansing Monthly</span></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check text-success mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="text-secondary ml-1">Async Database Transactions</span></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check text-success mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="text-secondary ml-1">Monthly API Updates</span></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check text-success mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="text-secondary ml-1">Monthly Transactions Report</span></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check text-success mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="text-secondary ml-1">Much More</span></li>
                                    </ul>
                                </CardBody>
                                <CardFooter className='justify-content-center p-3'>
                                    <Button color='warning' disabled>Inquire Below</Button>
                                </CardFooter>
                            </Card>
                        </Col>
                        <Col sm={6} xl={3} className='mb-3'>
                            <Card className='border border-warning'>
                                <CardHeader className='border-bottom flex-column align-items-start p-3'>
                                    <svg style={{padding: "7px"}} width={38} height={38} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M264.5 5.2c14.9-6.9 32.1-6.9 47 0l218.6 101c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 149.8C37.4 145.8 32 137.3 32 128s5.4-17.9 13.9-21.8L264.5 5.2zM476.9 209.6l53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 277.8C37.4 273.8 32 265.3 32 256s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0l152-70.2zm-152 198.2l152-70.2 53.2 24.6c8.5 3.9 13.9 12.4 13.9 21.8s-5.4 17.9-13.9 21.8l-218.6 101c-14.9 6.9-32.1 6.9-47 0L45.9 405.8C37.4 401.8 32 393.3 32 384s5.4-17.9 13.9-21.8l53.2-24.6 152 70.2c23.4 10.8 50.4 10.8 73.8 0z"/></svg>
                                    <h4 className="text-secondary font-weight-light mb-2">Fullstack Preminum Plan</h4>
                                    <p className="font-size-sm mb-0">Plan to maintain FullStack E-commerce Application.</p>
                                </CardHeader>
                                <CardHeader className='border-bottom justify-content-center py-4'>
                                    <h2 className="pricing-price">
                                        <small className="align-self-start">Start at $</small>
                                        599.99
                                        <small className="align-self-end">/month</small>
                                    </h2>
                                </CardHeader>
                                <CardBody>
                                    <ul className="list-unstyled font-size-sm mb-0">
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check text-success mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="text-secondary ml-1">All Database Server Plan</span></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check text-success mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="text-secondary ml-1">Application Monitized</span></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check text-success mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="text-secondary ml-1">Payment System Updated Monthly</span></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check text-success mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="text-secondary ml-1">Admin System Support</span></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check text-success mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="text-secondary ml-1">Data Warehousing Support</span></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check text-success mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="text-secondary ml-1">Authentication System Support</span></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check text-success mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="text-secondary ml-1">Priority Security Technology</span></li>
                                        <li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check text-success mr-2"><polyline points="20 6 9 17 4 12"></polyline></svg><span className="text-secondary ml-1">Much More</span></li>
                                    </ul>
                                </CardBody>
                                <CardFooter className='justify-content-center p-3'>
                                    <Button color='warning' disabled>Inquire Below</Button>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </main>
        )
    }
}