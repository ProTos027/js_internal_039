
  function multwo(n){
    return 2** n
  }
  ch=7
  console.log(multwo(ch))
  let k= [1,2,3, 4, 5, "apple", ch]//accepts all
  console.log(k)

  let arr= ["apple", "mango", "orange"]
  arr.push("papaya")
  arr.shift()
  arr.unshift("kiwi")
  console.log(arr.includes("mango"))
  console.log(arr.indexOf("banana"))
  console.log(arr)

  //map, filter, reduce Note: even if chained, it works on original value
    arrr= arr.map(x=> x+ "r").filter(n=> n.length< 8).reduce((acc,val)=> acc+ val.slice(-3), "");
    console.log(arrr)

    //object: dict, key must be string, [] auto does that
    k= {2: 5, 6: 7}
    p=2
    console.log(k.p, k[2])