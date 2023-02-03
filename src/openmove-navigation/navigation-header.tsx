import './navigation-header.css'

import {classes} from '@eviljs/solid/classes'
import {Text} from '@eviljs/solid/text'
import {A} from '@solidjs/router'
import type {JSX} from 'solid-js'
import {LogoEmblemIconLazy, LogoNameIconLazy} from '~/icons/all'
import {Routes} from '~/route/apis'

export function NavigationHeader(props: NavigationHeaderProps) {
    return (
        <nav
            {...props}
            class={classes('NavigationHeader-06c9 std-flex column align-center gap4', props.class)}
        >
            <div class="menu-9f49 std-flex gap3">
                <A class="route-15c0" href={Routes.Classes.link()}>
                    <Text>
                        Corsi
                    </Text>
                </A>
                <A class="route-15c0" href={Routes.Contacts.link()}>
                    <Text>
                        Contatti
                    </Text>
                </A>
            </div>

            <A class="brand-fe3e std-flex align-center gap4" href={Routes.Home.link()}>
                <LogoEmblemIconLazy class="std-icon10"/>
                <LogoNameIconLazy style="height: var(--std-icon9);"/>
            </A>
        </nav>
    )
}

// Types ///////////////////////////////////////////////////////////////////////

export interface NavigationHeaderProps extends JSX.HTMLAttributes<HTMLElement> {
}
