//JavaScript ile istediğiniz kadar sayı parametre gönderebileceğiniz bir fonksiyon yazınız. 
//Bu fonksiyona gönderdiğiniz her sayı için çıktı olarak 
//asal olup olmadığını yazınız. (Araştırma konusu : şart blokları : if )

function findPrime(...numbers) {
    let asallar = []
    let asalolmayanlar = []
    for (let i = 0; i < numbers.length; i++) {
        let prime = 0
        if (numbers[i] >= 2) {
            for (let j = 2; j < numbers[i]; j++) {
                if (numbers[i] % j == 0) {
                    asalolmayanlar.push(numbers[i])
                    prime = prime + 1
                    break
                }
            }
            if (prime == 0) {
                asallar.push(numbers[i])
            }
        } else {
            asalolmayanlar.push(numbers[i])
        }
    }
    console.log(numbers + " \nBu sayılardan")
    console.log("Asal olan sayılar: " + asallar)
    console.log("Asal olmayan sayılar: " + asalolmayanlar)
}

findPrime(7, 23, 127, 2441, 2, 77, 922, 483 )