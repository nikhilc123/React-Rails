import React from "react"
import PropTypes from "prop-types"
import Timestamp from "react-timestamp"

class Article extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="article-title">
          <a href={this.props.path}>{this.props.title}</a>
        </div>
        <div className="article-body">
          Description: {this.props.description} &nbsp;
          <div className="article-meta-details">
            <small>
              Created by: {this.props.name}, <Timestamp time = {this.props.created_at} /> ago, &nbsp;
              Created At: <Timestamp time = {this.props.created_at} precision = {3} />, &nbsp;
              Updated At: <Timestamp time = {this.props.updated_at} precision = {3} /> &nbsp;
            </small>
          </div>
        </div>
      </React.Fragment>
    );
  }
  componentDidMount(){
    var self = this;
    this._timer = setInterval(function() { self.forceUpdate() }, 1000);
  }

  componentWillUnmount() {
    if (this._timer) {
      clearInterval(this._timer);
      this._timer = null;
    }
  }
}

Article.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.node,
  created_at: PropTypes.created_at,
  updated_at: PropTypes.updated_at
};
export default Article
