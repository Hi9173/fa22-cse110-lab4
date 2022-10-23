1. Line 9 will be printing "values adde: 20".
2. Line 13 will be printing "final result: 20"

3. Line 9 will be printing "values adde: 20"
4. Line 13 will cause an error as the 'let' variables have a block scope, meaning the variable cannot be access outside of the block where it is declared. In this case, the 'console.log('final result: ', result)' is accessing the let variable 'result' outside of the if block, causing error.

5. Line 9 will cause an error as the vaule stored in 'const' variable cannot be change once declared. In this case, the 'const result' was set to 0 at the beginning, and changed to 'num1 + num2' later on, causing an error.
6. Line 13 will cause an error. Now since line 9 caused an error, the code stops at line 9 and doesn't reach line 13. But suppose it does reach line 13, this will also cause an error as 'const' variables have a block scope as well. Hence due to the same reason in question 4, line 13 will cause error.
