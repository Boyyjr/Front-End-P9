const phoneData = [
  {
    name: "iPhone X",
    price: 10000000,
    discount: 50,
    brand: "Apple",
    os: "iOS",
    image: "https://placehold.co/300x300?text=iPhone+X"
  },
  {
    name: "Oppo Find X",
    price: 14000000,
    discount: 30,
    brand: "Oppo",
    os: "Android",
    image: "https://placehold.co/300x300?text=Oppo+Find+X"
  },
  {
    name: "Redmi Note X",
    price: 5000000,
    discount: 42,
    brand: "Xiaomi",
    os: "Android",
    image: "https://placehold.co/300x300?text=Redmi+Note+X"
  },
  {
    name: "Vivo XYZ",
    price: 10000000,
    discount: 0,
    brand: "Vivo",
    os: "Android",
    image: "https://placehold.co/300x300?text=Vivo+XYZ"
  }
];

function Product({ name, price, discount, brand, os, image }) {
  const finalPrice = price - price * (discount / 100);

  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "15px",
        width: "280px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        background: "white",
        transition: "0.2s",
      }}
    >
      <img
        src={image}
        style={{
          width: "100%",
          borderRadius: "10px",
          marginBottom: "10px"
        }}
      />

      <h2 style={{ fontSize: "20px", marginBottom: "5px" }}>{name}</h2>

      <p style={{ margin: "3px 0" }}><b>Brand:</b> {brand}</p>
      <p style={{ margin: "3px 0" }}>
        <b>OS:</b> {os === "iOS" ? "iOS (Apple)" : "Android"}
      </p>

      {discount > 0 ? (
        <p style={{ margin: "3px 0", color: "gray" }}>
          <s>Rp {price}</s> <span style={{ color: "red" }}>({discount}% off)</span>
        </p>
      ) : (
        <p style={{ margin: "3px 0" }}>Tidak ada diskon</p>
      )}

      <p style={{ fontWeight: "bold", fontSize: "18px", color: "green" }}>
        Rp {finalPrice}
      </p>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: "20px" }}>Daftar Produk</h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap"
        }}
      >
        {phoneData.map((item, index) => (
          <Product key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
