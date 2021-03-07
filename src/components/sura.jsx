import React from 'react'
import { Link } from 'react-router-dom'

function Sura(props) {
    const { number, revelation, name, sequence, numberOfVerses } = props.data
    return (
        <div className="col-md-6">
            <Link to={"/sura/" + number}>
                <div className="myCard mb-3">
                    <span id="number">{number}</span>
                    <div className="row">
                        <div className="col-6 rowLeft">
                            <h4>{name.transliteration.en}</h4>
                            <h5>{name.translation.en}</h5>
                            <p>Revelation: {revelation.id}</p>
                        </div>
                        <div className="col-6 rowRight">
                            <h3 className="">{name.short}</h3>
                            <p>Reveal Order: {sequence}</p>
                            <p>Total Aayaat: {numberOfVerses}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Sura
