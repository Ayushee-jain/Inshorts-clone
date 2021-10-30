import React, { Component } from "react";
import  NewsItem from "./NewsItem";
import Spinner from "./Spinner";


export class News extends Component {

  capitalizeFirst=(str)=>{
    return str.charAt(0).toUpperCase()+str.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      totalResults: 0,
      loading: true,
    };
    document.title=`${this.capitalizeFirst(this.props.category)} News`;
  }

  async componentDidMount(){
    let url=this.props.notPresent?`https://newsapi.org/v2/everything?q="${this.props.category}"&apiKey=d2395b383ec84bcd98f10d6913e87439&page=${this.state.page}&pageSize=${this.props.pageSize}`:`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
        articles: parsedData.articles,
        page: this.state.page+1,
        totalResults: parsedData.totalResults,
        loading: false,
    });
  }

  handleLoadMoreClick= async ()=>{
    let url=this.props.notPresent?`https://newsapi.org/v2/everything?q="${this.props.category}"&apiKey=d2395b383ec84bcd98f10d6913e87439&page=${this.state.page}&pageSize=${this.props.pageSize}`:`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    })
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        page: this.state.page+1,
        totalResults: parsedData.totalResults,
        loading: false,
    });
  }

  render() {
    return (
      <div className="container" style={{marginTop: "110px"}}>
          <div className="row mb-2 mt-3">
            {this.state.articles.map((element) => {
                return (
                    <div className="col-md-12 mt-3 news" key={element.url}>
                        <NewsItem title={element.title} description={element.description} image={element.urlToImage} author={element.author} publishedAt={element.publishedAt} source={element.source.name} newsUrl={element.url}/>
                    </div>
                );
            })}
            <div className="container d-flex justify-content-center">
            {!this.state.loading && <button className="btn zoom shadow" onClick={this.handleLoadMoreClick} style={{padding: ".175rem 2rem !important", margin: "32px 0px"}}>Load More</button>}
            {this.state.loading && <Spinner/>}
            </div>
        </div>
      </div>
    );
  }
}

export default News;
