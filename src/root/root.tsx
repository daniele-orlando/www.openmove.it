import {createI18n, I18nContext} from '@eviljs/solid/i18n'
import {Route, Router, Routes as Switch} from '@solidjs/router'
import type {JSX} from 'solid-js'
import {createStore} from 'solid-js/store'
import type {Container} from '~/container/apis'
import {ContainerContext} from '~/container/hooks'
import {createDataLoader} from '~/data/hooks'
import {I18nSpec} from '~/i18n/apis'
import {createI18nStoreSync} from '~/i18n/hooks'
import {ClassesPage} from '~/openmove-pages/classes-page'
import {ContactsPage} from '~/openmove-pages/contacts-page'
import {HomePage} from '~/openmove-pages/home-page'
import {Routes} from '~/route/apis'
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
        <Switch>
            <Route path={Routes.Home.pattern} component={HomePage}/>
            <Route path={Routes.Contacts.pattern} component={ContactsPage}/>
            <Route path={Routes.Classes.pattern} component={ClassesPage}/>
        </Switch>
    )
}

// Types ///////////////////////////////////////////////////////////////////////

export interface RootProps {
    children: JSX.Element
    container: Container
}
