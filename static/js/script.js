// ============================================
// MI PORTAFOLIO - INTERACTIVIDAD Y ANIMACIONES
// ============================================

// ========== CONTADOR DE VISITAS ==========
let visitas = localStorage.getItem('visitas') || 0;
visitas++;
localStorage.setItem('visitas', visitas);
console.log(`📊 Visitas a mi portafolio: ${visitas}`);

// Mostrar visitas en consola (modo desarrollo)
console.log(`🚀 Portafolio de Gato-01 cargado correctamente`);

// ========== FUNCIONES GLOBALES ==========

// Función para mostrar mensaje de bienvenida
function mostrarMensaje() {
    alert("🎉 ¡Bienvenido a mi portafolio! Este mensaje es desde JavaScript puro");
    
    // Crear un mensaje flotante
    const mensaje = document.createElement('div');
    mensaje.textContent = '✅ JavaScript funcionando correctamente';
    mensaje.className = 'mensaje-exito';
    mensaje.style.position = 'fixed';
    mensaje.style.top = '20px';
    mensaje.style.right = '20px';
    mensaje.style.zIndex = '1000';
    
    document.body.appendChild(mensaje);
    
    // Eliminar después de 3 segundos
    setTimeout(() => {
        mensaje.remove();
    }, 3000);
}

// Función para mostrar el loader animado
function mostrarLoader() {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.classList.remove('oculto');
        
        // Simular una carga (como si consultara datos)
        setTimeout(() => {
            loader.classList.add('oculto');
            mostrarNotificacion('✅ Carga completada con éxito');
        }, 2000);
    }
}

// Función para mostrar notificaciones personalizadas
function mostrarNotificacion(mensaje, tipo = 'exito') {
    const notificacion = document.createElement('div');
    notificacion.textContent = mensaje;
    notificacion.className = `mensaje-${tipo}`;
    notificacion.style.position = 'fixed';
    notificacion.style.bottom = '20px';
    notificacion.style.right = '20px';
    notificacion.style.backgroundColor = tipo === 'exito' ? '#4CAF50' : '#f44336';
    notificacion.style.color = 'white';
    notificacion.style.padding = '12px';
    notificacion.style.borderRadius = '5px';
    notificacion.style.zIndex = '1000';
    notificacion.style.animation = 'fadeIn 0.3s';
    
    document.body.appendChild(notificacion);
    
    setTimeout(() => {
        notificacion.style.animation = 'fadeOut 0.3s';
        setTimeout(() => notificacion.remove(), 300);
    }, 3000);
}

// Función para cambiar el color de fondo temporalmente
function cambiarColorTemporal() {
    const body = document.body;
    body.style.transition = 'background 0.5s';
    
    // Cambiar a un color aleatorio
    const colores = ['#667eea', '#764ba2', '#f093fb', '#4facfe'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    body.style.background = `linear-gradient(135deg, ${colorAleatorio} 0%, #764ba2 100%)`;
    
    mostrarNotificacion(`🎨 Color cambiado a: ${colorAleatorio}`);
    
    // Restaurar después de 3 segundos
    setTimeout(() => {
        body.style.background = '';
    }, 3000);
}

// ========== EVENTOS AL CARGAR LA PÁGINA ==========
document.addEventListener('DOMContentLoaded', function() {
    console.log('📄 DOM completamente cargado');
    
    // Agregar evento a todas las tarjetas de proyectos
    const tarjetas = document.querySelectorAll('.proyecto-card');
    tarjetas.forEach((tarjeta, index) => {
        tarjeta.addEventListener('click', () => {
            const proyecto = tarjeta.querySelector('h3').textContent;
            mostrarNotificacion(`📂 Abriendo ${proyecto} (demo)`);
        });
        
        // Efecto de seguimiento del mouse
        tarjeta.addEventListener('mousemove', (e) => {
            const rect = tarjeta.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            tarjeta.style.transform = `translateY(-10px) scale(1.05) rotateX(${(y - 100) / 50}deg) rotateY(${(x - 125) / 50}deg)`;
        });
        
        tarjeta.addEventListener('mouseleave', () => {
            tarjeta.style.transform = '';
        });
    });
    
    // Efecto de escritura automática en el título (opcional)
    // escribirTitulo();
});

// ========== FUNCIÓN DE EFECTO MÁQUINA DE ESCRIBIR ==========
function escribirTitulo() {
    const tituloElement = document.querySelector('header h1');
    if (!tituloElement) return;
    
    const textoOriginal = tituloElement.textContent;
    tituloElement.textContent = '';
    
    let i = 0;
    const intervalo = setInterval(() => {
        if (i < textoOriginal.length) {
            tituloElement.textContent += textoOriginal.charAt(i);
            i++;
        } else {
            clearInterval(intervalo);
        }
    }, 100);
}

// ========== MANEJO DE ERRORES ==========
window.addEventListener('error', function(e) {
    console.error('❌ Error detectado:', e.error);
    mostrarNotificacion('⚠️ Se ha producido un error, pero el portafolio sigue funcionando', 'error');
});

// ========== EXPORTAR FUNCIONES PARA USAR EN HTML ==========
// Las funciones están disponibles globalmente para los botones
window.mostrarMensaje = mostrarMensaje;
window.mostrarLoader = mostrarLoader;
window.cambiarColorTemporal = cambiarColorTemporal;