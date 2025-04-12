'use client'

import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'
import { useEffect } from 'react'
import dynamic from 'next/dynamic'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const PostHogPageView = dynamic(() => import('./posthog-page-view'), {
    ssr: false,
  })

  useEffect(() => {
    const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY
    if (!posthogKey) {
      throw new Error('NEXT_PUBLIC_POSTHOG_KEY is not defined')
    }

    posthog.init(posthogKey, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      capture_pageview: false,
      capture_pageleave: true,
    })
  }, [])

  return (
    <PHProvider client={posthog}>
      <PostHogPageView />
      {children}
    </PHProvider>
  )
}
