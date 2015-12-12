<?php
    echo "This is a test"; // This is a one-line c++ style comment
    /* This is a multi line comment
       yet another line of comment */
    echo "This is yet another test";
    echo 'One Final Test'; # This is a one-line shell-style comment
?>

<?php
 /*
     echo "This is a test"; /* This comment will cause a problem */
 */
?>

<?php

//======================================================================
// CATEGORY LARGE FONT
//======================================================================

//-----------------------------------------------------
// Sub-Category Smaller Font
//-----------------------------------------------------

/* Title Here Notice the First Letters are Capitalized */

# Option 1
# Option 2
# Option 3

/*
* This is a detailed explanation
* of something that should require
* several paragraphs of information.
*/

// This is a single line quote.
?>

This works because a /* .. */ overrides //. You can even "flip" two blocks, like this:
<?php
//*
if ($foo) {
  echo $bar;
}
/*/
if ($bar) {
  echo $foo;
}
// */
?>
vs
<?php
/*
if ($foo) {
  echo $bar;
}
/*/
if ($bar) {
  echo $foo;
}
// */
?>

Actually, both are correct. Once a comment is opened, *everything* is ignored until the end of the comment (or the end of the php block) is reached.

Thus, if a comment is opened with: 
   //  then /* and */ are "overridden" until after end-of-line 
   /*  then // is "overridden" until after */

Be careful when commenting out regular expressions.

E.g. the following causes a parser error.

I do prefer using # as regexp delimiter anyway so it won't hurt me ;-)

<?php 

/*

$f->setPattern('/^\d.*/');

*/

?>

<?PHP

header("Content-type: text/xml");

/*
echo "<?xml version=\"1.0\"?>";
echo "<page>multi-line comments work as expected.</page>";
*/

//echo "<?xml version=\"1.0\"?>";
//echo "<page>single-line comments end php mode and output your code.</page>";

?>
