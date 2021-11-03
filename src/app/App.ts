import {createHashRouter, RouterRouteParams} from '@eviljs/web/router'
import {defineComponent, h, onMounted, onUnmounted, provide, Ref, ref} from 'vue'
import * as Routes from '@/lib/routes'
import {Route, RouteService} from '@/lib/services'
import HomePage from './HomePage.vue'
import NotFoundPage from './NotFoundPage.vue'

import '@/lib/theme.css'

export const App = defineComponent({
    setup(props, context) {
        const initialRoute = {path: '/', params: {}, link: () => ''}
        const route = ref<Route>(initialRoute)

        function onRouteChange(path: string, params: RouterRouteParams) {
            route.value = {
                ...route.value,
                path,
                params,
            }
        }

        const router = createHashRouter(onRouteChange, {basePath: '/'})

        route.value = {
            link: router.link,
            path: router.route.path,
            params: router.route.params,
        }

        onMounted(() => {
            router.start()
        })
        onUnmounted(() => {
            router.stop()
        })

        provide(RouteService, route)

        function render() {
            return renderApp(route)
        }

        return render
    },
})

function renderApp(route: Ref<Route>) {
    const routePath = route.value.path

    if (Routes.HomeRoute.pattern.test(routePath)) {
        return h(HomePage)
    }

    // if (DocRoute.pattern.test(routePath)) {
    //     const [id] = routePath.match(DocRoute.pattern)?.slice(1) ?? []
    //     const page = Cards.find(it => it.id === id)
    //
    //     if (page) {
    //         return h(DocPage, {id: page.id})
    //     }
    // }

    return h(NotFoundPage)
}
