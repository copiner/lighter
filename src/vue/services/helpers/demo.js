if(!window.localStorage){
    alert("浏览器支持localstorage");
    return false;
}else{
    var storage=window.localStorage;
    //写入a字段
    storage["a"]=1;
    //写入b字段
    storage.a=1;
    //写入c字段
    storage.setItem("c",3);
    console.log(typeof storage["a"]);
    console.log(typeof storage["b"]);
    console.log(typeof storage["c"]);
}

if(!window.localStorage){
    alert("浏览器支持localstorage");
}else{
    var storage=window.localStorage;
    //写入a字段
    storage["a"]=1;
    //写入b字段
    storage.a=1;
    //写入c字段
    storage.setItem("c",3);
    console.log(typeof storage["a"]);
    console.log(typeof storage["b"]);
    console.log(typeof storage["c"]);
    //第一种方法读取
    var a=storage.a;
    console.log(a);
    //第二种方法读取
    var b=storage["b"];
    console.log(b);
    //第三种方法读取
    var c=storage.getItem("c");
    console.log(c);
}


//--------------
var storage=window.localStorage;
storage.a=1;
storage.setItem("c",3);
console.log(storage);
storage.clear();
console.log(storage);


//---------------
var storage=window.localStorage;
storage.a=1;
storage.setItem("c",3);
console.log(storage);
storage.removeItem("a");
console.log(storage.a);

//------------
var storage=window.localStorage;
storage.a=1;
storage.setItem("c",3);
for(var i=0;i<storage.length;i++){
    var key=storage.key(i);
    console.log(key);
}
