import logo from './logo.svg';
import './App.css';

import TheSubtitle from './components/the-subtitle/the-subtitle.component';
import PeekabooIntervalForm from './components/peekaboo-interval-form/peekaboo-interval-form.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <TheSubtitle />
        <PeekabooIntervalForm />
      </header> 
    </div>
  );
}

export default App;
