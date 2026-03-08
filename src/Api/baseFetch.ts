const BASE_URL = "http://localhost:5227/api";

export async function baseFetch<T>( endpoint: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || "Erro na requisição");
  }

  return response.json();
}
