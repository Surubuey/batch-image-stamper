import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import FileSelector from './components/FileSelector';

const Hello = () => {
  return (
    <div>
      <div className="Hello">
        <div>
          <FileSelector multiple={false} />
          <FileSelector multiple />
        </div>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
