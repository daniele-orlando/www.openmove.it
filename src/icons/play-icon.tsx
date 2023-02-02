import {classes} from '@eviljs/solid/classes'
import type {JSX} from 'solid-js'

export function PlayIcon(props: JSX.SvgSVGAttributes<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 42 42"
            class={classes('std-icon', props.class)}
        >
            <path
                d="M36.068,20.176l-29-20C6.761-0.035,6.363-0.057,6.035,0.114C5.706,0.287,5.5,0.627,5.5,0.999v40 c0,0.372,0.206,0.713,0.535,0.886c0.146,0.076,0.306,0.114,0.465,0.114c0.199,0,0.397-0.06,0.568-0.177l29-20 c0.271-0.187,0.432-0.494,0.432-0.823S36.338,20.363,36.068,20.176z M7.5,39.095V2.904l26.239,18.096L7.5,39.095z"
            />
        </svg>
    )
}
