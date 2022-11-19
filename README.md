# UFOs with JavaScript

## Overview - Purpose

## Results - How To Use

## Summary

The current design listens for any changes in the inputs and immediately applies it to the table. This means that if you had three filter criteria, the table updates after each one is entered. This could greatly slow down the website, particularly if there was more data and more users. One recommendation would be to add a button to press after a user has entered all of their search requirements, that way the table would only be rebuilt once. For some of these filters, like Country or Shape, the users may not know what the options are. Therefore, another recommendation could be to use dropdown boxes rather than input boxes. A final recommendation would be to include another input filter that uses regex to try to match a word or two in the comments. For instance, filtering for an entry that says red light. 
