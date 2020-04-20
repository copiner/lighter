// index.js
import ES6ModuleDefault, { ES6moduleValue } from "./module-es6";
import commonModuleDefault, { commonModuleValue1, commonModuleValue2 } from "./module-common";

let wind = ES6ModuleDefault +'--'+ ES6moduleValue +'--'+ commonModuleDefault +'--'+ commonModuleValue1 +'--'+ commonModuleValue2;

export default wind;
