import React, { useEffect, useState } from 'react'
import '../assets/css/Categories.css'

function Categories() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            await fetch('https://kitsu.io/api/edge/categories')
                .then((response) => response.json())
                .then((data) => {
                    const categoryData = data.data;
                    const categories = categoryData.map((category) => ({
                        id: category.id,
                        type: category.type,
                        createdAt: category.attributes.createdAt,
                        title: category.attributes.title,
                        parent: category.relationships.parent.links.self,
                        anime: category.relationships.anime.links.self,
                        drama: category.relationships.drama.links.self,
                        manga: category.relationships.manga.links.self,
                    }));
                    setCategories(categories);
                    console.log(categories)
                });
        };
        getCategories();
    }, []);
    return (
        <div className="categories">
            <h2>Categories</h2>
            {categories.map((category) => {
                return (
                    <div key={category.id} className='categories__container'>
                        <div className="categories__content">
                            <div className="categories__contentHeader">
                                <p className='categories__response'>{category.title}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Categories
