import React from 'react'
import "../css/flipCard.css"


function FlipCard(props) {
    return (
        <div>
            <div class="flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front">
                        <img alt="" src={props.src} style={{height: "250px", decoding:"async", dataNimg:"fill"}}
                        className="w-full rounded-lg card-img-top"/>
                    </div>
                    <div class="flip-card-back" style={{}}>
                        <h2>{props.h2}</h2> 
                        <p style={{marginTop:"20px"}} >{props.p}</p> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlipCard