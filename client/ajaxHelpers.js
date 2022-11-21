// Add your cohort name to the cohortName variable below, replacing the 'COHORT-NAME' placeholder
const cohortName = '2207-FTB-ET-WEB-PT';
// Use the APIURL variable for fetch requests
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;


export const fetchAllPlayers = async () => {
    try {
        const allPlayers = await fetch(`${APIURL}players`);
        const result = await allPlayers.json();
        if (result.error) {
            throw result.error;
        }
        return result.data.players;
      } catch (error) {
        console.error('Uh oh, trouble fetching players!', error);
      }
};

export const fetchSinglePlayer = async (playerId) => {
    try {
        const response = await fetch(`${APIRUL}players/${playerId}`);
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error('Uh oh, trouble fetching players!', error);
      }
      
};

export const addNewPlayer = async (playerObj) => {
  try {
    const newPlayer = await fetch(
      await fetch(`${APIURL}players`),
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: '',
          breed: '',
        }),
      }
    );
    const result3 = await newPlayer.json();
    console.log(result3);
  } catch (err) {
    console.error(err);
  }
};

export const removePlayer = async (playerId) => {
  try {
    const response = await fetch(`${APIURL}/players/${playerId}`, {
      method: 'DELETE',
    });
    const result = await response.json();
    if (result.error) throw result.error;
    return;
   } catch (err) {
    console.error(
      `Whoops, trouble removing player #${playerId} from the roster!`,
      err
    );
   }
   };
