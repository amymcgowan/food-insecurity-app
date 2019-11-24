# Team Coding Standards

These guidelines were inspired in large part by [The little book of HTML/CSS coding guidelines](https://www.oreilly.com/learning/little-book-html-css-coding-guidelines).  Examples used are taken from this source unless otherwise noted.

## GOALS

1. Readable, maintainable, consistent code

2. Mentors or other professionals looking at our code will be impressed with its readability and consistency.

## GENERAL

1. HTML is for structure only.  CSS is for styling only.  JS is for behavior only. Keep the three functions separate.

2. Use only lowercase text.<br/>

    Correct:

      ```
      color: #cc0078;
      ```
  
    Incorrect:

      ```
      <A HREF="/">Home</A>
      ```

3. Remove trailing whitespace. (Not critical to do this 100%, but do as much as you can to avoid git/Github identifying trivial “diffs”.)

    Incorrect:

      ```
      <p>What?_
      ```
      (...where "_" signifies a space character.)

4. Mark TODOs and action items for other people with "TODO". You can also follow that with a specific person's name in parentheses:

    Correct:

      ```
      <!-- TODO(john.doe): revisit centering -->
      <center>Test</center>
      ```

## ID and CLASS NAMES

1. Use each ID only once in an HTML document.

2. Class names can be used multiple times.

3. Use kebab case.  IDs and classes should use kebab case (e.g., section-1 or student-hunger-stats), i.e., not camelCase or snake_case.

4. Use functional or generic names for IDs and classes:

    Incorrect:

      ```
      /* Meaningless */
      #yee-1901 {}

      /* Presentational */
      .button-green {}
      .clear {}
      ```

    Correct:

      ```
      /* Specific */
      #login {}
      .video {}

      /* Generic */
      .aux {}
      .alt {}
      ```

5. Keep ID and class names as short as possible but as long as necessary.

6. Name classes and IDs in a way that makes them easy to find in the HTML. BEM (Block-Element-Modifier naming convention) is one way to do this.  I usually use a modified approach that uses only hyphens, not underscores, and doesn’t necessarily distinguish between blocks and modifiers, but it still tells you where things are in the HTML.  

    I don’t know the best way to describe this but here is an example of code I wrote.

      ```
      <!-- Publications Section -->

      <section id="publications" class="publications-section">
        <h2 class="pubs-heading">PUBLICATIONS</h2>
        <div class="container cards-container pub-cards">
 
          <!-- Pub 1 card -->
  
          <div class="card-container">
            <a class="card-link" href="https://filename1.html" target="_blank">
              <article class="card project-card">
                <header class="card-header">
                  <p class="card-heading">CSS Positioning: You Got This</p>
                </header>
                <img class="card-image" src="assets/images/image1.jpg" alt="laptop">
                <div class="card-content">
                  <p>An explanation of....</p>
                </div>
              </article>
            </a>
          </div>
      ```

7. Each section that will have navigation pointing to it needs to have an ID assigned.

## STRUCTURE

1. Indent with two spaces. Use indentations to show nesting structure in HTML and to make CSS more readable.  When indenting, use only two spaces.

2. Use a new line for every HTML element.

3. Use a new line for every CSS property.

4. Use semantic HTML. This is a big subject, so if Andrea misses an opportunity to be semantic, please tell her.  One main implication of this is that we will use divs only if there is not a more semantically appropriate HTML element to use.

5. Remove anything that STADN. In both HTML and CSS, keep only the elements, classes and IDs that are being used. (STADN is an acronym I recently found: “sits there and does nothing”).

6. Use only current HTML and CSS elements, properties, standards.

## STYLING

1. There should be one CSS file for common styling across all pages (such as nav bar and footer and possibly other elements).

2. Each individual page will also get its own CSS file to address its unique features.

3. Do not use !important in CSS code.  Please, please don’t!

4. The CSS in the style sheets should be organized in some easy to follow way.  Each group or section of the CSS code has a comment at the top of it identifying it.  One way I’ve seen is:

    a. Type selectors on the top (*, body, p, ul, etc.).  The comment would be something like /* Type selectors */

    b. The rest of the sections would contain the CSS code for each section of the HTML document in order of appearance, again with a comment at the top of each that clearly indicates which HTML section it refers to.

5. We can use a reset.css file (but the Bootstrap file needs to override it, i.e., come after it in the HTML) to take care of things most people want to change to make styling easier, such as setting box-sizing: border-box for all elements.  I have a reset.css file that I found in one of the courses I took that I’ve been using.  I can share this with Sherry and we can tweak as needed.

## BROWSER COMPATIBILITY

1. Check [caniuse.com](https://caniuse.com/) to make sure a feature or property has broad browser support. Criterion for use: at least 90% Full Global Support 

## CONTINUOUS IMPROVEMENT

If we all agree on this document and it’s thorough and flexible enough that we never need to change it, great.  But, let’s plan on needing to make tweaks and additions along the way and agree that that is okay and maybe will even be necessary even after we start coding.