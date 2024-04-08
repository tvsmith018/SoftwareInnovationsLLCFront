'use client'
import styles from './page.module.css'

import {navigationbar} from '@/app/views/homepage/navigationmenuview/navigationmenuview'
import {homeHeader} from '@/app/views/homepage/headerView/headerView'
import {servicesSection} from '@/app/views/homepage/ServicesView/serviceView'
import {contactForm} from '@/app/views/homepage/ContactView/contactView'

export default function Home() {
  return (
    <>
      {navigationbar}
      <main className={styles.main}>
        {homeHeader}
        {servicesSection}
      </main>
      {contactForm}
    </>
  )
}
