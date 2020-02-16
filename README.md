# Scrolling Sidenav

Scrolling side navigation using Javascript Interaction Observers. Built with HTML, Sass, and vanila JS.

I recently learned about the Javascript Interaction Observer API, a native and relatively simple way to detect when an element enters/exits the browser viewport. Previously, I had been using a _scroll_ event handler along with a debounce function that looped through an array of elements and manually checked each elements distance from the top of the browser every 10 milliseconds. The Interaction Observer API is a much simpler and more efficient solution, and I'll be walking through how I used it to build an FAQ side navigation.

GIF of sidenav in action.

Problems
- detection for the last section
- getting the upward and bottom scrolling detection right (ie when bottom margin is -75% the upward scrolling detection is wack)



