import React, { Component } from 'react'
import NewsItem from './NewsItem/NewsItem'

export default class News extends Component {
    constructor(){
        super();
        this.state = {
            articles : []
        }
    }
    
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=af4400b4baae40f8a4bb5a1cd09ea853&page=2";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles : parsedData.articles
        })
        console.log(this.state.articles);
    }

    render() {
        return (
            <div className="container my-3">
                <h3 className="text-center">Top headlines</h3>
                <div className="row">
                {
                    this.state.articles.map((element) => {
                        console.log("hello");
                        return (<div className="col-md-3 mx-3 my-3" key={element.url}>
                                <NewsItem title={element.title?element.title:""} disc={element.description?element.description:""} imgUrl={element.urlToImage} url={element.url}/>
                                </div>)
                    }
                    )
                } 
                </div>

            </div>
        
        )
    }
}
