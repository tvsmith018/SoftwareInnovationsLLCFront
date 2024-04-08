'use client'
import {navigationbar} from '@/app/views/homepage/navigationmenuview/navigationmenuview'
import {contactForm} from '@/app/views/homepage/ContactView/contactView'
import { WebServicesSection } from '../views/webserviceview/webserviceview'


export default function Webservices() {
    return(
        <>
            {navigationbar}
            <WebServicesSection />
            {contactForm}
        </>
    )
}