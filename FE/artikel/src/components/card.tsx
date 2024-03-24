import { useEffect, useState } from "react";
import { Button, Card, Spin } from "antd";
import Artikel from "../interfaces/artikel";
import getData from "../utils/api";
import "./css/card.css";

const { Meta } = Card;

const CardThread = () => {
  const [newsData, setNewsData] = useState<Artikel[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const handleCardClick = (index: number) => {
    window.location.href = `/detail/${index}`;
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData();
        setNewsData(data.articles);
        setLoading(false);
      } catch (error: any) {
        console.error("Error fetching data:", error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
          <Spin size="large" />
        </div>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "45px" }}>
          {newsData.map(
            (article, index) =>
              article.title !== "[Removed]" && (
                <Card
                  key={index}
                  hoverable
                  style={{ width: "30rem" }}
                  cover={
                    <img
                      style={{ width: "100%", height: "15rem" }}
                      alt={article.title}
                      src={article.urlToImage}
                    />
                  }
                  className="custom-card"
                >
                  <Meta
                    title={article.title}
                    description={article.description}
                  />
                  <div className="overlay">
                    <Button
                      onClick={() => handleCardClick(index)}
                      type="primary"
                      size="large"
                    >
                      Read more
                    </Button>
                  </div>
                </Card>
              )
          )}
        </div>
      )}
    </>
  );
};

export default CardThread;
