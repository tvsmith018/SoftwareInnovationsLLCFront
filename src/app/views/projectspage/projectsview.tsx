import react from 'react'
import { Container, Row, Col, Button } from 'reactstrap'
import Image from 'next/image'
import rtpPic from '../../../../public/rtpPic.jpeg'
import kenPic from '../../../../public/KensServicesImg.png'
import chiefPic from '../../../../public/bigChieflol.png'

import styles from './projectsviewstyle.module.css'

export class ProjectsView extends react.Component {
    render() {
        return(
            <main className={styles.projectsMain}>
                <h3 className={styles.projectMainTitle}>Projects</h3>
                <section className='my-3'>
                    <Container fluid={true}>
                        <Row>
                            <Col sm={12} md={4}>
                                <Image src={rtpPic} priority={true} alt="Image of Our partner RTP LLC" className="rounded-circle d-block mx-auto mt-3" width="140" height="140"/>
                                <h5 className={`mt-2 text-center ${styles.projectSubTitle}`}>RTP World</h5>
                                <p className={`mt-2 px-3 ${styles.projectP}`}>
                                    RTP LLC, a well-known Music Company, has a plethora of offerings. Rooted in the music industry, this project 
                                    holds a special place among our favorites, and you will soon have the opportunity to explore it.
                                </p>
                                <p className='mt-1 text-center'><Button tag="a" disabled style={{backgroundColor: "lightcoral", border: "solid lightcoral"}}>Coming Soon &raquo;</Button></p>
                            </Col>
                            <Col sm={12} md={4}>
                                <Image src={kenPic} priority={true} alt="Image of Our partner Ken's Services LLC" className="rounded-circle d-block mx-auto mt-3" width="140" height="140"/>
                                <h5 className={`mt-2 text-center ${styles.projectSubTitle}`}>Ken's Services</h5>
                                <p className={`mt-2 px-3 ${styles.projectP}`}>
                                    Ken's Services provides a wide range of products, including cars and household appliances. 
                                    Taking inspiration from Amazon, their goal is to become the largest online retail service owned 
                                    by African Americans.
                                </p>
                                <p className='mt-1 text-center'><Button tag="a" disabled style={{backgroundColor: "lightcoral", border: "solid lightcoral"}}>Coming Soon &raquo;</Button></p>
                            </Col>
                            <Col sm={12} md={4}>
                                <Image src={chiefPic} priority={true} alt="Image of Our partner Big Chief ENT" className=" d-block mx-auto mt-3" width="160" height="140"/>
                                <h5 className={`mt-2 text-center ${styles.projectSubTitle}`}>Big Chief Ent.</h5>
                                <p className={`mt-2 px-3 ${styles.projectP}`}>
                                    Big Chief Ent, a cutting-edge social media platform rooted in hip-hop culture, aims to transform the 
                                    landscape of social media by empowering individuals with an authentic voice and the ability to monetize 
                                    their content right from the start.
                                </p>
                                <p className='mt-1 text-center'><Button tag="a" disabled style={{backgroundColor: "lightcoral", border: "solid lightcoral"}}>Coming Soon &raquo;</Button></p>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        )
    }
}