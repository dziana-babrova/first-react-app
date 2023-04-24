import { describe, it, vi } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'state/store/Store';
import { CardsList } from 'components/cards/CardsList';

describe('Cards list', () => {
  afterEach(() => {
    cleanup();
    vi.clearAllMocks();
  });

  it('contains the correct number of elements', async () => {
    const openModal = vi.fn();
    const cards = [
      {
        id: 17,
        name: 'Annie',
        status: 'Alive',
        species: 'Human',
        type: '',
        gender: 'Female',
        origin: {
          name: 'Earth (C-137)',
          url: 'https://rickandmortyapi.com/api/location/1',
        },
        location: {
          name: 'Anatomy Park',
          url: 'https://rickandmortyapi.com/api/location/5',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/17.jpeg',
        episode: ['https://rickandmortyapi.com/api/episode/3'],
        url: 'https://rickandmortyapi.com/api/character/17',
        created: '2017-11-04T22:21:24.481Z',
      },
      {
        id: 18,
        name: 'Antenna Morty',
        status: 'Alive',
        species: 'Human',
        type: 'Human with antennae',
        gender: 'Male',
        origin: {
          name: 'unknown',
          url: '',
        },
        location: {
          name: 'Citadel of Ricks',
          url: 'https://rickandmortyapi.com/api/location/3',
        },
        image: 'https://rickandmortyapi.com/api/character/avatar/18.jpeg',
        episode: [
          'https://rickandmortyapi.com/api/episode/10',
          'https://rickandmortyapi.com/api/episode/28',
        ],
        url: 'https://rickandmortyapi.com/api/character/18',
        created: '2017-11-04T22:25:29.008Z',
      },
    ];

    render(
      <Provider store={store}>
        <CardsList {...{ openModal, cards }}></CardsList>
      </Provider>
    );
    expect(await screen.findByRole('list')).toBeInTheDocument();
    const elements = await screen.findAllByRole('listitem');
    expect(elements).toHaveLength(cards.length);
  });
});
