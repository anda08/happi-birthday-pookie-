const blowSound = document.getElementById('blowSound');

function blowCandle() {
  const candle = document.querySelector('.flame');
  const blowSound = document.getElementById('blowSound');

  if (!candle.classList.contains('blown')) {
    candle.classList.add('blown'); // ปิดไฟเทียน
    blowSound.play();

    // รอเสียงเล่นจบหรือรอเวลาสัก 2 วิ แล้วเปลี่ยนหน้า
    setTimeout(() => {
      window.location.href = indexedDB.html; // เปลี่ยนเป็นหน้าที่ต้องการไปต่อ
    }, 2000); // 2 วินาที
  }
}

// เอฟเฟกต์หัวใจลอยเวลาคลิก
document.addEventListener('click', function (e) {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.style.left = e.clientX + 'px';
  heart.style.top = e.clientY + 'px';
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1500);
});