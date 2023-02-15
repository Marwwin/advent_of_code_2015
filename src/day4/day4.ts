import * as CryptoJS from 'crypto-js';

export function solvePart1(str:string){
    for (let i = 0;;i++){
        if (hashMD5(str + i.toString()).slice(0,5) === "00000"){
            return i;
        };
    }
}

export function solvePart2(str:string){
    for (let i = 0;;i++){
        if (hashMD5(str + i.toString()).slice(0,6) === "000000"){
            return i;
        };
    }
}

export function hashMD5(str:string){
    return CryptoJS.MD5(str).toString();
}