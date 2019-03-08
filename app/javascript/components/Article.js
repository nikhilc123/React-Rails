import React from "react"
import PropTypes from "prop-types"
class Article extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="article-title">
          <a href={this.props.path}>{this.props.title}</a>
        </div>
        <div className="article-body">
          <div className="article-meta-details">
            <small>
              Created by: {this.props.name}, {this.props.created_at} ago
              Description: {this.props.description},
              Created At: {this.props.created_at},
              Updated At: {this.props.updated_at}
            </small>
          </div>
        </div>
      </React.Fragment>
    );
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
