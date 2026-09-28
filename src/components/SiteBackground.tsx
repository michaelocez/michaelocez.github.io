import { Suspense, lazy, useState } from 'react'
import { isEffectCapable } from '@/lib/capability'

const Ferrofluid = lazy(() => import('./Ferrofluid'))

export function SiteBackground() {
  const [capable] = useState(() => isEffectCapable())

  if (!capable) {
    return null
  }

  return (
    <Suspense fallback={null}>
      <div aria-hidden="true" className="fixed inset-0 -z-10">
        <Ferrofluid
          colors={['#6366F1', '#8B93B8', '#3B3F5C']}
          speed={0.4}
          opacity={0.85}
          mixBlendMode="screen"
        />
      </div>
    </Suspense>
  )
}
