import React from 'react';
import { CardProps } from 'types/types';

class Card extends React.Component<CardProps> {
  render() {
    const { image, name, gender, status, location } = this.props;
    return (
      <li className="cards-item card">
        <img className="card-image" src={image} alt={name} />
        <div className="card-title">
          <span className="card-name">{name} </span>
          <span className="card-gender">{gender}</span>
        </div>
        <span className={'card-status ' + this.selectColor(status)}>{status}</span>
        <p className="card-location card-info">{location.name}</p>
      </li>
    );
  }

  selectColor(status: string) {
    switch (status.toLowerCase()) {
      case 'alive':
        return 'card-status_alive';
      case 'dead':
        return 'card-status_dead';
      default:
        return 'card-status_unknown';
    }
  }
}

export { Card };