export {}

// import type {StoreStorageOptions} from '@eviljs/react/store-storage'
// import {useRootStoreStorage as useStdRootStoreStorage} from '@eviljs/react/store-storage'
// import type {SavedStoreState, StoreState} from '~/store/state'
// import {StoreStateVersion} from '~/store/state'
// import {useStore} from '~/store/hooks'
// import {filterStorageState, mergeStorageState} from './apis'
//
// export const StoreStorageSpec: Partial<StoreStorageOptions<StoreState, SavedStoreState>> = {
//     storageKey: 'HorizonStoreState',
//     stateVersion: StoreStateVersion,
//     debounce: 2_000,
//     onSave: filterStorageState,
// }
//
// export function useRootStoreStorage() {
//     const [state, dispatch] = useStore()!
//
//     useStdRootStoreStorage(state, {
//         ...StoreStorageSpec,
//         onLoad(savedState) {
//             console.log('[OpenMove] store state restored from LocalStorage')
//
//             dispatch(setState(state =>
//                 mergeStorageState(state, savedState)
//             ))
//         },
//     })
// }
