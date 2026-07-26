const imageCache = new Map<string, HTMLImageElement>()

export function preloadImage(source: string) {
  if (typeof Image === 'undefined' || imageCache.has(source)) {
    return
  }

  const image = new Image()
  image.decoding = 'async'
  image.src = source
  void image.decode().catch(() => undefined)
  imageCache.set(source, image)
}
