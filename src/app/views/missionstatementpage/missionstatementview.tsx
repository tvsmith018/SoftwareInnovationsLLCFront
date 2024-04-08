import react from 'react'
import Image from 'next/image'
import missionStatImg from '../../../../public/missionStatimage.jpeg'

import styles from '../missionstatementpage/missionstatementviewstyle.module.css'

export class MissionStatementView extends react.Component {
    render() {
        return (
            <main className={styles.missionstatementmain}>
                <h3 className={styles.missiontitle}>Mission Statement</h3>
                <Image src={missionStatImg} alt="Site logo" priority={true} className={styles.missionImg}/>
                <div className={styles.missionInfoContainer}>
                    <div>   
                        <h5 className={styles.missionSubHeading}>Vision:</h5>
                        <p className={styles.missionPara}>
                            To be a leading provider of innovative software development, database management, web development, mobile development, and software services, 
                            delivering cutting-edge solutions that empower businesses to thrive in the digital era.
                        </p>
                    </div>
                    <div>
                        <h5 className={styles.missionSubHeading}>Mission:</h5>
                        <p className={styles.missionPara}>
                            Our mission is to partner with businesses of all sizes, across industries, and help them harness the power of technology through our expertise in software 
                            development, databases, web development, mobile development, and software services. 
                        </p>
                        <p className={styles.missionPara}>
                            We strive to deliver high-quality, scalable, and cost-effective 
                            solutions that drive efficiency, productivity, and growth for our clients. With a customer-centric approach, we aim to exceed expectations, 
                            foster long-term relationships, and contribute to the success of our clients in the ever-evolving digital landscape.
                        </p>
                    </div>
                </div>
            </main>
        )
    }
}
