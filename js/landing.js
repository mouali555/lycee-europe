// js/landing.js — small interactions for landing

function qs(sel){ return document.querySelector(sel); }

const keyModal = qs('#keyModal');
const keyTemplate = qs('#keyTemplate');

function openModal(){
  if (!keyModal) return;
  keyModal.setAttribute('aria-hidden', 'false');
}

function closeModal(){
  if (!keyModal) return;
  keyModal.setAttribute('aria-hidden', 'true');
}

function buildTemplate(){
  const d = new Date();
  const stamp = d.toISOString().slice(0,10);
  return [
    'Salut,',
    '',
    "Je veux rejoindre LYCÉE EUROPE.",
    "Tu peux me donner une clé / un code d'invitation ?",
    '',
    `Date: ${stamp}`,
    'Pseudo: (ton pseudo)',
    'Motif: (projet / curiosité / mission)',
    '',
    'Merci 🔑'
  ].join('\n');
}

function bindOpen(btnId){
  const btn = qs(btnId);
  if (!btn) return;
  btn.addEventListener('click', () => {
    if (keyTemplate) keyTemplate.value = buildTemplate();
    openModal();
  });
}

bindOpen('#requestKeyBtn');
bindOpen('#requestKeyBtn2');
bindOpen('#requestKeyBtn3');

qs('#closeModal')?.addEventListener('click', closeModal);
keyModal?.addEventListener('click', (e) => {
  if (e.target === keyModal) closeModal();
});

qs('#copyTemplate')?.addEventListener('click', async () => {
  try{
    await navigator.clipboard.writeText(keyTemplate?.value || '');
  }catch{
    // fallback
    keyTemplate?.select();
    document.execCommand('copy');
  }
});

// Smooth scroll (safe)
document.querySelectorAll('a.lpLink[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (!id || id.length < 2) return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
