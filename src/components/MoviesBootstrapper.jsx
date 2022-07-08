import * as React from 'react';
import {useFetchMovieData} from "./hooks/useFetchMovieData";

const MoviesBootstrapper = (props) => {

  const fetchingStatus = useFetchMovieData();

  return (<>{fetchingStatus && props.children}</>);
}

export default MoviesBootstrapper;