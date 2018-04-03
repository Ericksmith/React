const isAdult = (age) => {
    if(age >= 18){
        return true
    }
    return false
}

const canDrink = (age) => {
    if(age < 21){
        return false
    }
    return true
}

const isSenior = (age) => {
    if(age > 64){
        return true
    }
    return false
}

export {
    isAdult,
    canDrink,
    isSenior as default
}