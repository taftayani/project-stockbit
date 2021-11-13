import CardMovie from "../components/card";
import { useState, useEffect } from "react";
import axiosInstance from "../components/axios";
import InputSearch from "../components/input";
import ModalImage from "../components/modal";
import { setDetail } from "../reducers/executeAct";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Homepage = () => {
  // state local
  const [typeInput, setTypeInput] = useState("all");
  const [listMovie, setListMovie] = useState([]);
  const [popUp, setPopup] = useState(false);

  const [showImgPoster, setShowImgPoster] = useState("");
  // state local

  // onchange input search
  const setInput = async (search) => {
    try {
      const response = await axiosInstance.post(`?apikey=59136dff&s=${search}`);
      console.log("movies", response);
      if (response.data.Response === "True") {
        setListMovie(response.data.Search);
      } else {
        setListMovie([]);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (typeInput !== "") {
      setInput(typeInput);
    }
  }, [typeInput]);
  // onchange input search
  // dispatch and selector movie
  const dispatch = useDispatch();
  const detailMovie = useSelector((state) => state.detailmovie);
  // showing list movie
  const ShowListMovie = listMovie.map((movie, index) => {
    return (
      <div
        key={index}
        onClick={() => PopupClick(movie)}
        className="column-poster"
      >
        <div>
          <CardMovie
            TitlePoster={movie.Title}
            YearPoster={movie.Year}
            imgUrl={movie.Poster}
          />
        </div>
      </div>
    );
  });
  // showing list movie
  // popup click
  const PopupClick = (movieClick) => {
    setPopup(true);
    setShowImgPoster(movieClick);
    dispatch(setDetail(movieClick));
    document.body.style.overflow = "hidden";
  };
  const ClosePopup = (movieClick) => {
    setPopup(false);
    document.body.style.overflow = "scroll";
  };
  return (
    <div>
      {/* showing popup */}
      {popUp && (
        <ModalImage clickModal={() => ClosePopup()}>
          <img className="img-popup-poster" src={showImgPoster.Poster} />
          <Link to="/detail">
            <button className="btn-detail">Lihat Detail</button>
          </Link>
        </ModalImage>
      )}
      {/* showing popup */}
      <div className="section-search">
        <h4 className="label-search">Cari Movie</h4>
        <InputSearch
          ValueInput={typeInput}
          onChangeInput={(e) => setTypeInput(e.target.value)}
        />
      </div>
      <div className="img-rows">
        {listMovie.length === 0 ? (
          <div className="section-loading">
            <img className="loading-img" src="/loading.svg" />
            <p className="paragraph-loading">
              Hallo, Silakan Cari Film series, atau Film kesukaanmu. Make Your
              day Happy
            </p>
          </div>
        ) : (
          ShowListMovie
        )}
      </div>
    </div>
  );
};
export default Homepage;
