import React from 'react'

export default function Header() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src="C:\Users\shukl\OneDrive\Desktop\FINS\fins-clone_master\src\images\fins_logo.png" alt="Fins" width="30" height="24"/>
                    </a>
                </div>
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                            <a class="nav-link" href="#">Features</a>
                            <a class="nav-link" href="#">Pricing</a>
                            <a href="/discover" className="nav-link"> Discover </a>
                            <a class="nav-link disabled">Disabled</a>
                            <a class="nav-link" href="#">Learn</a>
                            <a class="nav-link" href="#">About Us</a>
                            <a class="nav-link" href='#'>Login/SignUP</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
