export const useService = async (slug: string) => {
  const { data: service, error } = await useFetch(`/api/services/${slug}`)

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: `Couldn't fetch service "${slug}".`,
    })
  }

  const fetchService = () => service.value

  return { service, fetchService }
}
