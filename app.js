{

    console.log("Masala-20")
    // Masala sharti :
    // argument sifatida berilgan arrayning o’rtasidagi sonni topadigan function yarating [1,2,3,4,5] ⇒ o’rtasidagi son 3 [1,2,3,4] ⇒ o’rtasidagi son (2 + 3) / 2 = 2.5 ya’ni o’rtadagi 2 tasini qo’shib 2 ga bo’lish kerak
    function findMiddleNumber(arr) {
        let length = arr.length;
        if (length % 2 !== 0) {
            // Agar elementlar soni toq bo'lsa, o'rtadagi sonni qaytaramiz
            return arr[Math.floor(length / 2)];
        } else {
            // Agar elementlar soni juft bo'lsa, o'rtadagi ikkita sonni qo'shib 2 ga bo'lamiz
            let midIndex = length / 2;
            return (arr[midIndex - 1] + arr[midIndex]) / 2;
        }
    }
    console.log(findMiddleNumber([1, 2, 3, 4, 5]));
    console.log(findMiddleNumber([1, 2, 3, 4]));    
    
}
{
    console.log("Masala-21")
    // Masala sharti :
    // argument sifatida berilgan sonning tub son yoki tub emasligini aniqlaydigan function yarating
    const primeNumber = (num) => {
        let count = 0
        for(let i=1; i<=num ; i++){
            if(num % i == 0){
                count++
            }
        }
        // Agar bo'linuvchilar soni oziga va 1 ga bolincha yani 2ta bolsa tub son
        if(count == 2){
            console.log(`${num} : tub son`)
        }
        // Aks holda tub son emas
        else{
            console.log(`${num} : tub son emas`)
        }
    }
    primeNumber(5)
}
{
    console.log("Masala-22")
    // Masala sharti :
    // 2 sonining qandaydir darajasini bildiruvchi qandaydir n butun son berilgan (n > 0) berilgan n son 2 ning qanday k darajadaligini toping input: 8 , k = 3

    function findPowerOfTwo(n) {
        // Manfiy yoki 0 bo'lsa, error qaytaramiz
        if (n <= 0){
            return "Noto'gri son ";
        }  
        let i = 0;
        let power = 1;
        while (power < n) {
            // 2 ning darajasini hisoblaymiz
            power *= 2; 
            i++;
        }
        // Agar power n ga teng bo'lsa, i ni qaytaramiz
        if(power==n){
            return i
        }
        // Agar teng bo'lmasa, error qaytamiz
        else{
            return "Xato"
        }
    }
    console.log(findPowerOfTwo(8));
    
}
{
    console.log("Masala-24")
    // Masala sharti :
    // argument sifatida berilgan sonning nechchi xonali ekanligini aniqlaydigan function tuzing
    function sonXonaligi(son) {
        // sonni stringa ozgartirib uzunligini qaytaramiz
        return son.toString().length;
      }
      
      console.log(sonXonaligi(155));  
      
}
{
    console.log("Masala-27")
    // Masala sharti :
    // berilgan argument ni nimaligini ayting agar son bo’lsa return “son” agar string bo’lsa “string” aks holda return 0 bo’lsin
    function argumentTuri(arg) {
        if (typeof arg === 'number') {
          return 'son';
        } else if (typeof arg === 'string') {
          return 'string';
        } else {
          return 0;
        }
    }
    console.log(argumentTuri(123)); 
      
      
}
{
    console.log("Masala-28")
    // Masala sharti :
    // argument sifatida berilgan string ni teskari qiluvchi function tuzing
    function teskariString(str) {
        return str.split('').reverse().join('');
    }
      
     
    console.log(teskariString("salom"));  
      
}