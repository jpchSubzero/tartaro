import React from 'react'
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/subscription")}>Suscripción</button>
        <button onClick={() => navigate("/sale")}>Sale</button>
        <button onClick={() => navigate("/otp")}>OTP</button>
        <button onClick={() => navigate("/thanks")}>Gracias</button>
    </>
  )
}

