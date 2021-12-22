const { createContext, useContext } = require("react");

const context = createContext();

export const Provider = context.Provider;

export const useScroll = () => useContext(context);
//todo: make memorized context to retrieve values like setScrolls

export default context;
