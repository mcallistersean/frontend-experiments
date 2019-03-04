import React from "react";

// import Select from "react-select";
// import AsyncCreatableSelect from 'react-select/lib/AsyncCreatable';
import CreatableSelect from "react-select/lib/Creatable";
import Modal from "./Modal";

const defaultOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

class CreateableSelect extends React.Component {
  constructor(props) {
    super(props);
    const { multiple, value, options = defaultOptions } = this.props;
    this.state = {
      isLoading: false,
      isCreating: false,
      options: options,
      value: multiple ? [] : value,
      createValue: ""
    };
  }

  handleChange = (newValue, actionMeta) => {
    console.group("Value Changed");
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
    this.setState({ value: newValue });
  };

  handleCreate = inputValue => {
    this.setState({
      isLoading: true,
      isCreating: true,
      createValue: inputValue
    });
  };

  handleCreateFinished = newOption => {
    if (newOption) {
      this.setState({
        options: [...this.state.options, newOption],
        value: this.props.multiple
          ? [...this.state.value, newOption]
          : newOption
      });
    }
    // set this state no matter what
    this.setState({
      isLoading: false,
      isCreating: false,
      createValue: ""
    });
  };

  render() {
    const { isLoading, options, value } = this.state;
    const { multiple } = this.props;
    return (
      <React.Fragment>
        {this.state.isCreating && (
          <Modal
            onSave={this.handleCreateFinished}
            onCancel={this.handleCreateFinished}
            value={this.state.createValue}
          />
        )}
        <CreatableSelect
          isClearable
          isDisabled={isLoading}
          isLoading={isLoading}
          isMulti={multiple}
          onChange={this.handleChange}
          onCreateOption={this.handleCreate}
          options={options}
          value={value}
        />
      </React.Fragment>
    );
  }
}

export default CreateableSelect;
