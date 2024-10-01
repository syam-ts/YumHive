import React from 'react'
import { useRouteError } from "react-router-dom"

const Error = () => {
 
    const { status, statusText}: any = useRouteError()

    return (
        <div>
            <h1>Opp!!!</h1>
            <h2>Something went wrong</h2>
            <h3> { status + " " + statusText} </h3>
        </div>
    )
}

export default Error

//01. 09