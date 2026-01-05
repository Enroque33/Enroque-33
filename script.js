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
