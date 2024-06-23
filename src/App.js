import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddSubs from './components/AddSubs';
import SearchSubs from './components/SearchSubs';
import DeleteSubs from './components/DeleteSubs';
import ViewSubs from './components/ViewSubs';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddSubs/>}/>
          <Route path="/search" element={<SearchSubs/>}/>
          <Route path="/delete" element={<DeleteSubs/>}/>
          <Route path="/view" element={<ViewSubs/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
