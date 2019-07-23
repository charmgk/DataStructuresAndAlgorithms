# Get The Biggest Possible Combined Number From A Given Array

## Case

Given the array : `[15, 23, 46, 70, 98]`

Return the string : `9876543210`

## Solution

- Collapse the array into one unsorted string

  - Use `join()` to collapse into one object. i.e `'1523467098'`

- Split the string into individual string items, map through them converting each to int, return as an array of integers

  - Use `split()` to split them. i.e `[ '1', '5', '2', '3', '4', '6', '7', '0','9', '8']`

  - Use `map()` to iterate over each array item

  - Use `parseInt()` to return the resulting array as an integer array. i.e `[ 1, 5, 2, 3, 4, 6, 7, 0, 9, 8 ]`

- Sort from biggest to smallest using a callback function, join to form a single string
  - Use `sort()` using a callback function to return a sorted array from biggest to smallest. i.e `[ 9, 8, 7, 6, 5, 4, 3, 2, 1, 0 ]`
  - Use `join()` to return the sorted array as one string. i.e `9876543210`

## Usage

Run with any JavaScript environment
