import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'

import Message from '../components/Message'
import Loader from '../components/Loader'

import Meta from '../components/Meta'

const HomeScreen = ({ match }) => {
    const keyword = match.params.keyword

    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()
    return (
        <>
        <Meta />
        <h1>Hello, welcome to registration page.</h1>
        <h3>Here user can sign up, log in and update his/her profile.</h3>

       </>
    )
}

export default HomeScreen