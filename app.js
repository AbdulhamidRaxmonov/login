function yozLoc(){
    var inp1 = document.getElementById('inp1').value;
    var inp2 = document.getElementById('inp2').value;
    var inp3 = document.getElementById('inp3').value;
    var inp4 = document.getElementById('inp4').value;
    var inp5 = document.getElementById('inp5').value;
    
    window.localStorage.setItem('name', inp1);
    window.localStorage.setItem('email', inp2);
    window.localStorage.setItem('password', inp3);
    window.localStorage.setItem('cpassword', inp4);
    window.localStorage.setItem('img', inp5);

    window.open('profile.html', "_self");

}

function olLoc(){
    var name = window.localStorage.getItem('name');
    var email = window.localStorage.getItem('email');
    var password = window.localStorage.getItem('password');
    var cpassword = window.localStorage.getItem('cpassword');
    var img = window.localStorage.getItem('img');
    var h1 = document.createElement('h1');
    var h2 = document.createElement('h1');
    var h3 = document.createElement('h1');
    var h4 = document.createElement('h1');
    var imgurl = document.createElement('img');
    var body = document.body;
    // console.log(img);
    
    h1.innerText = name;
    h2.innerText = email;
    h3.innerText = password;
    h4.innerText = cpassword;
    imgurl.setAttribute('src', img);
    imgurl.style.width = "60px"
    
    body.appendChild(imgurl);
    body.appendChild(h1);
    body.appendChild(h2);
    body.appendChild(h3);
    body.appendChild(h4);
}

function tekshir(){
    var email = window.localStorage.getItem('email');
    var password = window.localStorage.getItem('password');
    var h1 = document.getElementById('error');
    var inp2 = document.getElementById('inp1').value;
    var inp3 = document.getElementById('inp2').value;
    
    if(inp2 == email && inp3 == password)
    {
        window.open('profile.html', "_self");
    }
    else{
       h1.innerText = "Email yoki password xato!";
       h1.style.color = "crimson";
       h1.style.fontSize = "12pt";
    }
}