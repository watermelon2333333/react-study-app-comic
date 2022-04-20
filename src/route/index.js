import React from "react";
import Home from "../application/Home";
import HomeContent from "../application/HomeContent";
import RecentComic from "../application/Recent";
import ComicDetails from "../application/ComicDetails";
import ComicContent from "../application/ComicContent";
import ComicSearch from "../application/ComicSearch";
import SearchList from "../component/searchList";
const routes = [
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path:'/',
                exact:true,
                element:<HomeContent/>
            },
            {
                path: 'recent',
                element: <RecentComic />
            },
            {
                path: 'comicSearch',
                element: <ComicSearch/>,
                children:[
                    {
                        path:'searchList',
                        element:<SearchList/>
                    }
                ]
            },
            {
                path:'detail/:id',
                element:<ComicDetails/>
            },
            {
                path:'content/:id',
                element:<ComicContent/>
            }
        ]
    }
]
export default routes;