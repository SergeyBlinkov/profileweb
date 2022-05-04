import {Route, Routes} from "react-router-dom";
import {publicRoutes} from "./Routes";
import Gallery from "../Components/Gallery/Gallery";


function RouterApp() {
    return <Routes>
        {publicRoutes.map(({path,element}) => {
        return <Route key={path} path={path} element={element}/>
    })}
        <Route path={'*'} element={<Gallery />}/>
    </Routes>
}
export default RouterApp