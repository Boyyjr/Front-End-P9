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
        border: "1px solid #e0e0e0",
        borderRadius: "12px",
        padding: "18px",
        width: "280px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
        background: "#fafafa",
        transition: "0.25s",
      }}
    >
      <img
        src={image}
        style={{
          width: "100%",
          borderRadius: "10px",
          marginBottom: "12px",
        }}
      />

      <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "8px", color: "#333" }}>
        {name}
      </h2>

      <p style={{ margin: "4px 0" }}>
        <b style={{ color: "#444" }}>Brand:</b> {brand}
      </p>

      <p style={{ margin: "4px 0" }}>
        <b style={{ color: "#444" }}>OS:</b>{" "}
        <span style={{ color: os === "iOS" ? "#0070f3" : "#0fa958" }}>
          {os === "iOS" ? "iOS (Apple)" : "Android"}
        </span>
      </p>

      {discount > 0 ? (
        <p style={{ margin: "4px 0", color: "#777" }}>
          <s>Rp {price}</s>{" "}
          <span style={{ color: "#ff2e2e", fontWeight: "bold" }}>
            ({discount}% off)
          </span>
        </p>
      ) : (
        <p style={{ margin: "4px 0", color: "#777" }}>Tidak ada diskon</p>
      )}

      <p style={{ fontWeight: "700", fontSize: "20px", color: "#009944", marginTop: "6px" }}>
        Rp {finalPrice}
      </p>
    </div>
  );
}

function App() {
  return (
    <div style={{ padding: "25px" }}>
      <h1
        style={{
          marginBottom: "25px",
          fontSize: "30px",
          color: "#222",
          fontWeight: "700",
        }}
      >
        Daftar Produk
      </h1>

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
