let _cookies = null;
function _replaceCookieValue(cookie){
    return cookie.replaceAll(";", "\uffff");
}
function _revertCookieValue(cookie){
    return cookie.replaceAll("\uffff", ';');
}
function setCookie(name,value,days) {
    value = _replaceCookieValue(value);
    //console.log(value);
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookiesStartingWith(name) {
    let list = {};
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        let n = c.split('=')[0];
        if (c.startsWith(name)){
            let value = c.substring(n.length+1,c.length);
            //console.log(value);
            value = _revertCookieValue(value);
            //console.log(value.length);
            //return value;
            list[n] = value;
        }
    }
    return list;
}
function getCookie(name) {
    let list = getCookiesStartingWith(name);
    console.log(list);
    for(k in list){
        console.log(k + " " + list[k]);
        if(k === name)
            return list[k];
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function eraseAllCookiesStartingWith(name){
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        c = c.split('=')[0];
        //console.log(c);
        if(c.startsWith(name))
            eraseCookie(c);
    }
}

RelativePathToRoot = "";

function addStylesheetToHeader(name)
{
    name = RelativePathToRoot + name;

    let head = document.getElementsByTagName('HEAD')[0];

    // Create new link specific theme
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = name;

    head.appendChild(link);
}

function addScriptNeeded(name)
{
    name = RelativePathToRoot + name;

    let script = document.createElement('script');
    script.src = name;
    let head = document.getElementsByTagName('HEAD')[0];
    head.prepend(script);
}

function setTheme(theme = null){
    
    if(theme == null){
        theme = getCookie("Theme");
        if(theme == null)
            theme = "dark";
        let select = document.getElementById('theme_select');
        if(select != null && select != undefined)
            select.value = theme;
    }
    
    let folders = document.location.href.replace(document.location.origin, "").split('/');
    RelativePathToRoot = "";
    for(let i=0;i<folders.length - 2;i++)
        RelativePathToRoot += "../";
    
    let head = document.getElementsByTagName('HEAD')[0];
    var links = head.getElementsByTagName("link");
    for(let i=links.length-1;i>=0;i--){
        node=links[i];
        var href = node.getAttribute("href");
        if(href != null && href != undefined)
            if(href.startsWith(RelativePathToRoot + "Themes"))
                node.remove();
    }
    // Create new link specific theme
    //let link = document.createElement('link');
    //link.rel = 'stylesheet';
    //link.href = linkToCss + theme + "_mode.css";
    //head.appendChild(link);
    addStylesheetToHeader("Themes/" + theme + "_mode.css");
    
    // Create new link general theme
    //link = document.createElement('link');
    //link.rel = 'stylesheet';
    //link.href = linkToCss + "general_theme.css";
    //head.appendChild(link);
    addStylesheetToHeader("Themes/general_theme.css");
}

function onThemeChange(){
    let select = document.getElementById('theme_select');
    setTheme(select.value);
    setCookie("Theme", select.value);
}

window.addEventListener("load", function(event) {
    setTheme();
},false);