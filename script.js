const contenedor = document.getElementById("productos");
const listaCarrito = document.getElementById("lista-carrito");
const totalTexto = document.getElementById("total");

let carrito = [];

productos.forEach(p => {
  const div = document.createElement("div");
  div.innerHTML = `
    <h3>${p.nombre}</h3>
    <p>$${p.precio}</p>
    <button onclick="agregar(${p.id})">Agregar</button>
  `;
  contenedor.appendChild(div);
});

function agregar(id) {
  const producto = productos.find(p => p.id === id);
  carrito.push(producto);
  renderCarrito();
}

function renderCarrito() {
  listaCarrito.innerHTML = "";
  let total = 0;

  carrito.forEach(p => {
    total += p.precio;
    const li = document.createElement("li");
    li.textContent = `${p.nombre} - $${p.precio}`;
    listaCarrito.appendChild(li);
  });

  totalTexto.textContent = "Total: $" + total;
}

function comprar() {
  if (carrito.length === 0) {
    alert("El carrito está vacío");
    return;
  }

  let mensaje = "Hola, quiero comprar:%0A";
  let total = 0;

  carrito.forEach(p => {
    mensaje += `- ${p.nombre} ($${p.precio})%0A`;
    total += p.precio;
  });

  mensaje += `%0ATotal: $${total}`;

  const telefono = "598098981013"; // CAMBIÁ ESTO POR TU NÚMERO
  const url = `https://wa.me/${telefono}?text=${mensaje}`;

  window.open(url, "_blank");
}
