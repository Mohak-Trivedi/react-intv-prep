const products = [
  {id: 1, name: "Product A", price: 20, category: "Electronics"},
  {id: 2, name: "Product B", price: 30, category: "Clothing"},
  {id: 3, name: "Product C", price: 15, category: "Electronics"},
  {id: 4, name: "Product D", price: 25, category: "Clothing"},
  {id: 5, name: "Product E", price: 50, category: "Electronics"},
  {id: 6, name: "Product F", price: 40, category: "Electronics"},
];

function App () {
    return (
        <div>
            <h2>Rendering Lists and Conditional Operators</h2>
            <h5>
                Question 1: How does the map function work in React for rendering lists?
                Can you provide an example?
            </h5>
            {/* - Commonly used to iterate through an array and render components 
            dynamically.
            - It allows you to create a new array of React elements based on the 
            original array.
            - [ show e.g. ] */}
            <ul>
                {products.map((product) => {
                    return <li key={product.id}><strong>{product.name}</strong> - {product.price} - Category:{" "} {product.category}</li>
                })}
                {/* We can replace the out {} with (), and also remove return. 
                Because callback function in map() is an arrow function, and 
                arrow functions have implcit return.*/}
                {/* {products.map((product) => (
                    <li><strong>{product.name}</strong> - {product.price} - Category:{" "} {product.category}</li>
                ))} */}
            </ul>
            <h5>
                Question 2: How can you filter products with a specific product 
                category?
            </h5>
            <ul>
                {products.filter((product) => {
                    return product.category === "Electronics";
                }).map((product) => {
                    return <li key={product.id}><strong>{product.name}</strong> - {product.price} - Category:{" "} {product.category}</li>
                })}
            </ul>
            <h5>
                Question 3: How can you render a summary of total prices of products?
            </h5>
            <div>
                <p>Total Price Summary: {products.reduce((acc, product) => {
                    return acc + product.price;
                }, 0)}
                </p>
            </div>
        </div>
        
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);