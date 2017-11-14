//webpack index.js bundle.js --progress
//webpack index.js bundle.js --watch

require("./hello.js");

require("style-loader!css-loader!./style.css");
//or
 /*webpack index.js bundle.js --moudle-bind 'css=style-loader!css-loader' */
//require("./style.css");

function hello (str){
  console.log(str);
}

hello("copiner!!!");
