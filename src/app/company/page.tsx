'use client'
import {navigationbar} from '@/app/views/homepage/navigationmenuview/navigationmenuview'
import {contactForm} from '@/app/views/homepage/ContactView/contactView'
import {CompanySectionView} from '@/app/views/companypage/companysectionview'

export default function CompanyPage() {
    return (
        <>
            {navigationbar}
            <CompanySectionView />
            {contactForm}
        </>
    )
}