function ProductCard(props) {
    return (
        <div className="card">
            <h2>{props.name}</h2>
            <p>Price: ₹{props.price}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <ProductCard name="Laptop" price="50000" />
            <ProductCard name="Mobile" price="20000" />
            <ProductCard name="Headphones" price="2000" />
            <ProductCard name="Keyboard" price="1500" />
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);