import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Ayah from '../ayah/Ayah'
import Spinner from '../Spinner'

function DetailSura() {
    const [numbers, setNumber] = useState({})
    const [data, setData] = useState({
        arabicName: '',
        translation: '',
        transliteration: '',
        revelation: ''
    })
    const [sura, setSura] = useState([])
    const { num } = useParams()
    useEffect(() => {
        fetch(`https://api.quran.sutanlab.id/surah/${num}`)
            .then(res => res.json())
            .then(data => {
                let gotData = data.data
                setNumber(gotData)
                setData({
                    arabicName: gotData.name.long,
                    translation: gotData.name.translation.en,
                    transliteration: gotData.name.transliteration.en,
                    revelation: gotData.revelation.id
                })
                let sura = gotData.verses
                setSura(sura)
            })
        // eslint-disable-next-line
    }, [])


    const { sequence, number, numberOfVerses } = numbers

    return (
        <div className="container">
            <div className="row pt-3">
                <div className="col-4 text-start">
                    <div className="myCard1">
                        <p>{data.transliteration}</p>
                        <p>{data.translation}</p>
                    </div>
                </div>
                <div className="col-4 text-center">
                    <div className="myCard2">
                        <p>{data.arabicName}</p>
                        <p>{data.revelation}</p>
                    </div>
                </div>
                <div className="col-4 text-end">
                    <div className="myCard3">
                        <p>Total Ayah: {numberOfVerses}</p>
                        <p>Revealed Order: {sequence}</p>
                    </div>
                </div>
                <hr />
                <div>
                    {
                        sura.length === 0 ? <Spinner /> : sura.map(sr => <Ayah data={sr} key={sr.number.inSurah} number={number} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default DetailSura
