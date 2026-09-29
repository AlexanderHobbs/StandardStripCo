import type { ImageOptimized } from '~~/types/image'

export type Service = {
  id: number
  slug: string
  name: string
  shortDescription: string
  description: string
  image: string
  imageOptimized?: ImageOptimized
  icon: string
  features: string[]
  priceNote?: string
}

export type Services = Service[]
