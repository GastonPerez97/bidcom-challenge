const DEFAULT_HEADERS = { "Content-Type": "application/json" };

export enum HttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  PATCH = "PATCH",
  DELETE = "DELETE"
}

export async function makeRequest<T>(url: string, options: RequestInit = {}): Promise<T> {
  const { method = HttpMethod.GET, headers = DEFAULT_HEADERS } = options;

  const response = await fetch(url, { method, headers, ...options });

  if (!response.ok) {
    const { url, status, statusText } = response;
    throw new Error(`Error when fetching ${url}: ${status} ${statusText}`);
  }

  return response.json();
}
