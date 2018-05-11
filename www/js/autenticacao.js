var email = document.getElementById("email");
var password = document.getElementById("password");
var cadastrar = document.getElementById("cadastrar");
var msgUsario = document.getElementById("msgUsuario");
var loggin= document.getElementById("loggin");
var logout= document.getElementById("logout");

cadastrar.addEventListener("click", function () {
	firebase.auth().createUserWithEmailAndPassword(email.value, password.value).
	then(function(){
		msgUsuario.innerText = "Cadastrado com sucesso, " + email.value;
		email.value = "";
		password.value = "";
		
	}).catch(function(error){
		console.log(error.code);
		console.log(error.message);
		alert("Falha ao cadastra , verifique o erro no console");
	})
});

loggin.addEventListener("click", function () {	
	firebase.auth().signInWithEmailAndPassword(email.value, password.value).
		then(function(){

			firebase.auth().onAuthStateChanged(function(user){
	if(user){
		window.location.href="logado.html";
	}else{

	}
})
			
	
		})
		.catch(function(error) {
  		// Handle Errors here.
  		var errorCode = error.code;
  		var errorMessage = error.message;
  		msgUsuario.innerText = errorCode;
  	// ...
	});
});

logout.addEventListener("click", function () {
	firebase.auth().signOut().then(function() {
  // Sign-out successful.
  msgUsuario.innerText = "Você não esta logado";
}).catch(function(error) {
  // An error happened.
  console.log(error.code);
		console.log(error.message);
		alert("Falha ao cadastra , verifique o erro no console");
	});
});


