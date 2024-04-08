'use client'
import {navigationbar} from '@/app/views/homepage/navigationmenuview/navigationmenuview'
import {contactForm} from '@/app/views/homepage/ContactView/contactView'

import {DatabaseServicesSection} from '@/app/views/databaseserviceview/databaseserviceview'


export default function Databaseservices() {
    return(
        <>
            {navigationbar}
            <DatabaseServicesSection />
            {contactForm}
        </>
    )
}