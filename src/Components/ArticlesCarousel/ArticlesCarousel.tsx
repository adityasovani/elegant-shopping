import React, { useEffect, useState } from "react";
import './ArticlesCarousel.css';
import { Card } from "react-bootstrap";
import supabase from "../../utils/supabase";
import ArrowRight from '../../Assets/Icons/arrowRightBlack.svg';

const ArticlesCarousel: React.FC = () => {

    const [articles, setarticles] = useState<any>([]);

    useEffect(() => {
        const getArticles = async () => {
            let { data: Articles, error } = await supabase
                .from('Articles')
                .select('*')
            if (!error) {
                setarticles(Articles);
            }
            else {
                alert(error)
            }
        };
        getArticles();
    }, [])


    return (
        <div className="flex-row gap-4 d-flex mb-2">
            {
                articles.length ? articles.map((article: any, idx: number) => (
                    <div className="col-md-4">
                        <Card className="card-wrapper h-100">
                            <img  className="card-img h-75" src={article.thumbnail} alt={article.article_name} style={{ objectFit: 'cover' }} />
                            <div className="card-footer d-flex flex-column">
                                <span>{article.article_name}</span>
                                <div className="flex-row d-flex" style={{ gap: "0.1rem" }}>
                                    <span className="read-more">Read More</span>
                                    <img alt="->" src={ArrowRight} />
                                </div>
                            </div>
                        </Card>
                    </div>
                )) : <></>
            }
        </div>
    )
};

export default ArticlesCarousel;