import {asBaseUrl} from '@eviljs/web/url'
import Release from '~/release.json'

export const ApiUrl = import.meta.env.APP_API_URL || '/api'
export const BasePath = asBaseUrl(import.meta.env.BASE_URL) || '/'
export const Mode = import.meta.env.MODE || 'development'
export const PictureUrl = asBaseUrl(import.meta.env.APP_PICTURE_URL) || 'https://media.graphassets.com'
export const Version = Release.version
