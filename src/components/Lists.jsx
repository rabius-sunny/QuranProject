import React, { useEffect, useState } from 'react'
import '../App.css'
import Sura from './sura'
import Spinner from './Spinner'

function Lists(props) {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.quran.sutanlab.id/surah')
            .then(res => res.json())
            .then(data => setData(data.data))
    }, [])

    return (
        <div className="bg">
            <div className="container pt-5">
                <div className="row">
                    {
                        data.length === 0 ? <Spinner /> : data.map(suras => <Sura data={suras} key={suras.number} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default Lists
