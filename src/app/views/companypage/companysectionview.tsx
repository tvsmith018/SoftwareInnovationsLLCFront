import react from 'react'
import Image from 'next/image'
import processimg from '../../../../public/processImg.jpeg'
import companyteam1 from '../../../../public/companyteam1.jpeg'
import womanImg from '../../../../public/womanCoding.jpeg'
import styles from '../companypage/companysectionviewstyle.module.css'

export class CompanySectionView extends react.Component {
    render() {
        return(
            <main className={styles.companyMain}>
                <section className={styles.companySection}>
                    <h3>Company</h3>
                    <div className={styles.companySectionInfo}>
                        <div className={styles.sectioninfoContainer}>
                            <Image src={companyteam1} alt="Two engineers working together" priority={true} className={styles.companyImage1}/>
                            <ul>
                                <li>
                                    Established on August 3rd, 2023, Software Innovations specializes in developing web and mobile applications for small 
                                    businesses and self-employed individuals.
                                </li>
                                <li>
                                    Our expertise lies in creating user-friendly single page or small ecommerce sites that can be easily managed and scaled as 
                                    your company expands.
                                </li>
                                <li>
                                    We are committed to providing innovative software solutions that cater to the specific needs of small businesses and 
                                    self-employed professionals.
                                </li>
                            </ul>  
                        </div>
                        <div className={styles.sectioninfoContainerReverse}>
                            <Image src={processimg} alt="Software Engineer Methodelogy" priority={true} className={styles.softwareMethodsImg}/>
                            <ul>
                                <li>
                                    With our agile approach, we prioritize collaboration, adaptability, and continuous improvement to deliver high-quality solutions.
                                </li>
                                <li>
                                    By leveraging the agile methodology, we break down the development process into smaller, manageable phases called sprints. 
                                </li>
                                <li>
                                    This iterative process ensures that we can quickly respond to changing market demands and evolving customer needs. 
                                </li>
                                <li>
                                    By continuously fine-tuning our solutions, we ensure that our applications are not only fully autonomous but also intuitive and user-friendly.
                                </li>
                            </ul>
                        </div>
                        <div className={styles.sectioninfoContainer}>
                            <Image src={womanImg} alt="Woman Coder" priority={true} className={styles.womanCoderImg}/>
                            <p>"We are committed to providing innovative software solutions that cater to the specific needs of small businesses and self-employed professionals."</p>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}