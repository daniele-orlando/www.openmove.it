import type {SavedStoreState, StoreState} from '~/store/state'

export function filterStorageState(state: StoreState): SavedStoreState {
    return {
    }
}

export function mergeStorageState(state: StoreState, storageState: SavedStoreState): StoreState {
    return {
        ...state,
    }
}
