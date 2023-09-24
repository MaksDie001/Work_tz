let drop_form=document.querySelector(".loop_form")
let loop_input=document.querySelector(".loop_input_text")
let loop_input_span=document.querySelector(".loop_input")
let drop_search=document.querySelector(".drop_search")
function  drop_script() {
    drop_form.className ="loop_form_border"
    loop_input.style.marginTop="0"
    loop_input_span.style.border="none"
    drop_search.style.display="block"
}
loop_input.onblur=function (){
    drop_form.className ="loop_form"
    loop_input_span.style.border="black 1px solid"
    drop_search.style.display="none"
}


let hm_ul=document.querySelector(".hm_ul")
let hm_menu=document.querySelector(".hm_menu")
trigger=true
function hm_script(){
    console.log("hello")
    if(trigger){
        hm_menu.style.margin="3.9vw 16vw 0 0"
        hm_ul.style.display="inline"
        trigger=false
    }
    else {
        hm_ul.style.display="none"
        hm_menu.style.margin="3.9vw"
        trigger=true
    }


}

let options_select=document.querySelector(".options_select")
let optiom_select_pre=document.querySelector(".options_select pre")
let select_list=document.querySelector(".select_list")
let check_mark=document.querySelector(".check_mark li")

trigger_select=true
function select_text(text){
    options_select.innerHTML=`<pre>${text}</pre>`
    options_select.style.display="inline"
    select_list.style.display="none"
    if (options_select.innerHTML=="<pre>По умолчанию</pre>"){
        select_list.innerHTML="<span class=\"check_mark\"><img src=\"img/галочка.png\" class='check_img' style='top: 29px;'><li onclick=\"select_text('По умолчанию')\"><pre>По умолчанию</pre></li></span>\n" +
            "                 \n" +
            "                 <li onclick=\"select_text('По дате')\">По дате</li>\n" +
            "                 <li onclick=\"select_text('Дешевле')\">Дешевле</li>\n" +
            "                 <li onclick=\"select_text('Дороже')\">Дороже</li>\n" +
            "                 <li onclick=\"select_text('По популярности')\"><pre>По популярности</pre></li>"
    }
    else if(options_select.innerHTML == "<pre>По дате</pre>"){
        select_list.innerHTML="<li onclick=\"select_text('По умолчанию')\"><pre>По умолчанию</pre></li>\n" +
            "                 \n" +
            "                 <span class=\"check_mark\"><img src=\"img/галочка.png\" class='check_img' style='top: 16px;'><li onclick=\"select_text('По дате')\">По дате</li></span>\n" +
            "                 <li onclick=\"select_text('Дешевле')\">Дешевле</li>\n" +
            "                 <li onclick=\"select_text('Дороже')\">Дороже</li>\n" +
            "                 <li onclick=\"select_text('По популярности')\"><pre>По популярности</pre></li>"

    }
    else if(options_select.innerHTML == "<pre>Дешевле</pre>"){
        select_list.innerHTML="<li onclick=\"select_text('По умолчанию')\"><pre>По умолчанию</pre></li>\n" +
            "                 \n" +
            "                 <li onclick=\"select_text('По дате')\">По дате</li>\n" +
            "                 <span class=\"check_mark\"><img src=\"img/галочка.png\" class='check_img' style='top: 16px;'><li onclick=\"select_text('Дешевле')\">Дешевле</li></span>\n" +
            "                 <li onclick=\"select_text('Дороже')\">Дороже</li>\n" +
            "                 <li onclick=\"select_text('По популярности')\"><pre>По популярности</pre></li>"

    }
    else if(options_select.innerHTML == "<pre>Дороже</pre>"){
        select_list.innerHTML="<li onclick=\"select_text('По умолчанию')\"><pre>По умолчанию</pre></li>\n" +
            "                 \n" +
            "                 <li onclick=\"select_text('По дате')\">По дате</li>\n" +
            "                 <li onclick=\"select_text('Дешевле')\">Дешевле</li>\n" +
            "                 <span class=\"check_mark\"><img src=\"img/галочка.png\" class='check_img' style='top: 16px;'><li onclick=\"select_text('Дороже')\">Дороже</li></span>\n" +
            "                 <li onclick=\"select_text('По популярности')\"><pre>По популярности</pre></li>"

    }
    else if(options_select.innerHTML == "<pre>По популярности</pre>"){
        select_list.innerHTML="<li onclick=\"select_text('По умолчанию')\"><pre>По умолчанию</pre></li>\n" +
            "                 \n" +
            "                 <li onclick=\"select_text('По дате')\">По дате</li>\n" +
            "                 <li onclick=\"select_text('Дешевле')\">Дешевле</li>\n" +
            "                 <li onclick=\"select_text('Дороже')\">Дороже</li>\n" +
            "                 <span class=\"check_mark\"><img src=\"img/галочка.png\" class='check_img' style='top: 29px;'><li onclick=\"select_text('По популярности')\"><pre>По популярности</pre></li></span>"

    }
}
function select_script(){
    if (trigger_select){
        select_list.style.display="block"
        options_select.style.display="none"
        trigger_select=false
    }
    else {

        trigger_select=true
    }

}

let filter_list=document.querySelector(".filter_list")
let filter_triger=true
function filter_triger_script(){
    if(filter_triger){
        filter_list.style.display="inline"
        filter_triger=false
    }
    else {
        filter_triger=true
        filter_list.style.display="none"
    }
}
let filter_result=document.querySelector(".result")
let filter_range=document.querySelector(".filter_range")

function filter_script(){
    filter_result.innerHTML=`<p>${filter_range.value} ₽</p>`
}
