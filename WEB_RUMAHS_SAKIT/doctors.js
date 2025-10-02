const scrollContainer = document.getElementById("doctorScroll");
const items = document.querySelectorAll(".medicine-item");
const itemWidth = items[0].offsetWidth + 20; // ukuran 1 card (width + margin)
let index = 0;

function slideNext() {
  index++;
  scrollContainer.style.transform = `translateX(${-index * itemWidth}px)`;

  // kalau sudah sampai akhir → reset ke awal
  if (index >= items.length) {
    setTimeout(() => {
      scrollContainer.style.transition = "none"; // matikan animasi sementara
      scrollContainer.style.transform = "translateX(0)";
      index = 0;
      // pakai timeout biar animasi nyala lagi
      setTimeout(() => {
        scrollContainer.style.transition = "transform 0.6s ease";
      }, 50);
    }, 600);
  }
}

// jalan otomatis tiap 2 detik
setInterval(slideNext, 1500);
