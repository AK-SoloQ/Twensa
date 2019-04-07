import React from "react";
import PropTypes from "prop-types";
import { Row, Col } from "shards-react";


import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem
} from "shards-react";

import jsonData from './../../data/twensa.json'

class CardDetails extends React.Component {
  constructor(props) {
    super(props);
    const loadData =  JSON.parse(JSON.stringify(jsonData));
    this.state = {
      posts : loadData.rss.channel.item
    }
  }
  renderImages(post) {
    if (typeof post.enclosure !== 'object') {
      return (
        <div>
          null
        </div>
      )
    }else {
      const image = post.enclosure.url
      return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={image} width="400" height="400" alt="First slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      )
    }
    
  }
  renderPostes () {
    return this.state.posts.map(post => {
      return (
        <Col lg="6" md="6" sm="6" className="mb-4" >
        <Card small className="mb-4 pt-3">
          <CardHeader className="border-bottom text-center">
            <div className="mb-3 mx-auto">
              {this.renderImages(post)}
            </div>
          </CardHeader>
          <ListGroup flush>
            <ListGroupItem className="p-4">
              <strong className="text-muted d-block mb-2">
                {post.title}
              </strong>
              <span>{post.description}</span>
              <span><a href={post.guid}>... lire la suite</a></span>
            </ListGroupItem>
          </ListGroup>
        </Card>
        </Col>
      )
    })
  }
  render() {
    return (
      <Row>
        {this.renderPostes()}
      </Row>
    )
  }
  propTypes = {
    /**
     * The user details object.
     */
    cardDetails: PropTypes.object
  };

  defaultProps = {
    cardDetails: {
      name: "Sierra Brooks",
      avatar: require("./../../images/avatars/0.jpg"),
      jobTitle: "Project Manager",
      performanceReportTitle: "Workload",
      performanceReportValue: 74,
      metaTitle: "Description",
      metaValue:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?"
    }
  };
}




export default CardDetails;
/**
 * <Card small className="mb-4 pt-3">
          <CardHeader className="border-bottom text-center">
            <div className="mb-3 mx-auto">
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img className="d-block w-100" src="https://images.pexels.com/photos/1252869/pexels-photo-1252869.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="400" height="400" alt="First slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="https://images.pexels.com/photos/853199/pexels-photo-853199.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="400" height="400" alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block w-100" src="https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" width="400" height="400" alt="Third slide" />
                  </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </CardHeader>
          <ListGroup flush>
            <ListGroupItem className="p-4">
              <strong className="text-muted d-block mb-2">
                {this.props.metaTitle}
              </strong>
              <span>{this.props.metaValue}</span>
            </ListGroupItem>
          </ListGroup>
        </Card>
 */