export default async function getData() {
  try {
    const response = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=97af980b97b2414f845dc420155c9197"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error("Error fetching data:", error.message);
    throw error;
  }
}
