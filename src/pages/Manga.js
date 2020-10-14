import React, { useEffect, useState } from 'react'

function Manga() {

    const [mangas, setMangas] = useState([]);

    useEffect(() => {
        const getMangas = async () => {
            await fetch('https://kitsu.io/api/edge/manga')
                .then((response) => response.json())
                .then((data) => {
                    const mangaData = data.data;
                    const mangas = mangaData.map((manga) => ({
                        id: manga.id,
                        type: manga.type,
                        createdAt: manga.attributes.createdAt,
                        synopsis: manga.attributes.synopsis,
                        titles: manga.attributes.titles.en_us,
                        averageRating: manga.attributes.averageRating,
                        popularityRank: manga.attributes.popularityRank,
                        ratingRank: manga.attributes.ratingRank,
                        posterImage: manga.attributes.posterImage.small,
                    }));
                    setMangas(mangas);
                });
        };
        getMangas();
    }, []);

    return (
        <div className="manga">
            {mangas.map((manga) => {
                return (
                    <div key={manga.id} className='animeCollection__container'>
                        <div className="animeCollection__image">
                            <img src={manga.posterImage} alt="Poster" />
                        </div>
                        <div className="animeCollection__content">
                            <div className="animeCollection__contentHeader">
                                <h1 className='animeCollection__response'>{manga.titles}</h1>
                            </div>
                            <div className="animeCollection__contentRating">
                                <div className="animeCollection__contentRatingSpacing">
                                    <span>Average Rating</span>
                                    <p className='animeCollection__rating'> {manga.averageRating}%</p>
                                </div>
                                <div className="animeCollection__contentRatingSpacing">
                                    <span>Popularity</span>
                                    <p className='animeCollection__rating'> {manga.popularityRank}</p>
                                </div>
                                <div className="animeCollection__contentRatingSpacing">
                                    <span>Rank</span>
                                    <p className='animeCollection__rating'> {manga.ratingRank}</p>
                                </div>
                            </div>
                            <div className="animeCollection__description">
                                <h3>Summary</h3>
                                <p className='animeCollection__synopsis'>{manga.synopsis}</p>
                            </div>
                            <div className="animeCollection__date">
                                <span>Posted On</span>
                                <p className='animeCollection__timestamp'>{manga.createdAt}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Manga
