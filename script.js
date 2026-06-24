// Carga inicial al abrir la página
window.onload = function() {
    const isSaveEnabled = localStorage.getItem('autoSaveEnabled') === 'true';
    const toggle = document.getElementById('autoSaveToggle');
    if (toggle) toggle.checked = isSaveEnabled;
    
    if (isSaveEnabled) {
        cargarNotas();
    }
};

// --- FUNCIONES DE GUARDADO ---

function toggleSave() {
    const isChecked = document.getElementById('autoSaveToggle').checked;
    localStorage.setItem('autoSaveEnabled', isChecked);
    if (isChecked) {
        guardarNotas();
    } else {
        localStorage.removeItem('notasGuardadas');
    }
}

function guardarNotas() {
    const notas = {};
    // Guardamos tanto notas principales como sub-notas
    document.querySelectorAll('input[type="number"]').forEach((input, index) => {
        notas[index] = {
            value: input.value,
            isPredicted: input.classList.contains('is-predicted')
        };
    });
    localStorage.setItem('notasGuardadas', JSON.stringify(notas));
}

function cargarNotas() {
    const data = JSON.parse(localStorage.getItem('notasGuardadas'));
    if (data) {
        document.querySelectorAll('input[type="number"]').forEach((input, index) => {
            if (data[index]) {
                input.value = data[index].value;
                if (data[index].isPredicted) {
                    input.classList.add('is-predicted');
                    input.style.color = "#ef4444"; // Mantiene el color rojo al cargar si era predicha
                }
            }
        });
        calcular();
    }
}

// --- TUS FUNCIONES ORIGINALES (INTEGRADAS) ---

function validar20(input) {
    if (parseFloat(input.value) > 20) input.value = 20;
    if (parseFloat(input.value) < 0) input.value = 0;
    input.classList.remove('is-predicted');
    input.style.color = ""; // Limpia el color rojo si el usuario modifica la nota manualmente
    
    // Auto-guardado si está activo
    if (localStorage.getItem('autoSaveEnabled') === 'true') guardarNotas();
}

function calcular() {
    const inputs = document.querySelectorAll('.nota');
    const promedioTexto = document.getElementById('promedioTexto');
    const mensaje = document.getElementById('mensaje');
    
    let total = 0;
    let hayDatos = false;

    inputs.forEach(input => {
        if (input.value !== "") {
            hayDatos = true;
            total += parseFloat(input.value) * parseFloat(input.dataset.peso);
        }
    });

    if (!hayDatos) {
        promedioTexto.innerText = "0.00";
        mensaje.innerText = "Esperando notas...";
        return;
    }

    let final = Math.round(total * 100) / 100;
    promedioTexto.innerText = final.toFixed(2);

    if (final >= 10.495) {
        promedioTexto.parentElement.style.color = "#10b981";
        mensaje.innerText = "¡APROBADO!";
    } else {
        promedioTexto.parentElement.style.color = "#ef4444";
        mensaje.innerText = "Nota insuficiente";
    }

    // Auto-guardado si está activo
    if (localStorage.getItem('autoSaveEnabled') === 'true') guardarNotas();
}

function toggleSub(btn) {
    const panel = btn.closest('.card').querySelector('.sub-panel');
    const isOpening = panel.style.display === "none";
    
    document.querySelectorAll('.sub-panel').forEach(p => p.style.display = "none");
    document.querySelectorAll('.btn-plus').forEach(b => b.innerText = "+");

    panel.style.display = isOpening ? "block" : "none";
    btn.innerText = isOpening ? "-" : "+";
}

document.addEventListener('click', function(event) {
    const cards = document.querySelectorAll('.card');
    let clicInsideCard = false;

    cards.forEach(card => {
        if (card.contains(event.target)) clicInsideCard = true;
    });

    if (!clicInsideCard) {
        document.querySelectorAll('.sub-panel').forEach(p => p.style.display = "none");
        document.querySelectorAll('.btn-plus').forEach(b => b.innerText = "+");
    }
});

function actualizarPC(sub) {
    const card = sub.closest('.card');
    const subs = card.querySelectorAll('.sub-input');
    const main = card.querySelector('.main-input');
    let s = 0, c = 0;
    subs.forEach(i => { if(i.value !== "") { s += parseFloat(i.value); c++; }});
    main.value = c > 0 ? (s/c).toFixed(2) : "";
    
    main.classList.remove('is-predicted');
    main.style.color = ""; // Limpia el color rojo si se calcula a través de sub-notas
    calcular();
}

function predecirNotas() {
    const inputs = document.querySelectorAll('.nota');
    let sumaFija = 0;
    let pesoFaltanteTotal = 0;
    let camposParaRellenar = [];

    inputs.forEach(input => {
        let peso = parseFloat(input.dataset.peso);
        if (input.value !== "" && !input.classList.contains('is-predicted')) {
            sumaFija += parseFloat(input.value) * peso;
        } else {
            camposParaRellenar.push({ input, peso });
            pesoFaltanteTotal += peso;
            input.value = "";
            input.classList.add('is-predicted');
            input.style.color = "#ef4444"; // Pinta el texto de la nota predicha en ROJO
        }
    });

    if (camposVaciosLogica(camposParaRellenar)) return;

    let notaBase = (10.5 - sumaFija) / pesoFaltanteTotal;

    camposParaRellenar.forEach(item => {
        let n = notaBase;
        if (item.input.id === 'notaFinal') n -= 2.0;
        else if (item.peso === 0.2) n -= 1.0;
        else n += 1.0;

        item.input.value = Math.max(0, Math.min(20, Math.ceil(n * 2) / 2)).toFixed(1);
    });

    let p = obtenerP();
    let intentos = 0;
    
    while ((p < 10.495 || p > 10.54) && intentos < 50) {
        camposParaRellenar.sort((a, b) => parseFloat(a.input.value) - parseFloat(b.input.value));
        if (p < 10.495) {
            let val = parseFloat(camposParaRellenar[0].input.value);
            if (val < 20) camposParaRellenar[0].input.value = (val + 0.5).toFixed(1);
        } else if (p > 10.54) {
            let last = camposParaRellenar.length - 1;
            let val = parseFloat(camposParaRellenar[last].input.value);
            if (val > 0) camposParaRellenar[last].input.value = (val - 0.5).toFixed(1);
        }
        p = obtenerP();
        intentos++;
    }
    calcular();
}

function camposVaciosLogica(campos) { return campos.length === 0; }

function obtenerP() {
    let t = 0;
    document.querySelectorAll('.nota').forEach(i => {
        let val = parseFloat(i.value) || 0;
        let peso = parseFloat(i.dataset.peso);
        t += val * peso;
    });
    return Math.round(t * 100) / 100;
}

function limpiarDatos() {
    document.querySelectorAll('input').forEach(i => {
        i.value = "";
        i.classList.remove('is-predicted');
        i.style.color = ""; // Limpia por completo el color rojo de todos los campos
    });
    document.querySelectorAll('.sub-panel').forEach(p => p.style.display = "none");
    document.querySelectorAll('.btn-plus').forEach(b => b.innerText = "+");
    
    // Limpiar storage si existe
    localStorage.removeItem('notasGuardadas');
    calcular();
}
