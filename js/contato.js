/* ==================== VALIDAÇÃO DO FORMULÁRIO ==================== */
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  if (!form) return;

  /* Helpers de validação */
  function showError(fieldId, msg) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(fieldId + 'Error');
    if (field) field.classList.add('error');
    if (field) field.classList.remove('success');
    if (errorEl) { errorEl.textContent = msg; errorEl.classList.add('show'); }
  }

  function showSuccess(fieldId) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(fieldId + 'Error');
    if (field) field.classList.remove('error');
    if (field) field.classList.add('success');
    if (errorEl) errorEl.classList.remove('show');
  }

  function clearField(fieldId) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById(fieldId + 'Error');
    if (field) { field.classList.remove('error', 'success'); }
    if (errorEl) errorEl.classList.remove('show');
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validateField(id) {
    const field = document.getElementById(id);
    if (!field) return true;
    const val = field.value.trim();

    if (id === 'nome') {
      if (!val) { showError(id, 'O nome é obrigatório.'); return false; }
      if (val.length < 3) { showError(id, 'O nome deve ter pelo menos 3 caracteres.'); return false; }
      showSuccess(id); return true;
    }

    if (id === 'email') {
      if (!val) { showError(id, 'O e-mail é obrigatório.'); return false; }
      if (!isValidEmail(val)) { showError(id, 'Insira um e-mail válido (ex: nome@email.com).'); return false; }
      showSuccess(id); return true;
    }

    if (id === 'assunto') {
      if (!val) { showError(id, 'Selecione um assunto.'); return false; }
      showSuccess(id); return true;
    }

    if (id === 'mensagem') {
      if (!val) { showError(id, 'A mensagem é obrigatória.'); return false; }
      if (val.length < 20) { showError(id, 'A mensagem deve ter pelo menos 20 caracteres.'); return false; }
      showSuccess(id); return true;
    }

    return true;
  }

  /* Validação em tempo real (blur) */
  ['nome', 'email', 'assunto', 'mensagem'].forEach(id => {
    const field = document.getElementById(id);
    if (!field) return;
    field.addEventListener('blur', () => validateField(id));
    field.addEventListener('input', () => {
      if (field.classList.contains('error')) validateField(id);
    });
  });

  /* Submit */
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const fields = ['nome', 'email', 'assunto', 'mensagem'];
    const results = fields.map(id => validateField(id));
    const allValid = results.every(r => r === true);

    if (!allValid) {
      /* Foca o primeiro campo com erro */
      const firstError = form.querySelector('.form-control.error');
      if (firstError) firstError.focus();
      return;
    }

    /* Simula envio */
    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';

    setTimeout(() => {
      form.style.display = 'none';
      const successMsg = document.getElementById('formSuccess');
      if (successMsg) successMsg.classList.add('show');
    }, 1200);
  });

  /* Contador de caracteres da mensagem */
  const mensagemField = document.getElementById('mensagem');
  const charCount = document.getElementById('charCount');
  if (mensagemField && charCount) {
    mensagemField.addEventListener('input', () => {
      charCount.textContent = mensagemField.value.length;
    });
  }
});
