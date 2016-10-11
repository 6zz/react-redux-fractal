import React from 'react';

class BaseComponent extends React.Component {

  //source: http://www.newmediacampaigns.com/blog/refactoring-react-components-to-es6-classes
  //todo: add more functionality to this base component

  _bind(...methods) {
    methods.forEach( (method) => this[method] = this[method].bind(this) );
  }

  _trackGaEvent(type, args) {
    //track google analytics events and do stuff. easy in generic html, not so much in react.
    //try to make this as generic as possible
    // type = strings, args = {}
    // ga('send','event', [category], [action], [label(opt)])
    if(type == "url") {
      //ex: Download, resin-data-sheet, http://test.com
      console.log("GA - tracking custom event");
      window.ga('send', 'event', args.category, args.action, args.label ? args.label: "", {
        'transport': 'beacon'
        // , 'hitCallback': function(){document.location = args.url;}
      });
    } else {
      //as it turns out, 'hitCallack' never fires, nor is it needed 
      // because all of the outbound links are target _blank. 
      // we will keep this as part of the base component for future proofing,
      // but the type "url" will probably sufficient for all of our needs.
      console.log("ERROR - invalid type");
    }
  }

  constructor(props, context) {
    super(props);
  }
}

BaseComponent.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default BaseComponent;
