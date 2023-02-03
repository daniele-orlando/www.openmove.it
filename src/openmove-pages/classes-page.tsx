import './classes-page.css'

import {classes} from '@eviljs/solid/classes'
import {Text} from '@eviljs/solid/text'
import {TextHtml} from '@eviljs/solid/text-html'
import type {JSX} from 'solid-js'
import {createI18nSelector} from '~/i18n/hooks'
import {HeroSection} from '~/openmove-sections/hero-section'
import {pictureUrlOptional} from '~/resource/apis'
import {useStore} from '~/store/hooks'

export function ClassesPage(props: ClassesPageProps) {
    return (
        <main
            {...props}
            class={classes('ClassesPage-2282', props.class)}
        >
            <HeroSection/>

            <article class="body-3076">
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
            CORSI TODO
        </>
    )
}

// Types ///////////////////////////////////////////////////////////////////////

export interface ClassesPageProps extends JSX.HTMLAttributes<HTMLElement> {
}
