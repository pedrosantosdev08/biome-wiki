interface SpeciesResult {
  key: number;
  scientificName: string;
  vernacularName?: string;
  canonicalName: string;
  media?: { type: string; identifier: string }[];
}

interface GbifResponse {
  results: SpeciesResult[];
}

export async function fetchBiodiversityData(
  query: string,
): Promise<GbifResponse | null> {
  try {
    const baseUrl = "https://api.gbif.org/v1/occurrence/search";
    const params = `?q=${encodeURIComponent(query)}&mediaType=StillImage&limit=15`;

    const response = await fetch(baseUrl + params);
    if (!response.ok) throw new Error(`Erro: ${response.status}`);

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
