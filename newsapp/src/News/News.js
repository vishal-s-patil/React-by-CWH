import React, { Component } from 'react'
import NewsItem from './NewsItem/NewsItem'
import Spinner from '../spinner/Spinner'

export default class News extends Component {
    constructor(){
        super();
        this.state = {
            articles : [],
            loading : false,
            page : 1
        }
    }
    
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?category=business&country=in&apiKey=af4400b4baae40f8a4bb5a1cd09ea853&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading : true
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles : parsedData.articles,
            totalResults : parsedData.totalResults,
            loading : false
        })
        console.log(this.state.articles);
    }

    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?category=business&country=in&apiKey=af4400b4baae40f8a4bb5a1cd09ea853&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
                this.setState({
            loading : true
        })
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles : parsedData.articles,
            page : this.state.page - 1,
            loading : false
        })
    }

    handleNextClick = async () => {
            let url = `https://newsapi.org/v2/top-headlines?category=business&country=in&apiKey=af4400b4baae40f8a4bb5a1cd09ea853&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
                    this.setState({
            loading : true
        })
            let data = await fetch(url);
            let parsedData = await data.json();
            this.setState({
                articles : parsedData.articles,
                page : this.state.page + 1,
                loading : false
            })
    }

    render() {
        return (
            <div className="container my-3">
                <h3 className="text-center">Top headlines</h3>
                <div className="text-center">
                    { this.state.loading && <Spinner />}
                </div>
                <div className="row">
                {
                    !this.state.loading && this.state.articles.map((element) => {
                        console.log("hello");
                        return (<div className="col-md-3 mx-3 my-3" key={element.url}>
                                <NewsItem title={element.title?element.title:""} disc={element.description?element.description:""} imgUrl={element.urlToImage?element.urlToImage:"https://banner2.cleanpng.com/20180401/yfw/kisspng-zee-punjabi-television-channel-zee-entertainment-e-punjab-5ac0ad443c2319.6982965215225767082463.jpg"} url={element.url}/>
                                </div>)
                    }
                    )
                } 
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" class="btn btn-light" onClick={this.handlePrevClick}> &larr; previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" class="btn btn-light" onClick={this.handleNextClick}>next &rarr;</button>
                </div>

            </div>
        
        )
    }
}
