import { createContext, useState, useEffect } from "react";
import getState from "./Flux";

export const Context = createContext(null);

const InjectContext = (PassedComponen) => {
  const StoreWrapper = (props) => {
    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: (updateStore) =>
          setState({
            store: Object.assign(state.store, updateStore),
            actions: { ...state.actions },
          }),
      })
    );
    //este useEffect se ejecuta la primera vez q se carga la pagina
    useEffect(() => {
      state.actions.getPersonajes(
        //"https://gateway.marvel.com:443/v1/public/characters?ts=1&limit=100&apikey=2c7646b1592cf7f1709584014a70e2b5&hash=e76786c27c33203502f260f6be27384b"
      );

      state.actions.getPersonajes("https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=861737370d038b9184fd561a06c8c13e&hash=e27f192f22c7aa6001f64e87f19b2151")
    }, []);

    return (
      <Context.Provider value={state}>
        <PassedComponen {...props} />
      </Context.Provider>
    );
  };
  return StoreWrapper;
};

export default InjectContext;
