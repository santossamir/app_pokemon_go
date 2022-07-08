import React from "react";
import NavbarContacts from "../../components/NavbarContacts";
import "../../css/contacts.css";

export default function Contacts(){
    return(
        <>
            <NavbarContacts/>
            <div className="inform">
                <h2>Essa página está em construção.</h2>
                <h4>Retorne a <small>Home </small> clicando <a href="/">aqui</a>.</h4>
            </div>   
        </>
   
    )
}