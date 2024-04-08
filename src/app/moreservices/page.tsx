'use client'
import {navigationbar} from '@/app/views/homepage/navigationmenuview/navigationmenuview'
import {contactForm} from '@/app/views/homepage/ContactView/contactView'
import {MoreserviceView} from '@/app/views/moreservicepage/moreserviceview'

export default function Moreservices() {
    return(
        <>
            {navigationbar}
            <MoreserviceView />
            {contactForm}
        </>
    )
}