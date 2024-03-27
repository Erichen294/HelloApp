import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: "Eric",
  lastName: "Chen"
}

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

function App() {
  const element = (
    <div className="root">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hello, {formatName(user)}!
        </h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
        <a
          className="App-link"
          href="https://github.com/Erichen294"
          target="_blank"
          rel="noopener noreferrer"
        >
          Link to my Github
        </a>
      </header>
    </div>
  );
  root.render(element);
}

setInterval(App, 1000);

export default App;
