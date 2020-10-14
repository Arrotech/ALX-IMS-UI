import React, { useEffect, useState } from 'react'
import '../assets/css/AnimeCollection.css'

function AnimeCollection() {
    const [animations, setAnimations] = useState([]);

    useEffect(() => {
        const getAnimations = async () => {
            await fetch('https://kitsu.io/api/edge/anime')
                .then((response) => response.json())
                .then((data) => {
                    const animeData = data.data;
                    const animations = animeData.map((animation) => ({
                        id: animation.id,
                        type: animation.type,
                        createdAt: animation.attributes.createdAt,
                        synopsis: animation.attributes.synopsis,
                        titles: animation.attributes.titles.en,
                        averageRating: animation.attributes.averageRating,
                        popularityRank: animation.attributes.popularityRank,
                        ratingRank: animation.attributes.ratingRank,
                        ageRating: animation.attributes.ageRating,
                        ageRatingGuide: animation.attributes.ageRatingGuide,
                        posterImage: animation.attributes.posterImage.small,
                    }));
                    setAnimations(animations);
                    console.log(animations)
                });
        };
        getAnimations();
    }, []);

    return (
        <div className="animeCollection">
            {animations.map((animation) => {
                return (
                    <div key={animation.id} className='animeCollection__container'>
                        <div className="animeCollection__image">
                            <img src={animation.posterImage} alt="Poster" />
                        </div>
                        <div className="animeCollection__content">
                            <div className="animeCollection__contentHeader">
                                <h1 className='animeCollection__response'>{animation.titles}</h1>
                                <p className='animeCollection__response'>{animation.ageRatingGuide}</p>
                            </div>
                            <div className="animeCollection__contentRating">
                                <div className="animeCollection__contentRatingSpacing">
                                    <span>Average Rating</span>
                                    <p className='animeCollection__rating'> {animation.averageRating}%</p>
                                </div>
                                <div className="animeCollection__contentRatingSpacing">
                                    <span>Popularity</span>
                                    <p className='animeCollection__rating'> {animation.popularityRank}</p>
                                </div>
                                <div className="animeCollection__contentRatingSpacing">
                                    <span>Rank</span>
                                    <p className='animeCollection__rating'> {animation.ratingRank}</p>
                                </div>
                                <div className="animeCollection__contentRatingSpacing">
                                    <span>Age Rating</span>
                                    <p className='animeCollection__rating'> {animation.ageRating}</p>
                                </div>
                            </div>
                            <div className="animeCollection__description">
                                <h3>Summary</h3>
                                <p className='animeCollection__synopsis'>{animation.synopsis}</p>
                            </div>
                            <div className="animeCollection__date">
                                <span>Posted On</span>
                                <p className='animeCollection__timestamp'>{animation.createdAt}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default AnimeCollection
