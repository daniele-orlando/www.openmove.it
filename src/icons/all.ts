import {suspendedIcon} from '~/lazy/apis'

export const LogoEmblemIconLazy = suspendedIcon(() => import('./logo-icon').then(it => it.LogoEmblemIcon))
export const LogoNameIconLazy = suspendedIcon(() => import('./logo-icon').then(it => it.LogoNameIcon))
export const PlayIconLazy = suspendedIcon(() => import('./play-icon').then(it => it.PlayIcon))
