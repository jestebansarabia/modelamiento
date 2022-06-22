import React from 'react';
import Header from '../partials/Header';
import Sidebar from '../partials/Sidebar';
import noFound from '../../asset/images/404.jpg'

const NoFound = () => {
    return (
        <>
            <Sidebar />
            <Header />
            <div className="main-index">
                <div className="main-index-top add">
                    <img src={noFound} />
                        {//<Link to='/persona/create'><i class="fa-solid fa-circle-plus"></i></Link>
                        }
                </div>
            </div>
        </>
    );
}

export default NoFound;
