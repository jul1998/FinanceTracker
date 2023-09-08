import React from 'react'
import {logoutUser} from '../store/slices/userSlicer'
import {useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

import Nav from 'react-bootstrap/Nav';

const LogoutComp = () => {

    const nav = useNavigate()
    const dispatch = useDispatch()

    function handleLogout(){
        dispatch(logoutUser()).then((res) => {
           try{
            Swal.fire({
                icon: 'success',
                title: 'Logged out successfully',
                showConfirmButton: false,
                timer: 1500
              })
           }catch(err){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
              })
           }
        })
    }


  return (
    <Nav.Link  onClick={handleLogout}>Logout</Nav.Link>
  )
}

export default LogoutComp