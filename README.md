# Learning Outcomes

* The student will begin to master the use of Cascading Style Sheets for designing the presentation layer of web sites and applications in a layered fashion.
* The students will explore CSS syntax including Flexbox, CSS Grid, Media Queries, CSS variables, CSS animations, and variety of common CSS properties. The focus will be on standards based CSS, but there will be opportunity to explore proprietary features such as the need for vendor-prefixes.
* Presentation technologies such as custom fonts and images will also be utilized to expose to students to the syntax, but emphasis will be placed on performance focused use of such technology which may include correct HTML usage (picture element and srcset), image format choice and optimization and font optimization strategies.
* The student will explore responsive web design (RWD) and how to execute a look that should allow for mobile, tablet, and desktop forms. Upon conclusion the student should be able to discuss the challenges and benefits of this design pattern.

## Part 1 - Standards Based CSS Use (25pts)

**Include the link to your website and the GitHub repo with the code on the first page of your document.**

To demonstrate CSS knowledge use the technology to style your HTML pages from the previous (HW2). You may need to add classes, id, and restructure your elements in order to do this task. That is fine. However, do not convert your site to a `<div>` dominant design or assume significant point loss.

To layout your page you may use CSS Flexbox and/or CSS Grid (10pts). You do not have to account for ancient browsers so assume Edge Chromium, Chrome, latest Safari and latest Firefox level access.

To style your page use whichever CSS properties you like, but you must show demonstration of these intermediate or advanced ideas

* CSS Variables - (2pts)
* Custom Fonts (also with fallback for slow load or failure) - (3pts)
* Relative units like em, vh, vw, %, etc. (1pts)
* CSS Animations, Transitions and Transforms (9pts)
* Media Queries (See Part 3 - Responsive Web Design)

Any CSS written should be as standard as is possible. Consult [caniuse.com](http://caniuse.com) and assume that the teaching staff will use the CSS Validation service to check quality. (<https://jigsaw.w3.org/css-validator/>). We will reverify your HTML validity as well.

**Note:** If you do not have clean validations (very likely) make sure you can answer what message it has or account for a lack of checking due to being a newer feature.  
  
## Part 2 - Image Usage (15pts)

To further enhance your page presentation you should use images. You may use images of any form (GIF, JPEG, WebP, SVG, etc.), but make sure that the types are appropriate for the content served. (3pts) Your images should be optimized for delivery (5pts). Accessibility issues with your images such as alternative text, proper use of contrast and proper use of foreground or background should be accounted for (6pts). Finally, you should address delivering the appropriate size and/or type of image given the needs of responsive design discussed in the next section. The use of the `<picture>` tag and the src set as well as corresponding aspects of media queries should provide you with an ability to do this properly so you are not sending inappropriately sized images byte count to small screen devices.

## Part 3 - Responsive Design (10pts)

To address device diversity your site should practice the principle of responsive web design. You should account for three types of form factors. Very small screen (phone), tablet or restrictive laptop, and desktop. Employ appropriate pixel breakpoints based upon those factors. There may be variation of those dimensions so do a little research.

Make sure your CSS layouts reflow appropriately and do not require pinch and zoom. Also make sure per the previous section that images are sized appropriately per device dimension.

Lastly, you may see that the different devices suggests interface changes (ex. Hamburger menu, touch awareness, etc.) You may need to adjust to address such things. If you are unable to do things you may get some points lost in the next section by discussing what the limits are of your design.

## Part 4 - Aesthetics and Usability (10pts)

The look of the site and our ability as end users to understand what you are doing is paramount. No matter how well we do our sites functionally, if we have a poor experience we will ultimately fail. We award up to 5 points for the aesthetics and 5 points for the usability of the site. If you are simple and precise in look and obvious in navigation you will likely get most of the points, but there is subjectivity and visual appeal here that will be based upon the interpretation of the graders. While we have kept the amount of points very low understand in "real life" all points would be here really. For outlier grades on this part (very high and very low) we will have all teaching staff review for verification. High grades showing excellence may receive up to 5 more bonus points at our discretion and we may ask to share with the class.

## Restrictions and Logistic Details

* All CSS must be hand authored - no frameworks like Twitter Bootstrap or Tailwind. If you really want experience doing such things you may make a copy of your site after doing your plain authored version. Redo do it with a framework and then write a 1 page summary of time spent on work and byte count / performance of the two versions for extra credit. This optional extra credit is worth a maximum of 5 points.  

* You may not purchase a theme or represent an existing design as your own work. While you are free to use such things as inspiration direct usage will be considered an AIP violation.  

* You may use stock photography images with or without watermarks. If you use stock imagery provide HTML comment situations or use a `<cite>` element to show us where you got the images. This is an important thing to get used to as misuse of images online can and does resort in legal demand letters. Be aware of what you are pulling in.  

* You should still not be using JS in your assignment at this stage. You can continue to stub out files or plan for JS which will be included in the final two steps.

**Important Note:** Please make the submission on Gradescope. Make sure you include the link to your deployed website in the submission PDF.
