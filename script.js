function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function revealGift() {
  document.getElementById('gift-reveal').classList.remove('hidden');
}
