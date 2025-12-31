// Helper function to get correct asset path for both dev and production
export const getAssetPath = (path) => {
  const base = import.meta.env.BASE_URL || '/'
  return `${base}${path.startsWith('/') ? path.slice(1) : path}`
}
