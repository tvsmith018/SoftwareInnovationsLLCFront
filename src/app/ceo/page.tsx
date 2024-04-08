'use client'
import {navigationbar} from '@/app/views/homepage/navigationmenuview/navigationmenuview'
import {contactForm} from '@/app/views/homepage/ContactView/contactView'
import {CeoSectionView} from '@/app/views/ceopage/ceosectionview'

export default function CeoPage() {
    return (
        <>
            {navigationbar}
            <CeoSectionView />
            {contactForm}
        </>
    )
}