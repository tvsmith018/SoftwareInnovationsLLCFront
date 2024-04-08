'use client'
import {navigationbar} from '@/app/views/homepage/navigationmenuview/navigationmenuview'
import {contactForm} from '@/app/views/homepage/ContactView/contactView'
import { MobileServicesSection } from '../views/mobileserviceview/mobileserviceview'


export default function Mobileservices() {
    return(
        <>
            {navigationbar}
            <MobileServicesSection />
            {contactForm}
        </>
    )
}