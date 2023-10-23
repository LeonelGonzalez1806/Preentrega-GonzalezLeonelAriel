// const formulario = document.getElementById("formulario-turnos");
// const listaTurnos = document.getElementById("lista-turnos");

// formulario.addEventListener("submit", function (evento) {
//     evento.preventDefault();

//     const nombre = document.getElementById("nombre").value;
//     const apellido = document.getElementById("apellido").value;
//     const email = document.getElementById("email").value;
//     const telefono = document.getElementById("telefono").value;
//     const profesional = document.getElementById("profesional").value;
//     const fecha = document.getElementById("fecha").value;
//     const hora = document.getElementById("hora").value;

//     const turno = {
//         nombre,
//         apellido,
//         email,
//         telefono,
//         profesional,
//         fecha,
//         hora,
//     };

//     // Obtener los turnos almacenados en el almacenamiento local
//     let turnosGuardados = JSON.parse(localStorage.getItem("turnos"));

//     // Verificar si los turnos guardados no existen o son nulos
//     if (!turnosGuardados) {
//         turnosGuardados = [];
//     }

//     // Guardar el nuevo turno
//     turnosGuardados.push(turno);

//     // Almacenar en el almacenamiento local
//     localStorage.setItem("turnos", JSON.stringify(turnosGuardados));

//     // Mostrar el turno en la lista
//     const elementoTurno = document.createElement("li");
//     elementoTurno.innerHTML = `<strong>Nombre:</strong> ${turno.nombre} - <strong>Apellido:</strong> ${turno.apellido} - <strong>Email:</strong> ${turno.email} - <strong>Teléfono:</strong> ${turno.telefono} - <strong>Profesional:</strong> ${turno.profesional} - <strong>Fecha:</strong> ${turno.fecha} - <strong>Hora:</strong> ${turno.hora}`;
//     listaTurnos.appendChild(elementoTurno);

//     // Limpiar el formulario
//     formulario.reset();
// });

// // Cargar los turnos guardados en el almacenamiento local al cargar la página
// const turnosGuardados = JSON.parse(localStorage.getItem("turnos"));

// // Verificar si los turnos guardados no existen o son nulos
// if (turnosGuardados) {
//     turnosGuardados.forEach(function (turno) {
//         const elementoTurno = document.createElement("li");
//         elementoTurno.innerHTML = `<strong>Nombre:</strong> ${turno.nombre} - <strong>Apellido:</strong> ${turno.apellido} - <strong>Email:</strong> ${turno.email} - <strong>Teléfono:</strong> ${turno.telefono} - <strong>Profesional:</strong> ${turno.profesional} - <strong>Fecha:</strong> ${turno.fecha} - <strong>Hora:</strong> ${turno.hora}`;
//         listaTurnos.appendChild(elementoTurno);
//     });
// }





const formulario = document.getElementById("formulario-turnos");
const listaTurnos = document.getElementById("lista-turnos");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const email = document.getElementById("email").value;
    const telefono = document.getElementById("telefono").value;
    const profesional = document.getElementById("profesional").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;

    const turno = {
        nombre,
        apellido,
        email,
        telefono,
        profesional,
        fecha,
        hora,
    };
    
  // Obtener los turnos almacenados en el almacenamiento local
  let turnosGuardados = JSON.parse(localStorage.getItem("turnos"));

  // Verificar si los turnos guardados no existen o son nulos
  if (!turnosGuardados) {
      turnosGuardados = [];
  }

  // Guardar el nuevo turno
  turnosGuardados.push(turno);

  // Almacenar en el almacenamiento local
  localStorage.setItem("turnos", JSON.stringify(turnosGuardados));

  // Mostrar el turno en la lista
  const elementoTurno = document.createElement("li");
  elementoTurno.innerHTML = `<strong>Nombre:</strong> ${turno.nombre} - <strong>Apellido:</strong> ${turno.apellido} - <strong>Email:</strong> ${turno.email} - <strong>Teléfono:</strong> ${turno.telefono} - <strong>Profesional:</strong> ${turno.profesional} - <strong>Fecha:</strong> ${turno.fecha} - <strong>Hora:</strong> ${turno.hora}`;
  listaTurnos.appendChild(elementoTurno);

  // Limpiar el formulario
  formulario.reset();
});

// Cargar los turnos guardados en el almacenamiento local al cargar la página
const turnosGuardados = JSON.parse(localStorage.getItem("turnos"));

// Verificar si los turnos guardados no existen o son nulos
if (turnosGuardados) {
  turnosGuardados.forEach(function (turno) {
      const elementoTurno = document.createElement("li");
      elementoTurno.innerHTML = `<strong>Nombre:</strong> ${turno.nombre} - <strong>Apellido:</strong> ${turno.apellido} - <strong>Email:</strong> ${turno.email} - <strong>Teléfono:</strong> ${turno.telefono} - <strong>Profesional:</strong> ${turno.profesional} - <strong>Fecha:</strong> ${turno.fecha} - <strong>Hora:</strong> ${turno.hora}`;
      listaTurnos.appendChild(elementoTurno);
  });
}
    // Simular una operación asíncrona (por ejemplo, una solicitud HTTP) usando una promesa
    const enviarTurno = () => {
        return new Promise((resolve, reject) => {
            // Simular un retraso de 2 segundos (puedes cambiar esto)
            setTimeout(() => {
                // Supongamos que la solicitud fue exitosa
                const exito = true;

                if (exito) {
                    resolve();
                } else {
                    reject(new Error("No se pudo agendar el turno. Por favor, inténtelo de nuevo."));
                }
                // Si la solicitud falla, puedes llamar a reject con un error
            }, 2000); // 2 segundos de retraso simulado
        });
    };

    // Llamar a la función enviarTurno y manejar el resultado
    enviarTurno()
        .then(() => {
            // La solicitud se completó con éxito
            // Mostrar notificación de éxito con Toastify
            Toastify({
                text: "Turno agendado con éxito",
                duration: 3000, // Duración en milisegundos (3 segundos)
                close: true, // Agregar botón de cierre
                gravity: "top", // Posición de la notificación (top o bottom)
                position: "right", // Posición en la dirección especificada
            }).showToast();


        })
        .catch((error) => {
            // Manejar errores, por ejemplo, mostrar una notificación de error
            Toastify({
                text: error.message, // Mensaje de error de la promesa reject
                duration: 3000,
                close: true,
                gravity: "top",
                position: "right",
                backgroundColor: "red",
            }).showToast();
        });
// Cargar el archivo JSON de manera asíncrona
fetch("turnos.json")
    .then((response) => {
        if (!response.ok) {
            throw new Error("No se pudo cargar el archivo JSON.");
        }
        return response.json();
    })
    .then((data) => {
        // Manejar los datos del archivo JSON (en este caso, agregarlos a la lista de turnos)
        const listaTurnos = document.getElementById("lista-turnos");

        data.forEach((turno) => {
            const elementoTurno = document.createElement("li");
            elementoTurno.innerHTML = `<strong>Nombre:</strong> ${turno.nombre} - <strong>Apellido:</strong> ${turno.apellido} - <strong>Email:</strong> ${turno.email} - <strong>Teléfono:</strong> ${turno.telefono} - <strong>Profesional:</strong> ${turno.profesional} - <strong>Fecha:</strong> ${turno.fecha} - <strong>Hora:</strong> ${turno.hora}`;
            listaTurnos.appendChild(elementoTurno);
        });
    })
    .catch((error) => {
        // Manejar errores, por ejemplo, mostrar una notificación de error
        Toastify({
            text: error.message,
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            backgroundColor: "red",
        }).showToast();
    });






