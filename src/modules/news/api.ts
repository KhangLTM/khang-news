import { Http } from '@/http';

const ENDPOINT = '/api/news';

export async function fetchNewsApi(signal, page, limit = 4) {
  const response = await Http.get<ResponseSuccess<any>>(
    ENDPOINT,
    {
      page,
      limit
    },
    { signal }
  );
  return response;
}
