const formulario = document.querySelector("#select-account");
const select = document.querySelector("select");
const body = document.querySelector("body");
const wrapper = document.querySelector("#wrapper");
const actions = document.querySelector("#actions");

let selected = [];

const cuentas = [
  { id: 10, nombre: "Mali", saldo: "200.00", pin: "0000" },
  { id: 24, nombre: "Gera", saldo: "290.00", pin: "1234" },
  { id: 11, nombre: "Maui", saldo: "67.00", pin: "5678" },
];

const validatePIN = (id, pin) => {
  selected = cuentas.filter((cuenta) => {
    return cuenta.id === parseInt(id);
  });
  if (selected[0].pin === pin) {
    //alert("Bienvenido");
    wrapper.innerHTML = ""
    renderMenu(selected[0].nombre);
  } else {
    alert("Intenta nuevamente");
  }
};

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  let user_id = event.target["cuenta"].value;

  let pin = prompt("Ingrese su pin", "");
  if (pin != null) {
    validatePIN(user_id, pin);
  }
  // console.log(event.target[0].value)
});

cuentas.forEach((cuenta) => {
  let option = document.createElement("option");
  option.value = cuenta.id;
  option.innerText = cuenta.nombre;
  select.appendChild(option);
});


const renderMenu = (nombre) => {
  let menu = `
    <div>
      <h1>Bienvenido ${nombre}</h1>
      <div class="row">
        <div class="col">
          <a class="btn btn-success" href="#" role="button" onClick="consultar()">Consultar</a>
        </div>
        <div class="col">
          <a class="btn btn-warning" href="#" role="button" onClick="depositar()">Depositar</a>
        </div>
        <div class="col">
          <a class="btn btn-info" href="#" role="button" onClick="retirar()">Retirar</a>
        </div>
        <div class="col">
          <a class="btn btn-danger" href="#" role="button" onClick="salir()">Salir</a>
        </div>
      </div>
    </div>`;

  wrapper.innerHTML = menu;
};

const consultar = () => {
  actions.innerHTML = ""
  actions.innerHTML = `<p>Su saldo es $${selected[0].saldo}</p>`
};

const depositar = () => {
  let amount = prompt("Ingresa el monto a depositar", "");
  let balance = parseFloat(selected[0].saldo) + parseFloat(amount)

  if(balance < "10" || balance > "990" ){
    alert("No puedes tener en tu cuenta menos de $10.00 y o más de $990.00, intenta nuevamente")
  } 
  else {
  selected[0].saldo = balance.toFixed(2)
  actions.innerHTML = `Tu nuevo saldo es $${selected[0].saldo}`
  }
};

const retirar = () => {
  let amount = prompt("Ingresa el monto a retirar", "");
  let balance = parseFloat(selected[0].saldo) - parseFloat(amount)

  if(balance < "10" || balance > "990" ){
    alert("No puedes tener en tu cuenta menos de $10.00 y o más de $990.00, intenta nuevamente")
  } 
  else {
    selected[0].saldo = balance.toFixed(2)
    actions.innerHTML = `Tu nuevo saldo es $${selected[0].saldo}`
  }
};

const salir = () => {
  location.reload();
}


// [] <- Array
// {} <- Object