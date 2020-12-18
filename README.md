# Regular Expressions (RegEx)

Allows us to check a series of characters for 'matches'. Use the [regex101 online tool](https://regex101.com/) to create test patterns.

![Form Validator](https://media3.giphy.com/media/c1Zf0R8KvtSCI/giphy.gif?cid=ecf05e478zvtncg1wts2ybxbbsg3qz09gxhcefiuxxj2xgvi&rid=giphy.gif)

## Simple Patterns
- `/pattern/` looks for the first instance
- `/pattern/g`, the `g` flag makes the search **global**
- `/pattern/gi`, the `i` flag makes the search match **case insenstive**

## Character Sets 
- `[]`
- `/[ph]attern/`, matches either a `p` or a `h` in the first position and occupies one space in the whole regular expression
- `[^p]000`, the `^` carrot excludes the `p` from the match

## Ranges
- `/[a-z]attern/g`, includes all the letters of the alphabet
- `/[a-z]attern/gi` add the `i` case insensitive flag OR use the following; `/[a-zA-Z]attern/`
- `/[0-9]attern/g`

## Repeating Characters
- `/[0-9]+/`, the `+` sign allows a match for the numbers in the range 0 to 9 for any length
- `/[0-9]{11}/`, create a match for a number 11 times
- `/[a-z]{11}/` matches an 11 letter word
- `/[a-z]{5, 8}/` matches a word between 5 and 8 characters long
- `/[a-z]{5,}/` matche anything _at least_ 5 characters long