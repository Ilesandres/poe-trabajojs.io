function guardar(){
    let nombre=document.getElementById("nombre").value;
    let email=document.getElementById("email").value;
    let edad=document.getElementById("edad").value;
    let celular=document.getElementById("cel").value;
    let contraseña=document.getElementById("contraseña").value;
    if(nombre!=="" && email!== "" && edad!=="" && celular!=="" && contraseña!==""){
        if (validarContraseña(contraseña)) {
            alert("Creando cuenta");
          } else {
            alert("La contraseña debe contener al menos un número, una mayúscula y un carácter especial.");
          }
        
    }else{
        alert("complete los campos")
    }
}

function validarContraseña(contraseña) {
    const regex = /^(?=.*\d)(?=.*[A-Z])(?=.*[!@#$%^&*])/;
    return regex.test(contraseña);
  }