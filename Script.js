const fullscreenBtn = document.getElementById('fullscreen-btn');

// Tam ekran modu aç
fullscreenBtn.addEventListener('click', () => {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.webkitRequestFullscreen) { // Safari
    document.documentElement.webkitRequestFullscreen();
  } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
    document.documentElement.msRequestFullscreen();
  }

  // Düğmeyi gizle ve siteyi başlat
  fullscreenBtn.style.display = 'none';
  startSite();
});

function startSite() {
  // Epilepsi efekti (siyah ve beyaz arasında geçiş)
  let counter = 0;
  const interval = setInterval(() => {
    document.body.style.backgroundColor = counter % 2 === 0 ? 'black' : 'white';
    counter++;
    if (counter === 10) { // 5 saniye sonra
      clearInterval(interval);
      document.body.style.backgroundColor = 'green'; // Yeşil ekran
      document.getElementById('cyberteam').style.display = 'block'; // "Cyber Team'a Hoş Geldiniz" göster
      setTimeout(() => {
        document.getElementById('cyberteam').style.display = 'none'; // 2 saniye sonra yazıyı kaldır
        setTimeout(() => {
          document.getElementById('loading').style.display = 'block'; // "System loading..." göster
          setTimeout(() => {
            window.location.href = 'https://guns.lol/close1'; // 3 saniye sonra yönlendir
          }, 3000);
        }, 500);
      }, 2000);
    }
  }, 500); // 0.5 saniye aralıklarla siyah-beyaz geçiş
}
