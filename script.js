const reservas = [];
const formulario = document.getElementById('formulario');
const lista = document.getElementById('listaReservas');

formulario.addEventListener('submit', function (e) {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;

  const reserva = { id: Date.now(), nombre, fecha, hora };
  reservas.push(reserva);
  actualizarLista();
  formulario.reset();
});

function actualizarLista() {
  lista.innerHTML = '';
  reservas.forEach(reserva => {
    const div = document.createElement('div');
    div.className = 'tarjeta';
    div.innerHTML = `
      <span>
        <strong>${reserva.nombre}</strong><br>
        Fecha: ${reserva.fecha}<br>
        Hora: ${reserva.hora}
      </span>
      <button class="eliminar">Eliminar</button>
    `;

    div.querySelector('.eliminar').onclick = () => {
      const index = reservas.findIndex(r => r.id === reserva.id);
      if (index !== -1) reservas.splice(index, 1);
      actualizarLista();
    };

    lista.appendChild(div);
  });
}
