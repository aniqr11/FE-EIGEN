import CardThread from "../components/card";

const Home = () => {
  return (
    <>
      <div style={{ width: "80%", margin: "auto" }}>
        <h1
          style={{
            fontSize: "4rem",
            textAlign: "center",
            color: "#333",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
          }}
        >
          News By Eigen
        </h1>
        <div
          style={{
            width: "80%",
            backgroundColor: "black",
            height: "3px",
            margin: "auto",
            marginBottom: "30px",
          }}
        />
      </div>

      {/* card */}
      <div style={{ width: "80%", margin: "auto", marginBottom: "50px" }}>
        <CardThread />
      </div>
    </>
  );
};

export default Home;
