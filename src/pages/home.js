import CardMovie from "../components/card";
import { useState, useEffect } from "react";
import axiosInstance from "../components/axios";
import InputSearch from "../components/input";
import ModalImage from "../components/modal";
import { setDetail } from "../reducers/executeAct";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ButtonClick from "../components/button";
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
      {/* first section  */}
      <div className="flex p-50px">
        <div className="w-1/2 mt-30px">
          <div className="flex">
            <div className="flex">
              <img src="/Icon/ic_baseline-star-rate.svg" className="mr-7px" />
              <label className="text-grey-primary text-14px mt-1">
                1100 review
              </label>
            </div>
            <div className="flex ml-30px">
              <img src="/Icon/Group 3.svg" className="mt-1 mr-7px" />
              <label className="text-grey-primary text-14px mt-1">
                1000 movies
              </label>
            </div>
          </div>
          <h4 className="text-yellow-secondary font-bold text-30px my-30px text-left w-full">
            Welcome Into MOVIECLIPS
          </h4>
          <p className="text-grey-secondary text-20px w-2/3 text-left">
            Every single movie you want to watch are here. and also its been a 2
            years, movie clip always realease one of new movie in every years
          </p>
          <div className="flex mt-30px">
            <div>
              <ButtonClick textButton="See Movies" typeButton="primary" />
            </div>
            <div className="ml-30px">
              <ButtonClick textButton="Buy Movie" typeButton="secondary" />
            </div>
          </div>
        </div>
        {/* img lanpage  */}
        <div className="w-1/2">
          <img src="/Icon/img_landpage.png" className="w-5/6 ml-auto" />
        </div>
      </div>
      {/* first section  */}
      <div className="flex my-10">
        <h4 className="label-search mt-4 text-yellow-secondary">
          Search Movies
        </h4>
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
