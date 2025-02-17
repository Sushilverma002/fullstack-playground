// Types of error
/*
    1. syntax error : occur at the time of compilation.
    2. rumtime error :  also know as exception. during the execution ( after compilation/ interpretation)
        i  reference error : typing to access  an undefined vairable / method
        ii typeError 
        iii RangeError : a value exceeds the allowed range. / you want to execute a program which range doesnot exist.
    3. logical error : logical error most difficult type of error to track down.
*/

// let name = "hello";
// console.log(name1); // reference

// let sum = 10 / 0;
// console.log(sum);

/*----------- KEY WORDS and Identifiers, token*/
// token : a smallest unit of the program is known as token.
// key words : these are reseverd words which can not be used as an identifier or as vairable or as function name. eg: new, let , const, opertors , if , else , else if
// identifiers = are the entities which are written / created by the dev which baiscally hold some value.
// white space =  always ignored by the compliers

/*
1. it created with a-z/A-z.
2. no keyword can be identifier.
3. it can start with _, $
4. not start with number 0-9 can not be used to created identifiers.
5. case sensitivity : it allow.
*/

// camel case : sushilVerma
//            : sushil_verma
// * never start with capital letter

/*
HLL (C++, PYTHON,ETC) -> complier ( it will convert eveything into token ,white space removal) -> exe file will generate -> Machine understanable language ( binary) -> execution -> final output
*/

// ------------------------ EXECPTION HANDLING -------------
/* WHY IT IS USE -> it is use to catch the run time errors. means the error which are genrating after the complination process(exception) 
1. try: it defines a code block to run ( to try)
2. catch: it is defined a code block to handle any error
3. finally: it is a block of code to run default or regardless of the result.
4. throw: it used to define the custom error.
*/
function printValue(value) {
  try {
    if (value == 2) throw "yes the variable a";
    value = value + 2;

    console.log(value);
  } catch (error) {
    console.log("here is the error", error);
  } finally {
    console.log("this program has been executed");
  }
}

printValue(2);
