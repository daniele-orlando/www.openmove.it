import './contacts-page.css'

import {classes} from '@eviljs/solid/classes'
import {Text} from '@eviljs/solid/text'
import {TextHtml} from '@eviljs/solid/text-html'
import type {JSX} from 'solid-js'
import {createI18nSelector} from '~/i18n/hooks'
import {HeroSection} from '~/openmove-sections/hero-section'
import {pictureUrlOptional} from '~/resource/apis'
import {useStore} from '~/store/hooks'

export function ContactsPage(props: ContactsPageProps) {
    return (
        <main
            {...props}
            class={classes('ContactsPage-c34a', props.class)}
        >
            <HeroSection/>

            <article class="body-0737">
                <Sections/>
            </article>
        </main>
    )
}

export function Sections() {
    const [state] = useStore()!
    const i18nSelect = createI18nSelector()

    return (
        <>
            CONTATTI TODO
        </>
    )
}

// Types ///////////////////////////////////////////////////////////////////////

export interface ContactsPageProps extends JSX.HTMLAttributes<HTMLElement> {
}
