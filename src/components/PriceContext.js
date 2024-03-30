import { createContext } from "react";


const PriceContext = createContext({'price': 0});
PriceContext.displayName = "GorPrice";

export default PriceContext;
