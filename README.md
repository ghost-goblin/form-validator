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

# Ranges
- `/[a-z]attern/`, includes all the letters of the alphabet
- `/[a-z]attern/gi` add the `i` case insensitive flag OR use the following; `/[a-zA-Z]attern/`