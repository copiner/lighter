/*
hex 16进制
dec 10进制
oct 8进制
bin 2进制
*/
export function dec2hex(str){
    var dec = str.toString().split(''), sum = [], hex = [], i, s;
    //console.log(1 * dec.shift())
    while(dec.length){
        s = 1 * dec.shift()
        for(i = 0; s || i < sum.length; i++){
            //console.log('s',s)
            s += (sum[i] || 0) * 10
            //console.log(s)
            sum[i] = s % 16
            //console.log(sum[i])
            s = (s - sum[i]) / 16
            //console.log('e',s)
        }
    }
    //console.log(...sum)
    while(sum.length){
        hex.push(sum.pop().toString(16))
    }
    return hex.join('');
}

export function dec2bin(str){
  var dec = str.toString().split(''), sum = [], bin = [], i, s;
  //console.log(dec)
  while(dec.length){
    s = 1 * dec.shift()
    for(i = 0; s || i < sum.length; i++){
      s += (sum[i] || 0) * 10;
      sum[i] = s % 2;
      // console.log(s, sum[i]);
      s = (s - sum[i]) / 2;
      //console.log(i, sum[i]);
      //console.log('------------------');
      //s = 0
    }

  }

  //console.log(...sum)
  while(sum.length){
      bin.push(sum.pop().toString(2));//反转
  }
  return bin.join('');
}

export function dec2oct(str){
  var dec = str.toString().split(''), sum = [], oct = [], i, s;
  //console.log(dec)
  while(dec.length){
    s = 1 * dec.shift()
    for(i = 0; s || i < sum.length; i++){
      s += (sum[i] || 0) * 10;
      sum[i] = s % 8;
      // console.log(s, sum[i]);
      s = (s - sum[i]) / 8;
      //console.log(i, sum[i]);
      //console.log('------------------');
      //s = 0
    }

  }

  //console.log(...sum)
  while(sum.length){
      oct.push(sum.pop().toString(8));//反转
  }
  return oct.join('');
}

export function bin2dec(str){
  var bin = str.toString().split('').reverse(), sum = [], dec = [], i, s=0;
  //console.log(Math.pow(2,61))//大于53次方有精度损失
  for(i = 0; i < bin.length; i++){
      sum[i] = bin[i] * Math.pow(2,i);
  }

  for(i = 0; i < sum.length; i++){
    if(sum[i]) s = add(s, sum[i]);
  }

  return s;

}

export function add(a,b){
  var a = a.toString().split('').reverse(),b = b.toString().split('').reverse(), sum=[], i;

  var len = a.length > b.length ? a.length : b.length;

  for(i=0; i<len; i++){
    a[i] =  a[i] ? Number(a[i]) : 0;
    b[i] =  b[i] ? Number(b[i]) : 0;
    sum[i] = a[i] + b[i];
  }

  for(i = 0; i < sum.length; i++){
    if(sum[i] >= 10){
      sum[i] -= 10;
      sum[i+1] = (sum[i+1]||0) + 1;
    }
  }

  return sum.reverse().join('');
}
