document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionButton = item.querySelector('.faq-question');
    const answerContainer = item.querySelector('.faq-answer');
    
    questionButton.addEventListener('click', () => {
      const isExpanded = questionButton.getAttribute('aria-expanded') === 'true';
      
      // Close all other open FAQ items (accordion behavior)
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          const otherButton = otherItem.querySelector('.faq-question');
          const otherAnswer = otherItem.querySelector('.faq-answer');
          otherButton.setAttribute('aria-expanded', 'false');
          otherAnswer.style.maxHeight = null;
          otherItem.classList.remove('active');
        }
      });

      // Toggle current FAQ item
      if (isExpanded) {
        questionButton.setAttribute('aria-expanded', 'false');
        answerContainer.style.maxHeight = null;
        item.classList.remove('active');
      } else {
        questionButton.setAttribute('aria-expanded', 'true');
        // Calculate dynamic height for transition effect
        answerContainer.style.maxHeight = answerContainer.scrollHeight + 'px';
        item.classList.add('active');
      }
    });
  });
});
