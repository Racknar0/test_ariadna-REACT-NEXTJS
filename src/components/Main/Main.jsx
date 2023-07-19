import Card from '../Card/Card';
import './Main.scss';
import {useAxios} from '../../hooks/useAxios';
import { useEffect, useState } from 'react';

const Main = () => {

    const { get } = useAxios();

    const [movies, setMovies] = useState(null);

    useEffect(() => {
        const getMovies = async () => {
            const response = await get();
            setMovies(response);
        }
    
        getMovies();
    }, [get]);


    return (
        <main>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button className="nav-link active" id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#nav-all" type="button" role="tab" aria-controls="nav-all" aria-selected="true" style={{width: '500px !important'}} > All </button>
                    <button className="nav-link" id="nav-releases-tab" data-bs-toggle="tab" data-bs-target="#nav-releases" type="button" role="tab" aria-controls="nav-releases" aria-selected="false" > New Releases </button>
                    <button className="nav-link" id="nav-popular-tab" data-bs-toggle="tab" data-bs-target="#nav-popular" type="button" role="tab" aria-controls="nav-popular" aria-selected="false" > Most Popular </button>
                    <button className="nav-link" id="nav-trends-tab" data-bs-toggle="tab" data-bs-target="#nav-trends" type="button" role="tab" aria-controls="nav-trends" aria-selected="false" > Trends </button>
                    <button className="nav-link" id="nav-favorites-tab" data-bs-toggle="tab" data-bs-target="#nav-favorites" type="button" role="tab" aria-controls="nav-favorites" aria-selected="false" > My Favorites </button>
                    <button className="nav-link" id="nav-recomendations-tab" data-bs-toggle="tab" data-bs-target="#nav-recomendations" type="button" role="tab" aria-controls="nav-recomendations" aria-selected="false" > Recomendations </button>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab" tabIndex="0" >
                    <div className='row'>

                        {
                            movies && movies.allMovies.map((movie, index) => {
                                return (
                                    <Card movie={movie} key={index} />
                                )}
                            )
                        }

                    </div>
                </div>
                <div className="tab-pane fade" id="nav-releases" role="tabpanel" aria-labelledby="nav-releases-tab" tabIndex="0" >
                     <div className='row'>
                        {
                            movies && movies.newReleases.map((movie, index) => {
                                return (
                                    <Card movie={movie} key={index} />
                                )}
                            )
                        }
                     </div>
                </div>
                <div className="tab-pane fade" id="nav-popular" role="tabpanel" aria-labelledby="nav-popular-tab" tabIndex="0" >
                    <div className='row'>
                        {
                            movies && movies.mostPopular.map((movie, index) => {
                                return (
                                    <Card movie={movie} key={index} />
                                )}
                            )
                        }
                    </div>
                </div>
                <div className="tab-pane fade" id="nav-trends" role="tabpanel" aria-labelledby="nav-trends-tab" tabIndex="0" >
                    <div className='row'>
                        {
                            movies && movies.trends.map((movie, index) => {
                                return (
                                    <Card movie={movie} key={index} />
                                )}
                            )
                        }
                        </div>
                </div>
                <div className="tab-pane fade" id="nav-favorites" role="tabpanel" aria-labelledby="nav-favorites-tab" tabIndex="0" >
                    <div className='row'>
                        {
                            movies && movies.favorites.map((movie, index) => {
                                return (
                                    <Card movie={movie} key={index} />
                                )}
                            )
                        }
                        </div>
                </div>
                <div className="tab-pane fade" id="nav-recomendations" role="tabpanel" aria-labelledby="nav-recomendations-tab" tabIndex="0" >
                    <div className='row'>
                        {
                            movies && movies.recomendations.map((movie, index) => {
                                return (
                                    <Card movie={movie} key={index} />
                                )}
                            )
                        }
                        </div>
                </div>
            </div>
        </main>
    );
};

export default Main;
