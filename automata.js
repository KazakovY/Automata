let t = 'aba';
let s = 'abbbbbabbbbbbba'
let m = t.length;
let n = s.length;
let alph = new Array();

for(let i = 0; i < m; i++)
    alph[t.charAt(i)]=0;
alph['*']=0;
let del=new Array(m+1)
for(let j = 0;j <= m; j++)
    del[j] = new Array();

for(let i in alph)
    del[0][i]=0;

for(let j = 0;j < m;j++) {
    let prev = del[j][t.charAt(j)]
        del[j][t.charAt(j)] = j + 1;
    for (let i in alph)
        del[j + 1][i] = del[prev][i];
}
let result = new Array();
let first = 0;
for (let i = 0 ; i < s.length; i++) {
    let letter;
    if (s.charAt(i) in alph) {
        letter = s.charAt(i);
    }
    else {
        letter = '*';
    }
    let condition = del[first][letter];
    first = condition;
    if (condition === t.length) {
        result.push(i - t.length + 1);
    }
}
let result1 = '';
if (result.length !== 0){
    for (let i = 0; i < result.length; i++){
        result1 += result[i] + ' ';
    }
    console.log(result1);
}else
    console.log("нет подстроки в строке");