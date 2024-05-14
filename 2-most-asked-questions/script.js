function App() {
    return (
        <div>
            <h2>15 Most Asked Interview Questions</h2>
            <h5>What is React and why is it used?</h5>
            {/* - What is React? React is a popular JavaScript library 
            used for building user interfaces (UI) for
            web applications. 
            - Why do we use React? It's known for its efficiency, 
            flexibility, and reusabilitly in creating interactive UI components.
            - How does React actually help us? React allows developers to 
            build complex UIs by breaking them down into smaller, reusable pieces
            called components.
            - These components can manage their own state, making it easier to 
            build and maintain large-scale applications.
             */}
             <h5>What is JSX and why is it used?</h5>
             {/* -  JSX -> JavaScript XML
             - Allows you to write HTML-like code within JavaScript.
             - Used in React to define the structure of components.
             - [show e.g.]
             */}
             <h5>What is a React component?</h5>
             {/*
             - Reusable building block for UI.
             - It can be a class or a function that returns JSX.
             [show e.g.]
              */}
              <MyComponent />
              <h5>What is the difference between state and props?</h5>
              {/*
              - **Mutability:** State is mutable and managed within the
              component itself, while props are immutable and passed from
              parent to child components.
              - **Ownership:** Components own and manage their own states, while
              props are owned and managed by the parent component.
              - **Usage:** State is used for internal component data that might 
              change over time, while props are used to pass data from parent to 
              child components.
              - [show e.g.]
              */}
              <StatevsProps propExample={"I am a prop"} />
              <h5>What is the difference between state and props?</h5>
              {/* - Process of passing down props through multiple levels of 
              nested components. 
              - [show e.g.] 
              */}
              <GrandparentComponent />
        </div>
    );
}

const MyComponent = () => {
    return (
        <ul>
            <li>Reusable building block for the UI.</li>
            <li>It can be a class or a function that returns JSX.</li>
        </ul>
    );
};

const StatevsProps = (props) => {

    const [setstateExample, setStateExample] = React.useState("I am a state")

    return (
        <ul>
            <li>{setstateExample}</li>
            <li>{props.propExample}</li>
        </ul>
    );
};

// GrandparentComponent
const GrandparentComponent = () => {
    const data = "Hello from Grandparent";

    return <ParentComponent data={data} />
};

// ParentComponent
const ParentComponent = ({data}) => { // destructuring props here
    return <ChildComponent data={data}/>
};

// ChildComponent
const ChildComponent = ({data}) => {
    return <GrandchildComponent data={data} />
};

// GrandchildComponent
const GrandchildComponent = ({data}) => {
    return <p>{data}</p>
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);