function showMoreGames() {
  const moreGames = document.getElementById('more-games');
  const viewAllButton = document.querySelector('.view-all');
  const viewLessButton = document.querySelector('.view-less');

  if (moreGames && viewAllButton && viewLessButton) {
    moreGames.classList.add('show');
    viewAllButton.style.display = 'none';
    viewLessButton.style.display = 'block';
  }
}

function showLessGames() {
  const moreGames = document.getElementById('more-games');
  const viewAllButton = document.querySelector('.view-all');
  const viewLessButton = document.querySelector('.view-less');

  if (moreGames && viewAllButton && viewLessButton) {
    moreGames.classList.remove('show');
    viewAllButton.style.display = 'block';
    viewLessButton.style.display = 'none';


    document.querySelector('.games').scrollIntoView({ behavior: 'smooth' });
  }
}
