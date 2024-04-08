import React from 'react'
import styles from './databaseserviceviewstyle.module.css'
import { Button, Container, Row, Col, Card, CardBody } from 'reactstrap'

export class DatabaseServicesSection extends React.Component {
    render(): React.ReactNode {
        return (
            <main style={{paddingTop: "95px", color: "rgb(75, 68, 104)"}}>
                <section className={`${styles.ServiceSectionHeader} ${styles.headerTint}`}>
                    <div className={styles.innerHeaderContainer}>
                        <h1>Database Services</h1>
                        <p style={{padding: "0 16px"}}>Data-driven applications have become the new standard for all individuals and businesses alike.</p>
                        <Button style={{backgroundColor:"lightcoral", borderColor:"lightcoral"}}>More Services</Button>
                    </div>
                </section>
                <section className={`bg-light py-5 py-xl-8 ${styles.infoSection}`}>
                    <Container className='overflow-hidden'>
                        <Row className='justify-content-md-center'>
                            <Col sm={12} md={10} lg={8} xl={7}>
                                <h3 className="fs-6 mb-2 text-secondary text-center text-uppercase">What Database Services We Provide?</h3>
                                <h2 className="display-5 mb-5 text-center">We provide a wide range of services, including maintaining and enhancing existing databases as well as designing and developing new data warehousing systems from scratch.</h2>
                                <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
                            </Col>
                        </Row>
                        <Row className="gy-4">
                            <Col xs={12} sm={6} xl={3}>
                                <Card className="border-0 border-bottom border-warning shadow-sm">
                                    <CardBody className="card-body text-center p-4 p-xxl-5">
                                        <svg width={56} height={56} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                            <path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"/>
                                        </svg>
                                        <h4 className="mb-4">Database Design</h4>
                                        <p className="mb-4 text-secondary">
                                            Our team specializes in developing and managing databases that serve as independent tools for administrative purposes 
                                            or as foundational resources for data-driven applications.
                                        </p>
                                        <a href="https://support.microsoft.com/en-us/office/database-design-basics-eb2159cf-1e30-401a-8084-bd4f9c9ca1f5" target="_blank" className="fw-bold text-decoration-none link-warning">
                                            Learn More
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                            </svg>
                                        </a>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs={12} sm={6} xl={3}>
                                <Card className="border-0 border-bottom border-warning shadow-sm">
                                    <CardBody className="card-body text-center p-4 p-xxl-5">
                                        <svg width={56} height={56} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path d="M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V352c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/>
                                        </svg>
                                        <h4 className="mb-4">Server</h4>
                                        <p className="mb-4 text-secondary">
                                            We store all databases on cloud-based servers like AWS or Google Cloud or Firebase, and we also develop APIs and GUIs for 
                                            seamless interaction with your database.
                                        </p>
                                        <a href="https://www.paessler.com/it-explained/server" target='_blank' className="fw-bold text-decoration-none link-warning">
                                            Learn More
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                            </svg>
                                        </a>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs={12} sm={6} xl={3}>
                                <Card className="border-0 border-bottom border-warning shadow-sm">
                                    <CardBody className="card-body text-center p-4 p-xxl-5">
                                        <svg width={56} height={56} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                            <path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V288H64V64H512z"/>
                                        </svg>
                                        <h4 className="mb-4">DBMS</h4>
                                        <p className="mb-4 text-secondary">
                                            Our DBMS leverages Python, Java, and C++ to proficiently manage your database, providing interactive functionality
                                            tailored to suit your application requirements.
                                        </p>
                                        <a href="https://www.techtarget.com/searchdatamanagement/definition/database-management-system#:~:text=What%20is%20a%20database%20management,delete%20data%20in%20a%20database." target='_blank' className="fw-bold text-decoration-none link-warning">
                                            Learn More
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
                                            </svg>
                                        </a>
                                    </CardBody>
                                </Card>
                            </Col>
                            <Col xs={12} sm={6} xl={3}>
                                <Card className="border-0 border-bottom border-warning shadow-sm">
                                    <CardBody className="card-body text-center p-4 p-xxl-5">
                                        <svg width={56} height={56} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                            <path d="M256 64H384v64H256V64zM240 0c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h48v32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96v32H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H240c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H192V288H448v32H400c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48H560c26.5 0 48-21.5 48-48V368c0-26.5-21.5-48-48-48H512V288h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V192h48c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H240zM96 448V384H224v64H96zm320-64H544v64H416V384z"/>
                                        </svg>
                                        <h4 className="mb-4">Database Scheme</h4>
                                        <p className="mb-4 text-secondary">
                                            We design your database and/or data warehouse using industry standards and principles optimizes the development process, 
                                            ensuring seamless functionalities.
                                        </p>
                                        <a href="https://www.ibm.com/topics/database-schema" target='_blank' className="fw-bold text-decoration-none link-warning">
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