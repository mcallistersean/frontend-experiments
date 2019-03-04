import React from "react";

class Modal extends React.Component {
  save = () => {
    this.props.onSave({ value: this.props.value, label: this.props.value });
  };

  cancel = () => {
    this.props.onCancel();
  };

  render() {
    const { value } = this.props;
    return (
      <div className="modal is-active">
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{`Create ${value}`}</p>
            <button
              className="delete"
              aria-label="close"
              onClick={this.cancel}
            />
          </header>
          <section className="modal-card-body">
            <h1>{`Here be all fields related to ${value}!`}</h1>
          </section>
          <footer className="modal-card-foot">
            <button className="button is-success" onClick={this.save}>
              Create
            </button>
            <button className="button" onClick={this.cancel}>
              Cancel
            </button>
          </footer>
        </div>
      </div>
    );
  }
}

export default Modal;
