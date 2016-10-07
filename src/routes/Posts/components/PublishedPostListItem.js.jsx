import React, { PropTypes } from 'react'
import { Link } from 'react-router';
import './PostListItemStyle.scss';

const PublishedPostListItem = ({ post }) => {

  let bgImg;
  // const bgImg = post.bannerMediaPath ? { backgroundImage: `url(/api/media/view/${post.bannerMediaPath})` }: null;

  if(post.bannerMediaPath) {
    bgImg = { backgroundImage: `url(${post.bannerMediaPath})` };
  }

  return (

      <Link  className="action-link" to={`/stories/${post.slug}`}>
        <div className="action-card">
          <hr className="divider" />
          <div className="details">
            <div className="figure yt-col full xs_20" >
              <div className="bg-image square" style={bgImg} />
            </div>
            <div className="action-body">

              <div className="yt-col">
                <div className="subhead">
                  {post.date}
                  <em> {post.type} Story</em>
                </div>
                <h4 className="headline">{post.title}</h4>
              </div>
              <div className="action-arrow">
                <i className="ion ion-ios-arrow-right"></i>

              </div>
            </div>
          </div>
        </div>
      </Link>

  )
}

PublishedPostListItem.propTypes = {
  post: PropTypes.object
}

export default PublishedPostListItem;
