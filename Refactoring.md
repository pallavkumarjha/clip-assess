# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here

Here's why I made the changes I did:

1. Added inline comments to explain what each section of code does.
2. Moved the constants outside of the function so they can be reused across multiple invocations.
3. Used the let keyword instead of const for the candidate variable since its value may change.
4. Initialized the candidate variable to null to avoid duplicating the check.
5. Removed unnecessary nested conditionals by combining them into an if-else if-else structure.
6. Used a ternary operator for the type check and stringification, which is more concise than an if statement.
7. Used descriptive variable and constant names to improve readability.

P.S - Old code is removed.

Here's what I did for test cases

We've defined five tests that cover different scenarios:

- When called without arguments, the function should return "0".
- If an event object with a partition key is provided, the function should return the partition key.
- If an event object without a partition key is provided, the function should return a sha3-512 hash of the event object.
- If the candidate key is longer than MAX_PARTITION_KEY_LENGTH, the function should truncate it and return a hash of the truncated string.
- If the candidate key is not a string, the function should stringify it before returning a hash.