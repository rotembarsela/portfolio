import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Project from './pages/Project';
import Playground from './pages/Playground';
import Contact from './pages/Contact';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* Public */}
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/projects/:projectName' element={<Project />} />
        <Route path='/playground' element={<Playground />} />
        <Route path='/contact' element={<Contact />} />
        {/* Private */}
        <Route path='*' element={<Navigate to='/' replace />} />
      </Route>
    </Routes>
  );
}

export default App;
