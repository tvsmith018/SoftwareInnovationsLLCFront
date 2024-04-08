'use client'
import {navigationbar} from '@/app/views/homepage/navigationmenuview/navigationmenuview'
import {contactForm} from '@/app/views/homepage/ContactView/contactView'
import {MissionStatementView} from '@/app/views/missionstatementpage/missionstatementview'

export default function MissionStatementPage() {
    return (
        <>
            {navigationbar}
            <MissionStatementView />
            {contactForm}
        </>
    )
}