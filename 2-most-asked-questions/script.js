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
            <h5>What is prop drilling?</h5>
            {/* - Process of passing down props through multiple levels of 
            nested components. 
            - [show e.g.] 
            */}
            <GrandparentComponent />
            <h5>What is React Fragment and why is it used?</h5>
            {/* - React Fragment is a way to group multiple elements without 
                adding an extra HTML element to the DOM.
                - [show e.g.]
            */}
            <h5>How do you define and use state in a React Functional
            component? How are they different than normal components?</h5>
            {/* - [show e.g.]
                - A state is responsible for re-rendering our component whenever
                it changes, whereas a variable update does not cause the re-rendering
                of our component and hence, the latest value is not reflected
                in the UI.
                */}
            <Counter />
            <h5>How do you define and use state in a React class component?</h5>
            {/* - [show e.g.]
             */}
            <CounterNew />
            <h5>How do you pass props to a functional component?</h5>
            {/* - [show e.g.] 
            */}
            <h5>What are PropTypes?</h5>
            {/* - PropTypes defines the type of prop a function is expecting its
                parent component. prop-types is actually a library. 
                - [show e.g.] 
                For the StatevsProps component, we can define propType as follows:
                -- Install propTypes by copy-pasting script tag code from proptypes
                cdn site.
                -- Mention the propTypes for the StatevsProps component such that
                it can accept string props for property name propExample:
                StatevsProps.propTypes = {
                    propExample: PropTypes.string,
                };
            */}
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

StatevsProps.propTypes = {
    propExample: PropTypes.string,
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


const MyFragment = () => {
    return (
        <>
            <p>React Fragment is a way to group elements without adding an
            extra HTML element</p>
            <p>It can be mentioned a <></> or even <React.Fragment></React.Fragment>.</p>
        </>
    );
};

const Counter = () => {
    let count = 0;
    // const [count, setCount] = React.useState(0);

    const increment = () => {
        count += 1;
        // setCount(count + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>increment</button>
        </div>
    );
};


class CounterNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    incrementCount() {
        this.setState({count: this.state.count + 1});
    }

    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={() => this.incrementCount()}>Increment</button>
            </div>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);