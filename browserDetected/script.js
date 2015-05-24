/**
 * Created by amoroz-prom on 05.05.15.
 */
var ua = detect.parse(navigator.userAgent);
console.log(ua.browser.name);
var browser = navigator.userAgent;
var regeksp = /chrome/i;
console.log(browser.search(regeksp));
console.log(browser);