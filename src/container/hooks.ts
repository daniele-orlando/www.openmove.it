import {createContext, useContext} from 'solid-js'
import type {Container} from '~/container/apis'

export const ContainerContext = createContext<Container>()

export function useContainer() {
    return useContext(ContainerContext)
}
