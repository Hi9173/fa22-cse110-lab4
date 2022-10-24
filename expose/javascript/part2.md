1.Line 12 will print the number 3, as the for loop runs 3 times and 'i' is being increatmened 4 times. At i = 0, the first number in the array, 100, is being discounted. At i = 1, 200 is being discounted. At i = 2, 300 is being discounted. Then after the third loop is done, i is incremented to be 3, which is equal to th elength of the input array, 3, instead of less than, thus the loop stops and i = 3.

2.Line 13 will print the number 150, as the variable 'discountedPrice' is updated to be the discounted price of the last number in the input array when exiting the loop. In this case, the last number of the input array is 300, and the discount is 0.5, thus 300 * 0.5 = 150, which is what 'discountedPrice' stored when exiting the loop.

3.Line 14 will also print the number 150, because what 'finalPrice' does is to round the 'discountedPrice' using 'Math.round'. In this case, 'discountedPrice' is 150 when exiting the loop, hence rounding 150 is again 150, thus 'finalPrice' also stored 150 when exiting the loop.

4.The function will return [50, 100, 150], because the function is meant to calculate the discounted price of a given array of numbers and a give discount. In this case, the given array is [100, 200, 300] with the discount being 0.5, thus the returning result should be half of the three numbers, that is [50, 100, 150]

5.Line 12 will cause an error, as the variable 'let i' has a block scope. The block where 'i' is defined is the for loop block, thus the variable 'i' cannot be access outside of the for loop, in this case we are trying to print 'i' outside of the for loop, causing an error.

6.Line 13 will cause an error, as the variable 'let discountedPrice' has a block scope. Again similar to question 5, the variable 'discountedPrice' is access outside of the for loop block where it was defined, causing an error.

7.Line 14 will print the number 150, as the variable 'let finalPrice' has a block scope and it is defined in the function block. Thus 'finalPrice' can be access within anywhere of the function, and for similar reason in question number 3, 'finalPrice' will be storing 150 when exiting the loop.

8.The function will return [50, 100, 150], for the similar reason in question 4. The only difference in question 1-4 and question 5-8 is that all the variables are 'let' instead of 'var'. But notice 'discounted' and 'finalPrice' are defined in the function block scope, so even inside the for loop, the two variables can still be access and modified, thus the function will return the same array as question 4.

9.Line 11 will cause and error, for the same reason as in question 5. The scope of the variable 'let i' is the for loop, but it is getting printed outside of the for loop, hence causing an error.

10.Line 12 will print the number 3, as at the beginning 'const length' is defined to be the length of the input array, which in this case is 3. And after that, the variable was not modified so when it gets printed, it will print a 3.

11.The function will return [50, 100, 150], for the similar reason in question 4. Notice even though the variable 'discounted' is defined to be a 'const' variable, it does not mean it cannot be modified but instead just means it cannot be reassign. In this case, elements were added to the 'discounted' array via push, which is valid, hence the function will return [50, 100, 150].

12A.To access the name: student.name
12B.To access the Grad Year: student["Grad Year"]
12C.To call the function: student.greeting
12D.To access name of favorite teacher: student["Favorite Teacher"].name
12E.To access index zero: student.courseload[0]

13A.The output is 32, because '3' is view as a string and '3'+2 is view as concatenation of string
13B.The output is 1, because '3' is type changed to number thus 3-2=1
13C.The output is 3, as null represents the absence of value in an object
13D.The output is 3null, as '3' is a string and null is view as concatenation of string
13E.The output is 4, as 'true' is valued as 1, thus 1+3=4
13F.The output is 0, as 'false' is valued as 0, and 0+null is like question 13C, resulting 0
13G.The output is 3undefined, for similar reason in question 13D
13H.The output is NaN, as 'undefined' is used to declared something that is not assign, hence cannot be arithmetic

14A.The output is True, because the string '2' becomes the number 2
14B.The output is False, because we first compare the first character, and '2' < '1' is false
14C.The output is True, because the string '2' becomes the number 2
14D.The output is False, because the operator '===' compares without conversion
14E.The output is False, because 'true' is valued as 1
14F.The output is True, as 'Boolean(2)' is evaluated as 'true', thus 'true' === 'true' holds

15.The difference between '==' and '===' is that '==' convertes the values to numbers while '===' is strictly comparing without conversion

16.
