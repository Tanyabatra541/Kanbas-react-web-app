import React from 'react';
import Modules from '../Modules';
import StatusSidebar from './StatusSidebar';
import './index.css';

const Home = () => {
    return (
        <div id='home'>
            <Modules />
            <StatusSidebar />
        </div>
    );
}
export default Home;