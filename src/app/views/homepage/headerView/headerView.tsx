import react from 'react'
import Image from 'next/image'
import teamPic from '../../../../../public/teamPic.jpeg'
import styles from '../headerView/headerViewStyle.module.css'

import {
  Container,
  Row, 
  Col
} from 'reactstrap'


class HeaderView extends react.Component {
  
  render() {
    return (
      <section className={styles.header}>
        <Container>
          <Row className='pb-md-3'>
            <Col sm={12} md={6} style={{display: "flex"}}>
              <Row style={{margin:"auto 0"}}>
                <Col sm={12}>
                  <div className="vstack">
                    <h1 className={styles.softwareHeaderTitle}>Software</h1>
                    <h1 className={styles.innovationsHeaderTitle }>Innovations</h1>
                    <h3 className={styles.sloganHeader}>Where Creativity Happens</h3>
                  </div>
                </Col>
                <Col sm={12}>
                  <p className={`mt-3 ${styles.briefpara}`}>
                    We are a software company that specialize in full stack development of single page apps for small businesses and entrepreneurs.
                    Click <a href="/company" style={{textDecoration: "none", color:"lightcoral"}}>here</a> to learn more.
                  </p>
                </Col>
              </Row>  
            </Col>
            <Col sm={12} md={6}>
              <Image src={teamPic} alt="Team Meeting Photo" className={`img-fluid mt-3 mt-md-4 mb-2 p-3 p-md-0 rounded-5`} priority={true}/>
            </Col>
          </Row>
        </Container>
      </section>
    )
  }
}
// class HeaderView extends react.Component<HeaderProps> {

//     constructor(props:any){
//         super(props)
//     }

//     render() {
//       return (
//         <section className={this.props.header}>
//           <div className={this.props.headerTexts}>
//             <div>
//               <div className={this.props.headerTitles}>
//                 <h1 className={this.props.softwareHeaderTitle}>Software</h1>
//                 <h1 className={this.props.innovationsHeaderTitle}>Innovations</h1>
//               </div>
//               <h3 className={this.props.sloganHeader}>Where Creativity Happens</h3>
//             </div>
//             <p className={this.props.introHeader}>We are a software company that specialize in full stack development of single page apps for small businesses and entrepreneurs. Click <a href="/company" style={{textDecoration: "none", color:"lightcoral"}}>here</a> to learn more.</p>
//           </div>
//           <Image src={teamPic} alt="Team Meeting Photo" className={this.props.imageHeader} priority={true}/>
//         </section>
//       )
//     }
// }

export const homeHeader = <HeaderView/>