// Code your solution in this file!

let z1=[]
const returnFirstTwoDrivers = function(z){
    return z1=[z[0],z[1]]
}

let x2=[]
const returnLastTwoDrivers = function(x){
    return x2=[x[x.length-2],x[x.length-1]]
}

let selectingDrivers=[]
selectingDrivers[0]=returnFirstTwoDrivers
selectingDrivers[1]=returnLastTwoDrivers


//Fn that takes one argument, a. It creates a new function that takes one argument, fare multiplied by n
function createFareMultiplier(a){
    return function(fare){
        return a*fare
    }
}
//A fn that takes a fare as an argument. It uses the function to create a new function that doubles the fare.
const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare)
} 

//A fn that takes a fare as an argument. It uses the function to create a new function that multiplies the fare
//by 3. Then, it invokes the new function with the fare 
const fareTripler = function(fare){
    return createFareMultiplier(3)(fare)
}

//Fn that takes two arguments, b and c. It checks if c is equal to the function returnFirstTwoDrivers
//and then returns the result of calling the respective function with the argument b.
function selectDifferentDrivers(b,c){
    if(c===returnFirstTwoDrivers){
        return returnFirstTwoDrivers(b)
    }else if(c===returnLastTwoDrivers){
        return returnLastTwoDrivers(b)
    }
}
