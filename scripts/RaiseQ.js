var Qdata = {
    topic:document.getElementById("topic").innerText,
    user:{

    },
    passage:{
        title:document.getElementsByName("title").innerText,
        bodycoll:document.getElementsByName("detail").innerText
    }
}
var submit = document.getElementsByName("submit");
submit.onclick = function(){
    data.push(Qdata);
}