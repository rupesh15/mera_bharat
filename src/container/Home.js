import React, { useEffect } from "react";
import { Header } from "./Header";
import { Places } from '../sampleapi';
import States from '../images/jharkhand.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

export const HomePage = () => {

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/tours').then(value => {
            //  console.log(`value is ${JSON.stringify(value.data)}`)
        })
    }, [])

    return (
        <div>
            <Header />
            {
                Places.map(el => {
                    return (
                        <div className="card_container">

                            <img src={States} className="adjust_img" alt="slow internet" />
                            <div className="text_content">
                                <div className="states">States is {el.state}</div>
                                <div className="capital">It's capital {el.capital}</div>
                                <div className="cities" >It's major cities are {el.major_cities}</div>
                            </div>

                        </div>
                    )
                })
            }
        </div>
    )
}