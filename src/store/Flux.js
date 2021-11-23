const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      Personajes: [],

      Comics: [],
    },
    actions: {
      getPersonajes: (url) => {
        fetch(url)
          .then((resp) => resp.json())
          .then((dat) => setStore({ Personajes: dat.data.results }));
      },
      getComics: (id) => {
        fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}/comics?ts=1&apikey=2c7646b1592cf7f1709584014a70e2b5&hash=e76786c27c33203502f260f6be27384b`)
        .then((resp) => resp.json()) 
        .then((dat) => setStore({ Comics: dat.data.results }));

       //fetch(`https://gateway.marvel.com:443/v1/public/characters/${id}/comics?ts=1&apikey=861737370d038b9184fd561a06c8c13e&hash=e27f192f22c7aa6001f64e87f19b2151`).then(resp => resp.json()).then(dat1 => setStore({ Comics: dat1.data.results }))
      },
    },
  };
};

export default getState;
