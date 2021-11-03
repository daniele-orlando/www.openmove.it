import {Router} from '@eviljs/web/router'
import {InjectionKey, Ref} from 'vue'

export const RouteService: InjectionKey<Ref<Route>> = Symbol('RouteService')

// Types ///////////////////////////////////////////////////////////////////////

export interface Route {
    path: Router['route']['path']
    params: Router['route']['params']
    link: Router['link']
}
