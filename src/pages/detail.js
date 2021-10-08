import React, { useEffect, useState } from 'react'
import {useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import axiosInstance from '../components/axios'
const DetailPage = () => {
    const detailPoster = useSelector((state) => state.detailmovie)
    const [getDetail,setGetDetail] =useState('')
    const getDetailPoster = async () => {
        try {
            const response = await axiosInstance.post(`?apikey=59136dff&i=${detailPoster.imdbID}`)
            setGetDetail(response)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getDetailPoster()
    })
    return (
        <div>
            {console.log('detail',getDetail)}
            <div className="detail-rows">
                <div className="col-img-detail">
                <img src={getDetail.data ? getDetail.data.Poster :''}/>
                </div>
                <div className="col-info-detail">
                    <h1>{getDetail.data ? getDetail.data.Title : ''}</h1>
                    <h4>Tahun Terbit : <b>{getDetail.data ? getDetail.data.Year : ''}</b></h4>
                    <h4>Katagori Film : <b>{getDetail.data ? getDetail.data.Genre : ''}</b></h4>
                    <h4>Negara Asal : <b>{getDetail.data ? getDetail.data.Country : ''}</b></h4>
                    <h4>Penulis : <b>{getDetail.data ? getDetail.data.Writer : ''}</b></h4>
                    <h4>Aktor Utama : <b>{getDetail.data ? getDetail.data.Actors : ''}</b></h4>
                    <h4>Bahasa Utama : <b>{getDetail.data ? getDetail.data.Language : ''}</b></h4>
                    <p>{getDetail.data ? getDetail.data.Plot : ''}</p>
                </div>
           </div>
        </div>
    )
}
export default DetailPage