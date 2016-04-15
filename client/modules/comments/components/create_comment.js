import React from 'react';

class CreateComment extends React.Component {
  _create() {
    const text = this.refs.text.value;
    const {create, postId} = this.props;
    create(postId, text);
    this.refs.text.value = '';
  }

  _renderError(error) {
    return (
      <div className="error">
        {error}
      </div>
    );
  }
  render() {
    const {error} = this.props;
    return (
      <div>
        {error ? this._renderError(error) : null}
        <textarea ref="text" placeholder="Enter your comment here.">

        </textarea>
        <br />
        <button onClick={this._create}>Add Comment</button>
      </div>
    );
  }
}

CreateComment.propTypes = {
  error: React.PropTypes.string,
  create: React.PropTypes.func,
  postId: React.PropTypes.string
};

export default CreateComment;
