describe("About Asserts (about_asserts.js)", function() {
  // We shall contemplate truth by testing reality, via spec expectations.
  it('should expect true', function() {
    // Your journey begins here: Replace the word false with true 
    expect(true).toBe(true);
  });

  // To understand reality, we must compare our expectations against reality.
  it('should expect equality', function() {
    let expectedValue = 2;
    let actualValue = 1 + 1;

    expect(actualValue === expectedValue).toBeTruthy();
  });

  // Some ways of asserting equality are better than others.
  it('should assert equality a better way', function() {
    let expectedValue = 2;
    let actualValue = 1 + 1;

  // toEqual() compares using common sense equality.
    expect(actualValue).toEqual(expectedValue);
  });

  // Sometimes you need to be precise about what you "type."
  it('should assert equality with ===', function() {
    let expectedValue = "2";
    let actualValue = (1 + 1).toString();

  // toBe() will always use === to compare.
    expect(actualValue).toBe(expectedValue);
  });

  // Sometimes we will ask you to fill in the values.
  it('should have filled in values', function() {
    expect(1 + 1).toEqual(2);
  });
});

describe("About Control Structures (about_control_structures.js)", function(){
  it("if", function() {
    let isPositive = false;
    if (2 > 0) {
      isPositive = true;
    }

    // what is the value of isPositive?
    expect(true).toBe(isPositive);
  });

  it("for", function() {
    let counter = 10;
    for (let i = 1; i <= 3; i++) {
      counter = counter + i;
    }

    // what is the value of counter?
    expect(16).toBe(counter);
  });

  it("for in", function() {
    // this syntax will be explained in about objects
    let person = {
      name: "Amory Blaine",
      age: 102
    };
    let result = "";
    // for in enumerates the property names of an object
    for (let property_name in person) {
        result = result + property_name;
    }

    // what is the value of result?
    expect("nameage").toBe(result);
  });

  it("ternary operator", function() {
    let fruit = true ? "apple" : "orange";
    expect("apple").toBe(fruit, 'what is the value of fruit?');

    fruit = false ? "apple" : "orange";
    expect("orange").toBe(fruit, 'now what is the value of fruit?');
  });

  it("switch", function() {
    let result = 0;
    switch (2) {
      case 1:
        result = 1;
        break;
      case 1+1:
        result = 2;
        break;
    }

    // what is the value of result?
    expect(2).toBe(result);
  });

  it("switch default case", function() {
    let result = "Pippin";
    switch ("m") {
      case "f":
        result = "Frodo";
        break;
      case "s":
        result = "Samwise";
          break;
      default:
        result = "Merry";
        break;
    }

    // what is the value of result?
    expect("Merry").toBe(result);
  });

  it("null coalescing", function() {
    let result = null || "a value";

    // what is the value of result?
    expect("a value").toBe(result);
  });
});

describe("About Assignment (about_assignment.js)", function() {
  it("local variables", function() {
    let temp = 1;
    // Assign a value to the variable temp
    expect(temp).toBe(1);
  });
  
  it("global variables", function() {
    temp = 1; // Not using let is an example. Always use let in practise.
    // global variables are assigned to the window object
    expect(window.temp).toBe(temp);
  });
});



describe("About Equality (about_equality.js)", function(){
  it("numeric equality", function() {
    expect(3 + 4).toBe(7);
  });

  it("string equality", function() {
    // concatenate the strings
    expect("3" + "7").toBe("37");
  });

  it("equality without type coercion", function() {
    // what is exactly equal to 3?
    expect(3 === 3).toBeTruthy();
  });

  it("equality with type coercion", function() {
    // what string is equal to 3, with type coercion?
    expect(3 == "3").toBeTruthy();
  });

  it("string literals", function() {
    // quote types are interchangable, but must match.
    expect("frankenstein" === "frankenstein").toBeTruthy();
    // quote types can use both single and double quotes.
    expect('frankenstein' === 'frankenstein').toBeTruthy();
  });
});describe("About Numbers (about_numbers.js)", function() {
  it("types", function() {
    let typeOfIntegers = typeof(6);
    let typeOfFloats = typeof(3.14159);
    // are ints and floats the same type?
    expect(true).toBe(typeOfIntegers === typeOfFloats);
    // what is the javascript numeric type?
    expect("number").toBe(typeOfIntegers);
    // what is a integer number equivalent to 1.0?
    expect(1).toBe(1.0);
  });

  it("NaN", function() {
    let resultOfFailedOperations = 7/'apple';
    // what will satisfy the equals assertion?
    expect(true).toBe(isNaN(resultOfFailedOperations));
    // is NaN == NaN?
    expect(false).toBe(resultOfFailedOperations == NaN);
  });
});
describe("About Operators (about_operators.js)", function() {
  it("addition", function() {
    let result = 0;
    //starting i at 0, add i to result and increment i by 1 until i is equal to 5
    for (let i = 0; i <= 5; i++) {
      result = result + i;
    }
    // What is the value of result?
    expect(15).toBe(result);
  });

  it("assignment addition", function() {
    let result = 0;
    for (let i = 0; i <= 5; i++) {
      //the code below is just like saying result = result + i; but is more concise
      result += i;
    }
    // What is the value of result?
    expect(15).toBe(result);
  });

  it("subtraction", function() {
    let result = 5;
    for (let i = 0; i <= 2; i++) {
      result = result - i;
    }
    // What is the value of result?
    expect(2).toBe(result);
  });

  it("assignment subtraction", function() {
    let result = 5;
    for (let i = 0; i <= 2; i++) {
      result -= i;
    }
    // What is the value of result?
    expect(2).toBe(result);
  });

  //Assignment operators are available for multiplication and division as well
  //let's do one more, the modulo operator, used for showing division remainder

  it("modulus", function() {
    let result = 10;
    let x = 5;
    //again this is exactly the same as result = result % x
    result %= x;
    // What is the value of result?
    expect(0).toBe(result);
  });

  it("typeof", function() {
    // what is the type of an empty object?
    expect("object").toBe(typeof({}));
    // what is the type of a string?
    expect("string").toBe(typeof('apple'));
    // what is the type of -5?
    expect("number").toBe(typeof(-5));
    // what is the type of false?
    expect("boolean").toBe(typeof(false));
  });
});

describe("About Strings (about_strings.js)", function() {
  it("delimiters", function() {
    let singleQuotedString = 'apple';
    let doubleQuotedString = "apple";
    // are the two strings equal?
    expect(true).toBe(singleQuotedString === doubleQuotedString);
  });

  it("concatenation", function() {
    let fruit = "apple";
    let dish = "pie";
    // are the two strings equal?
    expect("apple pie").toBe(fruit + " " + dish);
  });

  it("character Type", function() {
    let characterType = typeof("Amory".charAt(1)); // typeof will be explained in about reflection
    // Javascript has no character type
    expect("string").toBe(characterType);
  });

  it("escape character", function() {
    let stringWithAnEscapedCharacter  = "\u0041pple";
    // what  is the value of stringWithAnEscapedCharacter?
    expect("Apple").toBe(stringWithAnEscapedCharacter);
  });

  it("string.length", function() {
    let fruit = "apple";
    // what is the value of fruit.length?
    expect(5).toBe(fruit.length);
  });

  it("slice", function() {
    let fruit = "apple pie";
    // what is the value of fruit.slice(0,5)?
    expect("apple").toBe(fruit.slice(0,5));
  }); 
});

describe("About Truthyness (about_truthyness.js)", function() {
  it("truthyness of positive numbers", function() {
    let oneIsTruthy = 1 ? true : false;
    // is one truthy?
    expect(true).toBe(oneIsTruthy);
  });

  it("truthyness of negative numbers", function() {
    let negativeOneIsTruthy = -1 ? true : false;
    // is -1 truthy?
    expect(true).toBe(negativeOneIsTruthy);
  });

  it("truthyness of zero", function() {
    let zeroIsTruthy = 0 ? true : false;
    // is 0 truthy?
    expect(false).toBe(zeroIsTruthy);
  });

  it("truthyness of null", function() {
    let nullIsTruthy = null ? true : false;
    // is null truthy?
    expect(false).toBe(nullIsTruthy);
  });
});