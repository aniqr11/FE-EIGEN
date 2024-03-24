import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography, Spin, Divider, Image } from "antd";
import Artikel from "../interfaces/artikel";
import getData from "../utils/api";

const { Title, Paragraph, Link } = Typography;

export default function DetailArtikel() {
  const { index } = useParams<{ index?: string }>();
  const [article, setArticle] = useState<Artikel | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (index !== undefined) {
          const data = await getData();
          const articles = data.articles;
          const selectedIndex = parseInt(index, 10);
          const selectedArticle = articles[selectedIndex];
          setArticle(selectedArticle);
        }
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, [index]);

  return (
    <>
      {article ? (
        <div style={{ width: "80%", margin: "auto", marginBottom: "40px" }}>
          {/* title */}
          <div style={{ width: "100%" }}>
            <Title
              level={2}
              style={{
                textAlign: "center",
                color: "#333",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
              }}
            >
              {article.title}
            </Title>
            <Divider style={{ backgroundColor: "black" }} />
          </div>
          {/* banner */}
          <div>
            <Image
              src={article.urlToImage}
              alt={article.title}
              width="100%"
              height={400}
            />
            {article.author ? (
              article.author.includes("<a href=") ? (
                <h2 dangerouslySetInnerHTML={{ __html: article.author }} />
              ) : (
                <Title>By {article.author}</Title>
              )
            ) : (
              <Title>Author Not Available</Title>
            )}

            <Title level={5}>{article.publishedAt}</Title>
            <Title level={3}>{article.description}</Title>
            <Paragraph>{article.content}</Paragraph>
            <Paragraph>
              Source: <Link href={article.url}>{article.url}</Link>
            </Paragraph>
          </div>
        </div>
      ) : (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Spin size="large" />
        </div>
      )}
    </>
  );
}
