import React, { Fragment } from 'react';
import { ActionCableConsumer } from 'react-actioncable-provider';

const GameCable = ({ game, handleReceivedArena }) => {
  return (
    <Fragment>
      {game.map(game => {
        return (
          <ActionCableConsumer
            key={game.id}
            channel={{ channel: 'ArenasChannel', game: game.id }}
            onReceived={handleReceivedArena}
          />
        );
      })}
    </Fragment>
  );
};

export default GameCable;
