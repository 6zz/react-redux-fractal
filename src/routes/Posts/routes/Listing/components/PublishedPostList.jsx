import React, { PropTypes } from 'react';
import Base from '../../../../../components/BaseComponent';
import PublishedPostListItem from './PublishedPostListItem';
import APIS from '../../../../../utils/apis'

//import PublishedFeaturedPostListItem from './PublishedFeaturedPostListItem.js.jsx';

class PublishedPostList extends Base {
  constructor(props) {
    super(props);

    this.state = {
      typeFilter: "All"
    }

    this._bind('_changeTypeFilter');

  }

  componentDidMount() {
    const api = APIS.postList()
    console.log(`PublishedPostList::componentDidMount() fetching posts from ${api}`);
    this.props.fetchPosts(api)
  }

  _changeTypeFilter(e) {
    e.preventDefault();
    console.log("CHANGING TO " + e.target.value);
    this.setState({
      typeFilter: e.target.value
    });
  }

  render() {
    const list = this.props.posts;
    const { typeFilter } = this.state;
    const isEmpty = list.length === 0;
    // TODO: need to get featured stories
    let filteredStories = list;
    list.featured = [];

    filteredStories.sort((a,b) => {
      return (new Date(b.date).getTime() - new Date(a.date).getTime())
    });

    //limit to 2 featured items
    let featuredList = [];
    for(var i = 0; i < list.featured.length; i++) {
      if(i < 2) {
        featuredList.push(list.featured[i]);
      }
    }

    // const publishedNotFeaturedList = list.items.filter((item) => (item.status == 'featured'));
    // console.log("published not featured length: " + publishedNotFeaturedList.length);
    // const publishedList = list.items.filter((item) => (item.status == 'published'));
    // console.log("featured length: " + featuredList.length);

    return(
        <div className="flex ">
          <section className="section ">

            <div className="yt-container slim">
              <div className="page-title">
                <h1> Stories </h1>
                <p className="large">
                Come behind the scenes. These are the stories of our customers, our culture and our vision for the future of manufacturing.
                </p>

              </div>
            </div>

            <div className="yt-container">
              <div className="content">
                <div className="yt-row space-between with-gutters stories">
                  { featuredList.map((story, i) =>
                    <PublishedFeaturedPostListItem
                      post={story}
                      key={i}
                    />
                  )}
                </div>
              </div>
            </div>
            <div className="yt-container top-spacer_50">
              <div className="content">
                <div className="yt-row space-between with-gutters stories">
                  <div className="yt-col full ">
                    { filteredStories.map((story, i) =>
                      <PublishedPostListItem
                        post={story}
                        key={i}
                      />
                    )}
                  </div>
                </div>

              </div>
            </div>
          </section>
        </div>
    )
  }

  static propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isOptional
    }).isRequired).isRequired,

    fetchPosts: PropTypes.func.isRequired
  }
}

export default PublishedPostList
