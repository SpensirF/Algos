function processData(input) {
        //Enter your code here
        const splitInput = input.split("\n");
        console.log(splitInput)
        const phoneBookSize = +splitInput[0];
        console.log(phoneBookSize)
        const inputValue = splitInput.slice(phoneBookSize + 1);
        console.log(inputValue)
        const temp = splitInput.slice(1, phoneBookSize + 1).map(list => {
            let result = {
                name: list.split(" ")[0],
                phoneNumber: list.split(" ")[1]
            }
                    return result;
        });
        console.log(temp)
        let phoneBook = [];
        for (let list of temp) {
            phoneBook[list.name] = list.phoneNumber;
        }
        console.log(phoneBook)
        for (let name of inputValue) {
            if (phoneBook[name]) {
                console.log(`${name}=${phoneBook[name]}`);
            } else {
                console.log('Not found')
            }
        }
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
