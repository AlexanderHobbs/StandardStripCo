export const useServices = async () => {
  const { data, error } = await useFetch('/api/services')

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: `Couldn't fetch services.`,
    })
  }

  const { allServices, someServices } = data.value

  return { allServices, someServices }
}
