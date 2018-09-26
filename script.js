
let date = '2017-09-20';
console.log("add year ", bins.date(date).add('year',3));
console.log("substract year ", bins.date(date).add('year',-3));
console.log("add month ", bins.date(date).add('month',3));
console.log("substract month ", bins.date(date).add('month',-3));
console.log("add date ", bins.date(date).add('day',20));
console.log("substract date ", bins.date(date).add('day', -10));
console.log("date ", bins.date(date).getDate());
console.log("change tinezone date ", bins.date('', +270).getDate()); 
console.log("month", bins.date(date).getMonth());
console.log("year",bins.date(date).getYear());
console.log("week day",bins.date(date).getWeekDay());
console.log("Time", bins.date().getTime());
console.log("Time zone", bins.date().getTimeZone());

console.log("format", bins.date().format('YYYY MM DDD WDD WD hh h mm ss ap'));
console.log("Full format", bins.date().format('full'));
console.log("Full Date", bins.date('2018-05-05').format('full-date'));
console.log("Full Time", bins.date().format('full-time'));
console.log("Time", bins.date().format('time'));

bins.node('#frm-1').validation();



 bins.node('.text').setAttr({
    'class' : 'select-text',
    'data-name' : '123' 
});
bins.node('.select-text').getAttr('data-name');
bins.node('.select-text').addClass('selected-text');
bins.node('.select-text').removeClass('selected-text');
bins.node('.select-text').hide();
bins.node('.select-text').show();
bins.node('.select-text').css({
    'background' : '#CCC',
    'color' : 'red',
    'font-size' : '20px'
});
let cloneNode = bins.node('.text-2').clone();

bins.node('.text-2').setHtml('<strong>New Html </strong> content '); // html string,  true = outer html, false=inner html
bins.node('.text-2').append('<div class="new-created-element-append">It is a new Element, <b>append</b> </div>');
let newElement = bins.node('span').new();
bins.node(newElement).setAttr({
    'background' : '#CCC',
})
bins.node(newElement).addClass('new-element-create');
bins.node(newElement).setHtml('new element created and append');// html string,  true = outer html, false=inner html
bins.node('.text-2').append(newElement);

bins.node('.text-2').prepend('<div class="new-created-element-prepend">It is a new Element,<b> prepend</b> </div><div id="prepend-child">Demo child</div>');
bins.node(newElement).setHtml('new element created and prepend');
bins.node('.text-2').prepend(newElement);

setTimeout(()=>{
    //bins.node('.text-2').fadeOut(); //very-slow, slow, fast,
    //bins.node('.text-2').fadeIn(); //very-slow, slow, fast,
},2000)

console.log(bins.node('.text-2').getHtml(true)) // true = outer html, false=inner html
console.log(bins.node('.text-2').text())
//bins.node('.text-2').toggle(); // fade, slide
setTimeout(()=>{
    //bins.node('.text-2').toggle('fade');
    //bins.node('.text-2').toggle('slide');
},2000)
//bins.node('.text-2').slideUp('slow'); //very-slow, slow, fast,
//bins.node('.text-2').slideDown('slow'); //very-slow, slow, fast,

console.log(bins.node('.text-2').hasAttr('data-name'));
bins.node('.text-2').setAttr({'data-name':'text-2-data-value'});
console.log(bins.node('.text-2').getAttr('data-name'));
bins.node('.text-2').removeAttr('data-name');

bins.node('.clickBtn').bind('click',(e)=> {
    console.log(e.target);
}) 

console.log("parent", bins.node(".new-created-element-prepend").parent() );
console.log("next ", bins.node(".new-created-element-prepend").next());
console.log("previous", bins.node("#prepend-child").previous());
console.log("children", bins.node(".text-2").children());
console.log("Last", bins.node(".text-2").last());
console.log("First", bins.node(".text-2").first());
console.log("Nth of type", bins.node(".text-2").eq(1));
console.log("Check class exist", bins.node(bins.node(".text-2").first()).hasClass('text-2'));

console.log("Empty", bins.node(".text-2").empty());
console.log("Remove", bins.node(".text-2").remove());

console.log(bins.node(".text-2"));
bins.node('#nameTextBox').bind('change',()=>{
    console.log(event.target);
})
