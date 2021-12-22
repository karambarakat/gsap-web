const { createContext, useContext } = require("react");

const context = createContext();

export const Provider = context.Provider;

export const useScroll = () => useContext(context);

export default context;
