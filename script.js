
 bins('.text').setAttr({
    'class' : 'select-text',
    'data-name' : '123' 
});
bins('.select-text').getAttr('data-name');
bins('.select-text').addClass('selected-text');
bins('.select-text').removeClass('selected-text');
bins('.select-text').hide();
bins('.select-text').show();
bins('.select-text').css({
    'background' : '#CCC',
    'color' : 'red',
    'font-size' : '20px'
});
let cloneNode = bins('.text-2').clone();

bins('.text-2').setHtml('<strong>New Html </strong> content '); // html string,  true = outer html, false=inner html
bins('.text-2').append('<div class="new-created-element-append">It is a new Element, <b>append</b> </div>');
let newElement = bins('span').new();
bins(newElement).setAttr({
    'background' : '#CCC',
})
bins(newElement).addClass('new-element-create');
bins(newElement).setHtml('new element created and append');// html string,  true = outer html, false=inner html
bins('.text-2').append(newElement);

bins('.text-2').prepend('<div class="new-created-element-prepend">It is a new Element,<b> prepend</b> </div><div id="prepend-child">Demo child</div>');
bins(newElement).setHtml('new element created and prepend');
bins('.text-2').prepend(newElement);

setTimeout(()=>{
    //bins('.text-2').fadeOut(); //very-slow, slow, fast, 
    //bins('.text-2').fadeIn(); //very-slow, slow, fast,
},2000)

console.log(bins('.text-2').getHtml(true)) // true = outer html, false=inner html
console.log(bins('.text-2').text())
//bins('.text-2').toggle(); // fade, slide
setTimeout(()=>{
    //bins('.text-2').toggle('fade');
    //bins('.text-2').toggle('slide');
},2000)
//bins('.text-2').slideUp('slow'); //very-slow, slow, fast, 
//bins('.text-2').slideDown('slow'); //very-slow, slow, fast, 

console.log(bins('.text-2').hasAttr('data-name'));
bins('.text-2').setAttr({'data-name':'text-2-data-value'});
console.log(bins('.text-2').getAttr('data-name'));
bins('.text-2').removeAttr('data-name');

bins('.clickBtn').bind('click',(e)=> {
    console.log(e.target);
}) 

console.log("parent", bins(".new-created-element-prepend").parent() );
console.log("next ",bins(".new-created-element-prepend").next());
console.log("previous", bins("#prepend-child").previous());
console.log("children", bins(".text-2").children());
console.log("Last", bins(".text-2").last());
console.log("First", bins(".text-2").first());
console.log("Check class exist", bins(bins(".text-2").first()).hasClass('text-2'));

console.log("Empty", bins(".text-2").empty());
console.log("Remove", bins(".text-2").remove());


/*bins('#nameTextBox').bind('change',()=>{
    console.log(event.target);
}) */
