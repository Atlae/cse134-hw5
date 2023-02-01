# Learning Outcomes

-----------------

* The student will begin to understand the process of applying user centered thinking to help formulate documentation to build out a website or application
* The student will explore standards based semantic HTML and its use. More than 50 tag types will be employed
* The student will scaffold up a small website with no set look to demonstrate the progressive enhancement design philosophy and create a foundation for future assignments

This homework is divided into two parts: Part 1 will consist of a design exploration concluded with some submitted documentation in PDF form.  Part 2 will consist of a small site with little or hopefully no presentation applied.

NOTE: Create a _new_ repo and _new_ Netlify website for this assignment, separate from HW1. If you push this assignment to your HW1 website, we will be unable to your HW1 assignment.

## Part 1 : Site Planning (50pts)

-----------------

To experience the User Centered Design (UCD) process you should create a design document that contains the following points for the plan of your personal portfolio / recruitment site.  Read section 2 before doing this phase as you may see it informs your decisions here.  
  
Your report should include the following:  
  
**A short summary** of purpose of the site. (4pts)

A section on audience considerations including at least one (1) **persona diagram.**  Not sure what a persona diagram is? Here is a [link](https://xd.adobe.com/ideas/process/user-research/putting-personas-to-work-in-ux-design/) that might help. Examples and an explanation of persona diagrams can also be found [here](https://www.justinmind.com/blog/user-persona-templates/), and [here's](https://figma.com/) a tool that you can use to create one.  You may also find [this](https://thispersondoesnotexist.com/) useful when trying to find an image of a person for your diagram. (6pts)

**A site diagram** which shows individual pages, navigation titles and file names.  You may decide to annotate the diagram with more information about page purpose if you see fit.  Examples and an explanation of site diagrams can be found [here](https://online.visual-paradigm.com/diagrams/templates/site-map-diagram/simple-website-sitemap/), and [here's](https://app.diagrams.net/) a tool that you can use to create one. (10pts)

**Wireframe(s)** that detail the various pages in your site.  Depending on your proposed design this could be a single wireframe or a number of them. Also, your wireframe(s) shouldn't be high-fidelity. Examples and an explanation of wireframes can be found [here](https://careerfoundry.com/en/blog/ux-design/what-is-a-wireframe-guide/), and [here's](https://figma.com/) a tool that you can use to create your wireframe(s). (10pts)

**Note:** The explanations and tools provided are meant as a jumping-off point, and you're encouraged to research more on the deliverables above and the tools for creating them. Furthermore, the examples presented are meant to help you understand each of the deliverables, so keep in mind that the deliverables can come in many forms besides the examples that we've provided.

The plan should conclude with the following two sections:

1\. **Technical requirements** - some details (doesn't need to be super long) about what you plan on doing in execution, where it will be hosted, etc. Technical requirements might include things like technologies possible to use, target browser and device profiles, page delivery targets in bytes, etc. We're not looking for specific things or for you to know all of the answers, just to have a little bit of thought put in. Feel free to look around at other sites similar to yours to see how they achieved it.  (6pts)

2\. **Content requirements** - details what type of content you will need to gather or write.  You may also discuss any media assets you need.  You will not need all this content on the initial build of phase 1.  However, by phase 2 (HW3) most content should be in-place so plan accordingly. (6pts)

If appropriate you can include a Miscellaneous or Notes section in your design document if it makes sense to you.
  
The pieces of the design document such as wireframes, site map, technical requirements, etc. may be produced in a variety of tools for specialized diagramming.  However, your turn-in for Phase 1 should be **a single PDF** file with appropriate formatting for screen or print reading either landscape or portrait style.

The presentation and content quality of your design plan will matter.  Assume you are judged both by the presentation as well as what is written at equal weight.  You do not need to write an essay, create a document you think the TAs/tutors/Prof would actually want to read for maximum points.  We may reward extra points beyond what is available for excellent jobs The overall quality of presentation will account for minimally eight (8) points, but you may be given more.

## Part 2 : HTML Only Execution (140pts)

-----------------

**Before you start this section:**  Our future homework assignments will cover styling this website with CSS and adding interactivity with JS, for this assignment we **_ONLY WANT HTML_** (unless specified below). The point of this assignment is not for your website to look good, but for it to be structured well, have thoughtful content, and use semantic markup.

In this section you will build out a valid semantic and structural HTML only site.  Valid means your pages should validate using the validator service at [https://validator.w3.org/](https://validator.w3.org/)

Your site must contain all the following tags.  The items with a \* and italics have notes to read below.

```html
html, head, title, meta, link, _script_\*, _style_\*, body, main, h1, h2, h3, p, section, header, footer, aside, nav, div, span, br, b, i, strong, em, code, pre, hr, a, img, picture, iframe, audio, video, source, _canvas_\*, _svg_\* ul, ol, optgroup, li, form, label, fieldset, legend, input, textarea, datalist, select, option, details, summary, button, template, table, tr, td, th, caption, col, colgroup, figure, figcaption,   (63 tags \* 2 = 126pts)  
```

**Note: You may use other tags if you want as there are more elements.**

`<style>` **Note:** YOU MAY NOT STYLE PAGES other than using a border or simple flow to provide a base page structure.  If you have more than 3 CSS properties (total, not unique) in your file you will be deducted points.  Your effort here is to NOT style your pages.

`<script>` **Note:** You may add script as a placeholder, to show the use of a third party script for analytics, or for use with a tag that we have permitted the use of JS for (e.g. the Canvas tag).  No interactions are allowed at this stage otherwise you will be deducted points.

`<canvas>` **Note:** To demonstrate the use of a `<canvas>` tag you may include some MINOR AMOUNT of JavaScript.  You are simply exploring the idea of the tag.  If you have more than 15 lines of script to do something assume you did too much.

`<svg>` **Note:** To demonstrate you can use SVG within an HTML page demonstrate this element within inline tag usage.

All the elements above particularly with restrictions may not fit in your portfolio site in a reasonable way.  To exercise these or other tags consider making a "Labs" or "Experiments" section to your site and adding as many pages as you see fit to meet the assignment requirements.  Later on in the process you are free to "prune" those pages from your project to focus on the main content.  The point of forcing the use of all these tags is to get you to see the breadth of elements available to you.

If you build your site well many of the elements used will just flow.  For example, making a simple contact form would easily allow you to test most tags.  Making a data grid of certain technical skills you have might illustrate the various table tags, and so on.  Do not make your whole site mostly with `<div>`s and then use these tags solely in your experiments sections.  Doing such an approach will likely ruin the correct markup style usage portion of your grade.

### Other grading points and details  

Pages must validate, if they don't provide HTML comments why they don't (validation is worth 4pts)

Pages must not suffer from "`<div>`-itis" and exhibit semantic HTML (style of markup usage is worth 10pts)

You must use all the tags.  Each tag used is worth two points (1pt for occurrence and 1pt for appropriate contextual use or demo)

Misuse of CSS or Script attempting to build the site early will result in a loss of 25% of your overall points.
  
Tip: If you are doing that during this phase there is no need to turn such linked styles in.  We are just forcing you to do progressive styles here, this should not be worked against.

Make sure to host your site on Netlify hosting and provide a link to it in the Part 1 PDF.

**UPDATE:** It turns out that Gradescope turns PDFs into images so links inside of PDFs are not clickable. To remedy this we are going to have you submit links to your hosted site here on Canvas, but the rest of the assignment will still be uploaded to Gradescope as a PDF as usual.

**TURN IN (to Gradescope):**

* A PDF containing
  * Part 1:
  * Your website purpose summary
  * Persona Diagram(s)
  * Your site diagram
  * Your site wireframe
  * Technical Requirements
  * Content Requirements

**TURN IN (on Canvas):**

* Part 2:
  * A link to your website
