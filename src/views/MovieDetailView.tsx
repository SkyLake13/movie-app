import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMovieById, MovieResponse } from "../services";
import { Image } from '../components';


const DetailView = () => {
    const [movie, setMovie] = useState<MovieResponse>();

    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        getMovieById(id)
            .then((movieResponse) => setMovie(movieResponse));
    }, [id]);

    return (
        <div>
            <div>
                <div>
                    <Image src={movie?.Poster} alt="Poster not found"></Image>
                </div>
                <div>
                    <div>{movie?.Title}</div>
                    <div>{movie?.Type}</div>
                    <div>{movie?.Year}</div>
                    <div>{movie?.Genre}</div>
                </div>

            </div>
            <div>
                <p>{movie?.Plot}</p>
            </div>
            <div>
                <p>{movie?.Actors}</p>
            </div>
            <div>
                <div>
                    <span>Imdb Rating</span>
                    <span>{movie?.imdbRating}</span>
                </div>
                <div>
                    <span>Imdb Votes</span>
                    <span>{movie?.imdbVotes}</span>
                </div>
            </div>
            <div>
                <div>
                    <span>Language</span>
                    <span>{movie?.Language}</span>
                </div>
                <div>
                    <span>Country</span>
                    <span>{movie?.Country}</span>
                </div>
            </div>
        </div>
    );
}

export default DetailView;