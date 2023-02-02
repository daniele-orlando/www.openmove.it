import {PictureUrl} from '~/env/apis'

export function pictureUrlOptional(handleId: undefined | string, format: 'webp', options?: undefined | PictureUrlOptions): undefined | string
export function pictureUrlOptional(handleId: string, format: 'webp', options?: undefined | PictureUrlOptions): string
export function pictureUrlOptional(handleId: undefined | string, format: 'webp', options?: undefined | PictureUrlOptions): undefined | string {
    return handleId
        ? pictureUrl(handleId, format, options)
        : undefined
}

export function pictureUrl(handleId: string, format: 'webp', options?: undefined | PictureUrlOptions): string {
    const widthParam = options?.width ? `width:${options.width}` : undefined
    const heightParam = options?.height ? `height:${options.height}` : undefined
    const transformParam = options
        ? joinWith(',', `resize=fit:${options.fit}`, widthParam, heightParam)
        : undefined
    const qualityParam = options?.quality
        ? `quality=value:${options.quality}`
        : undefined
    const outputParam = `output=format:${format}`

    return joinWith('/', PictureUrl, transformParam, qualityParam, outputParam, handleId)
}

export function joinWith(separator: string, ...list: Array<undefined | string>): string {
    return list.filter(Boolean).join(separator)
}

// Types ///////////////////////////////////////////////////////////////////////

export interface PictureUrlOptions {
    fit: 'clip' | 'crop' | 'max'
    width?: undefined | number
    height?: undefined | number
    quality?: undefined | number
}
