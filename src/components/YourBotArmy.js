import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ army, deleteBot, deleteArmy, }) {
  //your bot army code here...
  const botArmy = army.map((bot) => {
    return (
      <BotCard
        key={bot.id}
        bot={bot}
        clickAdd={deleteArmy}
        clickDelete={deleteBot}
      />
    );
  });
  return (
    <div className='ui segment inverted olive bot-army'>
      <div className='ui five column grid'>
        Your Bot Army
        <div className='row bot-army-row'>
          {/*...and here...*/}
          {botArmy}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;