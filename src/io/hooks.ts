import {useContainer} from '~/container/hooks'

export function useFetch() {
    return useContainer()?.Fetch
}

export function useQuery() {
    return useContainer()?.Query
}

export function useGraphql() {
    return useContainer()?.Graphql
}
