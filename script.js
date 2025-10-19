function scrollGallery(direction) {
    const gallery = document.getElementById('gallery');
    const scrollAmount = 320; // geser sekitar lebar 1 gambar
    gallery.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
}
function updateCountdown() {
  const eventDate = new Date("2025-11-02T12:00:00"); // Tanggal acara
  const now = new Date();
  const diff = eventDate - now;

  if (diff <= 0) return;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = hours;
  document.getElementById('minutes').textContent = minutes;
  document.getElementById('seconds').textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();
