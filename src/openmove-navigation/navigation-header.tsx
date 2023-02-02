import './navigation-header.css'

import {classes} from '@eviljs/solid/classes'
import type {JSX} from 'solid-js'
import {LogoEmblemIconLazy, LogoNameIconLazy} from '~/icons/all'

export function NavigationHeader(props: NavigationHeaderProps) {
    return (
        <nav
            {...props}
            class={classes('NavigationHeader-06c9 std-flex column align-center gap4', props.class)}
        >
            <div class="menu-9f49 std-flex gap3">
                <a class="item-15c0">Chi Siamo</a>
                <a class="item-15c0">Contatti</a>
            </div>

            <a class="brand-fe3e std-flex align-center gap4">
                <LogoEmblemIconLazy class="std-icon10"/>
                <LogoNameIconLazy style="height: var(--std-icon9);"/>
            </a>
        </nav>
    )
}

// Types ///////////////////////////////////////////////////////////////////////

export interface NavigationHeaderProps extends JSX.HTMLAttributes<HTMLElement> {
}
