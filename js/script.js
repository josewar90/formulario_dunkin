document.addEventListener('DOMContentLoaded', () => {
    const calcularPromedioButton = document.getElementById('calcular-promedio');
    const resultado = document.getElementById('resultado');
    const mensaje = document.getElementById('mensaje');

    const correoElectronico = document.getElementById('correo').value;

    calcularPromedioButton.addEventListener('click', () => {
        // Calificaciones de conectividad
        const calificacionesConectividad = [
            parseInt(document.getElementById('conectividad-uber').value),
            parseInt(document.getElementById('conectividad-pedidosya').value),
            parseInt(document.getElementById('conectividad-justo').value),
            parseInt(document.getElementById('conectividad-rappi').value)
        ];

        // Calificaciones de menú
        const calificacionesMenu = [
            parseInt(document.getElementById('menu-uber').value),
            parseInt(document.getElementById('menu-pedidosya').value),
            parseInt(document.getElementById('menu-justo').value),
            parseInt(document.getElementById('menu-rappi').value)
        ];

        // Calificaciones de reclamos
        const calificacionesReclamos = [
            parseInt(document.getElementById('reclamos-uber').value),
            parseInt(document.getElementById('reclamos-pedidosya').value),
            parseInt(document.getElementById('reclamos-justo').value),
            parseInt(document.getElementById('reclamos-rappi').value)
        ];

        // Calificaciones de cancelados
        const calificacionesCancelados = [
            parseInt(document.getElementById('cancelados-uber').value),
            parseInt(document.getElementById('cancelados-pedidosya').value),
            parseInt(document.getElementById('cancelados-justo').value),
            parseInt(document.getElementById('cancelados-rappi').value)
        ];

        // Calcular promedios de conectividad, menú, reclamos y cancelados
        const promedioConectividad = calcularPromedio(calificacionesConectividad);
        const promedioMenu = calcularPromedio(calificacionesMenu);
        const promedioReclamos = calcularPromedio(calificacionesReclamos);
        const promedioCancelados = calcularPromedio(calificacionesCancelados);

        // Calcular promedio general en porcentaje (%)
        const promedioGeneralPorcentaje = (promedioConectividad + promedioMenu + promedioReclamos + promedioCancelados) / 4 * 20; // 5 puntos corresponden al 100%

        // Mostrar los resultados en el elemento "resultado"
        resultado.innerHTML = `
            Promedio de Conectividad: ${promedioConectividad.toFixed(2)}<br>
            Promedio de Menú: ${promedioMenu.toFixed(2)}<br>
            Promedio de Reclamos: ${promedioReclamos.toFixed(2)}<br>
            Promedio de Cancelados: ${promedioCancelados.toFixed(2)}<br>
            Promedio General: ${promedioGeneralPorcentaje.toFixed(2)}%
        `;

        // Asignar una clase al elemento "mensaje" según el promedio general
        if (promedioGeneralPorcentaje >= 90) {
            mensaje.innerHTML = '¡Felicitaciones! El promedio es alto. Sigue así.';
            mensaje.classList.remove('alerta-rojo');
            mensaje.classList.add('alerta-verde'); // Cambiar a verde para promedios >= 70%
        } else if (promedioGeneralPorcentaje < 89) {
            mensaje.innerHTML = 'Alerta: El promedio es bajo. Debes mejorar.';
            mensaje.classList.remove('alerta-verde');
            mensaje.classList.add('alerta-rojo'); // Cambiar a rojo para promedios < 50%
        } else {
            mensaje.innerHTML = ''; // Limpiar el mensaje si no cumple las condiciones
            mensaje.classList.remove('alerta-verde', 'alerta-rojo'); // Quitar ambas clases
        }
    });
});

function calcularPromedio(calificaciones) {
    if (calificaciones.length === 0) return 0;
    const totalCalificaciones = calificaciones.reduce((sum, calificacion) => sum + calificacion, 0);
    return totalCalificaciones / calificaciones.length;
}
