/* ==================== SIMULADOR DE PONTOS ==================== */
document.addEventListener('DOMContentLoaded', () => {

  /* Taxas de conversão: pontos por viagem */
  const transportRates = {
    onibus: { pointsPerTrip: 150, name: 'Ônibus', co2Saved: 0.089 },
    metro: { pointsPerTrip: 250, name: 'Metrô/Trem', co2Saved: 0.041 },
    brt: { pointsPerTrip: 180, name: 'BRT/Monotrilho', co2Saved: 0.065 }
  };

  let selectedTransport = 'onibus';

  /* Seleção de tipo de transporte */
  const options = document.querySelectorAll('.transport-option');
  options.forEach(opt => {
    opt.addEventListener('click', () => {
      options.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      selectedTransport = opt.dataset.transport;
      runSimulation();
    });
  });

  /* Input de pontos */
  const pointsInput = document.getElementById('pointsInput');
  if (pointsInput) {
    pointsInput.addEventListener('input', () => {
      /* Remove caracteres não numéricos */
      pointsInput.value = pointsInput.value.replace(/\D/g, '');
      runSimulation();
    });
  }

  /* Botão calcular */
  const calcBtn = document.getElementById('calcBtn');
  if (calcBtn) {
    calcBtn.addEventListener('click', runSimulation);
  }

  function runSimulation() {
    const points = parseInt(pointsInput?.value) || 0;
    if (points <= 0) {
      hideResult();
      return;
    }

    const rate = transportRates[selectedTransport];
    const trips = Math.floor(points / rate.pointsPerTrip);
    const pointsUsed = trips * rate.pointsPerTrip;
    const pointsRemaining = points - pointsUsed;
    const co2 = (trips * rate.co2Saved).toFixed(2);
    const kmEquiv = (trips * 8.5).toFixed(0);
    const valueEquiv = (trips * 4.4).toFixed(2).replace('.', ',');

    showResult(trips, rate, pointsUsed, pointsRemaining, co2, kmEquiv, valueEquiv);
  }

  function showResult(trips, rate, pointsUsed, remaining, co2, km, value) {
    const resultEl = document.getElementById('simulatorResult');
    if (!resultEl) return;

    const tripsEl = document.getElementById('resultTrips');
    const transportNameEl = document.getElementById('resultTransportName');
    const pointsUsedEl = document.getElementById('resultPointsUsed');
    const remainingEl = document.getElementById('resultRemaining');
    const co2El = document.getElementById('resultCO2');
    const kmEl = document.getElementById('resultKm');
    const valueEl = document.getElementById('resultValue');

    if (tripsEl) tripsEl.textContent = trips.toLocaleString('pt-BR');
    if (transportNameEl) transportNameEl.textContent = rate.name;
    if (pointsUsedEl) pointsUsedEl.textContent = pointsUsed.toLocaleString('pt-BR');
    if (remainingEl) remainingEl.textContent = remaining.toLocaleString('pt-BR');
    if (co2El) co2El.textContent = co2.replace('.', ',');
    if (kmEl) kmEl.textContent = parseInt(km).toLocaleString('pt-BR');
    if (valueEl) valueEl.textContent = value;

    resultEl.classList.add('show');

    /* Animação do número de viagens */
    if (tripsEl) animateCounter(tripsEl, trips);
  }

  function hideResult() {
    const resultEl = document.getElementById('simulatorResult');
    if (resultEl) resultEl.classList.remove('show');
  }

  function animateCounter(el, target) {
    let current = 0;
    const duration = 800;
    const steps = 30;
    const increment = target / steps;
    const interval = duration / steps;

    const timer = setInterval(() => {
      current = Math.min(current + increment, target);
      el.textContent = Math.floor(current).toLocaleString('pt-BR');
      if (current >= target) clearInterval(timer);
    }, interval);
  }

  /* ==================== CALCULADORA DE IMPACTO ==================== */
  const impactUsersInput = document.getElementById('impactUsers');
  const impactTripsInput = document.getElementById('impactTripsPerMonth');

  function updateImpact() {
    const users = parseInt(impactUsersInput?.value) || 0;
    const trips = parseInt(impactTripsInput?.value) || 0;
    const totalTrips = users * trips;
    const totalCO2 = (totalTrips * 0.089).toFixed(0);
    const totalKm = (totalTrips * 8.5).toFixed(0);
    const trees = Math.floor(totalCO2 / 21);

    const totalTripsEl = document.getElementById('impactTotalTrips');
    const totalCO2El = document.getElementById('impactTotalCO2');
    const totalKmEl = document.getElementById('impactTotalKm');
    const treesEl = document.getElementById('impactTrees');

    if (totalTripsEl) totalTripsEl.textContent = parseInt(totalKm).toLocaleString('pt-BR');
    if (totalCO2El) totalCO2El.textContent = parseInt(totalCO2).toLocaleString('pt-BR');
    if (totalKmEl) totalKmEl.textContent = totalTrips.toLocaleString('pt-BR');
    if (treesEl) treesEl.textContent = trees.toLocaleString('pt-BR');
  }

  if (impactUsersInput) impactUsersInput.addEventListener('input', updateImpact);
  if (impactTripsInput) impactTripsInput.addEventListener('input', updateImpact);

  /* Inicia com valores padrão */
  updateImpact();

  /* ==================== TABS DOS MODELOS DE INTEGRAÇÃO ==================== */
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;

      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));

      btn.classList.add('active');
      const content = document.getElementById('tab-' + target);
      if (content) content.classList.add('active');
    });
  });
});
