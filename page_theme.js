function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function setTheme(theme = null){
    // Get HTML head element
    let head = document.getElementsByTagName('HEAD')[0];
    
    if(theme == null){
        theme = getCookie("Theme");
        if(theme == null)
            theme = "dark";
        let select = document.getElementById('theme_select');
        if(select != null && select != undefined)
            select.value = theme;
    }
    
    let folders = document.location.href.replace(document.location.origin, "").split('/');
    let linkToCss = "";
    for(let i=0;i<folders.length - 2;i++)
        linkToCss += "../";
    linkToCss +="Themes/";

    var links = head.getElementsByTagName("link");
    for(let i=0;i<links.length;i++){
        node=links[i];
        var href = node.getAttribute("href");
        if(href != null && href != undefined)
            if(href.startsWith(linkToCss))
                node.remove();
    }
    
    // Create new link Element
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = linkToCss + theme + "_mode.css";
    head.appendChild(link);
    
    // Create new link Element
    link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = linkToCss + "general_theme.css";
    head.appendChild(link);
}

function onThemeChange(){
    let select = document.getElementById('theme_select');
    setTheme(select.value);
    setCookie("Theme", select.value);
}

window.addEventListener("load", function(event) {
    setTheme();
},false);