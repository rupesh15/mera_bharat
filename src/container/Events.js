import React, { useEffect } from "react";
import { Header } from "./Header";
import axios from "axios";

export default Event = () => {

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/v1/tours').then(value => {
            // console.log(`value is ${JSON.stringify(value.data)}`)
        })
    }, [])

    return (
        <div>
            <Header />
            Welcome to event page
        </div>
    )
}