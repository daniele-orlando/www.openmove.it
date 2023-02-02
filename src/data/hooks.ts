import {useI18n} from '@eviljs/solid/i18n'
import {createEffect, createResource, on} from 'solid-js'
import {importStateData} from '~/data/apis'
import {readData} from '~/io/data'
import {useGraphql} from '~/io/hooks'
import {useStore} from '~/store/hooks'

export function createDataLoader() {
    const [state, setState] = useStore()!
    const i18n = useI18n()!
    const graphql = useGraphql()!
    const [dataResult] = createResource(() => readData(graphql))

    createEffect(() => {
        const data = dataResult()

        if (! data) {
            return
        }

        console.debug('[OpenMove] data received from remote')

        setState(importStateData(data))
    })

    createEffect(on(
        () => state.messages,
        stateMessages => {
            if (! stateMessages) {
                return
            }

            const {locale, fallbackLocale} = i18n()

            i18n().setMessages(messages => ({
                // We merge the i18n messages.
                ...messages,
                // For the new locale:
                [locale]: {
                    ...messages[locale], // Static messages.
                    ...stateMessages[locale], // Dynamic messages.
                },
                [fallbackLocale]: {
                    ...messages[fallbackLocale], // Static messages.
                    ...stateMessages[fallbackLocale], // Dynamic messages.
                },
            }))
        },
    ))

    createEffect(() => {
        if (! dataResult.error) {
            return
        }
        console.error(dataResult.error)
    })
}
