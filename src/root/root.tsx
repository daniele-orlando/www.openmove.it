import {createI18n, I18nContext} from '@eviljs/solid/i18n'
import {Router} from 'solid-app-router'
import type {JSX} from 'solid-js'
import {createStore} from 'solid-js/store'
import type {Container} from '~/container/apis'
import {ContainerContext} from '~/container/hooks'
import {createDataLoader} from '~/data/hooks'
import {I18nSpec} from '~/i18n/apis'
import {createI18nStoreSync} from '~/i18n/hooks'
import {HomePage} from '~/openmove-home/home-page'
import {StoreContext} from '~/store/hooks'
import {createStoreState} from '~/store/state'
import {createThemePreference} from '~/theme/hooks'

export function Root(props: RootProps) {
    const i18n = createI18n(I18nSpec)
    const [state, setState] = createStore(createStoreState())

    return (
        <ContainerContext.Provider value={props.container}>
            <StoreContext.Provider value={[state, setState]}>
                <I18nContext.Provider value={i18n}>
                    <Router>
                        {props.children}
                    </Router>
                </I18nContext.Provider>
            </StoreContext.Provider>
        </ContainerContext.Provider>
    )
}

export function App() {
    createDataLoader()
    createI18nStoreSync()
    createThemePreference()

    return (
        <HomePage/>
    )
}

// Types ///////////////////////////////////////////////////////////////////////

export interface RootProps {
    children: JSX.Element
    container: Container
}
