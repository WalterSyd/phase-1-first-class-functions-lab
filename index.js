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

function createFareMultiplier(a){
    return function(fare){
        return a*fare
    }
}

const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare)
} 

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(b,c){
    if(c===returnFirstTwoDrivers){
        return returnFirstTwoDrivers(b)
    }else if(c===returnLastTwoDrivers){
        return returnLastTwoDrivers(b)
    }
}
