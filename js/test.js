// let arr = [];

// for (let i = 10; i <= 200; i += 10) {
//     arr.push(i);
// }
// console.log(arr);



// arr.forEach(function (i, index) {
//     content += `<p>${i}　</p>`;
// });



const input = document.querySelector(".input");
const searchBtn = document.querySelector(".search")

searchBtn.addEventListener("click", function () {
    console.log(input.valueAsNumber);
    document.querySelector(".container").innerHTML = "";
    let maxNum = input.valueAsNumber;
    let arr = [];
    let content = "";
    let i = 0;
    let j = 0;

    for (i = 2; i <= maxNum; i++) {
        let isPrime = true;
        for (j = 2; j < (i / 2 + 1); j++) {
            if (i % j == 0) {
                isPrime = false
                break;
            }
        }
        if (isPrime) {
            arr.push(i);
        }
    }
    console.log(arr);
    arr.forEach(function (x) {
        content += `${x}, `;
    });
    console.log(content);
    document.querySelector(".container").innerHTML = content;
    input.value = null;
});
