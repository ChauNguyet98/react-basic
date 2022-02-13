import logo from './logo.svg';
import './App.scss';
import MyComponent from './example/my-component';

/**
 * 2 components: class component and function component (function, arrow function)
 * JSX: code html inside js file
 */

function App() {
  // const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World with ReactJS.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <MyComponent />
      </header>
    </div>
  );
}

export default App;
