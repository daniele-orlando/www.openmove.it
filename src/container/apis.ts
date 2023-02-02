import type {Container as StdContainer} from '@eviljs/std/container'
import {createConsoleLog, createLogger} from '@eviljs/std/logger'
import {createCookie, maxAgeInDays} from '@eviljs/web/cookie'
import type {Fetch} from '@eviljs/web/fetch'
import {createFetch} from '@eviljs/web/fetch'
import {createGraphql} from '@eviljs/web/graphql'
import {createQuery} from '@eviljs/web/query'
import {ApiUrl} from '~/env/apis'

export const ContainerSpec = {
    Cookie() {
        return createCookie('token',  {path: '/', maxAge: maxAgeInDays(30)})
    },
    Fetch() {
        return createFetch({baseUrl: ApiUrl})
    },
    Graphql(container: {Fetch: Fetch}) {
        return createGraphql(container.Fetch)
    },
    Logger() {
        return createLogger(createConsoleLog())
    },
    Query(container: {Fetch: Fetch}) {
        return createQuery(container.Fetch)
    },
}

// Types ///////////////////////////////////////////////////////////////////////

export type Container = StdContainer<typeof ContainerSpec>
