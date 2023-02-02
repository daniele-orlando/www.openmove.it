import {createContext, useContext} from 'solid-js'
import type {SetStoreFunction} from 'solid-js/store'
import type {StoreState} from './state'

export const StoreContext = createContext<[state: StoreState, setState: SetStoreFunction<StoreState>]>()

export function useStore() {
    return useContext(StoreContext)
}
