import CardMovie from "../components/card"
import { useState,useEffect } from "react"
import axiosInstance from "../components/axios"
import InputSearch from "../components/input"
import Navbar from "../components/navbar"
import ModalImage from "../components/modal"
const Homepage = () => {
    // state local 
    const [typeInput, setTypeInput] = useState('')
    const [listMovie, setListMovie] = useState([])
    const [popUp, setPopup] = useState(false)
    const [showImgPoster,setShowImgPoster] =useState('')
    // state local 
    // onchange input search 
    const setInput = async(search) => {
        try {
            const response = await axiosInstance.post(`?apikey=59136dff&s=${search}`)
            console.log('movies', response)
            if (response.data.Response === "True") {
                setListMovie(response.data.Search)
            }
            else {
                setListMovie([])
            }
        }
        catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        if (typeInput !== '') {
            setInput(typeInput)
        }
        },[typeInput])
    // onchange input search 
    // showing list movie 
    const ShowListMovie = listMovie.map((movie, index) => {
        return (
            <div onClick={()=>PopupClick(movie.Poster)} className="column-poster">
                  <div key={index}>
                    <CardMovie TitlePoster={movie.Title}
                    YearPoster={movie.Year}
                    imgUrl={movie.Poster} />
                </div>
            </div>
        )
    })
     // showing list movie 
    // popup click 
    const PopupClick = (movieClick) => {
        setPopup(true)
        setShowImgPoster(movieClick)
    }
    return (
        <div>
            {console.log(popUp)}
        {/* showing popup */}
            {popUp &&
                <ModalImage clickModal={()=>setPopup(false)}>
                <h1>TES</h1>
            </ModalImage>}
        {/* showing popup */}
        {/* Navbar  */}
            <Navbar />
        {/* Navbar  */}
            <div className="section-search">
            <h4 className="label-search">Cari Movie</h4>
            <InputSearch ValueInput={typeInput} onChangeInput={(e) => setTypeInput(e.target.value)} />
            </div>
            <div className="img-rows">
                {listMovie.length === 0 ?
                    <div className="section-loading">
                        <img className="loading-img" src="/loading.svg"/>
                        <p className="paragraph-loading">Hallo, Silakan Cari Film series, atau Film kesukaanmu. Make Your day Happy</p>
                    </div>
                : ShowListMovie}
            </div>
        </div>
    )
}
export default Homepage