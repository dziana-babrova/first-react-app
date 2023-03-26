import React from 'react';
import { CheckboxInputProps } from 'types/types';
import './checkbox.scss';

export class CheckboxInput extends React.Component<CheckboxInputProps> {
  render() {
    return (
      <div className={this.props.className}>
        <input
          className={this.props.className}
          type="checkbox"
          ref={this.props.reference}
          id={this.props.id}
          value={this.props.label}
        />
        <label htmlFor={this.props.id}>{this.props.label}</label>
        {this.props.errorMessage ? (
          <div className="error-message">{this.props.errorMessage}</div>
        ) : (
          <div></div>
        )}
      </div>
    );
  }
}
