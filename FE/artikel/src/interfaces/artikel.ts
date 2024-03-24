interface Source {
  id: string | null;
  name: string;
}

interface Artikel {
  source: Source;
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string | null;
}

export default Artikel;
