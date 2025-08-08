import { Route, Routes } from "react-router-dom";
import IndexPage from './pages/IndexPage.jsx';

function App() {
  return (
    <Routes>
      <Route>
        <Route index element ={<IndexPage/>} />
      </Route>
    </Routes>
  )
}

export default App
