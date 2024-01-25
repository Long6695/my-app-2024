import {
  HydrationBoundary,
  HydrationBoundaryProps,
} from '@tanstack/react-query'

export default async function HydrateClient(props: HydrationBoundaryProps) {
  return <HydrationBoundary {...props} />
}
