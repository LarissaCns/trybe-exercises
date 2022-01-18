const soma = (...numeros) => numeros.reduce(((acc,val) => acc + val),0);

console.log(soma(1,2,3,4,5))