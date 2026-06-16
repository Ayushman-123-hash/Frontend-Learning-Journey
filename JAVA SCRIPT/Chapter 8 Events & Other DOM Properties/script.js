// InnerHTML ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
document.querySelector(".container").innerHTML
' \n <div class="box">Hey I am a Box</div> \n <div class="box">Hey I am a Box</div> \n '
document.querySelector(".box").innerHTML
'Hey I am a Box'

// InnerText ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
document.querySelector(".container").innerText
'Hey I am a Box\nHey I am a Box'
document.querySelector(".box").innerText
'Hey I am a Box'

// OuterHTML ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
document.querySelector(".container").outerHTML
'<div class="container">\n<div class="box">Hey I am a Box</div>\n<div class="box">Hey I am a Box</div>\n    </div>'
document.querySelector(".box").outerHTML
'<div class="box">Hey I am a Box</div>'

// OuterText ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
document.querySelector(".container").outerText
'Hey I am a Box\nHey I am a Box'
document.querySelector(".box").outerText
'Hey I am a Box'

// TagName ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
document.querySelector(".container").tagName
'DIV'
document.querySelector(".box").tagName
'DIV'

// NodeName ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
document.querySelector(".container").nodeName
'DIV'
document.querySelector(".box").nodeName
'DIV'

// TextContent ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
document.querySelector(".container").textContent
'\n        Hey I am a Box\n        Hey I am a Box\n    '
document.querySelector(".box").textContent
'Hey I am a Box'


// Attribute Methods ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1. hasAttribute ~~~~~
document.querySelector(".container").hasAttribute("style")
true

// 2. getAttribute ~~~~~
document.querySelector(".container").getAttribute("style")
'display:contents;'

// 3. setAttribute ~~~~~
document.querySelector(".container").setAttribute("style" , "display : inline")
undefined

// 4. removeAttribute ~~~~~
document.querySelector(".container").removeAttribute("style" , "display : inline")
undefined

// 5. All attribute ~~~~~
document.querySelector(".container").attributes
// NamedNodeMap {0: style, 1: class, style: style, class: class, length: 2}

// 6. Data Attribute ~~~~~
document.querySelector(".box").dataset
// "DOMStringMap" {createdby: 'Ayushman Thakur'}