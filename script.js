let currentGame = 0;
const totalGames = 10;

document.getElementById('infoButton').addEventListener('click', function() {
    alert('Si tu parviens à gagner tous les mini-jeux, tu remporteras un cadeau spécial !');
});

document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('gamesContainer').style.display = 'block';
    document.querySelector('header').style.display = 'none';
    showGame(0);  // Commencer avec le premier jeu
});

document.getElementById('hiddenHeartButton').addEventListener('click', function() {
    showModal('https://via.placeholder.com/800x600?text=Surprise', 'Félicitations ! Tu as trouvé le cœur caché.');
});

document.getElementById('nextGameButton').addEventListener('click', function() {
    if (currentGame + 1 < totalGames) {
        showGame(currentGame + 1);
    } else {
        alert('Félicitations ! Tu as terminé tous les mini-jeux !');
    }
});

function showGame(gameNumber) {
    document.querySelectorAll('.game').forEach((game, index) => {
        game.style.display = index === gameNumber ? 'block' : 'none';
    });
    document.getElementById('progressSection').style.display = 'block';
   
