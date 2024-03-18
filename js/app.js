function actualizarReloj() {
  const ahora = new Date();

  const hora = ahora.getHours();
  const minutos = ahora.getMinutes();
  const segundos = ahora.getSeconds();
  const dia = ahora.getDate();
  const mes = ahora.getMonth() + 1;
  const año = ahora.getFullYear();

  let periodo = "AM";
  if (hora >= 12) {
    periodo = "PM";
  }

  let hora12 = hora;
  if (hora > 12) {
    hora12 = hora - 12;
  }
  if (hora === 0) {
    hora12 = 12;
  }

  const minutosFormateados = minutos < 10 ? "0" + minutos : minutos;
  const segundosFormateados = segundos < 10 ? "0" + segundos : segundos;

  const textoReloj = `${hora12}:${minutosFormateados}:${segundosFormateados} ${periodo} - ${dia}/${mes}/${año}`;

  document.getElementById("reloj").textContent = textoReloj;
}

setInterval(actualizarReloj, 1000);

actualizarReloj();
