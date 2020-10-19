import React, { useEffect, useState } from 'react'
import '../assets/css/Films.css'
import Footer from '../components/Footer'

function Films() {
    const [animations, setAnimations] = useState([]);

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
        <div className="films">
            <div className="films__animeCollection">
                {animations.map((animation) => {
                    return (
                        <div key={animation.id} className='films__animeContainer'>
                            <div className="films__animeImage">
                                <img src={animation.posterImage} alt="Animation" />
                                <p className='films__animeTitle'>{animation.titles}</p>
                            </div>
                        </div>
                    );
                })}
                {mangas.map((manga) => {
                    return (
                        <div key={manga.id} className='films__mangaContainer'>
                            <div className="films__mangaImage">
                                <img src={manga.posterImage} alt="Manga" />
                                <p className='films__mangaTitle'>{manga.titles}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <Footer/>
        </div>
    )
}

export default Films
