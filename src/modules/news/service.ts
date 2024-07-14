import { useQuery } from '@tanstack/vue-query';
import { fetchNewsApi } from './api';

export function getFetchNewsQueryKey(page) {
  return ['fetchNews', page];
}

export function useFetchNews(page) {
  return useQuery({
    queryKey: getFetchNewsQueryKey(page),
    queryFn: ({ signal }) => fetchNewsApi(signal, page?.value ?? 1)
  });
}
