function hide() {
    const x = document.getElementById("but3");
    const y = document.getElementById("but2");
     x.style.display="block";
     y.style.display="none";
     document.getElementById("audio2").play();
    
}
function hide2() {
    const x = document.getElementById("but3");
    const y = document.getElementById("but4");
     x.style.display="none";
     y.style.display="block";
     document.getElementById("audio2").play();
}
function hide3() {
    const x = document.getElementById("but4");
    const y = document.getElementById("but2");
     x.style.display="none";
     y.style.display="none";
     document.getElementById("audio2").play();
}
function show() {
    const x = document.getElementById("click");
    const y = document.getElementById("form1");
     x.style.display="none";
     y.style.display="block";
    
    
}
function troll() {
    const x = document.getElementById("fbut2");
    const y = document.getElementById("fbut3");
      x.style.display="none";
      y.style.display="block";
    document.getElementById("alert").innerHTML = "Công chúa đừng giận anh nữa nhá";
    document.getElementById("alert2").innerHTML = "Công chúa tha lỗi cho anh đi màaaaaaaaaa ♥️ ";
      document.getElementById("audio2").play();
      return false;
}
function troll1() {
    const x = document.getElementById("fbut3");
    const y = document.getElementById("fbut4");
     x.style.display="none";
     document.getElementById("audio2").play();
     y.style.display="block";
     return false;
}
function troll2() {
    const x = document.getElementById("fbut2");
    const y = document.getElementById("fbut4");
     x.style.display="none";
     y.style.display="none";
     document.getElementById("audio2").play();
     return false;
}
function inrel() {
    const x = document.getElementById("fbut1alt");
    const y = document.getElementById("fbut1");
    const z = document.getElementById("click");
    const c = document.getElementById("challen");
    const v =  document.getElementById("fbut2");
    const b = document.getElementById("fbut2alt");
     v.style.display="inline";
     b.style.display="none";
     z.style.display="none";
     c.innerHTML = "";
     c.innerHTML = "Em hết dỗi anh chưa nhờ ??";
     y.style.display="none";
     x.style.display="inline";
     document.getElementById("audio3").play();
     document.getElementById("alert2").innerHTML = "";
    document.getElementById("des").innerHTML = "";
     return false;

}
function inrel2() {
    document.getElementById("click").style.display="none";
    document.getElementById("yess").style.display="block";
    document.getElementById("form1").style.display="none";
    document.getElementById("audio").play();
    document.getElementById("audio3").pause();
    return false;

}
function trollalt() {
    document.getElementById("alert2").innerHTML ="Mún thêm cái gì thì nhắn a chứ a ngu lắm k bt đâu 😭";
    alert("mỗi thế thôi dỗi dỗi cc cắn cho phát giờ, ngoan a iu ");
    return false;
}
