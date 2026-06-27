document.addEventListener('DOMContentLoaded', () => {
  const progressBar = document.getElementById('scroll-progress');
  if (!progressBar) return;

  let ticking = false;

  const updateProgressBar = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    const totalScrollable = documentHeight - windowHeight;
    const scrollPercentage = totalScrollable > 0 ? (scrollTop / totalScrollable) * 100 : 0;
    
    progressBar.style.width = `${scrollPercentage}%`;
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateProgressBar);
      ticking = true;
    }
  });
});
