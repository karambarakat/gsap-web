const { createContext, useContext, useMemo } = require("react");

const context = createContext();

export const Provider = context.Provider;

// sorta like dispatch
export const disScrolls = () => useContext(context);
//todo: make memorized context to retrieve values like setScrolls

export default context;
