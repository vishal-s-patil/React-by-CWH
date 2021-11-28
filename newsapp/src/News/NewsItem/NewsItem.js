import React, { Component } from 'react'

export default class NewsItem extends Component {
    constructor(){
        super();
    }
    render() {
        let {title, disc, imgUrl, url} = this.props;
        return (
            <>
                <div>
                    <div className="card" style={{width: "18rem"}}>
                        <img src={imgUrl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5> 
                            <p className="card-text">{disc}</p>
                            <a href={url} target="_blank" className="btn btn-primary">Read more</a>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
