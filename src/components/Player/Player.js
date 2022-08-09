import React from 'react';
import './Player.css';

// Assets
import playerImg from '../../assets/player.svg';
import Image from 'next/image';

const Player = ({ player }) => (
  <div className="player">
    <div className="player__img">
      <Image src={playerImg} width={30} alt="" />
    </div>
    <div className="player__info">
      <p>
        {player.player} <span>{player.number}</span>
      </p>
    </div>
    <div className="player__position">
      <p>{player.pos}</p>
    </div>
  </div>
);

export default Player;
