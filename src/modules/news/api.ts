import { Http } from "@/http";
import type { News } from "./userType";

const ENDPOINT = "/api/v1/users";

export async function fetchNewsApi(signal: AbortSignal) {
  const response = await Http.get<ResponseSuccess<News[]>>(
    ENDPOINT,
    undefined,
    { signal },
  );
  return response?.data;
}

export async function fetchSingleNewsApi(id: string, signal: AbortSignal) {
  const response = await Http.get<ResponseSuccess<News>>(
    `${ENDPOINT}/${id}`,
    undefined,
    { signal },
  );
  return response?.data;
}
