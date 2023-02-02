import {useI18n} from '@eviljs/solid/i18n'
import {createEffect, on} from 'solid-js'
import {useStore} from '~/store/hooks'

export function createI18nSelector() {
    const i18n = useI18n()!

    function selector<T>(matches: undefined | Record<string, T>): undefined | T {
        const {locale, fallbackLocale} = i18n()

        if (! matches) {
            return
        }

        return matches[locale] ?? matches[fallbackLocale]
    }

    return selector
}


export function createI18nStoreSync() {
    const i18n = useI18n()!
    const [state] = useStore()!

    createEffect(on(
        () => state.locale,
        () => {
            if (! state.locale) {
                return
            }

            i18n().setLocale(state.locale)
        },
    ))
}
