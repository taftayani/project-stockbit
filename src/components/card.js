import { useEffect, useState } from "react"

const CardMovie = () => {
    const [getMovie, setGetMovie] = useState('')
    useEffect(() => {
    })
    return (
        <div>
            <div className="card-movie">
                <img />
                <h1>Title Movie - 2015</h1>
                <label>relased</label><span>260min</span>
            </div>
        </div>
    )
}
export default CardMovie