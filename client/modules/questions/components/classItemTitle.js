import React from 'react';

class Response extends React.Component {
  static propTypes() {
    return {
      toggleEdit: this.propTypes.func.isRequired,
      updateTitle: this.propTypes.func.isRequired,
      classId: this.propTypes.string.isRequired,
      title: this.propTypes.string.isRequired,
      isEdit: this.propTypes.bool.isRequired
    };
  }
  constructor(props) {
    super(props);
    this.save = this.save.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.updateTitle = props.updateTitle;
    this.toggleEdit = props.toggleEdit;
    this.classId = props.classId;
  }
  onEdit(e) {
    e.preventDefault();
    this.toggleEdit();
  }
  save(e) {
    e.preventDefault();
    const {title} = this.refs;
    this.toggleEdit();
    this.updateTitle(this.classId, title.value);
  }
  render() {
    const {title, isEdit} = this.props;
    return (
      <h2>
        {
          isEdit ?
          <input ref="title" type="text" defaultValue={title} /> :
          <span>{title}</span>
        }
        {' '}
        <small>
          <a style={{cursor: 'pointer'}} onClick={isEdit ? this.save : this.onEdit}>
            {isEdit ? 'save' : 'edit'}
          </a>
        </small>
      </h2>
    );
  }
}

export default Response;
