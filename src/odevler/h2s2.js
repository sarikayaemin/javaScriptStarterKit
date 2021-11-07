//Parametre olarak girilen iki sayının 
//arkadaş sayılar olup olmadığını bulan programı yazınız. (Arkadaş sayılar için google)

function dostSayi(sayi1 , sayi2) {
    let total1 =0
    let total2 =0

    for(let i =0 ; i< sayi1 ; i++ ){
        if(sayi1 % i == 0){
            total1 =total1 + i
        }
    }

    for(let j =0 ; j< sayi2 ; j++ ){
        if(sayi2 % j == 0){
            total2 =total2 + j
        }
    }

    if(sayi1 == total2 && sayi2 ==total1) {
        console.log(" " +sayi1 + " ile "+ " " + sayi2 +" arkadaştır.")
    } else{
        console.log(" " +sayi1 + " ile "+ " " + sayi2 +" arkadaş değillerdir.")
    }
}

dostSayi(1184, 1210)
dostSayi(51 , 82 )