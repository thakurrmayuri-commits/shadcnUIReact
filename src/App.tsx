//import ButtonDefault from "./appComponent/Button";
import { BrowserRouter } from "react-router-dom";
import AppHeader from "./appComponent/AppHeader"

import Applayout from "./appComponent/Applayout";


function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <Applayout />
    </BrowserRouter>
  )
}
export default App
