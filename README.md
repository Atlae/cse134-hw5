# Learning Outcomes

* The student will begin to master the use of core JavaScript in support of later efforts.
* Some puzzling aspects of JavaScript and basic features will be explored in a few lab style exercises that will be in support of the final step of the portfolio a "CRUD" feature
* The use of 3rd party JavaScript solutions for common tasks like analytics, content inclusion, and search will also be performed.
* Further improvements to your portfolio website.

## Setup

* Clone your HW3 portfolio website, host this new clone on a new Netlify URL
  * Do NOT modify your HW3 portfolio website, all modifications are to be made on this new clone
* Add any additional pages from this assignment to this new clone's website  
  * Example: [https://your-hw4-website.com](https://your-h4-website.com) as your portfolio homepage, [https://your-hw4-website.com/nativedialogs.html](https://your-hw4-website.com/nativedialogs.html) is where Part 1 will live, etc.
* **Include the link to your website and a link to a public GitHub on the first page of your document.**

## Part 1 - Simple Dialogs (12pts)

Define a web page called **nativedialogs.html**. In this page create _four_ buttons with the text:

* **Alert**
* **Confirm**
* **Prompt**
* **Safer** **Prompt**

Using DOM standard event binding (`addEventListener`) ([resource here](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)) bind click events to the buttons that respectively show a built-in alert, a confirmation and a prompt dialog (for the last two) on the window object. In the case of the confirm button, you should echo the value back to the web page by setting the contents of an `<output>` tag to `“The value returned by the confirm method is : (the value)”` For the prompt buttons, you also will need to write a message like `“User didn’t enter anything”` in the negative case (the user can always cancel instead of answering). Use template strings to make this easier.

In the case of the prompt examples, you should both explore the use of an unsafe collection of data as well as using a [tagged template string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) to purify user inputs to help guard against XSS (Cross Site Scripting). Use the DOMPurify [https://github.com/cure53/DOMPurify](https://github.com/cure53/DOMPurify) to sanitize user inputs. You may directly link that file on a CDN or install it locally, your choice.

### Tips

* Be aware of when and how you bind your events
* Use at least one arrow function to explore their syntax
* There are timing issues here that reveal annoying aspects of the event loop in a browser. The solution may be a surprisingly ugly, but a useful technique. If the event loop is a complete mystery to you that’s just fine review [this video for a complete presentation](https://www.youtube.com/watch?v=8aGhZQkoFbQ) [![video](/images/play_overlay.png)](https://www.youtube.com/watch?v=8aGhZQkoFbQ).

## Part 2: Custom Dialogs (12pts)

In this example we will use the HTML5 `<dialog>` tag to make our own dialogs rather than using the browsers alert, confirm and prompt.

Define a JavaScript module ([resource here](https://javascript.info/modules-intro)) in a file called `customdialog.js` and import this new module into your page for use. You will have to use a variety of DOM methods to add, modify and read various aspects of the elements you put on your page. Using `<template>` tags or JavaScript template strings will make your code cleaner. You should use the DOMPurify again (<https://github.com/cure53/DOMPurify>). Be careful as timing issues may or may not be present in this version depending upon how you approach it.

### Part 1 Tips

* Rely on HTML features rather than writing code where possible
* Carefully watch your return types. Make sure you know the type of what is returned before wasting lots of time or asking questions. The answers are in your console!  

## Part 3: Simple CRUD (40pts)

In this example we will explore the underpinnings of a simple **CRUD** (**Create**, **Read**, **Update**, and **Delete**) application. Rather than saving any data to a remote database we will instead save our data to a plain JavaScript array. This array can be stored in the browser’s `localStorage` for persistence between page loads. You should not save it that way until you get it working completely. Consider that the array is a stand-in for making a call to some remote end-point that stores our content.

In an example file named **crud.html** we build a small “application” that will store very basic information about blog posts we might include on your site. Your Blog posts would include:

* Post Title
* Post Date
* Post summary (1-2 sentences snippet of what the post will be)

Note: These will eventually link to a full page with the Blog post in question.

Please look below where I provide a sample video that does something similar with a set of movies. We are not to replicate that one since the answer was in a previous course as well it makes no sense for your portfolio site. However, like the movies demo you should pre-populate the data store with a set array as the example video shows. However, you should also have an “Add Button” to add a record. Delete buttons to delete records and edit buttons to edit records.

**Use JS modules** to keep your code separated. Name your primary module **blog.js**, but use as many dependent modules you write as you see fit. You must use the idea of the custom dialogs from Part 2, but you may find it useful to extend the feature or use in-page markup to make your editing easier.

### Part 2 Tips

* Looping or arrays to output markup can be performed in many ways.
* Forms have lots of useful methods and HTML markup can replace JS code
* Destructuring features of ES6 can tighten your code
* JavaScript has many useful Array functions built-in
* Weak typing can be your friend and make code very small
* Storing data or burying event handlers within HTML tags isn’t necessarily a bad thing.
* Sometimes it is a good idea to put something on the window object
* Mock with simple arrays and perform each step one at a time. Add `localStorage` at the end.
* The last assignment will have us actually implement this in our site either with or without a backend store. If you find yourself a more advanced or adventurous student you may certainly move on and implement such features early.  

## Part 4: Style My CRUD (6pts)

Finally, creating a file named **styledcrud.html** modify your solution from Part 3 to be more visually pleasing. Place any new JavaScript code that you write into modules whose names begin with “styled” (such as **styledposts.js**, **styledcustomdialogs.js**, etc.).

Use icons for edit (pencil) and delete (trash) actions. Display your forms in a neat fashion with labels and fields lining up. Add style like padding, margins, backgrounds, and so on to make the page look more polished. _Do not use a CSS framework_; perform your efforts by hand with inline or linked CSS properties as appropriate. Understand that while you are not allowed to use a framework you may draw inspiration from such things.

## Part 5: Site Changes and 3rd Party Script (10pts)

This part allows you to continue to work on your portfolio site in support of making it more useful or pleasing to you as well as the final step of the assignment. Make some improvements to the markup, style or content of your page and receive up to 5points for effort made. This is solely effort based: little or no effort will be awarded no more than 1 point, but obvious changes that you detail to us will get you the whole 5 points. Describe your updates in a file called **[changelog.md](http://changelog.md)** which you submit. Use this an opportunity to fill in any missing or placeholder content.

The second thing to do is to modify your portfolio site to use some 3rd party JavaScript to perform so useful tasks. A few obvious suggestions include Google Analytics for tracking, Algolia for in-site search support and any form of content inclusion for pulling in your Tweet stream, Insta posts, etc. You should add this to your existing site and detail the updates you made in [changelog.md](http://changelog.md). Adding this script properly to your site and commenting on why you added it is worth 5 points.

### Grading and Approach Tips

* Watch the video posted here for the idea of the first three parts after reading the description.

* Like previous assignments Parts 1 - 3 are not meant as replication assignments. Our goal here is syntax. However, there is almost no CSS used, so your answer should look quite close to the videos provided.

* We will not provide a reference video for Part 4 to leave you room to be creative.

* Watch the painting order of messages on part 1. That is a key aspect of the question.

* You ARE NOT DOING MOVIES this time. I used the same movie as a previous course iteration. The function is the same just a different set of content for your blog entries.

* Code wise these are not long questions - the CRUD solution without comments is in all total < 250 lines of HTML, CSS, and JS. If short-handing were employed it likely could be less than 200 lines quite easily. However, the length of a sample solution does not equate to time spent. Lack of familiarity with vanilla JavaScript and brute forcing code approaches could result in excessive time waste. Stubbing out step in your coding process, building incrementally, and using console.log to validate each step as you go is highly encouraged to make this assignment as straightforward as it should be.

* If you need to write things out in a long form do so. We would rather see a working solution in an old manner than a few lines of modern JS that isn’t functional.

* Employing OOP may be time spent counter-productive or not depending on how comfortable you are with it and how it is done in JavaScript.

* Your version should have comments and not be sloppy. Use a JavaScript style guide or ESLint or other tools to guide your work.

* Use only the latest version of Chrome only for development to keep things easy. If more time was available we would make

* Do not transpile or set up a complex tool stack (ex. Typescript) even if you know how, we just need simple plain vanilla JavaScript.

* Beware of easily findable articles on some of the topics which are wrong or lack information that is modern. This is not a Google exercise except for API syntax and to address some quirks you may run into.  

**Your Gradescope submission should include:**

\- **README.md** with your name, PID, a link to your solution (**your Netlify URL**) and any notes you think that will help the grader to make sense of your solution

\- **link.md** a file containing ONLY the link to your solution that is hosted

\- ALL files you CREATED for this assignment: **nativedialogs.html**, **customdialog.js**, **crud.html**, **blog.js**, **styledcrud.html** + any additional files you create (do not to include any images, etc. that you may use)

\- **changelog.md** a file containing the changes you made to your portfolio site and information about the 3rd party script(s) you included and why.

**NOTE:**

* Please make sure ALL of your files are named correctly and remember you MUST use a new Netlify project/link for hw4. Again, we are expecting your portfolio-like site as before.
* Please make sure you submit on Gradescope.
