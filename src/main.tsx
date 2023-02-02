/* @refresh reload */

import './style/index.css'

import {createContainer} from '@eviljs/std/container'
import {render} from 'solid-js/web'
import {ContainerSpec} from '~/container/apis'
import * as Env from '~/env/apis'
import {attachRootElement} from '~/root/apis'
import {App, Root} from '~/root/root'

console.table({...Env})

const container = createContainer(ContainerSpec)
const rootElement = attachRootElement()

render(
    () =>
        <Root container={container}>
            <App/>
        </Root>
    ,
    rootElement,
)
