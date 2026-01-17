/* Landing page interactions */

function qs(sel){ return document.querySelector(sel); }

const keyModal = qs('#keyModal');
const keyTemplate = qs('#keyTemplate');

function openModal(){
  if (!keyModal) return;
  keyModal.setAttribute('aria-hidden', 'false');
  // Basic focus management
  qs('#copyTemplate')?.focus();
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
    "Je veux rejoindre l'espace privé Lycée Europe • IA.",
    "Tu peux me donner une clé ou un code d'invitation ?",
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

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
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

// Smooth scroll for in-page anchors
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  const href = a.getAttribute('href') || '';
  if (href.length < 2) return;
  a.addEventListener('click', (e) => {
    const t = document.querySelector(href);
    if (!t) return;
    e.preventDefault();
    t.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
