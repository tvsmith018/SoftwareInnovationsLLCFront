import react from 'react'
import Image from 'next/image'
import TerranceImg from '../../../../public/Terrance.jpeg'
import styles from '../ceopage/ceosectionviewstyle.module.css'

export class CeoSectionView extends react.Component {
    render() {
        return(
            <main className={styles.ceoMain}>
                <h3 className={styles.ceoTitle}>Meet The CEO</h3>
                <section className={styles.ceoSection}>
                    <div className={styles.ceoFacts}>
                        <Image src={TerranceImg} alt="Site logo" priority={true} className={styles.ceoImage}/>
                        <div className={styles.ceoFactsInfo}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Name:</td>
                                        <td>Terrance V. Smith BS, MSc.</td>
                                    </tr>
                                    <tr>
                                        <td>Hometown:</td>
                                        <td>Raleigh, NC</td>
                                    </tr>
                                    <tr>
                                        <td>Projects:</td>
                                        <td>KeyStone Bank, Bet Fanatics, Enhanced IT, Apple</td>
                                    </tr>
                                    <tr>
                                        <td>Education:</td>
                                        <td>B.S Mathematics<br/>M.Sc Computer Engineering</td>
                                    </tr>
                                    <tr>
                                        <td>Favorite:</td> 
                                        <td >Family, Coding, NBA 2k, Reading, Basketball</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className={styles.ceoBioContainer}>
                        <p className={styles.ceobiopara1}>
                            Terrance Smith, a Full Stack Developer, specializes in various technologies such as Python, Javascript, Java, Swift, Kotlin, Relational Databases, 
                            and frameworks like Django, Spring Boot, and React. His expertise lies in developing applications that utilize these technologies to create efficient and 
                            user-friendly software solutions. With his knowledge and skills, Terrance is able to create dynamic websites and applications that meet the needs and expectations 
                            of clients. His proficiency in these technologies allows him to stay updated with the latest trends and advancements in the field, ensuring that the software he 
                            develops is of the highest quality.
                        </p>
                        <p className={styles.ceobiopara2}>
                            Terrance holds a Bachelor of Science degree in Mathematics from St. Augustine's University. He further pursued his education and obtained a Master of Science 
                            degree in Computer Engineering from North Carolina A&T State University. Additionally, he has acquired certification in Web and Mobile Full Stack Development 
                            from the University of North Carolina.
                        </p>
                        <p className={styles.ceoquote}>&#8208;"SUCCESS isn't luck, it's a PROCESS"</p>
                    </div>
                </section>
            </main>
        )
    }
}