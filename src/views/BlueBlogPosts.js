/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Badge
} from "shards-react";

import PageTitle from "../components/common/PageTitle";

import jsonData from './../data/twensa.json'

class BlogPosts extends React.Component {
  constructor(props) {
    super(props);

    const loadData = JSON.parse(JSON.stringify(jsonData));
    const PostsLists = loadData.rss.channel.item.map(post => {
      return {
        backgroundImage: post.enclosure.url,
        category: "Blue",
        categoryTheme: "royal-blue",
        authorAvatar: "https://scontent.ftun3-1.fna.fbcdn.net/v/t1.0-9/49603515_2274317769285291_8872662573879656448_n.png?_nc_cat=104&_nc_ht=scontent.ftun3-1.fna&oh=4e50f0b8ce2ea25ba18af0df8425231e&oe=5CED4706",
        title: post.title,
        body: post.description,
        date : post.pubDate
      }
    })
    this.state = { 
      // First list of posts.
      PostsLists,
      PostsListOne: [
        {
          backgroundImage: "https://designrevision.com/demo/shards-dashboards/images/content-management/1.jpeg",
          category: "Red",
          categoryTheme: "royal-blue",
          author: "Anna Kunis",
          authorAvatar: "https://designrevision.com/demo/shards-dashboards/images/content-management/1.jpeg",
          title: "Conduct at an replied removal an amongst",
          body:
            "However venture pursuit he am mr cordial. Forming musical am hearing studied be luckily. But in for determine what would see...",
          date: "28 February 2019"
        },
        {
          backgroundImage: "https://designrevision.com/demo/shards-dashboards/images/content-management/2.jpeg",
          category: "Blue",
          categoryTheme: "royal-blue",
          author: "James Jamerson",
          authorAvatar: "https://designrevision.com/demo/shards-dashboards/images/content-management/2.jpeg",
          title: "Off tears are day blind smile alone had ready",
          body:
            "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
          date: "29 February 2019"
        },
        {
          backgroundImage: "https://designrevision.com/demo/shards-dashboards/images/content-management/3.jpeg",
          category: "Blue",
          categoryTheme: "royal-blue",
          author: "Jimmy Jackson",
          authorAvatar: "https://designrevision.com/demo/shards-dashboards/images/content-management/2.jpeg",
          title: "Difficult in delivered extensive at direction",
          body:
            "Is at purse tried jokes china ready decay an. Small its shy way had woody downs power. To denoting admitted speaking learning my...",
          date: "29 February 2019"
        },
        {
          backgroundImage: "https://designrevision.com/demo/shards-dashboards/images/content-management/4.jpeg",
          category: "Red",
          categoryTheme: "danger",
          author: "John James",
          authorAvatar: "https://designrevision.com/demo/shards-dashboards/images/content-management/3.jpeg",
          title: "It so numerous if he may outlived disposal",
          body:
            "How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved ready road market resolution...",
          date: "29 February 2019"
        },
        {
          backgroundImage: "https://designrevision.com/demo/shards-dashboards/images/content-management/5.jpeg",
          category: "Yellow",
          categoryTheme: "warning",
          author: "John James",
          authorAvatar: "https://designrevision.com/demo/shards-dashboards/images/content-management/3.jpeg",
          title: "It so numerous if he may outlived disposal",
          body:
            "How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved ready road market resolution...",
          date: "29 February 2019"
        },
        {
          backgroundImage: "https://designrevision.com/demo/shards-dashboards/images/content-management/6.jpeg",
          category: "Yellow",
          categoryTheme: "warning",
          author: "John James",
          authorAvatar: "https://designrevision.com/demo/shards-dashboards/images/content-management/3.jpeg",
          title: "It so numerous if he may outlived disposal",
          body:
            "How but sons mrs lady when. Her especially are unpleasant out alteration continuing unreserved ready road market resolution...",
          date: "29 February 2019"
        }
      ],

      // Second list of posts.
      PostsListTwo: [
        {
          backgroundImage: "https://designrevision.com/demo/shards-dashboards/images/content-management/5.jpeg",
          category: "Blue",
          categoryTheme: "royal-blue",
          author: "Anna Ken",
          authorAvatar: "https://designrevision.com/demo/shards-dashboards/images/content-management/6.jpeg",
          title:
            "Attention he extremity unwilling on otherwise cars backwards yet",
          body:
            "Conviction up partiality as delightful is discovered. Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor jet pan flying over...",
          date: "29 February 2019"
        },
        {
          backgroundImage: "https://designrevision.com/demo/shards-dashboards/images/content-management/6.jpeg",
          category: "Red",
          categoryTheme: "danger",
          author: "John James",
          authorAvatar: "https://designrevision.com/demo/shards-dashboards/images/content-management/1.jpeg",
          title:
            "Totally words widow one downs few age every seven if miss part by fact",
          body:
            "Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education to admitted speaking...",
          date: "29 February 2019"
        }
      ],

     
    };
  }

  render() {
    const {
      PostsLists,
      PostsListOne
    } = this.state;

    return (
      <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
          <PageTitle sm="4" title="Welcome to Blue Zone" subtitle="Blue Zone" className="text-sm-left" />
        </Row>
        {/* List Row of Posts */}
        <Row>
          {PostsLists.map((post, idx) => (
            <Col lg="4" md="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post card-post--1">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url(${post.backgroundImage})` }}
                >
                  <Badge
                    pill
                    className={`card-post__category bg-${post.categoryTheme}`}
                  >
                    {post.category}
                  </Badge>
                </div>
                <CardBody>
                  <h5 className="card-title">
                    <a href="#" className="text-fiord-blue">
                      {post.title}
                    </a>
                  </h5>
                  <p className="card-text d-inline-block mb-3">{post.body}</p>
                  <span className="text-muted">{post.date}</span>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
        {/* First Row of Posts */}
        <Row>
          {PostsListOne.map((post, idx) => (
            <Col lg="4" md="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post card-post--1">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url(${post.backgroundImage})` }}
                >
                  <Badge
                    pill
                    className={`card-post__category bg-${post.categoryTheme}`}
                  >
                    {post.category}
                  </Badge>
                </div>
                <CardBody>
                  <h5 className="card-title">
                    <a href="#" className="text-fiord-blue">
                      {post.title}
                    </a>
                  </h5>
                  <p className="card-text d-inline-block mb-3">{post.body}</p>
                  <span className="text-muted">{post.date}</span>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
        <Row>
          {PostsLists.map((post, idx) => (
            <Col lg="6" sm="12" className="mb-4" key={idx}>
              <Card small className="card-post card-post--aside card-post--1">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url('${post.backgroundImage}')` }}
                >
                  <Badge
                    pill
                    className={`card-post__category bg-${post.categoryTheme}`}
                  >
                    {post.category}
                  </Badge>
                </div>
                <CardBody>
                  <h5 className="card-title">
                    <a className="text-fiord-blue" href="#">
                      {post.title}
                    </a>
                  </h5>
                  <p className="card-text d-inline-block mb-3">{post.body}</p>
                  <span className="text-muted">{post.date}</span>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
        
      </Container>
    );
  }
}

export default BlogPosts;
