  // Precios diferenciados por producto, presentación y tipo
  const precios = {
    "Chocolate": {
      "250g": { "Molido": 16, "Grano": 15 },
      "500g": { "Molido": 26, "Grano": 25 },
      "1kg":   { "Molido": 50, "Grano": 49 }
    },
    "Café": {
      "250g": { "Molido": 13, "Grano": 12 },
      "500g": { "Molido": 21, "Grano": 20 },
      "1kg":   { "Molido": 39, "Grano": 38 }
    }
  };

  // WhatsApp por producto (puedes personalizar)
  const numerosWhatsApp = {
    "Chocolate": "+51922449439",
    "Café": "+51922449439"
  };

  function actualizarPrecio() {
    const producto = document.getElementById("producto").value;
    const presentacion = document.getElementById("presentacion").value;
    const tipo = document.getElementById("tipo").value;
    const cantidad = parseInt(document.getElementById("cantidad").value);

    let total = 0;

    if (producto && presentacion && tipo && cantidad > 0) {
      const precioUnitario = precios[producto][presentacion][tipo];
      total = precioUnitario * cantidad;
    }

    document.getElementById("precio-total").textContent = `Total: S/ ${total.toFixed(2)}`;
  }

  function enviarPorWhatsApp(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const producto = document.getElementById("producto").value;
    const presentacion = document.getElementById("presentacion").value;
    const tipo = document.getElementById("tipo").value;
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const mensajeAdicional = document.getElementById("mensaje").value;

    if (!producto || !presentacion || !tipo || !cantidad || cantidad < 1) {
      alert("Por favor, completa todos los campos correctamente.");
      return;
    }

    const precioUnitario = precios[producto][presentacion][tipo];
    const total = precioUnitario * cantidad;
    const numeroWhatsApp = numerosWhatsApp[producto];

    const mensaje = `Hola, quiero hacer un pedido:%0A
*Nombre:* ${nombre}%0A
*Teléfono:* ${telefono}%0A
*Producto:* ${producto}%0A
*Presentación:* ${presentacion}%0A
*Tipo:* ${tipo}%0A
*Cantidad:* ${cantidad}%0A
*Total:* S/ ${total.toFixed(2)}%0A
*Comentarios:* ${mensajeAdicional}`;

    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensaje}`, "_blank");
  }