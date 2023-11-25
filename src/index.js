import React, { useState } from 'react';
import './App.css';

const cards = [
  { name: 'The Fool', image: 'https://i.imgur.com/jBNYXl3.jpg', meaning: 'New beginnings, innocence, potential' },
  { name: 'The Magician', image: 'https://i.imgur.com/1z52X7Y.jpg', meaning: 'Manifestation, willpower, action' },
  { name: 'The High Priestess', image: 'https://i.imgur.com/Wj0370m.jpg', meaning: 'Intuition, wisdom, subconscious' },
  { name: 'The Empress', image: 'https://i.imgur.com/78s5t3v.jpg', meaning: 'Nurturing, creativity, abundance' },
  { name: 'The Emperor', image: 'https://i.imgur.com/31g155S.jpg', meaning: 'Structure, authority, power' },
  { name: 'The Hierophant', image: 'https://i.imgur.com/516z7lS.jpg', meaning: 'Tradition, conformity, spirituality' },
  { name: 'The Lovers', image: 'https://i.imgur.com/408954L.jpg', meaning: 'Choice, partnership, love' },
  { name: 'The Chariot', image: 'https://i.imgur.com/3eZ501R.jpg', meaning: 'Determination, willpower, victory' },
  { name: 'Strength', image: 'https://i.imgur.com/1x5a74u.jpg', meaning: 'Inner strength, courage, compassion' },
  { name: 'The Hermit', image: 'https://i.imgur.com/1wK814e.jpg', meaning: 'Solitude, introspection, wisdom' },
  { name: 'Wheel of Fortune', image: 'https://i.imgur.com/4z2mZ1c.jpg', meaning: 'Change, cycles, karma' },
  { name: 'Justice', image: 'https://i.imgur.com/610339c.jpg', meaning: 'Fairness, balance, karma' },
  { name: 'The Hanged Man', image: 'https://i.imgur.com/26a5q3n.jpg', meaning: 'Surrender, sacrifice, transformation' },
  { name: 'Death', image: 'https://i.imgur.com/1r29r1j.jpg', meaning: 'Endings, transformation, new beginnings' },
  { name: 'Temperance', image: 'https://i.imgur.com/21h3Z3c.jpg', meaning: 'Balance, moderation, patience' },
  { name: 'The Devil', image: 'https://i.imgur.com/5l07569.jpg', meaning: 'Addiction, temptation, materialism' },
  { name: 'The Tower', image: 'https://i.imgur.com/10v3828.jpg', meaning: 'Sudden change, upheaval, chaos' },
  { name: 'The Star', image: 'https://i.imgur.com/3k3g44n.jpg', meaning: 'Hope, inspiration, guidance' },
  { name: 'The Moon', image: 'https://i.imgur.com/160mO24.jpg', meaning: 'Illusion, intuition, dreams' },
  { name: 'The Sun', image: 'https://i.imgur.com/114822j.jpg', meaning: 'Happiness, joy, success' },
  { name: 'Judgment', image: 'https://i.imgur.com/14z6z6u.jpg', meaning: 'Rebirth, reckoning, accountability' },
  { name: 'The World', image: 'https://i.imgur.com/121e138.jpg', meaning: 'Completion, achievement, fulfillment' },
];

function App() {
  const [card, setCard] = useState(null);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * cards.length);
    setCard(cards[randomIndex]);
  };

  return (
    <div>
      <h1>Tarot Card Generator</h1>
      <button onClick={handleClick}>Draw a Card</button>
      {card && (
        <div>
          <h2>{card.name}</h2>
          <img src={card.image} alt={card.name} />
          <p>{card.meaning}</p>
        </div>
      )}
    </div>
    ) 
  }