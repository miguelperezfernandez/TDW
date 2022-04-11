const { Console } = require("./console"); 

const console = new Console();

let users=[];
/*var usuario = document.getElementById('usuario');
var contraseña = document.getElementById('contraseña');
var login = document.getElementById('logearse');*/
let user = document.getElementById("usuario").value;
let password = document.getElementById("contraseña").value;


class User {


    constructor (user,password)
    {
        this.usuario=user;
        this.contraseña=password;
    }
    
    readIndex(){

        window.location.href= "file:///D:/Mike%20Uni/3%20Curso/TDW/Ejercicio%20HTML/index.html";
    }
    

    

}
class Reader extends User{

    constructor(user,password)
    {
        super();
    }

    

    readPerson(url)
    {
        window.location.href= "file:///D:/Mike%20Uni/3%20Curso/TDW/HTML/Tim%20Berners%20Lee.html";
    }

    readEntity(url){
        window.location.href= "file:///C:/Users/Admin/Documents/TERCERO/Segundo%20Semestre/TDW/HTML/HTML.html";
    }
    
    readProduct(url){

       //añadiria un if que me diga si es una href o no 
        window.location.href= "file:///C:/Users/Admin/Documents/TERCERO/Segundo%20Semestre/TDW/HTML/HTML.html";
       
    }


}

class Writer extends User{

    constructor(user,password)
    {
        super();
    }
}


function storegeUser(user,password){

    localStorage.setItem('usuario', user);
    localStorage.setItem('contraseña', password);

    nameDisplayCheck();
}


window.onload=function(){

    document.getElementById("login").addEventListener("click",login);
    document.getElementById("logOut").style.visibility='visible';

}

function login(){

    login.addEventListener('click',function(evt){
        if(usuario.value === ' '){
            console.log('Usuario obligatorio');
            evt.preventDefault();
            return false;
        }else if(contraseña.value === ' '){
            console.log('Contraseña obligatoria');
            evt.preventDefault();
            return false;
        }else{
            storegeUser(usuario,contraseña);
            location.reload();

        }
    });

    location.reload();

    document.getElementById("login").style.display='block';
    /*users = JSON.parse(localStorage.getItem("usuario",user))?JSON.parse(localStorage.getItem("contraseña",password)):[]*/
    
}

function logOut(){

    document.getElementById("logOut").style.visibility='hidden';

}

