import React from "react"
import SingleArt from '../components/SingleArt';
import { Link } from 'react-router-dom';

function Main () {
    return (
        <div>
        <div className="header-image">
        <Link className="link" to={`/arts`} > 
        <h1 className="headerimage-text w3-animate-fading">Explore more artworks</h1>
        </Link>
        </div>
    <SingleArt />
    </div>
    )
}

export default Main