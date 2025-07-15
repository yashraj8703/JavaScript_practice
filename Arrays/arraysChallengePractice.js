function checkDogs(dogsJulia, dogsKate) {
    let len=dogsJulia.length
    let newDogsJulia = dogsJulia.filter((x, index) => {
    if (index == 0 || index == len-1 || index == len-2) {
      return false;
    }
    else{return true}
  });
  let allDogs=newDogsJulia.concat(dogsKate)
  allDogs.forEach(element => {
    if(element>=3) console.log("dog")
    else console.log("Puppy")
  });

}


function calcAverageHumanAge(dogsAges)
{
    let newAges=dogsAges.map((x)=>{
        if(x<=2)
        {
            x=2*x
        }
        else{
            x=16+x*4
        }
        return x;
    })
    .filter((x)=> x>=18)
    let sum=newAges.reduce((acc,curr)=>acc+curr,0)
    console.log(sum/newAges.length)

}
// checkDogs([3,5,2,12,7],[4,1,15,8,3])
// calcAverageHumanAge([1,2,3,4])

//-------------------------------------------------------------------------------------------------
// create user name

const acc1 = {
  name: "Robert Lewandowski",
  age: 38,
  nation: "Poland"
};

const acc2 = {
  name: "Lionel Messi",
  age: 37,
  nation: "Argentina"
};

const acc3 = {
  name: "Cristiano Ronaldo",
  age: 40,
  nation: "Portugal"
};

const acc4 = {
  name: "Kylian Mbappé",
  age: 26,
  nation: "France"
};

const acc5 = {
  name: "Erling Haaland",
  age: 24,
  nation: "Norway"
};
const accounts = [acc1, acc2, acc3, acc4, acc5];

// username -> firt letter of each name(firstname, middlename, last name)

// let username="Robert Lewandowski"

// let user=username.toLowerCase().split(' ');
// let str=""
// let newArr=user.map((x)=>x[0])
// console.log(newArr)


let userNames=accounts.map((account)=>{
    let playerName=account.name.toLowerCase().split(' ')
    let playerUserName=playerName.map((name)=>name[0])
    return playerUserName.join('')
})
let alternateUserName=[]
accounts.forEach((account)=>{
    let playerName=account.name.toLowerCase().split(' ')
    let playerUserName=playerName.map((x)=>x[0])
    alternateUserName.push(playerUserName.join(''))
})

console.log(userNames)
console.log(alternateUserName)