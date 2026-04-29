/* ==================== FAQ ACCORDION ==================== */
document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      /* Fecha todos os itens */
      faqItems.forEach(other => {
        other.classList.remove('open');
        const otherAnswer = other.querySelector('.faq-answer');
        if (otherAnswer) otherAnswer.style.maxHeight = null;
      });

      /* Abre o item clicado (se estava fechado) */
      if (!isOpen) {
        item.classList.add('open');
        const answer = item.querySelector('.faq-answer');
        if (answer) {
          answer.style.maxHeight = answer.scrollHeight + 'px';
        }
      }
    });
  });

  /* ==================== BUSCA NO FAQ ==================== */
  const searchInput = document.getElementById('faqSearch');
  if (!searchInput) return;

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase().trim();

    faqItems.forEach(item => {
      const questionText = item.querySelector('.faq-question').textContent.toLowerCase();
      const answerText = item.querySelector('.faq-answer-inner').textContent.toLowerCase();
      const matches = questionText.includes(query) || answerText.includes(query);

      item.style.display = matches ? '' : 'none';
    });

    /* Mensagem de nenhum resultado */
    const noResults = document.getElementById('faqNoResults');
    if (noResults) {
      const anyVisible = Array.from(faqItems).some(i => i.style.display !== 'none');
      noResults.style.display = anyVisible ? 'none' : 'block';
    }
  });
});
