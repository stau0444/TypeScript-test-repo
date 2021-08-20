type HelloFunctionGeneric1 = <T>(message:T)=>T;

const helloF1:HelloFunctionGeneric1 = <T>(message:T) : T =>{
    return message;
}

interface HelloFG{
    <T>(message:T):T;
}

const helloF2:HelloFG = <T>(message:T) : T =>{
    return message;
}