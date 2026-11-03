// ============================================================================
// MALLA CURRICULAR OFICIAL - PLAN 2024-1 (RESOLUCIÓN N°212-2023-CU-UPSJB)
// ============================================================================
const UPSJB_CURRICULUM = {
  "Ciclo I": [
    { name: "Bases Moleculares y Celulares de la Medicina I", credits: 5 },
    { name: "Vida Universitaria y Gestión del Conocimiento", credits: 3 },
    { name: "Lógico-Matemática", credits: 3 },
    { name: "Redacción e Interpretación de Textos", credits: 3 },
    { name: "Historia de la Medicina y Quechua Médico", credits: 2 },
    { name: "Tecnologías de la Información, Comunicación, Conocimiento y Aprendizaje Digital (TICCAD)", credits: 2 }
  ],
  "Ciclo II": [
    { name: "Estructura y Función de los Sistemas del Cuerpo Humano I", credits: 4 },
    { name: "Bases Moleculares y Celulares de la Medicina II", credits: 3 },
    { name: "Comunicación y Medios Digitales", credits: 3 },
    { name: "Realidad Nacional", credits: 3 },
    { name: "Filosofía", credits: 3 },
    { name: "Inglés I", credits: 3 }
  ],
  "Ciclo III": [
    { name: "Estructura y Función de los Sistemas del Cuerpo Humano II", credits: 6 },
    { name: "Bases Moleculares y Celulares de la Medicina III", credits: 5 },
    { name: "Interculturalidad", credits: 3 },
    { name: "Pensamiento Crítico, Creativo y Emprendimiento", credits: 3 },
    { name: "Bioética", credits: 2 },
    { name: "Inglés II", credits: 2 }
  ],
  "Ciclo IV": [
    { name: "Estructura y Funciones de los Sistemas del Cuerpo Humano III", credits: 7 },
    { name: "Microbiología y Parasitología Médica", credits: 5 },
    { name: "Ciudadanía Global y Desarrollo Sostenible", credits: 3 },
    { name: "Inmunología", credits: 2 },
    { name: "Medicina Conductual", credits: 2 }
  ],
  "Ciclo V": [
    { name: "Integradora - Fisiopatología", credits: 6 },
    { name: "Terapéutica y Cuidados Paliativos", credits: 4 },
    { name: "Patología General", credits: 4 },
    { name: "Salud Comunitaria", credits: 3 },
    { name: "Sistematización y Métodos Estadísticos", credits: 2 },
    { name: "Electivo 1", credits: 2 }
  ],
  "Ciclo VI": [
    { name: "Introducción a la Clínica", credits: 9 },
    { name: "Patología Clínica e Imagenología", credits: 5 },
    { name: "Epidemiología", credits: 3 },
    { name: "Metodología de la Investigación", credits: 3 },
    { name: "Simulación I (Procedimientos Invasivos Básicos)", credits: 2 }
  ],
  "Ciclo VII": [
    { name: "Clínica y Terapéutica en Medicina I", credits: 9 },
    { name: "Genética Médica", credits: 3 },
    { name: "Simulación II (Reanimación Cardiopulmonar Básico)", credits: 2 },
    { name: "Redacción y Publicación de Artículos I", credits: 2 },
    { name: "Electivo 2", credits: 2 }
  ],
  "Ciclo VIII": [
    { name: "Clínica y Terapéutica en Medicina II", credits: 9 },
    { name: "Medicina Intercultural", credits: 3 },
    { name: "Ética y Profesionalismo", credits: 3 },
    { name: "Simulación III (Procedimientos Invasivos Avanzados)", credits: 2 },
    { name: "Electivo 3", credits: 2 }
  ],
  "Ciclo IX": [
    { name: "Clínica y Terapéutica en Cirugía I", credits: 9 },
    { name: "Atención del Paciente en Salud Mental", credits: 4 },
    { name: "Gestión Estratégica y Emprendimiento en Servicios de Salud", credits: 4 },
    { name: "Seminario de Ciencias Básicas Aplicadas a la Clínica I", credits: 3 },
    { name: "Redacción y Publicación de Artículos II", credits: 2 }
  ],
  "Ciclo X": [
    { name: "Clínica y Terapéutica en Cirugía II", credits: 9 },
    { name: "Atención del Paciente Oncológico", credits: 4 },
    { name: "Seminario de Ciencias Básicas Aplicadas a la Clínica II", credits: 3 },
    { name: "Medicina Legal", credits: 2 },
    { name: "Taller Guía de Proyecto de Tesis", credits: 2 }
  ],
  "Ciclo XI": [
    { name: "Clínica y Terapéutica en Gineco-Obstetricia", credits: 9 },
    { name: "Externado en Primer Nivel de Atención I", credits: 5 },
    { name: "Atención Integral e Integrada en Salud", credits: 3 },
    { name: "Seminario Integrador I", credits: 2 },
    { name: "Taller Guía de Tesis", credits: 2 }
  ],
  "Ciclo XII": [
    { name: "Clínica y Terapéutica en Pediatría", credits: 9 },
    { name: "Externado en Primer Nivel de Atención II", credits: 5 },
    { name: "Seminario Integrador II", credits: 2 },
    { name: "Electivo 4", credits: 2 }
  ],
  "Ciclo XIII (Internado)": [
    { name: "Primera Rotación de Internado", credits: 10 },
    { name: "Segunda Rotación de Internado", credits: 10 },
    { name: "Seminario Integrador III", credits: 2 }
  ],
  "Ciclo XIV (Internado)": [
    { name: "Tercera Rotación de Internado", credits: 10 },
    { name: "Cuarta Rotación de Internado", credits: 10 },
    { name: "Trabajo de Investigación", credits: 2 }
  ]
};

const EVAL_SPECS = [
  { id: 'pc1', label: 'PC 1', weight: 0.15, isBreakdownAllowed: true },
  { id: 'pc2', label: 'PC 2', weight: 0.15, isBreakdownAllowed: true },
  { id: 'pc3', label: 'PC 3', weight: 0.15, isBreakdownAllowed: true },
  { id: 'pc4', label: 'PC 4', weight: 0.15, isBreakdownAllowed: true },
  { id: 'parcial', label: 'Parcial', weight: 0.20, isBreakdownAllowed: false },
  { id: 'final', label: 'Final', weight: 0.20, isBreakdownAllowed: false }
];

const LOCAL_STORAGE_KEY = 'upsjb_text_parser_v13';

let state = {
  activeCycle: 'Ciclo I',
  cycleData: {}
};

let currentModalContext = {
  courseId: null,
  evalId: null
};

function getMeritRank(average) {
  if (average === null || isNaN(average) || average === 0) return '--';
  if (average >= 17.5) return 'Top Facultad';
  if (average >= 16.5) return 'Décimo Superior';
  if (average >= 15.0) return 'Quinto Superior';
  if (average >= 13.75) return 'Tercio Superior';
  return 'Regular';
}

function roundGrade(val) {
  return Math.round(val);
}

// Redondeo de escala a múltiplos de 0.5 (.0 o .5)
function roundToHalfStep(num) {
  return Math.round(num * 2) / 2;
}

window.validateScale = function(input) {
  if (input.value === '') return;
  let val = parseFloat(input.value);
  if (isNaN(val)) input.value = '';
  else if (val > 20) input.value = 20;
  else if (val < 0) input.value = 0;
};

function loadState() {
  const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (raw) {
    try {
      state = JSON.parse(raw);
    } catch (e) {
      initState();
    }
  } else {
    initState();
  }

  Object.keys(UPSJB_CURRICULUM).forEach(cycleKey => {
    const sortedOfficial = [...UPSJB_CURRICULUM[cycleKey]].sort((a, b) => b.credits - a.credits);

    if (!state.cycleData[cycleKey] || state.cycleData[cycleKey].length !== sortedOfficial.length) {
      state.cycleData[cycleKey] = sortedOfficial.map((c, i) => ({
        id: `${cycleKey.replace(/[^a-zA-Z0-9]/g, '_')}_${i}`,
        name: c.name,
        credits: c.credits,
        grades: { pc1: '', pc2: '', pc3: '', pc4: '', parcial: '', final: '' },
        subgrades: { pc1: null, pc2: null, pc3: null, pc4: null }
      }));
    } else {
      state.cycleData[cycleKey].sort((a, b) => b.credits - a.credits);
    }
  });

  saveState();
}

function initState() {
  state = {
    activeCycle: 'Ciclo I',
    cycleData: {}
  };
}

function saveState() {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
}

function cleanText(text) {
  return text.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// ============================================================================
// PARSER DE TEXTO COPIADO DE INTRANET
// ============================================================================
window.processPastedText = function() {
  const rawInput = document.getElementById('rawPasteInput');
  const text = rawInput.value.trim();

  if (!text) {
    alert('Pega primero el texto copiado de la intranet.');
    return;
  }

  const headerUpper = text.slice(0, 300).toUpperCase();
  let detectedRoman = null;
  if (/\b(III)\b/.test(headerUpper) || headerUpper.includes('MEDICINA III') || headerUpper.includes('HUMANO III')) {
    detectedRoman = 'III';
  } else if (/\b(II)\b/.test(headerUpper) || headerUpper.includes('MEDICINA II') || headerUpper.includes('HUMANO II')) {
    detectedRoman = 'II';
  } else if (/\b(I)\b/.test(headerUpper) || headerUpper.includes('MEDICINA I') || headerUpper.includes('HUMANO I')) {
    detectedRoman = 'I';
  }

  const normInput = cleanText(text.slice(0, 250));
  let bestCourse = null;
  let bestCycle = null;
  let bestScore = -1;

  Object.keys(UPSJB_CURRICULUM).forEach(cycleKey => {
    UPSJB_CURRICULUM[cycleKey].forEach(course => {
      const courseRomanMatch = course.name.trim().match(/\b(I|II|III)$/);
      if (courseRomanMatch && detectedRoman) {
        if (courseRomanMatch[1] !== detectedRoman) return;
      }

      const courseKeywords = cleanText(course.name).split(' ').filter(w => w.length > 2);
      let hits = 0;
      courseKeywords.forEach(kw => {
        if (normInput.includes(kw)) hits++;
      });

      const score = hits / courseKeywords.length;
      if (score > bestScore && score >= 0.4) {
        bestScore = score;
        bestCourse = course;
        bestCycle = cycleKey;
      }
    });
  });

  if (!bestCourse) {
    alert('No se pudo identificar a qué curso corresponde el texto pegado.');
    return;
  }

  const grades = {};

  for (let i = 1; i <= 4; i++) {
    const pcRegex = new RegExp(`(?:PC\\s*${i}|CALIFICADA\\s*${i})[^\\d]*(\\d{1,2}\\.\\d{2})`, 'i');
    const match = text.match(pcRegex);
    if (match && match[1]) {
      const val = parseFloat(match[1]);
      if (!isNaN(val) && val >= 0 && val <= 20) {
        grades[`pc${i}`] = val;
      }
    }
  }

  const epMatch = text.match(/(?:EP|EXAMEN\s*PARCIAL)[^\d]*(\d{1,2}\.\d{2})/i);
  if (epMatch && epMatch[1]) {
    const val = parseFloat(epMatch[1]);
    if (!isNaN(val) && val >= 0 && val <= 20) {
      grades['parcial'] = val;
    }
  }

  const efMatch = text.match(/(?:EF|EXAMEN\s*FINAL)[^\d]*(\d{1,2}\.\d{2})/i);
  if (efMatch && efMatch[1]) {
    const val = parseFloat(efMatch[1]);
    if (!isNaN(val) && val >= 0 && val <= 20) {
      grades['final'] = val;
    }
  }

  state.activeCycle = bestCycle;
  const courses = state.cycleData[bestCycle];
  const targetCourse = courses.find(c => c.name === bestCourse.name);

  if (targetCourse) {
    let filledCount = 0;
    Object.keys(grades).forEach(k => {
      targetCourse.grades[k] = grades[k];
      if (targetCourse.subgrades) targetCourse.subgrades[k] = null;
      filledCount++;
    });

    saveState();
    renderCyclePicker();
    renderCourses();

    rawInput.value = '';

    setTimeout(() => {
      const cardElem = document.querySelector(`[data-course-id="${targetCourse.id}"]`);
      if (cardElem) {
        cardElem.classList.add('flash-success');
        cardElem.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 100);
  }
};

// ============================================================================
// ALGORITMO DE PREDICCIÓN CON VALORES .0 Y .5 PARA OBTENER EXACTAMENTE >= 10.5
// ============================================================================
function calculatePredictions(course) {
  let accumulated = 0;
  let evaluatedWeight = 0;
  let remainingWeight = 0;
  const missing = [];

  EVAL_SPECS.forEach(ev => {
    const val = course.grades[ev.id];
    if (val !== '' && val !== null && !isNaN(val)) {
      accumulated += parseFloat(val) * ev.weight;
      evaluatedWeight += ev.weight;
    } else {
      remainingWeight += ev.weight;
      missing.push(ev);
    }
  });

  const TARGET = 10.5; // Nota mínima aprobatoria
  const pointsNeeded = TARGET - accumulated;
  const projections = {};
  const roundedFinal = roundGrade(accumulated);

  let statusClass = 'st-warn';
  let message = '';

  // 1. Curso cerrado
  if (missing.length === 0) {
    if (roundedFinal >= 11) {
      statusClass = 'st-pass';
      message = 'Curso aprobado';
    } else {
      statusClass = 'st-fail';
      message = 'Curso desaprobado';
    }
    return { accumulated, evaluatedWeight, roundedFinal, statusClass, message, projections };
  }

  // 2. Ya está aprobado con lo que tiene
  if (pointsNeeded <= 0) {
    statusClass = 'st-pass';
    message = 'Aprobado con 00';
    missing.forEach(ev => { projections[ev.id] = 0; });
    return { accumulated, evaluatedWeight, roundedFinal, statusClass, message, projections };
  }

  // 3. Imposible
  if (pointsNeeded > (remainingWeight * 20)) {
    statusClass = 'st-fail';
    message = 'Inalcanzable';
    missing.forEach(ev => { projections[ev.id] = 20; });
    return { accumulated, evaluatedWeight, roundedFinal, statusClass, message, projections };
  }

  // Distribución estratégica de dificultad
  const relativeFactors = {
    pc1: 1.15,
    pc2: 1.05,
    pc3: 0.95,
    pc4: 0.88,
    parcial: 0.95, // Parcial prioritario
    final: 0.82    // Lo mínimo en el Final
  };

  let sumFactor = 0;
  missing.forEach(ev => {
    sumFactor += (relativeFactors[ev.id] || 1.0) * ev.weight;
  });

  const baseScale = pointsNeeded / sumFactor;

  // Paso 1: Generar notas redondeadas estrictamente a pasos de 0.5 (.0 o .5)
  let predictedSum = 0;
  missing.forEach(ev => {
    let rawTarget = baseScale * (relativeFactors[ev.id] || 1.0);
    let discrete = roundToHalfStep(rawTarget);
    discrete = Math.min(20, Math.max(0, discrete));
    projections[ev.id] = discrete;
    predictedSum += discrete * ev.weight;
  });

  // Paso 2: Si la suma de las notas redondeadas queda por debajo de los 10.5,
  // incrementamos de a 0.5 puntos en la evaluación que más convenga
  // (prioridad: Parcial > PC1 > PC2 > PC3 > PC4 > Final)
  const priorityOrder = ['parcial', 'pc1', 'pc2', 'pc3', 'pc4', 'final'];
  let safetyLoop = 0;

  while ((accumulated + predictedSum) < (TARGET - 0.001) && safetyLoop < 40) {
    let incremented = false;
    for (let evalKey of priorityOrder) {
      if (projections[evalKey] !== undefined && projections[evalKey] < 20) {
        const ev = missing.find(m => m.id === evalKey);
        projections[evalKey] = Math.min(20, projections[evalKey] + 0.5);
        predictedSum += 0.5 * ev.weight;
        incremented = true;
        if ((accumulated + predictedSum) >= (TARGET - 0.001)) break;
      }
    }
    safetyLoop++;
    if (!incremented) break;
  }

  // Si quedó con un exceso notable, recortar de a 0.5 del Final primero
  let reduceLoop = 0;
  const reversePriority = ['final', 'pc4', 'pc3', 'pc2', 'pc1', 'parcial'];
  while ((accumulated + predictedSum) >= TARGET + 0.15 && reduceLoop < 20) {
    let reduced = false;
    for (let evalKey of reversePriority) {
      if (projections[evalKey] !== undefined && projections[evalKey] > 0) {
        const ev = missing.find(m => m.id === evalKey);
        if ((accumulated + predictedSum - (0.5 * ev.weight)) >= TARGET) {
          projections[evalKey] -= 0.5;
          predictedSum -= 0.5 * ev.weight;
          reduced = true;
          break;
        }
      }
    }
    reduceLoop++;
    if (!reduced) break;
  }

  const rawReq = pointsNeeded / remainingWeight;
  const discreteReq = roundToHalfStep(rawReq);

  if (rawReq <= 11) {
    statusClass = 'st-pass';
    message = `Promediar ~${discreteReq.toFixed(1)} en lo pendiente`;
  } else if (rawReq <= 15) {
    statusClass = 'st-warn';
    message = `Promediar ~${discreteReq.toFixed(1)} en lo pendiente`;
  } else {
    statusClass = 'st-fail';
    message = `Requiere ~${discreteReq.toFixed(1)} en lo pendiente`;
  }

  return { accumulated, evaluatedWeight, roundedFinal, statusClass, message, projections };
}

function updateMetrics() {
  const currentCourses = state.cycleData[state.activeCycle] || [];

  let curSum = 0;
  let curCreds = 0;

  currentCourses.forEach(c => {
    const analysis = calculatePredictions(c);
    const cr = c.credits;
    if (analysis.evaluatedWeight > 0) {
      const currentAvg = analysis.accumulated / analysis.evaluatedWeight;
      const officialNote = roundGrade(currentAvg);
      curSum += officialNote * cr;
      curCreds += cr;
    }
  });

  const kpiCurAvg = document.getElementById('kpiCurrentAvg');
  const kpiCurMerit = document.getElementById('kpiCurrentMerit');

  if (curCreds > 0) {
    const curAvg = curSum / curCreds;
    kpiCurAvg.textContent = curAvg.toFixed(2);
    kpiCurMerit.textContent = getMeritRank(curAvg);
  } else {
    kpiCurAvg.textContent = '--';
    kpiCurMerit.textContent = '--';
  }

  let totalSum = 0;
  let totalCreds = 0;

  Object.keys(state.cycleData).forEach(cycleKey => {
    const list = state.cycleData[cycleKey];
    list.forEach(c => {
      const analysis = calculatePredictions(c);
      const cr = c.credits;
      if (analysis.evaluatedWeight > 0) {
        const currentAvg = analysis.accumulated / analysis.evaluatedWeight;
        const officialNote = roundGrade(currentAvg);
        totalSum += officialNote * cr;
        totalCreds += cr;
      }
    });
  });

  const kpiHistAvg = document.getElementById('kpiHistAvg');
  const kpiHistMerit = document.getElementById('kpiHistMerit');

  if (totalCreds > 0) {
    const histAvg = totalSum / totalCreds;
    kpiHistAvg.textContent = histAvg.toFixed(2);
    kpiHistMerit.textContent = getMeritRank(histAvg);
  } else {
    kpiHistAvg.textContent = '--';
    kpiHistMerit.textContent = '--';
  }
}

// ==========================================
// RENDERIZADO
// ==========================================
function renderCyclePicker() {
  const select = document.getElementById('cycleSelect');
  select.innerHTML = '';

  Object.keys(UPSJB_CURRICULUM).forEach(cycleKey => {
    const opt = document.createElement('option');
    opt.value = cycleKey;
    opt.textContent = cycleKey;
    if (cycleKey === state.activeCycle) opt.selected = true;
    select.appendChild(opt);
  });
}

function renderCourses() {
  const container = document.getElementById('coursesList');
  container.innerHTML = '';

  const courses = state.cycleData[state.activeCycle] || [];

  courses.forEach(course => {
    const analysis = calculatePredictions(course);
    const card = document.createElement('article');
    card.className = 'course-card';
    card.setAttribute('data-course-id', course.id);

    const evalCells = EVAL_SPECS.map(ev => {
      const val = course.grades[ev.id];
      const hasVal = val !== '' && val !== null;
      const sub = course.subgrades && course.subgrades[ev.id];
      const isCalculated = sub && sub.hasSubgrades;

      let hintText = '';
      let isProjection = false;

      if (!hasVal && analysis.projections[ev.id] !== undefined) {
        hintText = `Meta: ${analysis.projections[ev.id].toFixed(1)}`;
        isProjection = true;
      } else if (hasVal) {
        hintText = isCalculated ? 'Desglosado' : 'Directa';
      }

      const expandBtn = ev.isBreakdownAllowed ? `
        <button 
          type="button" 
          class="btn-plus ${isCalculated ? 'has-sub' : ''}" 
          title="Desglosar en E1, E2, Act1, Act2"
          onclick="openSubgradeModal('${course.id}', '${ev.id}')"
        >+</button>
      ` : `<span></span>`;

      return `
        <div class="eval-cell ${!ev.isBreakdownAllowed ? 'is-exam' : ''}">
          <div class="cell-top">
            <span class="cell-label">${ev.label}</span>
            ${expandBtn}
          </div>
          <span class="cell-weight">${Math.round(ev.weight * 100)}%</span>
          <input 
            type="number" 
            min="0" 
            max="20" 
            step="0.5" 
            placeholder="--"
            value="${hasVal ? val : ''}"
            class="${isCalculated ? 'derived' : ''}"
            oninput="validateScale(this)"
            onchange="handleDirectGradeChange('${course.id}', '${ev.id}', this.value)"
          >
          <span class="cell-hint ${isProjection ? 'projected' : ''}">${hintText}</span>
        </div>
      `;
    }).join('');

    const currentOfficialRound = analysis.evaluatedWeight > 0 ? roundGrade(analysis.accumulated / analysis.evaluatedWeight) : '--';

    card.innerHTML = `
      <div class="course-head">
        <h2>${course.name}</h2>
        <span class="cr-tag ${course.credits >= 5 ? 'heavy' : ''}">${course.credits} cr.</span>
      </div>

      <div class="eval-strip">
        ${evalCells}
      </div>

      <div class="course-foot">
        <div class="score-stats">
          <div class="stat-unit">
            <span class="stat-tag">Puntos</span>
            <span class="stat-num">${analysis.accumulated.toFixed(2)}</span>
          </div>
          <div class="stat-unit">
            <span class="stat-tag">Promedio</span>
            <span class="stat-num">
              ${analysis.evaluatedWeight > 0 ? (analysis.accumulated / analysis.evaluatedWeight).toFixed(2) : '--'}
              <span class="round-pill">${currentOfficialRound}</span>
            </span>
          </div>
        </div>
        <div class="prediction-indicator ${analysis.statusClass}">
          ${analysis.message}
        </div>
      </div>
    `;

    container.appendChild(card);
  });

  updateMetrics();
}

window.openSubgradeModal = function(courseId, evalId) {
  currentModalContext = { courseId, evalId };
  const courses = state.cycleData[state.activeCycle] || [];
  const course = courses.find(c => c.id === courseId);
  const evalSpec = EVAL_SPECS.find(e => e.id === evalId);

  document.getElementById('modalCourseTitle').textContent = `${course.name} (${course.credits} cr.)`;
  document.getElementById('modalEvalTitle').textContent = `${evalSpec.label} (${Math.round(evalSpec.weight * 100)}%)`;

  const sub = (course.subgrades && course.subgrades[evalId]) || { e1: '', e2: '', a1: '', a2: '' };

  document.getElementById('subE1').value = sub.e1 ?? '';
  document.getElementById('subE2').value = sub.e2 ?? '';
  document.getElementById('subA1').value = sub.a1 ?? '';
  document.getElementById('subA2').value = sub.a2 ?? '';

  updateModalAverageDisplay();
  document.getElementById('subgradeModal').classList.add('is-open');
};

window.closeSubgradeModal = function() {
  document.getElementById('subgradeModal').classList.remove('is-open');
};

function getModalSubgradeValues() {
  const e1 = document.getElementById('subE1').value.trim();
  const e2 = document.getElementById('subE2').value.trim();
  const a1 = document.getElementById('subA1').value.trim();
  const a2 = document.getElementById('subA2').value.trim();

  const activeValues = [];
  [e1, e2, a1, a2].forEach(v => {
    if (v !== '' && !isNaN(parseFloat(v))) {
      activeValues.push(Math.min(20, Math.max(0, parseFloat(v))));
    }
  });

  return { e1, e2, a1, a2, activeValues };
}

function updateModalAverageDisplay() {
  const { activeValues } = getModalSubgradeValues();
  const display = document.getElementById('modalCalculatedAvg');

  if (activeValues.length === 0) {
    display.textContent = '--';
  } else {
    const sum = activeValues.reduce((a, b) => a + b, 0);
    display.textContent = (sum / activeValues.length).toFixed(2);
  }
}

['subE1', 'subE2', 'subA1', 'subA2'].forEach(id => {
  document.getElementById(id).addEventListener('input', updateModalAverageDisplay);
});

window.saveSubgrades = function() {
  const { courseId, evalId } = currentModalContext;
  const courses = state.cycleData[state.activeCycle] || [];
  const course = courses.find(c => c.id === courseId);
  if (!course) return;

  const { e1, e2, a1, a2, activeValues } = getModalSubgradeValues();
  if (!course.subgrades) course.subgrades = {};

  if (activeValues.length > 0) {
    const calculatedAvg = activeValues.reduce((a, b) => a + b, 0) / activeValues.length;
    const finalVal = Math.min(20, Math.round(calculatedAvg * 100) / 100);

    course.subgrades[evalId] = { e1, e2, a1, a2, hasSubgrades: true };
    course.grades[evalId] = finalVal;
  } else {
    course.subgrades[evalId] = null;
  }

  saveState();
  closeSubgradeModal();
  renderCourses();
};

window.clearSubgrades = function() {
  const { courseId, evalId } = currentModalContext;
  const courses = state.cycleData[state.activeCycle] || [];
  const course = courses.find(c => c.id === courseId);
  if (!course) return;

  if (course.subgrades) {
    course.subgrades[evalId] = null;
  }
  course.grades[evalId] = '';

  saveState();
  closeSubgradeModal();
  renderCourses();
};

window.handleDirectGradeChange = function(courseId, evalId, value) {
  const courses = state.cycleData[state.activeCycle] || [];
  const course = courses.find(c => c.id === courseId);
  if (!course) return;

  if (value.trim() === '') {
    course.grades[evalId] = '';
    if (course.subgrades) course.subgrades[evalId] = null;
  } else {
    let num = parseFloat(value);
    if (isNaN(num)) num = '';
    else num = Math.min(20, Math.max(0, num));
    course.grades[evalId] = num;
    if (course.subgrades) course.subgrades[evalId] = null;
  }

  saveState();
  renderCourses();
};

document.getElementById('cycleSelect').addEventListener('change', (e) => {
  state.activeCycle = e.target.value;
  saveState();
  renderCourses();
});

document.addEventListener('DOMContentLoaded', () => {
  loadState();
  renderCyclePicker();
  renderCourses();
});
