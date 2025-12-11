//phase 1
  // let a= 12 cant be redeclared
  // const b= 13 cant be redeclared, reassigned
  // var c= 14
  // d= 15

  // console.log(a, b, c, d)
  // a= "twelve"
  // c= "fourteen"
  // d= "fifteen"

  // console.log(a, b, c, d)

  // var c= 14
  // d= 15

  // console.log(a, b, c, d)

//phase 2
  //  let a= "abc"
  //  let b= ""
  //  let c= null
  //  let d

  //   console.log(a, b, c, d)

//phase 3
    // let score= "33sbc"
    // console.log(typeof(score), typeof score, score) 
    // let num= Number(score)
    // console.log(typeof(num), typeof num, num) 

//phase 4: datetime, timestamp
md= new Date()
console.log(md)
console.log(md.toString())
console.log(md.toISOString())
console.log(md.toDateString())
console.log(md.toTimeString())
console.log(md.getTime()) //timestamp
console.log(md.getFullYear())
console.log(md.getMonth()+1) //0-11
console.log(md.getDate())
console.log(md.getHours())
console.log(md.getMinutes())
console.log(md.getSeconds())
console.log(md.getMilliseconds())
console.log(md.getDay()) //0-6
// 0: Sunday, 1: Monday, ..., 6: Saturday