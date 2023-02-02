import {classes} from '@eviljs/solid/classes'
import type {Component, JSX} from 'solid-js'
import {lazy, Suspense} from 'solid-js'

export function suspended<P extends object>(
    load: SuspendedLoader<P>,
    fallback?: undefined | SuspendedFallback<P>,
) {
    const ComponentLazy = lazy(() => load().then(asDefault))

    function Suspended(props: P) {
        return (
            <Suspense fallback={fallback?.(props)}>
                <ComponentLazy {...props as P}/>
            </Suspense>
        )
    }

    return Suspended
}

export function suspendedIcon<P extends JSX.SvgSVGAttributes<SVGSVGElement>>(load: SuspendedLoader<P>) {
    return suspended(load, props =>
        <svg
            {...props}
            class={classes('std-icon', props.class)}
        />
    )
}

export function asDefault<V>(value: V) {
    return {default: value}
}

export function exportingDefault<E, V>(getDefaultExport: (allExports: E) => V) {
    function exportDefault(allExports: E) {
        return asDefault(getDefaultExport(allExports))
    }
    return exportDefault
}

// Types ///////////////////////////////////////////////////////////////////////

export type SuspendedLoader<P extends object> = () => Promise<Component<P>>
export type SuspendedFallback<P extends object> = Component<P>
