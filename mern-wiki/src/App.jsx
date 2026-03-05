import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Import all page components
import Home from './pages/Home';
import Overview from './pages/Overview';
import MongoDB from './pages/MongoDB';
import Express from './pages/Express';
import ReactPage from './pages/ReactPage';
import NodeJS from './pages/NodeJS';
import ProjectStructure from './pages/ProjectStructure';
import Components from './pages/Components';
import Styling from './pages/Styling';
import Routing from './pages/Routing';

// Import dictionary pages
import DictionaryJSX from './pages/DictionaryJSX';
import DictionaryCSS from './pages/DictionaryCSS';
import DictionaryHTML from './pages/DictionaryHTML';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/mongodb" element={<MongoDB />} />
        <Route path="/express" element={<Express />} />
        <Route path="/react" element={<ReactPage />} />
        <Route path="/nodejs" element={<NodeJS />} />
        <Route path="/project-structure" element={<ProjectStructure />} />
        <Route path="/components" element={<Components />} />
        <Route path="/styling" element={<Styling />} />
        <Route path="/routing" element={<Routing />} />

        {/* Programming Dictionary */}
        <Route path="/dictionary/jsx" element={<DictionaryJSX />} />
        <Route path="/dictionary/css" element={<DictionaryCSS />} />
        <Route path="/dictionary/html" element={<DictionaryHTML />} />
      </Routes>
    </Layout>
  );
}

export default App;
