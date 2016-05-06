
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




