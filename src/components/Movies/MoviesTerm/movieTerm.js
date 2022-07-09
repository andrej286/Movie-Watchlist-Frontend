import React from 'react';
import {Link} from "react-router-dom";
import EShopService from "../../../repository/emovieRepository";
import {setMovieData} from "../../redux/movies/actions";
import {useDispatch} from "react-redux";

const MovieTerm = (props) => {
    const dispatch = useDispatch();

    const handleDeleteMovie = () => {

        EShopService.deleteMovie(props.term.id).then(() => {
            EShopService.fetchMovies().then((data) => {
                dispatch(setMovieData(data.data));
            });
        });
    }

    return (
        <div className={"card mb-3"} style={{width:"400px"}}>
            <div className={"row g-0"}>
                <div className={"col-md-3"}>
                    <img src={props.term.movieImg}/>
                </div>
                <div className={"col-md-9 movieRight"}>
                    <div className={"card-body"}>
                        <h5 className={"card-title"}>{props.term.name}</h5>
                        <p className={"card-text"}>{props.term.description}</p>
                        <div className={"card-text"}>
                            <Link className={"btn btn-dark ml-2"}
                                  onClick={() => props.onReview(props.term.id)}
                                  to={`/movies/review/${props.term.id}`}>
                                <i className="bi bi-chat-right-text"/>
                            </Link>
                            <a title={"AddToWatchlist"} className={"btn btn-dark bg-dark"}
                                 onClick={() => props.onAddWatch(props.term)}
                            > <i className={"bi-bookmark-star me-1"} style={{color: "rgb(223,185,93)"}}/>
                            </a>
                            <a title={"Delete"} className={"btn btn-dark bg-dark"}
                               onClick={handleDeleteMovie}
                            ><i className="bi bi-x-lg" style={{color: "rgb(223,185,93)"}}/></a>
                            <Link className={"btn btn-dark ml-2"}
                                  onClick={() => props.onEdit(props.term.id)}
                                  to={`/movies/edit/${props.term.id}`}>
                                <i className="bi bi-pencil" style={{color: "rgb(223,185,93)"}}/>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MovieTerm;

/*
        <div className={""}><div className={"wrapper"}>
            <div className={"card"}>
                <img src={props.term.movieImg}/>

                <div className="descriptions">
                    <h1>{props.term.name}</h1>
                    <p>{props.term.description}</p>
                    <a title={"Delete"} className={"btn btn-danger bg-danger"}
                       onClick={() => props.onDelete(props.term.id)}
                    >Delete</a>
                    <Link className={"btn btn-info ml-2"}
                          onClick={() => props.onEdit(props.term.id)}
                          to={`/movies/edit/${props.term.id}`}>
                        Edit
                    </Link>
                    <Link className={"btn btn-info ml-2"}
                          onClick={() => props.onReview(props.term.id)}
                          to={`/movies/review/${props.term.id}`}>
                        Reviews
                    </Link>
                </div>

            </div>
        </div>
        </div>
 */