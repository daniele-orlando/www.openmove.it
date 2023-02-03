import './home-page.css'

import {classes} from '@eviljs/solid/classes'
import {Text} from '@eviljs/solid/text'
import {TextHtml} from '@eviljs/solid/text-html'
import type {JSX} from 'solid-js'
import {createEffect, createSignal, Show} from 'solid-js'
import {createI18nSelector} from '~/i18n/hooks'
import {LogoNameIconLazy, PlayIconLazy} from '~/icons/all'
import {HeroSection} from '~/openmove-sections/hero-section'
import {pictureUrlOptional} from '~/resource/apis'
import {useStore} from '~/store/hooks'

export function HomePage(props: HomePageProps) {
    return (
        <main
            {...props}
            class={classes('HomePage-4422', props.class)}
        >
            <HeroSection/>

            <article class="body-e45c">
                <Sections/>
            </article>
        </main>
    )
}

export function Sections() {
    const [state] = useStore()!
    const [showPlayer, setShowPlayer] = createSignal(false)
    const i18nSelect = createI18nSelector()
    const [videoElement, setVideoElement] = createSignal<HTMLVideoElement>()

    createEffect(() => {
        videoElement()?.play()
    })

    return (
        <>
            <section class="Section-3411">
                <div class="layout-18b0 std-flex row-reverse align-center wrap gap6 page-viewport">
                    <div class="content-de9f">
                        <LogoNameIconLazy style="height: var(--std-icon6);"/>

                        <TextHtml tag="p" class="description-cf88">
                            TextMarkdown/1
                        </TextHtml>
                    </div>

                    <div class="picture-81ab">
                        <img
                            class="std-cover std-media-cover brand-shape radius"
                            src={pictureUrlOptional(i18nSelect(state.pictures?.['Picture/2'])?.handle, 'webp')}
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>
            </section>

            <section class="Section-e2a3">
                <div class="layout-4e56 page-viewport wide std-flex align-start wrap gap6">
                    <div class="column-dce2 std-flex center">
                        <div class="prose-fb40">
                            <Text tag="h3" class="title-9ec2">
                                Text/1
                            </Text>
                            <TextHtml tag="p" class="description-cf88">
                                TextMarkdown/2
                            </TextHtml>

                            <i class="std-space-v s4"/>

                            <div class="std-flex center">
                                <button class="std-button with-icon arrow">
                                    <Text class="std-text-uppercase std-text-descender0">
                                        Vieni a trovarci
                                    </Text>
                                    <PlayIconLazy class="std-icon2"/>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="gallery-86f7 std-flex align-start wrap gap4">
                        <div class="picture-a3a4 raised">
                            <img
                                class="std-cover std-media-cover brand-shape radius"
                                src={pictureUrlOptional(i18nSelect(state.pictures?.['Picture/3'])?.handle, 'webp')}
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                        <div class="picture-a3a4 raised">
                            <img
                                class="std-cover std-media-cover brand-shape radius"
                                src={pictureUrlOptional(i18nSelect(state.pictures?.['Picture/5'])?.handle, 'webp')}
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                        <div class="picture-a3a4 raised">
                            <img
                                class="std-cover std-media-cover brand-shape radius"
                                src={pictureUrlOptional(i18nSelect(state.pictures?.['Picture/4'])?.handle, 'webp')}
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section class="Section-5c1d">
                <div class="layout-3a71 page-viewport std-flex center align-center wrap gap5">
                    <div class="content-1b5c std-flex column gap5">
                        <TextHtml tag="p" class="quote-98a3 description-cf88">
                            TextMarkdown/3
                        </TextHtml>

                        <div class="std-flex center">
                            <button class="std-button with-icon arrow">
                                <Text class="std-text-uppercase std-text-descender0">
                                    Vieni a trovarci
                                </Text>
                                <PlayIconLazy class="std-icon2"/>
                            </button>
                        </div>
                    </div>

                    <div class="separator-68f4"></div>

                    <div class="thumb-8c5f">
                        <div class={classes('player-f889 std-layer-root', {expanded: showPlayer()})}>
                            <div
                                class="overlay-f52b"
                                onClick={() => setShowPlayer(false)}
                            />

                            <Show when={i18nSelect(state.movies?.['Movie/1'])}>
                                <video
                                    class="video-6af0 std-cover std-media-cover"
                                    ref={setVideoElement}
                                    autoplay
                                    muted
                                    playsinline
                                    controls={showPlayer()}
                                    loop={! showPlayer()}
                                    onClick={() => setShowPlayer(true)}
                                >
                                    <source
                                        type={i18nSelect(state.movies?.['Movie/1'])?.mimeType ?? undefined}
                                        src={i18nSelect(state.movies?.['Movie/1'])?.url}
                                    />
                                </video>
                            </Show>

                            <div
                                class="controls-f6f0 std-layer std-flex stack"
                                onClick={() => setShowPlayer(true)}
                            >
                                <PlayIconLazy class="play-icon-311e std-icon6"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="Section-c5df reverse">
                <div class="content-b340">
                    <h3 class="title-9ec2">
                        Sistema di valori
                    </h3>
                    <p class="description-cf88">
                        Disciplina, allenamento, focalizzazione, responsabilità,
                        rispetto per gli altri e per l'ambiente,
                        fratellanza, sono alcuni dei valori cardine alla base
                        del nostro metodo d'insegnamento.
                    </p>
                </div>
                <div class="picture-5bc9">
                    <img
                        class="std-cover std-media-cover"
                        src={pictureUrlOptional(i18nSelect(state.pictures?.['Picture/4'])?.handle, 'webp')}
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            </section>

            <section class="Section-c5df reverse">
                <div class="content-b340">
                    <h3 class="title-9ec2">
                        Equilibrio
                    </h3>
                    <p class="description-cf88">
                        Crediamo che il movimento sia un aspetto imprescindibile
                        nell'equilibrio e nella salute psico-fisica dell'individuo.
                    </p>
                </div>
                <div class="picture-5bc9">
                    <img
                        class="std-cover std-media-cover"
                        src={pictureUrlOptional(i18nSelect(state.pictures?.['Picture/4'])?.handle, 'webp')}
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            </section>

            <section class="Section-c5df reverse">
                <div class="content-b340">
                    <h3 class="title-9ec2">
                        Cultura
                    </h3>
                    <p class="description-cf88">
                        Promuoviamo la cultura del movimento attraverso
                        corsi per bambini, ragazzi ed adulti.
                    </p>
                </div>
                <div class="picture-5bc9">
                    <img
                        class="std-cover std-media-cover"
                        src={pictureUrlOptional(i18nSelect(state.pictures?.['Picture/4'])?.handle, 'webp')}
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            </section>

            <section class="Section-6bcb std-flex column align-center gap2">
                <p class="title-9ec2">
                    Vieni a scoprire
                </p>

                <div class="options-6b44 std-cover-h std-flex wrap gap4">
                    <div class="option-8fe0">
                        <img
                            class="picture-14b7"
                            src={pictureUrlOptional(i18nSelect(state.pictures?.['Picture/5'])?.handle, 'webp')}
                            loading="lazy"
                            decoding="async"
                        />
                        <h6 class="overline-13b0">
                            Corsi
                        </h6>
                        <h3 class="title-8499">
                            Lanciano
                        </h3>
                    </div>
                    <div class="option-8fe0">
                        <img
                            class="picture-14b7"
                            src={pictureUrlOptional(i18nSelect(state.pictures?.['Picture/4'])?.handle, 'webp')}
                            loading="lazy"
                            decoding="async"
                        />
                        <h6 class="overline-13b0">
                            Corsi
                        </h6>
                        <h3 class="title-8499">
                            Pescara
                        </h3>
                    </div>
                </div>
            </section>
        </>
    )
}

// Types ///////////////////////////////////////////////////////////////////////

export interface HomePageProps extends JSX.HTMLAttributes<HTMLElement> {
}
