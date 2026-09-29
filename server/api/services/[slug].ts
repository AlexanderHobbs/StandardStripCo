import type { Service, Services } from '~~/types/services'
import { services as allServices } from '~~/services.json'

const services: Services = allServices

export default defineEventHandler(async (event): Promise<Service> => {
  const slug = event.context.params?.slug

  if (!slug) {
    throw createError({
      statusCode: 400,
      message: 'Missing service slug.',
    })
  }

  const service: Maybe<Service> = services.find(
    (service) => service.slug === slug,
  )
  if (!service) {
    throw createError({
      statusCode: 404,
      message: 'Service not found.',
    })
  }

  return service
})
