import React, {useState} from 'react';
import {Link} from "react-router-dom";
import MovieTerm from "../MoviesTerm/movieTerm";
import {GenreBarStyled} from "../../styles/GenreBar.styled";
import {AddMovieButtonStyled} from "../../styles/AddMovieButton.styled";
import {MovieCardStyled} from "../../styles/MovieCard.styled";
// import { GenreBarStyled } from "..../styles/GenreBar.styled"


const Movies = (props) => {

    console.log('Movie props here: ',props)

    const [activeGenre, setActiveGenre] = useState("ALL");

    const onFilter = (e) => {  //nema potreba
        setActiveGenre(e.target.value);
        console.log(e.target.value);
    };

    return (
        <div className={"container mm-4 mt-5"}>

            <GenreBarStyled>
                <label>Genre: </label>
                <select name="author"
                    // className="form-control"
                        onChange={onFilter} style={{width: "100px"}}>
                    <option value="ALL">ALL</option>
                    {props.genres.map((term) =>
                        <option value={term.id}>{term}</option>
                    )}
                </select>
            </GenreBarStyled>

            <div style={{display: "grid"}}>
            {props.movies.map((term) => {
                if (activeGenre === term.genre) {
                    return (
                        <MovieCardStyled>
                            <MovieTerm key={term.id} term={term}
                                       onEdit={props.onEdit}
                                       onDelete={props.onDelete}
                                       onReview={props.onReview}
                                        onAddWatch={props.onAddWatch}/>
                        </MovieCardStyled>
                    );
                } else if (activeGenre === "ALL") {
                    return (
                        <MovieCardStyled>
                            <div className="row row-cols-1 row-cols-md-3 g-4">
                                <div className="col">
                            <MovieTerm key={term.id} term={term}
                                       onEdit={props.onEdit}
                                       onDelete={props.onDelete}
                                       onReview={props.onReview}
                                       onAddWatch={props.onAddWatch}/>
                                </div>
                            </div>
                        </MovieCardStyled>
                    );
                } else return null;
            })}
            </div>

            <div className="col mb-3">
                <div className="row">
                    <div className="col-sm-12 col-md-12">
                        <AddMovieButtonStyled>
                            <Link className={"btn btn-block btn-dark addStyle"} to={"/movies/add"}>Add new Movie</Link>
                        </AddMovieButtonStyled>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default Movies;