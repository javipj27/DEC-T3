let sum = (num1,num2) => num1+num2;

let stringLength = str => {
    return`The length of ` + str + ` is `+ str.length;
}

let stringLength2 = str => {
    let length=str.length; 
    return "The length of " + str + " is " + length;
}

let alerta = nombre => {
    let aleatorio = Math.floor(Math.random() * alerts.length);
    alert(alerts[aleatorio] + `, ${nombre}!`);
  };
