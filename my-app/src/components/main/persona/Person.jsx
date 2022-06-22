import React from 'react';
import Header from '../../partials/Header';
import Sidebar from '../../partials/Sidebar';

const Person = () => {
    return (
        <>
            <Sidebar />
            <Header />
            <div className="main-index">
                <div className="main-index-top add">
                    <h2>realizandoo....</h2>
                        {//<Link to='/persona/create'><i class="fa-solid fa-circle-plus"></i></Link>
                        }
                </div>
            </div>
        </>
    );
}

export default Person;
