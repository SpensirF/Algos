function digitize(n) {
    //goals of code:
    //take the digits and put them in an array in reverse order
    let numberize = (n) =>Number(n);//dedicated function for typecasting
    //turn our number n into a string to create the array, then the Array method uses numberize to do the typecasting
    let newArr = Array.from(String(n),numberize);
    //we use the array method .reverse()
    console.log(newArr.reverse());
}

  const number = 35231;
digitize(number);

//given n as an INT type, kata expect array of INTS

//had string, returned string, how to overcome typecasting?


