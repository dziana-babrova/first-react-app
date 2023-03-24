import React from 'react';
import './checkbox.scss';

type CheckboxInputProps = {
  className: string;
  id: string;
  label: string;
};

export class CheckboxInput extends React.Component<CheckboxInputProps> {
  checkboxInput: React.RefObject<HTMLInputElement>;

  constructor(props: CheckboxInputProps) {
    super(props);
    this.checkboxInput = React.createRef();
  }

  render() {
    return (
      <div className={this.props.className}>
        <input
          className={this.props.className}
          type="checkbox"
          ref={this.checkboxInput}
          id={this.props.id}
        />
        <label htmlFor={this.props.id}>{this.props.label}</label>
      </div>
    );
  }
}
