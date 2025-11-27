"use client"

import { usePathname } from "next/navigation"
import { getLocaleFromPath, type Locale } from "@/lib/i18n"
import { useState, useEffect } from "react"
import enMessages from "@/messages/en.json"
import ptMessages from "@/messages/pt.json"

type Messages = typeof enMessages

const messagesMap: Record<Locale, Messages> = {
  en: enMessages,
  pt: ptMessages as Messages,
}

// Simple translation function with interpolation
function translate(messages: Messages, key: string, params?: Record<string, string | number>): string {
  // Navigate through nested keys
  const keys = key.split('.')
  let value: any = messages
  for (const k of keys) {
    value = value?.[k]
  }

  if (typeof value !== 'string') {
    console.warn(`Translation key not found: ${key}`)
    return key
  }

  // Replace parameters
  if (params) {
    return value.replace(/\{(\w+)\}/g, (_, paramKey) => {
      return String(params[paramKey] ?? `{${paramKey}}`)
    })
  }

  return value
}

export function useMessages() {
  const pathname = usePathname()
  const locale = getLocaleFromPath(pathname)
  const messages = messagesMap[locale]

  const t = (key: string, params?: Record<string, string | number>) => {
    if (!messages) return key
    return translate(messages, key, params)
  }

  return {
    t,
    locale,
    messages: messages || {},
  }
}

