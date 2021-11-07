//1000'e kadarki tüm asal sayıları listeleyen programı yazınız.

for( let i = 2 ; i <1000 ; i++){
    let asal = 0

    for(let j =2; j < i ; j++){
        if( i % j == 0){
            asal = asal + 1
            break
        }
    }

    if (asal == 0){
        console.log( i + "Sayı asaldır")
    }
}