let movements=[200,450,-400,3000,-650,-130,70,1300]

movements.forEach((x)=>{
    if(x>0) console.log('Deposited')
        else console.log('Withdrawn')
})

movements.forEach((val)=>{
    if(val<0)
    {
        return
    }
    console.log(val)

})


let myObject={
    multipier:2,
    nums:[1,2,3,4],
    multiply:function(){
        this.nums.forEach(function(x){
            console.log(x*this.multipier)
        },this)
    }
}

myObject.multiply()