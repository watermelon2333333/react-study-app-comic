import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Content, Head, Tab } from './style';
function Home() {
    return (
        <div>
                <Head>
                    <span id='title'>偷袭！漫画！</span>
                </Head>
                <Tab>
                    <span><NavLink to='/' className={'link'}>主页</NavLink></span>
                    <span><NavLink to='/comicSearch' className={'link'}>找点漫画</NavLink></span>
                    <span><NavLink to='/recent' className={'link'}>找点小说</NavLink></span>
                </Tab>
                <Outlet />
        </div>

    )
}
export default React.memo(Home);