document.getElementById('heroForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Pegando os valores do formulário
  const heroName = document.getElementById('heroName').value;
  const heroXP = parseInt(document.getElementById('heroXP').value);
  let heroLevel = '';

  // Classificação do nível do herói baseado no XP
  if (heroXP < 1000) {
      heroLevel = 'Ferro';
  } else if (heroXP <= 2000) {
      heroLevel = 'Bronze';
  } else if (heroXP <= 5000) {
      heroLevel = 'Prata';
  } else if (heroXP <= 7000) {
      heroLevel = 'Ouro';
  } else if (heroXP <= 8000) {
      heroLevel = 'Platina';
  } else if (heroXP <= 9000) {
      heroLevel = 'Ascendente';
  } else if (heroXP <= 10000) {
      heroLevel = 'Imortal';
  } else {
      heroLevel = 'Radiante';
  }

  // Exibindo a mensagem final
  document.getElementById('result').innerText = `O Herói de nome ${heroName} está no nível de ${heroLevel}`;
});
