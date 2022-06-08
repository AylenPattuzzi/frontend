
import React from 'react'


export default function Error404() {
    return (
            <div class="d-flex flex-row align-items-center" style={{'minHeight': '100vh', 'background': '#dedede'}}>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-12 text-center">
                            <span class="display-1 d-block">404</span>
                            <div class="mb-4 lead">No se encontró la página que está buscando.</div>
                            <a href="/" class="btn btn-link">Back to Home</a>
                        </div>
                    </div>
                </div>
            </div>
            )
}
