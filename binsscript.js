/*!
 * Bins Script JavaScript Library v0.0.1 
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 *
 * Date: 2018-09-10
 */
"use strict";
const version = '0.0.1';



class HtmlHelper {

    constructor(selector) {
        this.selector = selector;
        this.e = [];
        if (typeof selector == 'string') {
            if (document.querySelectorAll(selector).length > 0) {
                this.e = document.querySelectorAll(selector);
            }
        }
        else {
            this.e[0] = this.selector;
        }
    }

    exist() { // CHECK ELEMENT EXIST OR NOT
        return (this.e) ? true : false;
    }

    value() {
        return this.e[0].value;
    }
    setAttr(attrArray) { // 
        if (this.getLength() > 0) {
            if (Object.keys(attrArray).length > 0) {
                for (let a in attrArray) {
                    if (this.getLength() == 1) {
                        this.setAttribute(this.e[0], a, attrArray[a]);
                    } else {
                        for (let node of this.e) {
                            this.setAttribute(node, a, attrArray[a]);
                        }
                    }
                }
                return true;
            } else {
                this.exception(405);
            }
        } else {
            this.exception(404);
        }
    }
    getAttr(attrName) {
        if (this.getLength() > 0) {
            if (attrName) {
                return this.e[0].getAttribute(attrName);
            }
        } else {
            this.exception(404);
        }
    }
    addClass(className) {
        if (className) {
            if (this.getLength() > 0) {
                for (let node of this.e) {
                    this.manageClass(node, className, 'add');
                }
            } else {
                this.exception(404);
            }
        } else {
            this.exception(406);
        }
        return true;
    }
    removeAttr(attrName) {
        for (let node of this.e) {
            this.removeAttribute(node, attrName);
        }
    }
    hasAttr(attrName) {
        return this.e[0].hasAttribute(attrName);
    }
    removeClass(className) {
        if (className) {
            if (this.getLength() > 0) {
                for (let node of this.e) {
                    this.manageClass(node, className, 'remove');
                }
            } else {
                this.exception(404);
            }
        } else {
            this.exception(406);
        }
    }
    hasClass(className) {
        let classValue = this.e[0].classList.value;
        return (classValue.indexOf(className) > -1 )
    }
    css(cssParams) {
        if (this.getLength() > 0) {
            if (Object.keys(cssParams).length > 0) {
                for (let c in cssParams) {
                    for (let node of this.e) {
                        this.setStyle(node, c, cssParams[c]);
                    }
                }
                return true;
            } else {
                this.exception(407);
            }
        } else {
            this.exception(404);
        }
    }
    setHtml(htmlContent = "", outer = false) {
        if (htmlContent != '') {
            for (let node of this.e) {
                switch (outer) {
                    case true:
                        node.outerHTML = htmlContent;
                        break;
                    default:
                        node.innerHTML = htmlContent;
                        break;
                }
            }
            return true;
        } else {
            return this.e[0].innerHTML;
        }

    }
    getHtml(outer = false) {
        return (outer == true) ? this.e[0].outerHTML : this.e[0].innerHTML;
    }
    text(textContent = "") {
        if (textContent != '') {
            for (let node of this.e) {
                node.innerText = textContent;
            }
            return true;
        } else {
            return this.e[0].innerText;
        }
    }
    clone() {
        return this.e[0].cloneNode(true);
    }
    new() {
        return document.createElement(this.selector);
    }
    parent()
    {
        return this.e[0].parentElement;
    }
    next() {
        return this.e[0].nextSibling;
    }
    previous() {
        return this.e[0].previousSibling;
    }
    children()
    {
        return this.e[0].children;
    }
    last() {
        if (this.getLength() > 0 ) {
            let nodeList = Array.prototype.slice.call(this.e);
            return nodeList[ nodeList.length -1 ];
        }
        return null;
    }
    first() {
        if (this.getLength() > 0) {
            return this.e[0];
        }
        return null;
    }

    eq(index) {
        if ((this.getLength()-1) < index){
            return this.e[index];
        }
        return null;
    }
    
    data(attrName) {
        return this.getAttr('data-'+attrName);
    }
    empty(){
        for (let node of this.e) {
            node.innerHTML = '';
        }
        return true;
    }
    remove()
    {
        for (let node of this.e) {
            node.parentElement.removeChild(node);
        }
        return true;
    }
    append(html) {
        for (let node of this.e) {
            if (typeof html == 'string') {
                node.insertAdjacentHTML('beforeend', html);
            } else if (typeof html == 'object') {
                node.appendChild(html);
            }
        }
        return true;
    }
    prepend(html) {
        for (let node of this.e) {
            if (typeof html == 'string') {
                node.insertAdjacentHTML('afterbegin', html);
            } else if (typeof html == 'object') {
                node.prepend(html);
            }
        }
        return true;
    }
    show() {
        if (this.getLength() > 0) {
            for (let node of this.e) {
                this.showHide(node, 'show');
            }
        } else {
            this.exception(404);
        }
        return true;
    }
    hide() {
        if (this.getLength() > 0) {
            for (let node of this.e) {
                this.showHide(node, 'hide');
            }
        } else {
            this.exception(404);
        }
        return true;
    }
    fadeOut(duration = '') {
        for (let node of this.e) {
            this.fadeInOut(node, duration, true);
        }
    }
    fadeIn(duration = '') {
        for (let node of this.e) {
            this.fadeInOut(node, duration, false);
        }
    }

    slideUp(duration = '') {
        for (let node of this.e) {
            this.slideUpDown(node, duration, true);
        }
    }

    slideDown(duration = '') {
        for (let node of this.e) {
            this.slideUpDown(node, duration, false);
        }
    }

    toggle(type, duration) {
        for (let node of this.e) {
            if (node.hasAttribute('data-show')) {
                node.removeAttribute('data-show')
            } else {
                this.setAttribute(node, 'data-show', true);
            }
            if (type == 'fade') {
                (node.getAttribute('data-show')) ? this.fadeInOut(node, duration, false) : this.fadeInOut(node, duration, true);
            } else if (type == 'slide') {
                (node.getAttribute('data-show')) ? this.slideUpDown(node, duration, true) : this.slideUpDown(node, duration, false);
            } else {
                (node.getAttribute('data-show')) ? this.showHide(node, 'show') : this.showHide(node, 'hide');
            }
        }
        return true;
    }

    bind(eventName, action) {
        for (let node of this.e) {
            node.addEventListener(eventName, action,false, true);
        }
    }

    exception(code) {
        let msg = '';
        switch (code) {
            case 404:
                msg = this.selector + ' not exist';
                break;
            case 405:
                msg = this.selector + ' : need atleast one attribute to set';
                break;
            case 406:
                msg = this.selector + ' : no class name send';
                break;
            case 407:
                msg = this.selector + ' : need atleast one css [property]';
                break;
        }
        console.log('%c' + msg, 'color: red');

    }
    sleepDutaion(duration) {
        let intervalTime = 0;
        if (!duration) {
            duration = 'fast';
        }
        switch (duration) {
            case "very-slow":
                intervalTime = 50;
                break;
            case "slow":
                intervalTime = 20;
                break;
            case "fast":
                intervalTime = 10;
                break;
        }
        return intervalTime;
    }
    showHide(node, type) {
        if (type == 'show') {
            this.setStyle(node, 'display', 'inherit');
        } else if (type == 'hide') {
            this.setStyle(node, 'display', 'none');
        }
        return true;
    }
    /*  FADE IN/OUT A NODE  */
    fadeInOut(node, duration, out = true) {
        if (out) { /*  fade out */
            var opacity = 1;
            let i = setInterval(() => {
                new Promise((resolve, reject) => {
                    if (!duration) {
                        duration = 'fast';
                    }
                    switch (duration) {
                        case "very-slow":
                            opacity -= 0.001;
                            break;
                        case "slow":
                            opacity -= 0.005;
                            break;
                        case "fast":
                            opacity -= 0.009;
                            break;
                    }
                    resolve();
                }).then(() => {
                    this.setStyle(node, 'opacity', opacity);
                    if (opacity < 0) {
                        this.setAttribute(node, 'style');
                        this.showHide(node, 'hide');
                        clearInterval(i);
                    }
                })


            }, this.sleepDutaion(duration));
        } else { /*  fade in */
            var opacity = 0;
            this.showHide(node, 'show');
            let i = setInterval(() => {
                new Promise((resolve, reject) => {
                    if (!duration) {
                        duration = 'fast';
                    }
                    switch (duration) {
                        case "very-slow":
                            opacity += 0.001;
                            break;
                        case "slow":
                            opacity += 0.005;
                            break;
                        case "fast":
                            opacity += 0.009;
                            break;
                    }
                    resolve();
                }).then(() => {
                    this.setStyle(node, 'opacity', opacity);
                    if (opacity >= 1) {
                        this.setAttribute(node, 'style');
                        this.showHide(node, 'show');
                        clearInterval(i);
                    }
                })


            }, this.sleepDutaion(duration));
        }
        return true;
    }
    /*  SLIDE UP/DOWN A NODE  */
    slideUpDown(node, duration, up = true) {
        if (up == true) { /* slide up */
            let _nodeHeight = node.scrollHeight;
            let i = setInterval(() => {
                new Promise((resolve, reject) => {
                    if (!duration) {
                        duration = 'fast';
                    }
                    switch (duration) {
                        case "very-slow":
                            _nodeHeight -= 1;
                            break;
                        case "slow":
                            _nodeHeight -= 5;
                            break;
                        case "fast":
                            _nodeHeight -= 9;
                            break;
                    }
                    resolve();
                }).then(() => {
                    console.log(_nodeHeight);
                    this.setStyle(node, 'height', _nodeHeight + 'px');
                    this.setStyle(node, 'overflow', 'hidden');
                    if (_nodeHeight < 0) {
                        this.showHide(node, 'hide');
                        clearInterval(i);
                    }
                })
            }, this.sleepDutaion(duration))
        } else { /* slide down */
            this.showHide(node, 'show');
            let _nodeHeight = node.scrollHeight;
            let _newNodeHeight = 0;
            let i = setInterval(() => {
                new Promise((resolve, reject) => {
                    if (!duration) {
                        duration = 'fast';
                    }
                    switch (duration) {
                        case "very-slow":
                            _newNodeHeight += 1;
                            break;
                        case "slow":
                            _newNodeHeight += 5;
                            break;
                        case "fast":
                            _newNodeHeight += 9;
                            break;
                    }
                    resolve();
                }).then(() => {
                    this.setStyle(node, 'height', _newNodeHeight + 'px');
                    this.setStyle(node, 'overflow', 'hidden');
                    if (_newNodeHeight >= _nodeHeight) {
                        this.removeAttribute(node, 'style');
                        clearInterval(i);
                    }
                })
            }, this.sleepDutaion(duration))
        }

    }
    /*  SET STYLE OF A NODE  */
    setStyle(node, propName, propValue) {
        node.style[propName] = propValue;
        return true;
    }
    /*  ADD OR REMOVE CLASS NAME OF A NODE  */
    manageClass(node, className, action) {
        if (action == 'add') {
            node.classList.add(className);
        } else if (action == 'remove') {
            node.classList.remove(className);
        }
        return true;
    }
    /*  SET ATTRIBUTE WITH THE NODE  */
    setAttribute(node, attrName, attrValue) {
        node.setAttribute(attrName, attrValue);
        return true;
    }
    /*  REMOVE ATTRIBUTE FROM NODE */
    removeAttribute(node, attrName) {
        node.removeAttribute(attrName);
        return true;
    }
    /*  GET THE LENGTH OF A ELEMENT */
    getLength() {
        return this.e.length;
    }
    /* FORM VALIDATION  */
    validation () {
        
        var form = this.e[0];
        return form.addEventListener('submit', (event)=>{
            for (let err of form.querySelectorAll('.err')) {
                err.parentNode.removeChild(err);
            }
            var errorCount = 1;
            var numberRegex = /^[0-9]+$/;
            var emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

            var inputArr = Array.prototype.slice.call(document.forms[form.getAttribute('id')].getElementsByTagName('input'));
            var selectArr = Array.prototype.slice.call(document.forms[form.getAttribute('id')].getElementsByTagName('select'));
            inputArr = inputArr.concat(selectArr)
            
            for (var input of inputArr) {
                if (input.nodeName === 'SELECT' || input.nodeName === 'INPUT') {
                    if (input.classList.value.indexOf('required') > -1) {
                        if (input.value === "") {
                            let i = document.createElement('i');
                            i.classList.add('err');
                            i.innerText = input.getAttribute('data-name') + " is required";

                            input.parentNode.insertBefore(i, input.nextSibling);
                            errorCount++;
                        }
                    }
                    if (input.classList.value.indexOf('number') > -1) {
                        if (input.value !== "") {
                            let vallidNumber = numberRegex.test(input.value);
                            console.log(vallidNumber);
                            if (vallidNumber === false) {
                                let i = document.createElement('i');
                                i.classList.add('err');
                                i.innerText = input.getAttribute('data-name') + " is not valid number";
                                input.parentNode.insertBefore(i, input.nextSibling);
                                errorCount += 1;
                            }
                        }
                    }
                    if (input.getAttribute('type') === 'email' || input.classList.value.indexOf('email') > -1) {
                        if (input.value !== '') {
                            var vaildEmail = emailRegex.test(input.value);
                            if (vaildEmail == false) {
                                let i = document.createElement('i');
                                i.classList.add('err');
                                i.innerText = input.getAttribute('data-name') + " is not valid email";
                                input.parentNode.insertBefore(i, input.nextSibling);
                                errorCount += 1;
                            }
                        }
                    }
                    if (input.getAttribute('data-compare')) {
                        if (input.value !== '') {
                            if (input.value !== form.querySelector("input[name=" + input.getAttribute("data-compare") + "]").value) {
                                let i = document.createElement('i');
                                i.classList.add('err');
                                i.innerText = input.getAttribute('data-name') + " is not matching";
                                input.parentNode.insertBefore(i, input.nextSibling);
                                errorCount += 1;
                            }
                        }
                    }
                }

            }
            if (errorCount > 0) {
                event.preventDefault();
            }
            return true;
        })
        
    }
}


class DateHelper
{
    constructor(element, offset) {
        if (element) {
            if ( typeof element == 'string' ) {
                this.date = new Date(element);
            } else if (typeof element == 'object') {
                this.date = element;
            }
        } else {
            this.date = new Date();
        }
        
        if (offset) {
            this.date = this.changeTimeZone(offset);
        }
        
    }

    changeTimeZone(offset) {
        let d = this.date;
        let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
        let nd = new Date(utc + (60000 * offset));
        return nd;
    }

    getDate() {
        return this.date.getDate();
    }
    getMonth() {
        let monthArr = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        let m = this.date.getMonth();

        return {
            month : m+1,
            name: monthArr[m],
            shortName : monthArr[m].substr(0,3)
        };
    }
    getYear() {
        return this.date.getFullYear();
    }

    getWeekDay() {
        let weekDays = ['Sunday','Monday','TuesDay','Wednesday','Thursday','Friday','Saturday'];
        let dayNo = this.date.getDay();
        return {
            day : dayNo,
            name : weekDays[dayNo],
            shortName: weekDays[dayNo].substr(0, 3)
        } ;
    }
    getTime()
    {
        return this.date.getTime();
    }
    getTimeZone()
    {
        return {
            "name": /\((.*)\)/.exec(this.date.toString())[1],
            "offset":this.date.getTimezoneOffset()};
    }
    
    getGetOrdinal(n) {
        var s = ["th", "st", "nd", "rd"],
            v = n % 100;
        return ((n<10)?"0":"")+n + (s[(v - 20) % 10] || s[v] || s[0]);
    }
    format(formatStr) {
        var formatedDate = formatStr;
        switch (formatStr) {
            case "full":
                return this.format("WDD, DDD MMMM YYYY h:mm:ss ap");
                break;
            case "full-date":
                return this.format("YYYY-M-DD");
                break;
            case "full-time":
                return this.format("hh:mm:ss");
                break;
            case "time":
                return this.format("h:mm ap");
                break;
            default :
                if (formatStr.indexOf("MMMM") > -1) {
                    formatedDate = formatedDate.replace("MMMM", this.getMonth().name);/* Ex : January */
                }
                if (formatStr.indexOf("MM") > -1) {
                    formatedDate = formatedDate.replace("MM", this.getMonth().shortName);/* Ex : Jan */
                }
                if (formatStr.indexOf("M") > -1) {
                    let monthStr = this.getMonth().month;
                    monthStr = (monthStr < 10) ? "0" + monthStr: monthStr;
                    formatedDate = formatedDate.replace("M", monthStr);/* Ex: 1 2 3 */
                }

                if (formatStr.indexOf("YYYY") > -1) {
                    formatedDate = formatedDate.replace("YYYY", this.getYear());/* Ex : 2018 2017 */
                }
                if (formatStr.indexOf("YY") > -1) {
                    formatedDate = formatedDate.replace("YY", parseInt((this.getYear()).toString().substr(2)));/* Ex : 18, 17  */
                }

                if (formatStr.indexOf("WDD") > -1) {
                    formatedDate = formatedDate.replace("WDD", this.getWeekDay().name);/* Ex : Sunday, Monday  */
                }
                if (formatStr.indexOf("WD") > -1) {
                    formatedDate = formatedDate.replace("WD", this.getWeekDay().shortName);/* Ex :Sun, Mon  */
                }

                if (formatStr.indexOf("hh") > -1) {
                    formatedDate = formatedDate.replace("hh", this.date.getHours());/* Ex : 12 13 14  */
                }
                if (formatStr.indexOf("h") > -1) {
                    formatedDate = formatedDate.replace("h", (this.date.getHours() > 12) ? this.date.getHours() - 12 : this.date.getHours());/* Ex : 1 2 3 */
                }

                if (formatStr.indexOf("mm") > -1) {
                    formatedDate = formatedDate.replace("mm", this.date.getMinutes());/* Ex : 1 2 3 */
                }

                if (formatStr.indexOf("ss") > -1) {
                    formatedDate = formatedDate.replace("ss", this.date.getSeconds());/* Ex : 1 2 3 */
                }

                if (formatStr.indexOf("ap") > -1) {
                    formatedDate = formatedDate.replace("ap", (this.date.getHours() >= 12) ? "PM" : "AM");/* Ex : AM PM */
                }

                if (formatStr.indexOf("DDD") > -1) {
                    
                    formatedDate = formatedDate.replace("DDD", this.getGetOrdinal(this.getDate()));/* Ex : 1st 2nd 3rd 10th  */
                }
                if (formatStr.indexOf("DD") > -1) {
                    let d = this.getDate();
                    d = ((d < 10) ? "0" : "")+d;
                    formatedDate = formatedDate.replace("DD", d);/* Ex : 1 2 10 12  */
                }
                break;
        }
        
        return formatedDate;
    }
    add(type, num) {
        if (type == 'day'){
            var newdate = this.date;
            newdate.setDate(newdate.getDate() + parseInt(num));
            return newdate;
        } 
        else if (type== 'month') {
            var newdate = this.date;
            newdate.setMonth(newdate.getMonth() + parseInt(num));
            return newdate;
        }
        else if (type == 'year') {
            let newDate = new Date(this.getYear() + parseInt(num), this.getMonth().month, this.getDate());
            return newDate;
        }
    }

}

class BinsClass  {
    node(element) {
        return new HtmlHelper(element);
    }

    date(element, offset) {
        return new DateHelper(element, offset)
    }
}
var bins = new BinsClass;
