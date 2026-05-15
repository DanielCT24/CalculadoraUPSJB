// Validación para no exceder 20
function validar20(input) {
    if (parseFloat(input.value) > 20) input.value = 20;
    if (parseFloat(input.value) < 0) input.value = 0;
    // Si el usuario escribe manualmente, quitamos la marca de "predicho"
    input.classList.remove('is-predicted');
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
}

function toggleSub(btn) {
    const panel = btn.closest('.card').querySelector('.sub-panel');
    const isOpening = panel.style.display === "none";
    
    // Opcional: Cerrar otros paneles abiertos antes de abrir este
    document.querySelectorAll('.sub-panel').forEach(p => p.style.display = "none");
    document.querySelectorAll('.btn-plus').forEach(b => b.innerText = "+");

    panel.style.display = isOpening ? "block" : "none";
    btn.innerText = isOpening ? "-" : "+";
}

// NUEVA FUNCIÓN: Cerrar al hacer clic afuera
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
    
    // Al actualizar por desglose, el valor principal no es predicho
    main.classList.remove('is-predicted');
    calcular();
}

function predecirNotas() {
    const inputs = document.querySelectorAll('.nota');
    let sumaFija = 0;
    let pesoFaltanteTotal = 0;
    let camposParaRellenar = [];

    inputs.forEach(input => {
        let peso = parseFloat(input.dataset.peso);
        // Ahora consideramos "Fijo" lo que tenga valor Y NO tenga la clase 'is-predicted'
        if (input.value !== "" && !input.classList.contains('is-predicted')) {
            sumaFija += parseFloat(input.value) * peso;
        } else {
            camposParaRellenar.push({ input, peso });
            pesoFaltanteTotal += peso;
            // Limpiamos el valor viejo para re-calcular
            input.value = "";
            input.classList.add('is-predicted'); // Marcamos como campo que el sistema va a llenar
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
    });
    document.querySelectorAll('.sub-panel').forEach(p => p.style.display = "none");
    document.querySelectorAll('.btn-plus').forEach(b => b.innerText = "+");
    calcular();
}