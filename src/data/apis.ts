import type {StoreState} from '~/store/state'

export function importStateData(data: Partial<Queries.DataQuery>) {
    const messages: StoreState['messages'] = {it: {}, en: {}}
    const movies: StoreState['movies'] = {it: {}, en: {}}
    const pictures: StoreState['pictures'] = {}

    for (const item of (data?.texts ?? [])) {
        messages.it![item.key] = item.it
        messages.en![item.key] = item.en ?? undefined
    }
    for (const item of (data?.textsMarkdown ?? [])) {
        messages.it![item.key] = item.it
        messages.en![item.key] = item.en ?? undefined
    }
    for (const item of (data?.movies ?? [])) {
        movies[item.key] = {
            it: item.it,
            en: item.en ?? undefined,
        }
    }
    for (const item of (data?.pictures ?? [])) {
        pictures[item.key] = {
            it: item.it,
            en: item.en ?? undefined,
        }
    }

    return {messages, movies, pictures} satisfies StoreState
}
