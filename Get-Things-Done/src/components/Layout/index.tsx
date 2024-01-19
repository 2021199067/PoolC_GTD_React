import { ReactNode } from "react";
import NavBar from "../NavBar";
import './index.css';

const Layout = (props: { children : ReactNode }) => {
    return (
        <div id='page-wrapper'>
            <h1> Get Things Done </h1>
            <div id="content-wrapper">
                <NavBar/>
                <main>
                    { props.children }
                </main>
            </div>
        </div>
    );
};

export default Layout;