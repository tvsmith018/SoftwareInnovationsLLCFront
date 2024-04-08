'use client'
import {navigationbar} from '@/app/views/homepage/navigationmenuview/navigationmenuview'
import {contactForm} from '@/app/views/homepage/ContactView/contactView'
import {ProjectsView} from '@/app/views/projectspage/projectsview'

export default function ProjectsPage() {
    return (
        <>
            {navigationbar}
            <ProjectsView />
            {contactForm}
        </>
    )
}