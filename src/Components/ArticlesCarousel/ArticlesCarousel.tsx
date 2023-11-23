import React from "react";
import './ArticlesCarousel.css';
import { Card } from "react-bootstrap";

const ArticlesCarousel: React.FC = () => {
    return (
        <div className="flex-row gap-4 d-flex mb-2">
            {
                ['', '', ''].map((_, idx) => (
                    <div className="col-md-4">
                        <Card className="card-wrapper">
                            <div className="card-img"></div>
                            <div className="card-footer d-flex flex-column">
                                
                            </div>
                        </Card>
                    </div>
                ))
            }
        </div>
    )
};

export default ArticlesCarousel;