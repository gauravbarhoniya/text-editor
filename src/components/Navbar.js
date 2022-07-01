import React from 'react'
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg`} style={{ backgroundColor: props.mode === 'dark' ? 'black' : '#020f21', color: props.mode === 'light' ? 'white' : 'white' }}>
            <div className="container-fluid">
                <a className="navbar-brand" style={{ color: props.mode === 'dark' ? 'white' : 'white' }} href="#">textify</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a style={{ color: props.mode === 'dark' ? 'white' : 'white', textDecoration: "none" }} className="nav-Link mx-2 active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a style={{ color: props.mode === 'dark' ? 'white' : 'white', textDecoration: "none" }} className="nav-Link mx-2" href="#">About Us</a>
                        </li>
                       
                    </ul>


                    <form className="d-flex">
                        <div className={`form-check form-switch text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label style={{ color: props.mode === 'dark' ? 'white' : 'white' }} className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.btntext}</label>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    )
}
