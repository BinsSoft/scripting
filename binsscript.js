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
class Bins 
{

    constructor(selector) {
        this.selector = selector;
        if (typeof selector == 'string') {
            this.e = document.querySelectorAll(selector);
        }
        else {
            this.e = [];
            this.e[0] = this.selector;
        }
        return {
            exist : ()=>{ // CHECK ELEMENT EXIST OR NOT
                return  (this.e)? true : false;
            },
            length :  this.getLength(),
            value : () =>{
                return this.e[0].value;
            },
            setAttr : (attrArray) =>{ // 
                if (this.getLength() > 0) {
                    if (Object.keys(attrArray).length > 0) {
                        for (let a in attrArray) {
                            if (this.getLength() == 1) {
                                this.setAttribute(this.e[0], a, attrArray[a]);
                            } else {
                                for(let node of this.e) {
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
            },
            getAttr : (attrName)=>{
                if (this.getLength() > 0) {
                    if (attrName) {
                        return this.e[0].getAttribute(attrName);
                    }
                } else {
                    this.exception(404);
                }
                         
            },
            addClass :(className)=>{
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
            },
            removeAttr : (attrName) =>{
                for (let node of this.e) {
                   this.removeAttribute(node, attrName);
                }
            },
            hasAttr : (attrName) =>{
                return this.e[0].hasAttribute(attrName);
            },
            removeClass :(className)=>{
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
            },
            css : (cssParams) =>{
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
            },
            setHtml : (htmlContent="", outer=false)=>{
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
                
            },
            getHtml : (outer=false)=>{
                return (outer == true) ? this.e[0].outerHTML : this.e[0].innerHTML;
            },
            text: (textContent="") => {
                if (textContent != '') {
                    for (let node of this.e) {
                        node.innerText = textContent;
                    }
                    return true;
                } else {
                    return this.e[0].innerText;
                }
            },
            clone : ()=>{
                return this.e[0].cloneNode(true);
            },
            new : ()=>{
                return document.createElement(this.selector);
            },
            append : (html)=>{
                for (let node of this.e) {
                    if (typeof html == 'string') {
                        node.insertAdjacentHTML('beforeend',html);
                    } else if (typeof html == 'object') {
                        node.appendChild(html);
                    }
                }
                return true;
            },
            prepend: (html) => {
                for (let node of this.e) {
                    if (typeof html == 'string') {
                        node.insertAdjacentHTML('afterbegin', html);
                    } else if (typeof html == 'object') {
                        node.prepend(html);
                    }
                }
                return true;
            },
            show: () => {
                if (this.getLength() > 0) {
                    for (let node of this.e) {
                        this.showHide(node, 'show');
                    }
                } else {
                    this.exception(404);
                }
                return true;
            },
            hide: () => {
                if (this.getLength() > 0) {
                    for (let node of this.e) {
                        this.showHide(node, 'hide');
                    }
                } else {
                    this.exception(404);
                }
                return true;
            },
            fadeOut :(duration='')=>{
                for (let node of this.e) {
                    this.fadeInOut(node, duration, true);
                }
            },
            fadeIn: (duration='') => {
                for (let node of this.e) {
                    this.fadeInOut(node, duration, false);
                }
            },
            
            slideUp: (duration='') => {
                for (let node of this.e) {
                    this.slideUpDown(node, duration, true);
                }
            },

            slideDown: (duration = '') => {
                for (let node of this.e) {
                    this.slideUpDown(node, duration, false);
                }
            },

            toggle: (type, duration) => {
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
            },

            bind : (eventName, action)=>{
                for (let node of this.e) {
                    node.addEventListener(eventName, action, true);
                }
            }
        };
    }
    
    exception(code) {
        let msg = '';
        switch(code) {
            case 404 :
                msg =  this.selector +' not exist';
                break;
            case 405 :
                msg = this.selector +' : need atleast one attribute to set';
                break;
            case 406 :
                msg = this.selector +' : no class name send';
                break;
            case 407 :
                msg = this.selector +' : need atleast one css [property]';
                break;
        }
        console.log('%c'+msg, 'color: red');

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
    /* FADE IN/OUT A NODE */
    fadeInOut(node, duration, out = true) {
        if (out) { // fade out
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
        } else { // fade in
            var opacity = 0;
            this.showHide(node,'show');
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
    /* SLIDE UP/DOWN A NODE */
    slideUpDown(node, duration, up = true) {
        if (up == true) { //slide up
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
        } else { //slide down
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
    /* SET STYLE OF A NODE */
    setStyle(node, propName, propValue) {
        node.style[propName] = propValue;
        return true;
    }
    /* ADD OR REMOVE CLASS NAME OF A NODE */
    manageClass(node, className,action) {
        if (action == 'add') {
            node.classList.add(className);
        } else if(action == 'remove') {
            node.classList.remove(className);
        }
        return true;
    }
    /* SET ATTRIBUTE WITH THE NODE */
    setAttribute(node, attrName, attrValue) {
        node.setAttribute(attrName, attrValue);
        return true;
    }
    /* REMOVE ATTRIBUTE FROM NODE */
    removeAttribute(node, attrName) {
        node.removeAttribute(attrName);
        return true;
    }
    /* GET THE LENGTH OF A ELEMENT */
    getLength()
    {
        return this.e.length;
    }
}
window.bins = (ele) =>{
    const objBins  = new Bins(ele);
    return objBins;
}