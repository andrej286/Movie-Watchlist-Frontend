import React from 'react';
import {MovieCardStyled} from "../styles/MovieCard.styled";

const Watchlist = (props) => {

    return (
        <div>
            {props.watchMovie.map((term) => {
                       return(
                           <MovieCardStyled>
                                <div className={"card mb-3"} style={{width:"800px"}}>
                                   <div className={"row g-0"}>
                                       <div className={"col-md-4"}>
                                           <img src={term.movieImg}/>
                                       </div>
                                       <div className={"col-md-8 movieRight"}>
                                           <div className={"card-body"}>
                                               <h5 className={"card-title"}>{term.name}</h5>
                                               <p className={"card-text"}>{term.description}</p>
                                               <div className={"card-text"}>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                        </MovieCardStyled>
                    );
                })}
        </div>
    )
}

export default Watchlist;