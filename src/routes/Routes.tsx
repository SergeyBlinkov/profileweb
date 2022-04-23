import Gallery from "../Components/Gallery/Gallery";
import About from "../Components/About/About";
import Details from "../Components/Details";
import {ABOUT_ROUTE, DETAILS_ROUTE, GALLERY_ROUTE} from "./utils";


export const publicRoutes = [{
    path : GALLERY_ROUTE,
    element: <Gallery />
},
    {
        path: ABOUT_ROUTE,
        element: <About />
    },
    {
        path: DETAILS_ROUTE,
        element: <Details />
    }
]