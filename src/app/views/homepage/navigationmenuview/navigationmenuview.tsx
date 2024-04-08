import { Squash as Hamburger } from 'hamburger-react'
import react from 'react'
import Image from 'next/image'
import logo from '../../../../../public/Software.png'
import styles from '../navigationmenuview/navigationmenuviewstyle.module.css'
import './navigationcustomBootstrap.css'

import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';


class NavigationMenuView extends react.Component {

  state = {
    isopen: false,
    navCarat: ""
  }

  constructor(props: any) {
    super(props)
  }

  toggle = () => {
    this.setState({
      isopen: !this.state.isopen
    });
  }

  componentDidMount(): void {
    
  }

  componentWillUnmount(): void {
    
  }

  render() {
    return (
      <Navbar expand="md" className={styles.navbarCustom} fixed="top" container={false}>
        <NavbarBrand href="/">
          <Image src={logo} alt="Site logo" priority={true} className={styles.navbarlogo}/>
        </NavbarBrand>
        <div className={styles.togglerStyle}>
          <Hamburger toggled={this.state.isopen} toggle={this.toggle}/>
        </div>
        <Collapse isOpen={this.state.isopen} navbar className={styles.menuStyle}>
          <Nav navbar className='mx-auto'>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                About
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem className={styles.customHover}>
                  <NavItem>
                    <NavLink href="/missionstatement">Misson</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem className={styles.customHover}>
                  <NavItem>
                    <NavLink href="/ceo">CEO Profile</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem className={styles.customHover}>
                  <NavItem>
                    <NavLink href="/company">Company</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem className={styles.customHover}>
                  <NavItem>
                    <NavLink href="/projects">Projects</NavLink>
                  </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav={true} inNavbar={true}>
              <DropdownToggle nav={true} caret>
                Services
              </DropdownToggle>
              <DropdownMenu end={false}>
                <DropdownItem className={styles.customHover}>
                <NavItem>
                  <NavLink href="/webservices">Web Applications</NavLink>
                </NavItem>
                </DropdownItem>
                <DropdownItem className={styles.customHover}>
                  <NavItem>
                    <NavLink href="/mobileservices">Mobile Applications</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem className={styles.customHover}>
                  <NavItem>
                    <NavLink href="/databaseservices">Database Services</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem className={styles.customHover}>
                  <NavItem>
                    <NavLink href="/moreservices">More</NavLink>
                  </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink disabled={true}>
                Careers
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }

}

export const navigationbar = <NavigationMenuView />;