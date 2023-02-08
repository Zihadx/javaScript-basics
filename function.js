//---------> Problem 1: Let’s play a mind game <----------//
function mindGame(num){
    return ((num * 3 + 10) / 2 - 5);
    }
    const number = 50;
    const result = mindGame(number)
    console.log(result)
    //* function explain-----In the code, a constant "number" is declared and assigned the value of 50. The function "mindGame" is then called with the "number" as an argument and the result is stored in a constant "result". Finally, the value of "result" is logged to the console.*//
    //------------> Problem 2: Finding even or odd <------------------//
    function evenOdd(batch7) {
    let count = batch7.length;
    return count % 2 === 0 ? 'even' : 'odd';
    }
    const strAdd = "assignment4"
    const result2 = evenOdd(strAdd)
    console.log(result2)
    //* function explain----- The function then uses a ternary operator to return the string "even" or "odd" depending on whether the value of "count" is evenly divisible by 2 or not. The operator checks if the result of "count % 2" is equal to 0 and returns "even" if it is, or "odd" if it's not.*//
    // --------> Problem 3: Is Less or Greater than seven <-------//
    function isLGSeven(number){
    let work = number - 7
    let work2 = number*2
    return work < 7 ? work : work2;
    }
    const addNumber = 15;
    const result3 = isLGSeven(addNumber)
    console.log(result3)
    //*function explain---------The function uses a ternary operator to return either the result of subtracting 7, stored in the variable "work" or the result of multiplying by 2 ,stored in the variable "work2" depending on whether the result of subtracting 7 is less than 7 or not.*//
    // ---------> Problem 4: Finding Bad data <----------//
    function findingBadData(testing){
    let badData = 0;
    let goodData = 0 ;
    for(let i = 0 ; i < testing.length; i++)
    if(testing[i] < 0 ){
    badData++;
    }
    else{
    goodData++;
    }
    return badData;
    }
    const addArray = [ 2, -5, -7, -13, 6, -1, 16, 5555, 777 ] ;
    const result4 = findingBadData(addArray)
    console.log(result4)
    //* function explain-----The function then uses a for loop to iterate through the elements of the "testing" array and checks if each element is less than 0. If an element is less than 0, the "badData" counter is incremented by 1. If an element is not less than 0, the "goodData" counter is incremented by 1.After the loop is finished, the function returns the value of "badData".*//
    //--------> Problem 5: Convert your gems into diamond <-------//
    function gemsToDiamond(friend1, friend2, friend3){
    let totalDiamond = friend1*21 + friend2*32 + friend3*43
    // console.log(totalDiamond)
    let finalDiamond = totalDiamond - 2000
    return totalDiamond > 1000*2 ? finalDiamond : totalDiamond ;
    }
    const friend1Gems = 100 ;
    const friend2Gems = 5 ;
    const friend3Gems = 1 ;
    const result5 = gemsToDiamond(friend1Gems, friend2Gems, friend3Gems)
    console.log(result5)
    //* function explain------ The function multiplies each friend's gems by a different conversion rate: friend1's gems are multiplied by 21, friend2's gems are multiplied by 32, and friend3's gems are multiplied by 43. These values are then added together to get the total number of diamonds.The function then subtracts 2000 from the total number of diamonds and stores the result in the variable "finalDiamond".*//