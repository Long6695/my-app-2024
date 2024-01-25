import getQueryClient from '@/lib/get-query-client'
import {
  MutationFunction,
  MutationKey,
  QueryFunction,
  QueryKey,
  useMutation,
  useQuery,
} from '@tanstack/react-query'

export function useRequestProcessor() {
  const queryClient = getQueryClient()

  function usePrefetchProcessor(
    key: QueryKey,
    queryFunction: QueryFunction,
    options = {}
  ) {
    return queryClient.prefetchQuery({
      queryKey: key,
      queryFn: queryFunction,
      ...options,
    })
  }

  function useQueryProcessor(
    key: QueryKey,
    queryFunction: QueryFunction,
    options = {}
  ) {
    return useQuery({
      queryKey: key,
      queryFn: queryFunction,
      ...options,
    })
  }

  function useMutationProcessor(
    key: MutationKey,
    mutationFunction: MutationFunction,
    options = {}
  ) {
    return useMutation({
      mutationKey: key,
      mutationFn: mutationFunction,
      onSuccess: () => queryClient.invalidateQueries({ queryKey: key }),
      ...options,
    })
  }

  return { usePrefetchProcessor, useQueryProcessor, useMutationProcessor }
}
