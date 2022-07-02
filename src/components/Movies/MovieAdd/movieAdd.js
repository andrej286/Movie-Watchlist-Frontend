import React from 'react';
import {useNavigate} from 'react-router-dom';

const MovieAdd = (props) => {

    const navigate = useNavigate();
    const [formData, updateFormData] = React.useState({
        name: "",
        description: "",
        genre: 1,
        movieImg: ""
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name;
        const description = formData.description;
        const genre = formData.genre;
        const movieImg = formData.movieImg

        props.onAddMovie(name, description, genre, movieImg);
        navigate('/movies')
    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Movie name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter product name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Movie Description</label>
                        <input type="text"
                               className="form-control"
                               id="description"
                               name="description"
                               placeholder="Description"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Movie Image</label>
                        <input type="text"
                               className="form-control"
                               id="movieImg"
                               name="movieImg"
                               placeholder="Movie Image"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Genre</label>
                        <select name="genre" className="form-control" onChange={handleChange}>
                            {props.genres.map((term) =>
                                <option value={term.id}>{term}</option>
                            )}
                        </select>
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default MovieAdd;