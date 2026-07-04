const navToggle=document.querySelector('.nav-toggle');
const mainNav=document.querySelector('.main-nav');
navToggle?.addEventListener('click',()=>mainNav.classList.toggle('open'));
const reveals=document.querySelectorAll('.reveal');
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')})},{threshold:.12});
reveals.forEach(el=>obs.observe(el));

// Product page gallery and pack selector
const thumbs = document.querySelectorAll('.thumb');
const mainProductImage = document.getElementById('mainProductImage');
thumbs.forEach((thumb) => {
  thumb.addEventListener('click', () => {
    thumbs.forEach((t) => t.classList.remove('active'));
    thumb.classList.add('active');
    if (mainProductImage) mainProductImage.src = thumb.dataset.img;
  });
});

const packCards = document.querySelectorAll('.pack-size-card');
const selectedPackText = document.getElementById('selectedPackText');
const packText = {
  '100g': 'Selected: 100 gm Trial Pack',
  '250g': 'Selected: 250 gm Small Family Pack',
  '500g': 'Selected: 500 gm Regular Family Pack',
  '1kg': 'Selected: 1 kg Wholesale / Cafe Pack'
};
packCards.forEach((card) => {
  card.addEventListener('click', () => {
    packCards.forEach((c) => c.classList.remove('active'));
    card.classList.add('active');
    if (selectedPackText) selectedPackText.textContent = packText[card.dataset.size] || 'Selected Pack';
  });
});


// Brand video controls
const brandVideo = document.getElementById('brandVideo');
const videoPlayBtn = document.getElementById('videoPlayBtn');
const videoSoundBtn = document.getElementById('videoSoundBtn');

function updatePlayButton() {
  if (!brandVideo || !videoPlayBtn) return;
  const icon = videoPlayBtn.querySelector('.control-icon');
  const text = videoPlayBtn.querySelector('.control-text');
  if (brandVideo.paused) {
    if (icon) icon.textContent = '▶';
    if (text) text.textContent = 'Play';
    videoPlayBtn.setAttribute('aria-label', 'Play video');
  } else {
    if (icon) icon.textContent = '⏸';
    if (text) text.textContent = 'Pause';
    videoPlayBtn.setAttribute('aria-label', 'Pause video');
  }
}

videoPlayBtn?.addEventListener('click', async () => {
  if (!brandVideo) return;
  if (brandVideo.paused) {
    try { await brandVideo.play(); } catch (error) {}
  } else {
    brandVideo.pause();
  }
  updatePlayButton();
});

brandVideo?.addEventListener('play', updatePlayButton);
brandVideo?.addEventListener('pause', updatePlayButton);

videoSoundBtn?.addEventListener('click', async () => {
  if (!brandVideo) return;
  brandVideo.muted = !brandVideo.muted;
  brandVideo.volume = brandVideo.muted ? 0 : 1;
  try { await brandVideo.play(); } catch (error) {}
  const icon = videoSoundBtn.querySelector('.sound-icon');
  const text = videoSoundBtn.querySelector('.sound-text');
  if (brandVideo.muted) {
    if (icon) icon.textContent = '🔇';
    if (text) text.textContent = 'Sound Off';
    videoSoundBtn.setAttribute('aria-label', 'Turn video sound on');
  } else {
    if (icon) icon.textContent = '🔊';
    if (text) text.textContent = 'Sound On';
    videoSoundBtn.setAttribute('aria-label', 'Turn video sound off');
  }
});

updatePlayButton();

// Franchise WhatsApp inquiry form
function sendFranchiseWhatsApp(event){
  event.preventDefault();
  const name=document.getElementById('frName')?.value.trim()||'';
  const mobile=document.getElementById('frMobile')?.value.trim()||'';
  const city=document.getElementById('frCity')?.value.trim()||'';
  const type=document.getElementById('frType')?.value||'';
  const message=document.getElementById('frMessage')?.value.trim()||'';
  const text=`Hello, I want franchise/dealership details for Swad Amrutam Chai.%0A%0AName: ${encodeURIComponent(name)}%0AMobile: ${encodeURIComponent(mobile)}%0ACity/Area: ${encodeURIComponent(city)}%0ABusiness Type: ${encodeURIComponent(type)}%0AMessage: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/917041605005?text=${text}`,'_blank');
}

// Contact WhatsApp inquiry form
function sendContactWhatsApp(event){
  event.preventDefault();
  const name=document.getElementById('ctName')?.value.trim()||'';
  const mobile=document.getElementById('ctMobile')?.value.trim()||'';
  const city=document.getElementById('ctCity')?.value.trim()||'';
  const type=document.getElementById('ctType')?.value||'';
  const message=document.getElementById('ctMessage')?.value.trim()||'';
  const text=`Hello Swad Amrutam Chai,%0AI want to contact you.%0A%0AName: ${encodeURIComponent(name)}%0AMobile: ${encodeURIComponent(mobile)}%0ACity/Area: ${encodeURIComponent(city)}%0AInquiry Type: ${encodeURIComponent(type)}%0AMessage: ${encodeURIComponent(message)}`;
  window.open(`https://wa.me/917041605005?text=${text}`,'_blank');
}
