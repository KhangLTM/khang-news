import { useQuery } from "@tanstack/vue-query";
import { fetchUsersApi, fetchSingleNewsApi } from "./userApi";

export function getFetchNewsQueryKey() {
  return ["fetchNews"];
}

export function getFetchNewsByIdQueryKey(id: string) {
  if (!id) return ["fetchNewsById"];
  return ["fetchNewsById", id];
}

export function useFetchNews() {
  return useQuery({
    queryKey: getFetchNewsQueryKey(),
    queryFn: ({ signal }) => fetchUsersApi(signal),
  });
}
export function useFetchNewsById() {
  return useQuery({
    queryKey: getFetchNewsByIdQueryKey(),
    queryFn: ({ signal }) => fetchSingleNewsApi(signal),
  });
}
