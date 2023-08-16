import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Banner() {
    const [Movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {

        }
        fetchData();
    }, []);
  return (
    <header> {/* <<< Background image */}
        {/* title */}
        {/* div > 2 buttons */}
        {/* Description */}
    </header>
  )
}

export default Banner;