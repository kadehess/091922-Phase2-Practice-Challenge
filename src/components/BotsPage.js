//import React from 'react';
import YourBotArmy from './YourBotArmy';
import BotCollection from './BotCollection';
import React, { useEffect, useState } from 'react';

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8002/bots')
      .then((r) => r.json())
      .then((bots) => setBots(bots))
  }, []);

  function addBotToArmy(bot) {
    const botInArmy = army.find((selectedBot) => {
      return selectedBot === bot;
    });
    if (!botInArmy) {
      setArmy([...army, bot])
    }
  }
  function deleteBot(selectedBot) {
    
    if (army.find((bot) => bot === selectedBot) && bots.find((bot)=>bot===selectedBot)) {
      setBots(bots.filter((bot) => bot !== selectedBot))
      setArmy(army.filter((bot) => bot !== selectedBot))
      fetch(`http://localhost:8002/bots/${selectedBot.id}`, {
        method: 'DELETE'
      });
    }
  }
  function deleteArmy(selectedBot) {
    const removeArmy = army.filter(bot => bot !== selectedBot);
    setArmy(removeArmy)
  }
  return (
    <div>
      <YourBotArmy
        army={army}
        deleteBot={deleteBot}
        deleteArmy={deleteArmy}
      />
      <BotCollection
        bots={bots}
        addBotToArmy={addBotToArmy}
        deleteBot={deleteBot}
      />
    </div>
  );
}

export default BotsPage;