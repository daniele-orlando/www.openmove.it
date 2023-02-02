import type {ElementOf, Partial} from '@eviljs/std/type'
import StaticData from '~/data.json'
import {importStateData} from '~/data/apis'

export const StoreStateVersion = 1

export function createStoreState(): StoreState {
    return {
        ...importStateData(StaticData),
    }
}

// Types ///////////////////////////////////////////////////////////////////////

export interface StoreState {
    locale?: undefined | string
    messages?: undefined | Record<
        string,
        Record<string, undefined | string>
    >
    movies?: undefined | Record<
        string,
        Record<string, undefined | ElementOf<Queries.DataQuery['movies']>['it']>
    >
    pictures?: undefined | Record<
        string,
        Record<string, undefined | ElementOf<Queries.DataQuery['pictures']>['it']>
    >
}

export type SavedStoreState = Partial<StoreState>
