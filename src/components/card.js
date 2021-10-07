import { useEffect, useState } from "react"

const CardMovie = ({imgUrl,TitlePoster,YearPoster}) => {
    const [getMovie, setGetMovie] = useState('')
    useEffect(() => {
    })
    return (
        <div>
            <div className="card-movie">
                <img className="img-poster" src={imgUrl}/>
                <h1 className="header-title">{TitlePoster}</h1>
                <label>Relased -</label> <span> {YearPoster} </span>
            </div>
        </div>
    )
}
export default CardMovie