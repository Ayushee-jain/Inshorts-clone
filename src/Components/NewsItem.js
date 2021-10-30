import React, { Component } from "react";
import default_img from "./default_img.jpg"

export class NewsItem extends Component {

  render() {
    let {title, description, image, author, publishedAt, source, newsUrl} = this.props;
    return (
        <div>
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-1 h-md-268 position-relative shadow" >
                <div className="col-auto d-block">
                    <img className="bd-placeholder-img m-2 rounded" width="320" height="268" src={image?image:default_img} alt="news"></img>
                </div>
                <div className="col p-2 d-flex flex-column position-static">
                    
                    <a href="/#" className="mb-0" style={{cursor: "pointer", fontWeight: "300", fontSize: "22px", lineHeight: "27px", color: "black", textDecoration: "none"}}>{title}</a>

                    <div className="mb-2" style={{fontSize: "12px", fontWeight: "300", lineHeight: "22px", color: "#808290"}}>
                        <a href="/read" style={{textDecoration: "none"}}><strong style={{cursor: "pointer",fontWeight: "600", color:"#44444d"}}>short </strong></a>
                        <span className="text-muted">by {author?author:"Unknown"} / on {new Date(publishedAt).toGMTString()}</span>
                    </div>

                    <p className="card-text mb-auto" style={{fontWeight: "300", fontSize: "16px", lineHeight: "22px"}}>
                        {description}
                    </p>

                    <span style={{fontSize: "12px", fontWeight: "400"}}>
                        read more at 
                        <a href={newsUrl} target="_black" style={{color: "black", textDecoration: "none", fontWeight:"500"}}> {source} </a> 
                    </span>

                </div>
            </div>
        </div>
    );
  }
}

export default NewsItem;
