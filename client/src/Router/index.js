import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "../Components/Header/Header";
import Articles from "../Pages/Articles";
import AddArticle from "../Pages/AddArticle";

function Router () {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={< Header/>}>
                        <Route path="/" element={< Articles/>} />
                        <Route path="addArticle" element={< AddArticle/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default Router;