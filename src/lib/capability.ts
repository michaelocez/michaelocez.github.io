interface NavigatorWithMemory extends Navigator {
  deviceMemory?: number
  connection?: { saveData?: boolean }
}

export function isEffectCapable(): boolean {
  if (typeof window === 'undefined') {
    return false
  }
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return false
  }
  const nav = navigator as NavigatorWithMemory
  if (nav.connection?.saveData) {
    return false
  }
  try {
    const canvas = document.createElement('canvas')
    const gl = canvas.getContext('webgl', {
      failIfMajorPerformanceCaveat: true,
    })
    if (!gl) {
      return false
    }
    gl.getExtension('WEBGL_lose_context')?.loseContext()
  } catch {
    return false
  }
  if (
    typeof navigator.hardwareConcurrency === 'number' &&
    navigator.hardwareConcurrency < 4
  ) {
    return false
  }
  if (typeof nav.deviceMemory === 'number' && nav.deviceMemory < 4) {
    return false
  }
  return true
}
