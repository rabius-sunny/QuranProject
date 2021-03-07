import React from 'react'

function Ayah(props) {
    const ayah = props.data
    const number = props.number
    return (
        <div className="suraCard row">
            <p className="number">{number} : {ayah.number.inSurah}</p>
            <div className="col-md-5"><audio className="audio" controls src={ayah.audio.primary}></audio></div>
            <div className="col-md-7 text-end">
                <p className="text">{ayah.text.arab}</p>
                <p className="trans">{ayah.translation.en}</p>
            </div>

        </div>
    )
}

export default Ayah