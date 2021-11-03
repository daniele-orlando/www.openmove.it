<script lang="ts">
    import {defineComponent, inject, ref} from 'vue'
    import * as Routes from '@/lib/routes'
    import {RouteService} from '@/lib/services'
    import {PlayIcon} from '@/lib/widgets/icons'

    export default defineComponent({
        components: {
            PlayIcon,
        },

        setup(props, context) {
            const videoPlayer = ref(false)
            const route = inject(RouteService)

            return {route, Routes, videoPlayer}
        },
    })
</script>

<template>
    <main class="HomePage-4422 std-theme light">
        <header class="hero-92dd">
            <img
                class="poster-e885"
                src="@/data/picture-9.jpg"
                loading="lazy"
            />
            <div class="overlay-e199"/>

            <nav class="header-21c0">
                <ul class="menu-9f49 std-flex">
                    <li class="item-15c0">Home</li>
                    <li class="item-15c0">Chi Siamo</li>
                    <li class="item-15c0">Contatti</li>
                </ul>

                <a :href="route?.link('/') ?? ''">
                    <img
                        class="logo-b6c4"
                        src="@/lib/resources/logo-left.svg"
                        width="300"
                        height="81"
                        loading="lazy"
                        style="filter: invert(1);"
                    />
                </a>
            </nav>

            <div class="shape-d93a hero"/>

            <div class="display-632f">
                <h1 class="title-544c">
                    OpenMove
                </h1>

                <i class="std-space-v m"/>

                <ul class="list-d1cc">
                    <li class="item-4a47"><h2 class="subtitle-3d20">Parkour</h2></li>
                    <li class="item-4a47"><h2 class="subtitle-3d20">ADD</h2></li>
                    <li class="item-4a47"><h2 class="subtitle-3d20">Academy</h2></li>
                </ul>
            </div>
        </header>

        <article class="body-e45c">
            <section class="Section1-3411">
                <img
                    class="poster-9d4d std-layer std-cover std-media-cover"
                    src="@/data/picture-10.jpg"
                    loading="lazy"
                />

                <div class="overlay-af10 std-layer"/>

                <div class="shape-d93a end"/>

                <div class="content-de9f">
                    <h3 class="title-9ec2">
                        <img
                            src="@/lib/resources/logo-name.svg"
                            width="300"
                            height="54"
                            loading="lazy"
                        />
                    </h3>
                    <p class="description-cf88">
                        è la prima Accademia di Parkour/ADD d'Abruzzo,
                        con sedi a Pescara e Lanciano. Fondata nel 2012,
                        promuove la conoscenza e la pratica dell'arte
                        dello spostamento secondo i principi originari
                        dei padri fondatori. Être et Durer
                    </p>
                </div>
            </section>

            <section class="Section2-e2a3">
                <div style="grid-area: 5 / 5 / 9 / 9;">
                    <h3 class="title-9ec2">
                        Il nostro io
                    </h3>
                    <p class="description-cf88">
                        La padronanza del corpo nello spazio urbano
                        non è solo finalizzata al gesto tecnico di
                        per se ma è un modo per riconnettere l'individuo
                        all'ambiente circostante.
                    </p>
                </div>

                <img
                    src="@/data/picture-4.jpg"
                    loading="lazy"
                    style="grid-area: 1 / 1 / 4 / 7;"
                />
                <img
                    src="@/data/picture-3.jpg"
                    loading="lazy"
                    style="grid-area: 6 / 1 / 13 / 4;"
                />
                <img
                    src="@/data/picture-5.jpg"
                    loading="lazy"
                    style="grid-area: 1 / 10 / 8 / 13;"
                />
                <img
                    src="@/data/picture-6.jpg"
                    loading="lazy"
                    style="grid-area: 10 / 6 / 13 / 13;"
                />
            </section>

            <section class="Section4-5c1d">
                <div class="thumb-8c5f">
                    <div :class="['player-f889', {expanded: videoPlayer}]">
                        <div
                            class="overlay-f52b"
                            @click.stop="videoPlayer = false"
                            @scroll.stop.prevent="void 0"
                        />

                        <video
                            class="video-6af0"
                            :autoplay="false"
                            playsInline
                            muted
                            :controls="videoPlayer"
                            loop
                            @click="videoPlayer = true"
                        >
                            <source type="video/mp4" src="@/data/video-1.mp4"/>
                            Your browser doesn't support HTML videos.
                        </video>

                        <PlayIcon class="play-icon-311e l"/>
                    </div>
                </div>

                <p class="quote-98a3">
                    La <em>forza</em>, nel suo concetto più ampio, è una sintesi <em>fisica e morale</em>.
                    Risiede non solamente nei muscoli, nella potenza cardiaca, nella destrezza,
                    ma prima di tutto nell'energia che l'utilizza, nella <em>volontà</em> che la dirige,
                    nel <em>sentimento</em> che la guida. — <i>Georges Hébert</i>
                </p>
            </section>

            <section class="Section3-c5df">
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
                        src="@/data/picture-11.jpg"
                        loading="lazy"
                    />
                </div>
            </section>

            <section class="Section3-c5df reverse">
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
                        src="@/data/picture-12.jpg"
                        loading="lazy"
                    />
                </div>
            </section>

            <section class="Section3-c5df">
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
                        src="@/data/picture-13.jpg"
                        loading="lazy"
                    />
                </div>
            </section>

            <section class="Section3-6bcb">
                <div class="option-8fe0">
                    <img
                        class="picture-14b7"
                        src="@/data/picture-14.jpg"
                        loading="lazy"
                    />
                    <div class="overlay-04a9"/>

                    <p class="body-74fe">
                        Vieni a scoprire i
                    </p>

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
                        src="@/data/picture-15.jpg"
                        loading="lazy"
                    />
                    <div class="overlay-04a9"/>

                    <p class="body-74fe">
                        Vieni a scoprire i
                    </p>
                    <h6 class="overline-13b0">
                        Corsi
                    </h6>
                    <h3 class="title-8499">
                        Pescara
                    </h3>
                </div>
            </section>
        </article>
    </main>
</template>

<style>
    @import './Home/style/hero.css';
    @import './Home/style/header.css';
    @import './Home/style/quote.css';
    @import './Home/style/shape.css';
    @import './Home/style/section-1.css';
    @import './Home/style/section-2.css';
    @import './Home/style/section-3.css';
    @import './Home/style/section-4.css';
    @import './Home/style/section-5.css';

    .HomePage-4422 {
        width: 100%;
        --section-gutter: 6rem;
    }
    /*
    .HomePage-4422 {
        height: 100vh;
        overflow: auto;
        perspective: 100px;
        perspective-origin: center;
    }

    .body-e45c,
    .HomePage-4422 section {
        transform-style: preserve-3d
    }
    */

    .body-e45c {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #f6f6f6;
    }

    .body-e45c section {
        width: 100%;
    }

    .title-9ec2 {
        font-size: var(--std-text-h4-size);
        font-weight: var(--std-weight-medium);
        text-transform: capitalize;
    }

    .description-cf88 {
        flex-grow: 1;
        min-width: 300px;
        max-width: 40rem;
        font-size: min(var(--std-text-h5-size), 6vw);
        font-weight: var(--std-weight-light);
    }
</style>
