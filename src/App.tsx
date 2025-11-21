//import ButtonDefault from "./appComponent/Button";
import { BrowserRouter } from "react-router-dom";
import Header from "./appComponent/Header"

import Layout from "./appComponent/Layout";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Layout />
    </BrowserRouter>
  )
}
export default App
