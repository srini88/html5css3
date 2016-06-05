
make existing tags to be semantic

css3 features...
new html5 features....

give consistent user experience...

SSS - source , style and script...


html5 brings in semantic tags.....

canvas - very simple and rich animations...
video -- 
semantic tags 
audio


css3 - color enhancements, shadowing, rounding corners, transforms, color enhancements...


emantics is the study of meaning, in a broader context it’s a branch of logic and linguistics.

Proper semantics means a more searchable content that leads to a better search engine ranking

form element was actually semangitc...
img semantic - existed befor html5
table is semantic...

orderred and unordered lists, paragraphs, h1 - h6 heading tags all semantic..


Non-Semantic Elements
Non-semantic elements don’t have any special meaning, the hierchical relationships between them are merely illusory. The most widely used examples of non-semantic HTML tags are the <div></div> and the <span></span> tags.


HTML5 introduced many new semantic elements that make easy content organization possible

Probably the most popular text-level semantic tags are <strong></strong> and <em></em>, but they also existed before HTML5. Among the new inline semantic elements we can find for example the <time></time>, tag for human-readable date-times, and <mark></mark> for highlighted text.

<section></section> for sections grouped around a specific theme
<article></article> for complete or self-contained compositions such as a blog post or a widget
<nav></nav> for navigation blocks
<aside></aside> for complementary content such as sidebars.

----------------------------------------------

what is missing from HTML5 - 

HTML5 < HTML4 

typical html4 long doctype..... shit lot of content...
meta tag...

doctype shrunk ..

<!DOCTYPE html>

doctypes are required for legacy resaons, including a doctype ensures a beest effort attempt to render...when omitted browserts tend to render in an incompatible mode...

then 
<html lang="en">

then 
<meta charset = "utf-8" />

The first bit in the header should be a <meta> tag that specifies the character encoding of the page. Usually, the character encoding is declared by the web server that sends the page to the browser, but many servers are not configured to send this information. Specifying it here ensures the document is displayed correctly even when it’s loaded directly from disk, without consulting a server.


The type="text/css" attribute that was required in HTML4 is now optional in HTML5, and all current browsers know what to do if you leave the attribute out.
The type="text/javascript" attribute, once again, is now optional in HTML5, and all current browsers behave correctly when you leave it out.


In HTML5 both syntaxes are valid: <br> and <br />.
In XHTML5 only <br /> is valid.



why semantics --- why care... 

differentiating data...


before <div id = "nav">
now <nav> </nav>


<header>  <nav>   <article> <section>  <aside>   <footer>



demonstrate upgrading to semantic tags...

upgrade your shit to semantic tags..




summary...

The <main> tag specifies the main content of a document.

The content inside the <main> element should be unique to the document. It should not contain any content that is repeated across documents such as sidebars, navigation links, copyright information, site logos, and search forms.

Note: There must not be more than one <main> element in a document. The <main> element must NOT be a descendant of an <article>, <aside>, <footer>, <header>, or <nav> element.


<!DOCTYPE html>
<html>
<body>

<main>
  <h1>Web Browsers</h1>
  <p>Google Chrome, Firefox, and Internet Explorer are the most used browsers today.</p>

  <article>
    <h1>Google Chrome</h1>
    <p>Google Chrome is a free, open-source web browser developed by Google, released in 2008.</p>
  </article>

  <article>
    <h1>Internet Explorer</h1>
    <p>Internet Explorer is a free web browser from Microsoft, released in 1995.</p>
  </article>

  <article>
    <h1>Mozilla Firefox</h1>
    <p>Firefox is a free, open-source web browser from Mozilla, released in 2004.</p>
  </article>
</main>

<p><strong>Note:</strong> The main tag is not supported in Internet Explorer 11 and earlier versions.</p>

</body>
</html>


<body>

	<header>My page</header>
	
	<nav>
		<a href="#">Home</a>
	</nav>
	
	<main>
		<article>
			<h1>My article</h1>
			<p>Content</p>
		</article>
	
		<aside>
			<p>More information</p>
		</aside>
	</main>
	
	<footer>Copyright 2013</footer>

</body>


<body>
<header role="banner">
[...]
</header>

<main id="content" class="group" role="main">
[...]
</main>

<footer role="contentinfo">
    [...]
</footer>
</body>

Just as with the introduction of many other new HTML5 elements, not all browsers recognise <main> or have preset styles for it. You’ll need to ensure it displays as a block level element in your CSS:


main {display:block;}

-----------chapter 2----------------

audio, video , canvas (animations through canvass..,  
before you got to use plugins for this stuff...

<audio>
<source src="thaimai.mp3">
</audio>


benefit of using source element instead..one audio file in one browser..
browser will ignore any sourece that it does not understand..

this browser does not support HTML5 audio..

Before HTML5, there was no standard for playing audio files on a web page.

Before HTML5, audio files could only be played with a plug-in (like flash).

The HTML5 <audio> element specifies a standard way to embed audio in a web page.



The controls attribute adds audio controls, like play, pause, and volume.

Text between the <audio> and </audio> tags will display in browsers that do not support the <audio> element.

Multiple <source> elements can link to different audio files. The browser will use the first recognized format.


<audio controls>  just gives controls 
<audio autoplay controls>  plays and controls 
<audio autoplay controls loop>  plays and controls  and loops


----------------html5 canvas.....

The HTML <canvas> element is used to draw graphics on a web page.

The graphic to the left is created with <canvas>. It shows four elements: a red rectangle, a gradient rectangle, a multicolor rectangle, and a multicolor text.

A canvas is a rectangular area on an HTML page. By default, a canvas has no border and no content.

The markup looks like this:

<canvas id="myCanvas" width="200" height="100"></canvas>

HTML5 has brought some exciting new advantages to the HTML coding world. Canvas allows you to render graphics powered by Javascript. So throw away that flash code and dive into Canvas

you can use canvas ---to overlay on a video from a page...so that you get bubbles and kind of stuff like that...
need to use javascript for that..



HTML5 provides much needed UI enhancements...
audio, video and canvas provide simple fallback behaviors

------------------new form inputs html5 
overview of html forms..
demonstrate upgrade scenario...


---------------------------HTML5  scratch -----------------

semantic markup --  doctype enormously simplified...
<!DOCTYPE html> will work for all goddamn revisions...not only html5

structural elements ---
<header>
<hgroup>
<footer>  you can have more than one footer on the page - nearest ancestor secitoning content ..
article   --- should be self contained cocument, page...etc..could be independetly distributed...

section - section a page into subject area -- section do not create a standalone documents.........one article with 2 seconds...


aside  -- sidebars --- related to but not part of the main flow..

nav  - used to mark navigation sections..

fat header - header and subheader - use hgroup ..

mark -- used to highlight a section of text...

time - 

Changed elements --- 
address tag -- 
cite - 
dl dt and dd 
em and i tag --- em when you are subtly stressing..



<hr></hr> is actually a valid XHTML 1.0, too.

So, for XHTML 1.0:

<hr /> is valid
<hr></hr> is valid
<hr> is not valid
... for HTML 4.0:

<hr /> is valid
<hr></hr> is not valid
<hr> is valid
therefore the best option is to use <hr />, which is always valid.


<s> tag strike through ..
<strong> imdicates importance...
<b> indicates bold without indicating importance...


forms new input types -- 
<label for="email-data">Email : </label>
<input type="email" id="email-data"  required multiple/>

will take more than 1 email address 


The <datalist> tag specifies a list of pre-defined options for an <input> element.

The <datalist> tag is used to provide an "autocomplete" feature on <input> elements. Users will see a drop-down list of pre-defined options as they input data.

Use the <input> element's list attribute to bind it together with a <datalist> element.

<label>Choose a browser from this list:
<input list="browsers" name="myBrowser" /></label>
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Internet Explorer">
  <option value="Opera">
  <option value="Safari">
  <option value="Microsoft Edge">
</datalist>  list and id should match


progress bar and meter tags 
to mark up the completion rate ⁄ degree of progress of an "in progress" task through a progress bar, use progress element 
to represent a gauge use meter element 

you can think like that: progress = dynamic ; meter = static 


----in html5 you can have controls outside the form and make it behave inside the form 

bind it with the form property - and give the form name --- when you submit the form this shit also gets submitted along with it...

<input type = "text"  form="idofForm">

support of audio and video -- acts as a replacement as plugins 


src , controls, autoplay, loop - loops 
poster - takes a url - displayed until the video begins. 
preload - allow for precaching.. , none, metadata, auto(Default)

pster property - you will see the initial image - the thumbnail of the poster...


canvas API creates a drawing serface - within the browser...

canvas elemtn ----- 2d vs 3d webgll --- webgl only in brwosers that implement webgl library...


rectangle - stroke, fill , clear


create canvas with id..get the id in JS ...get the context on the id ...2d or 3d ..


------------------------------------------------------jesse libery---
cSS from scratch...

p {
  color : blue;
}

selector, property and value


internal style sheets, external style sheets...(live in a file of their own)

external - faster loading ,,cached... link rel href..use this..


html5 - article and section..

browser will make some guesses by default...

inline stypesheet 
<style>



</style>

---- Tag selectors....pae wide ....
--class selector - apply to every element with that class..
ID selectors - apply to one spelcifi id..


.class {
  backgroundColor : green;
}

all browsers apply basic styling to HTML ..margin , padding, font size, underlining links....
= browser apply their own default styles --- to fall back on...

CSS resets --------------strip browser default styles of different degreess...

SELECTOR and DECLARATION........

<div id="test">
  <span>Text</span>
</div>
div#test span { color: green }
div span { color: blue }
span { color: red }
No matter what the order, the text will be green because that rule is most specific. (Also, the rule for blue overwrites the rule for red, notwithstanding the order of the rules)

Selector Types

The following list of selector types is by increasing specificity:

Type selectors (e.g., h1) and pseudo-elements (e.g., :before).
Class selectors (e.g., .example), attributes selectors (e.g., [type="radio"]) and pseudo-classes (e.g., :hover).
ID selectors (e.g., #example).
Universal selector (*), combinators (+, >, ~, ' ') and negation pseudo-class (:not()) have no effect on specificity. (The selectors declared inside :not() do, however.)

Inline styles added to an element (e.g., style="font-weight:bold") always overwrite any styles in external stylesheets and thus can be thought of as having the highest specificity.

The !important exception

When an important rule is used on a style declaration, this declaration overrides any other declarations. Although technically !important has nothing to do with specificity, it interacts directly with it. Using !important is bad practice and should be avoided because it makes debugging more difficult by breaking the natural cascading in your stylesheets. When two conflicting declarations with the !important rule are applied to the same element, the declaration with greater specificity will be applied.


inline --- is with style attribute...
embedded  is within the head section in the same html file...

externall -- is outside html and use link rel href in the html..


If the internal style is defined after the link to the external style sheet, the <h1> elements will be "orange":

<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
<style>
h1 {
    color: orange;
}
</style>
</head>


if I flip internal and external -- external will apply..

  The first and most important thing to understand is that browsers cannot begin painting a page until all CSS is downloaded

Does it apply each rule one-by-one as it parses the stylesheet and render the result progressively? Or, are the CSS file's contents completely downloaded, then fully evaluated, and then applied to the HTML all at once? Or something else?
Downloads all CSS, then begins painting the document from the top-down.

Testing in Firefox 5, I expected to see green at first, then turn to red. It didn't happen. I tried with two separate stylesheets with conflicting rules and got the same results.
This is because the CSS is all downloaded first, then when it encountered your element it only applied the red style, because of how the cascade works.


I am not sure about the marked answer. I doubt it's correctness. As per this link from Google Developers the browser first downloads the HTML file and when it sees a CSS file linked to external resource it starts downloading the CSS file while it simultaneously creates the DOM structure for the given HTML file as CSS is not going to affect the DOM. Note that it doesn't apply any styles to the document when the browser is downloading the CSS file.

After downloading the CSS file (assume there is no script files) and if the DOM construction is complete, the browser starts mapping the CSS properties to those nodes in the DOM tree. After this it creates another tree called Render tree which builds all the objects which should be displayed, as rectangle boxes. Only after completing the render tree it starts painting on to the screen.

To summarize:

The browser downloads the CSS file completely.
The browser doesn't apply any styles to the page when it is downloading. Only after the donwload is complete it starts mapping the rules.
The rules are applied only during the render tree construction stage.
Downloading the CSS file doesn't block HTML download. You have to note that the browser
First downloads all the html files and then style and script files are downloaded.


a{
  text-decoration :underline;
  color :blue;
}

span{
  text-transform :uppercase;
}