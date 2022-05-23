import React from "react";
import { Header } from "./Header";
import { Places } from '../sampleapi';
import { Card } from "react-bootstrap";
import States from '../images/jharkhand.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

export const HomePage = () => {
    console.log('places is ', Places)
    return (
        <div>
            <Header />
            {
                Places.map(el => {
                    return (
                        <div className="border border-primary card_container">
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