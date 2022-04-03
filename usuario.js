const { Console } = require("./console");

const console = new Console();

class usuario{
    
    constructor( nick, contra){
        this.nick = nick;
        this.contra = contra;
    }

    SolicitarIndex(){
        return window.open("file:///D:/Mike%20Uni/3%20Curso/TDW/TDW/index.html");
    }

    login(){
        function iniciarSesion(nick, contra){
            if(typeof(Storage) !== "undefined"){
                localStorage.setItem(nick, contra);
            }else{
                console.writeln("LocalStoage no soportado en este navegador");
            }
        }
    }

    
}