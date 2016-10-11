import React, { PropTypes } from 'react';
import Base from "../../../components/BaseComponent";
// import Draft from 'draft-js';
// import moment from 'moment';
//
// import { defaultDecorators, styleMap } from '../../../global/utils/editorUtils';
//
// import PullQuote from '../../../global/components/forms/editor-components/PullQuote.js.jsx';
// import SingleImage from '../../../global/components/forms/editor-components/SingleImage.js.jsx';
// import DoubleImage from '../../../global/components/forms/editor-components/DoubleImage.js.jsx';
// import Carousel from '../../../global/components/carousel/Carousel.js.jsx';
// import NotFound from '../../static/components/NotFound.js.jsx';
//
//
//
//
// const {
//   Editor
//   , EditorState
//   , ContentState
//   , convertFromRaw
//   , CompositeDecorator
// } = Draft;

class PopulatedPost extends Base {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log('Single post componentWillMount *****');
  }

  componentDidMount() {
    console.log("Single post componentDidMount *****");
    console.log('route params', this.props.routeParams);

    var js, link;
    link = this.refs.twitterLink;
    if (!this.initialized) {
      this.initialized = true;
      js = document.createElement("script");
      js.id = "twitter-wjs";
      js.src = "//platform.twitter.com/widgets.js";
      return link.parentNode.appendChild(js);
    }
  }

  render() {
    const { item } = this.props;
    const isEmpty = !item._id;
    // const isEmpty = true;
    const updated = !isEmpty ? moment(item.updated).calendar() : '';
    const displayDate = moment(item.date).format("MMM D YYYY");
    console.log("isEmpty", isEmpty);
    console.log(item);
    let loaded = false;
    const noSummary = !item.summary;
    if(item.author && item.author.username) {
      var author = item.author.username;
    } else {
      var author = "Anonymous";
    }

    let storyTitle = isEmpty ? "Carbon" : item.title;
    // const author = item.author.username ? item.author.username : "anonymous"

    //get draftjs content
    // if(!isEmpty) {
    //   console.log("NOT EMPTY");
    //   console.log(item.contentArray);
    //   // const content = convertFromRaw(item.draftJSContent);
    //   // const contentState = ContentState.createFromBlockArray(content)
    //   // var editorState = EditorState.createWithContent(contentState, defaultDecorators);
    //
    //   for(var i = 0; i < item.contentArray.length; i++) {
    //     if(item.contentArray[i].type == 'draftjs') {
    //       console.log("found draftjs type at position " + i);
    //       console.log(item.contentArray[i].args);
    //       // console.log(item.contentArray[i].args.draftJSContent == null);
    //       //create its editorstate
    //       //if its null, create empty, else make it with content
    //       if(item.contentArray[i].args.draftJSContent && item.contentArray[i].args.draftJSContent !== null) {
    //
    //
    //         if(!item.contentArray[i].args.draftJSContent.entityMap) {
    //           //for some stupid reason, entity map doesn't set sometimes? but this causes the whole thing to break.
    //           item.contentArray[i].args.draftJSContent.entityMap = {};
    //         }
    //         const contentState = ContentState.createFromBlockArray(convertFromRaw(item.contentArray[i].args.draftJSContent));
    //         item.contentArray[i].editorState = EditorState.createWithContent(contentState, defaultDecorators);
    //       }
    //       else {
    //         console.log("CREATING AN EMPTY ONE");
    //         item.contentArray[i].editorState = EditorState.createEmpty(defaultDecorators);
    //       }
    //     }
    //   }
    //   loaded = true;
    // }
    console.log(item);
    console.log('load gif');

    return  (
      <div className="flex ">
        <section className="section top-spacer-only story-details">
          {isEmpty
          ? ( !loaded && item.isFetching ?
            <div className="yt-container slim"><div className="hero flex center full"><h2 className="loader"><i className="ion ion-load-c fa-spin" /></h2></div></div>
            : <div className="yt-container slim"><div className="hero flex center full"><h2 className="loader"><i className="ion ion-load-c fa-spin" /></h2></div></div>
            )
            :
            <div style={{ opacity: item.isFetching ? 0.5 : 1 }}>
              <div className="yt-container slim">
                <div className="page-title story-title">

                  <h1 className="no-spacer"> { item.title }</h1>
                </div>
                {!noSummary ?
                  <div className="story-summary">
                    <div className="content story-content">
                      <div className="main-copy">
                        <div className="eyebrow title"> {displayDate}</div>
                        <div className="eyebrow content">
                          <p className="large ">{item.summary}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  : null
                }
              </div>
              { (item.bannerMediaPath) ?
                <div className="yt-container">
                  <img className="story-banner" src={`${item.bannerMediaPath}`} />
                </div>
                : null
              }
            </div>
          }
        </section>
        <section className="section no-spacer  newsletter-share">
          <div className="yt-container top-spacer_50 bottom-spacer_50 slim">
            <hr/>
            <div className="yt-row center-vert space-between">

              <a href="https://twitter.com/share"
                className="twitter-share-button"
                data-via="carbon3d"
                data-text={storyTitle}
                id="twitter-wjs"
                ref="twitterLink"
              > Tweet
              </a>
            </div>
          </div>
        </section>


      </div>
    )
  } // end render()

  static propTypes = {
    post: PropTypes.object.isRequired
  }
}
//
// PopulatedPost.propTypes = {
//   dispatch: PropTypes.func.isRequired
// }

export default PopulatedPost
