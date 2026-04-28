// app.js — Logique globale du site Lycée Europe
// Gère : garde d'authentification, déconnexion, navigation active, toast notifications

import { auth } from './firebase-config.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

// ─────────────────────────────────────
// Utilitaire : Toast notification
// ─────────────────────────────────────
export function showToast(message, type = 'info') {
    const existing = document.getElementById('app-toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.textContent = message;
    Object.assign(toast.style, {
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        padding: '10px 16px',
        borderRadius: '6px',
        fontSize: '13px',
        fontWeight: '500',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        color: '#fff',
        background: type === 'error' ? '#b62324' : type === 'success' ? '#1a7f37' : '#1f6feb',
        border: `1px solid ${type === 'error' ? '#ff7b72' : type === 'success' ? '#3fb950' : '#388bfd'}`,
        boxShadow: '0 8px 24px rgba(1,4,9,0.8)',
        zIndex: '9999',
        opacity: '0',
        transform: 'translateY(8px)',
        transition: 'opacity 200ms ease, transform 200ms ease',
        maxWidth: '320px',
        lineHeight: '1.4',
    });
    document.body.appendChild(toast);
    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    });
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(8px)';
        setTimeout(() => toast.remove(), 200);
    }, 4000);
}

// ─────────────────────────────────────
// Garde d'authentification globale
// Pour les pages protégées : inclut ce script avec data-protected
// ─────────────────────────────────────
const isProtectedPage = document.currentScript?.dataset?.protected === 'true'
    || ['hub.html', 'chat.html', 'profil.html', 'ressources.html', 'tp.html', 'agenda.html']
        .some(p => window.location.pathname.endsWith(p));

onAuthStateChanged(auth, (user) => {
    // Mettre à jour l'affichage email et avatar partout
    const emailEl  = document.getElementById('userEmailDisplay');
    const avatarEl = document.getElementById('avatarDisplay');
    const logoutBtn = document.getElementById('logoutBtn');

    if (user) {
        if (emailEl)  emailEl.textContent  = user.email;
        if (avatarEl) avatarEl.textContent = user.email.charAt(0).toUpperCase();

        if (logoutBtn) {
            logoutBtn.style.display = '';
            // Éviter les doublons d'listeners
            if (!logoutBtn.dataset.bound) {
                logoutBtn.dataset.bound = 'true';
                logoutBtn.addEventListener('click', async () => {
                    logoutBtn.disabled = true;
                    logoutBtn.textContent = '…';
                    try {
                        await signOut(auth);
                        window.location.assign('index.html');
                    } catch (e) {
                        showToast('Erreur lors de la déconnexion.', 'error');
                        logoutBtn.disabled = false;
                        logoutBtn.textContent = 'Déconnexion';
                    }
                });
            }
        }
    } else {
        // Non connecté
        if (logoutBtn) logoutBtn.style.display = 'none';
        if (isProtectedPage) {
            window.location.replace('index.html');
        }
    }
});

// ─────────────────────────────────────
// Nav active link highlighting
// ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href && href !== '#' && currentPage.includes(href.split('.')[0])) {
            link.classList.add('active');
        } else if (link.classList.contains('active') && href !== currentPage) {
            // Keep manually set active classes only on the actual current page
        }
    });
});
