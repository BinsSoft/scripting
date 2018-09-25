# BinsScript

All important plugings are included into one. Like html, date etc.
### HTML

#### Class
`Add Class`
```sh
bins.node('.text').addClass('selected-text');
```
`Check class exist`
```sh
bins.node('.text').hasClass('selected-text');
```
`Remove Class`
```sh
bins.node('.text').removeClass('selected-text');
```
#### Attribute
`Set Attribute`
```sh
bins.node('.text').setAttr({
    'class' : 'select-text',
    'data-name' : '123' 
    ...
});
```
`Check Attribute exist`
```sh
bins.node('.text-2').hasAttr('data-name')
```
`Get Attribute`
```sh
bins.node('.text').getAttr('data-name');
```
`Remove Attribute`
```sh
bins.node('.text').removeAttr('data-name');
```
#### Animation
`Show / Hide`
```sh
bins.node('.text').show();
bins.node('.text').hide();
```
`Fadein / Fadeout`
`Option : "very-slow", "slow", "fast". Default : "fast"`
```sh
bins.node('.text').fadeIn();
bins.node('.text').fadeOut();
```
`Slideup / Slidedown`
`Option : "very-slow", "slow", "fast". Default : "fast"`
```sh
bins.node('.text-2').slideUp(); 
bins.node('.text-2').slideDown();
```
`Toggle`
`Option show, fade(in/out), slide(up/down). Default is show`
```sh
bins.node('.text').toggle();
```
#### html/text
`Get text`
```sh
bins.node('.text').text() 
```
`Set text`
```sh
bins.node('.text').text('inner text') 
```
` Get HTML :  outer, inner . Set true for outer html`
```sh
bins.node('.text').getHtml() 
```
`Set Html :  outer, inner . Set true for outer html `
```sh
bins.node('.text').setHtml('<strong>New Html String</strong>', true) 
```
`Append Html`
```sh
bins.node('.text').append('<div class="new-created-element-append">It is a new Element, <b>append</b> </div>');
or
var newElement = document.createElement('strong');
newElement.innerText = 'Append new Element';
bins.node('.text').append(newElement);
```
`Prepend Html`
```sh
bins.node('.text').prepend('<div class="new-created-element-prepend">It is a new Element, <b>prepend</b> </div>');
or
var newElement = document.createElement('strong');
newElement.innerText = 'Append new Element';
bins.node('.text').prepend(newElement);
```
`Set Css`
```sh
bins.node('.text').css({
    'background' : '#CCC',
    'color' : 'red',
    'font-size' : '20px'
    ...
});
```
`Empty`
```sh
bins.node(".text-").empty()
```
`Remove Element`
```sh
bins.node(".text").remove()
```
`Clone Element`
```sh
let cloneNode = bins.node('.text').clone();
```

#### Node Selector
`Parent Element`
```sh
bins.node(".text").parent()
```
`Next Element`
```sh
bins.node(".text").next()
```
`Previous Element`
```sh
bins.node(".text").previous()
```
`Children Elements`
```sh
bins.node(".text").children()
```
`Last of type`
```sh
bins.node(".text").last()
```
`First of type`
```sh
bins.node(".text").first()
```
#### Event Bind
```sh
bins.node('.clickBtn').bind('click',(e)=> {
    console.log(e.target);
}) 
bins.node('.textBox').bind('change',(e)=> {
    console.log(e.target);
}) 
bins.node('.textBox').bind('focus',(e)=> {
    console.log(e.target);
}) 
...
...
...
```
