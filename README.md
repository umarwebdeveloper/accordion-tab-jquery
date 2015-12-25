Accordion Tab Jquery
======

**Accordion Tab Jquery** is free, easy and simple accordion tab with jquery and css plugin..

## [Demo](http://umarwebdeveloper.github.io/accordion-tab-jquery/)

Required Files
```
<script src="js/jquery-2.1.4.min.js"></script>
<script src="js/accordion.plugin.js"></script>
```

Call Jquery Function
```
$('#faqs').accordionTab({
		speed: 500
	});
```

HTML markup
```
<dl id="faqs">
    <dt>Question 1</dt>
    <dd>Lorem ipsum dolor sit amet, consectetuer adipiscing elit orem ipsum dolor sit amet, consectetuer adipiscing elit</dd>
    
    <dt>Question 2</dt>
    <dd>Lorem ipsum dolor sit amet, consectetuer adipiscing elit orem ipsum dolor sit amet, consectetuer adipiscing elit</dd>
    
    <dt>Question 3</dt>
    <dd>Lorem ipsum dolor sit amet, consectetuer adipiscing elit orem ipsum dolor sit amet, consectetuer adipiscing elit</dd>
</dl>
```

CSS for styling
```
.accor_container
{
	display:inline-block;
	width:100%;
}
.accor_container .accor_question {
    color: #fff;
    cursor: pointer;
    font-family: Arial,Helvetica,sans-serif;
    font-size: 16px;
    height: auto;
    line-height: normal;
    margin: 0 0 15px;
    padding: 10px 0;
	background: url("../images/plus-icon.png") no-repeat scroll 98% center #16b0eb;
    border-radius: 4px;
    padding-left: 20px;
    padding-right: 35px;
}
.accor_container .accor_answer {
    color: #646464;
    font-family: Arial,Helvetica,sans-serif;
    font-size: 14px;
    line-height: 25px;
    margin: 0 0 20px 10px;
}
.accor_container .accor_expanded {
    background: url("../images/minus-icon.png") no-repeat scroll 98% center #063295;
}
```

## Contact
#### @umarwebdeveloper
* e-mail: [umarphpdev@gmail.com](mailto:umarphpdev@gmail.com)

