//arr
var a = [1,2,3];
var b = [];
var c = a;

for(let i in a){
  b[i] = a[i];
}

a.push(9)
b.push(4)
c.push(5)

console.log(...a)
console.log(...b)
console.log(...c)


//obj
var obj1 = {
  'a':'139',
  'b':'156',
  'c':'189'
}

var obj2 = {}
for(let i in obj1){
  obj2[i] = obj1[i]
}
obj2['d'] = '186'

console.log(obj1)
console.log(obj2)

function shallowCopy(obj1, obj2){
  for (let key in obj1){
    if(obj1.hasOwnProperty(key)){
      obj2[key] = obj1[key];
    }
  }
}



function deepCopy(obj){

    var objClone = Array.isArray(obj)?[]:{};

    if(obj && typeof obj === 'object'){
        for(let key in obj){
            if(obj.hasOwnProperty(key)){
                if(obj[key] && typeof obj[key] === 'object'){
                    objClone[key] = deepCopy(obj[key]);
                } else {
                    objClone[key] = obj[key];
                }
            }
        }
    }

    return objClone;
}

var fru = {
  fruits:['apple','banner'],
  num :101
}
//var frus = {}
//shallowCopy(fru, frus)
let frus = deepCopy(fru);

console.log(frus)

frus.fruits[0] = 'orange';

//sth unexception
console.log(fru)
console.log(frus)



//jquery deepCopy
/*
var frus = $.extend(true,{},fru);
*/


let d = [4,3,2,1];
let e = d.slice();

d[0] = 9;

console.log(d,e);

let f = [3,1,[4,6],8];
let g = f.slice();

console.log(f,g)
f[1] = 9;
f[2][0] = 7;

console.log(f,g);


export function deepClone(obj){
    let _obj = JSON.stringify(obj),objClone = JSON.parse(_obj);
    return objClone;
}

let h = [9,2,[4,5],7,0];
let i = deepClone(h);

h[0] = 4;
h[2][1] = 3;

console.log(h, i);
