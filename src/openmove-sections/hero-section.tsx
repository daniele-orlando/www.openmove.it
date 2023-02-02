import './hero-section.css'

import {classes} from '@eviljs/solid/classes'
import type {JSX} from 'solid-js'
import {createI18nSelector} from '~/i18n/hooks'
import {NavigationHeader} from '~/openmove-navigation/navigation-header'
import {pictureUrlOptional} from '~/resource/apis'
import {useStore} from '~/store/hooks'

export function HeroSection(props: HeroSectionProps) {
    const [state] = useStore()!
    const i18nSelect = createI18nSelector()

    return (
        <header
            {...props}
            class={classes('HeroSection-26c1 std-flex column', props.class)}
        >
            <div class="content-5e64 std-layer-root">
                <div class="display-632f std-flex center">
                    <h2 class="title-3d20 std-flex center std-gap-column5 wrap std-text-weight2 std-text-lowercase std-text-height0">
                        <span>Parkour</span>
                        {/* <span>A.D.D.</span> */}
                        <span>Academy</span>
                    </h2>
                </div>

                <div class="poster-e885 std-layer" role="presentation">
                    <img
                        class="std-cover std-media-cover"
                        src={pictureUrlOptional(
                            i18nSelect(state.pictures?.['Picture/7'])?.handle,
                            'webp',
                            {fit: 'crop', width: 1600, height: 400, quality: 40},
                        )}
                    />
                </div>
            </div>

            <NavigationHeader/>
        </header>
    )
}

// Types ///////////////////////////////////////////////////////////////////////

export interface HeroSectionProps extends JSX.HTMLAttributes<HTMLElement> {
}
