import Create from "./Create";
import Table from "./Table2"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Update from "./Update";
function App()
{
    return(
        <div>
        {/* <Create/>
        <Table/> */}
        <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Create/>}></Route>
            <Route path="/Table" element={<Table/>}></Route>
            <Route path="/Update/:id" element={<Update/>}></Route>
          </Routes>
            </div>
      </BrowserRouter>
        </div>
    );
}

export default App;