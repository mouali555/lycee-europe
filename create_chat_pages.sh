#!/bin/bash

# Create chat-baccalaureats.html
cat > chat-baccalaureats.html << 'EOF'
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Les Baccalauréats – Lycée de l'Europe</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
    <style>
        header { display: flex; align-items: center; justify-content: space-between; }
        .header-left { display: flex; align-items: center; gap: 15px; }
        .header-right { display: flex; align-items: center; gap: 10px; }
        .home-link { background: transparent; color: var(--luxury-gold); text-decoration: none; padding: 10px 20px; border: 2px solid var(--luxury-gold); font-size: 14px; font-weight: 600; display: inline-flex; align-items: center; gap: 8px; text-transform: uppercase; letter-spacing: 1px; transition: 0.3s; border-radius: 12px; font-family: 'Lato', sans-serif; }
        .home-link:hover { background: var(--luxury-gradient); color: var(--luxury-black); box-shadow: 0 0 20px rgba(212, 175, 55, 0.5); }
        .info-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 25px; }
        .info-card { background: linear-gradient(135deg, rgba(212, 175, 55, 0.08), rgba(10, 10, 10, 0.6)); padding: 25px; border-radius: 16px; border: 2px solid rgba(212, 175, 55, 0.3); transition: all 0.3s ease; }
        .info-card:hover { transform: translateY(-5px); border-color: var(--luxury-gold); box-shadow: 0 15px 40px rgba(212, 175, 55, 0.3); }
        .info-icon { font-size: 2.5rem; color: var(--luxury-gold); margin-bottom: 15px; }
        .info-title { font-size: 1.3rem; color: var(--luxury-gold); margin-bottom: 12px; font-weight: 700; }
        .info-text { color: var(--text-muted); line-height: 1.6; }
        .cta-button { display: inline-flex; align-items: center; gap: 10px; padding: 12px 25px; background: var(--luxury-gradient); color: var(--luxury-black); text-decoration: none; border-radius: 50px; font-weight: 700; margin-top: 15px; transition: all 0.3s ease; border: 2px solid var(--luxury-gold); }
        .cta-button:hover { transform: scale(1.05); box-shadow: 0 8px 25px rgba(212, 175, 55, 0.5); }
    </style>
</head>
<body>
<header>
    <div class="header-left">
        <div><h1>✨ Lycée de l'Europe ✨</h1><p>🎓 Les Baccalauréats</p></div>
    </div>
    <div class="header-right">
        <a href="index.html" class="home-link"><i class="fas fa-house"></i> Accueil</a>
        <button class="theme-toggle" onclick="toggleTheme()"><i class="fas fa-moon" id="theme-icon"></i></button>
    </div>
</header>
<div class="container">
    <aside>
        <nav class="menu-box">
            <ul>
                <li><a href="chat-lycee.html"><i class="fas fa-landmark"></i> Le Lycée</a></li>
                <li><a href="chat-seconde.html"><i class="fas fa-book-open"></i> La Classe de Seconde</a></li>
                <li><a href="chat-baccalaureats.html" class="active"><i class="fas fa-graduation-cap"></i> Les Baccalauréats</a></li>
                <li><a href="chat-bts.html"><i class="fas fa-briefcase"></i> Les BTS</a></li>
                <li><a href="chat-prepa.html"><i class="fas fa-cogs"></i> La Prépa PTSI/PT</a></li>
                <li><a href="chat-evenements.html"><i class="fas fa-calendar-alt"></i> Événements</a></li>
                <li><a href="chat.html"><i class="fas fa-comments"></i> Chat Public</a></li>
                <li><a href="chatvip.html"><i class="fas fa-lock"></i> Chat VIP</a></li>
                <li><a href="chat-discord.html"><i class="fab fa-discord"></i> PUB DISCORD</a></li>
                <li><a href="joyeux-anniversaire.html"><i class="fas fa-cake-candles"></i> Anniversaire Johann</a></li>
            </ul>
        </nav>
    </aside>
    <main>
        <article class="card">
            <h2><i class="fas fa-graduation-cap"></i> Les Baccalauréats</h2>
            <p>Le Lycée de l'Europe propose une gamme complète de baccalauréats généraux et technologiques pour répondre aux aspirations de chaque élève.</p>
            <div class="info-grid">
                <div class="info-card">
                    <div class="info-icon"><i class="fas fa-atom"></i></div>
                    <div class="info-title">Bac Général</div>
                    <div class="info-text">Spécialités variées : Maths, Physique-Chimie, SVT, SES, HGGSP, Humanités, Langues, etc. Personnalisez votre parcours !</div>
                </div>
                <div class="info-card">
                    <div class="info-icon"><i class="fas fa-microchip"></i></div>
                    <div class="info-title">STI2D</div>
                    <div class="info-text">Sciences et Technologies de l'Industrie et du Développement Durable. Idéal pour les passionnés de technologie et d'innovation.</div>
                </div>
                <div class="info-card">
                    <div class="info-icon"><i class="fas fa-chart-line"></i></div>
                    <div class="info-title">STMG</div>
                    <div class="info-text">Sciences et Technologies du Management et de la Gestion. Pour ceux qui s'intéressent à l'économie et à la gestion.</div>
                </div>
                <div class="info-card">
                    <div class="info-icon"><i class="fas fa-flask"></i></div>
                    <div class="info-title">STL</div>
                    <div class="info-text">Sciences et Technologies de Laboratoire. Formation axée sur les sciences expérimentales et les biotechnologies.</div>
                </div>
                <div class="info-card">
                    <div class="info-icon"><i class="fas fa-award"></i></div>
                    <div class="info-title">Taux de Réussite</div>
                    <div class="info-text">92% de réussite au baccalauréat avec un accompagnement personnalisé tout au long de l'année.</div>
                </div>
                <div class="info-card">
                    <div class="info-icon"><i class="fas fa-university"></i></div>
                    <div class="info-title">Orientation Post-Bac</div>
                    <div class="info-text">Préparation à Parcoursup, journées portes ouvertes et accompagnement vers l'enseignement supérieur.</div>
                </div>
            </div>
            <div class="alert-box" style="margin-top: 25px;"><i class="fas fa-star"></i> Choisissez le bac qui vous correspond et préparez votre avenir avec excellence !</div>
            <div style="text-align: center; margin-top: 25px;"><a href="chat.html" class="cta-button"><i class="fas fa-comments"></i> Rejoindre le Chat</a></div>
        </article>
    </main>
    <aside>
        <div class="menu-box">
            <h3>Accès Rapide</h3>
            <ul>
                <li><a href="https://0590072h.index-education.net/pronote/eleve.html?login=true"><i class="fas fa-user-check"></i> Pronote</a></li>
                <li><a href="https://drive.google.com/file/d/188IWSw_6AFNLvImWNN1cW7tSTpEjjDXx/view?usp=sharing"><i class="fas fa-balance-scale"></i> Règlement</a></li>
                <li><a href="https://www.instagram.com/clubphotodunkerque/?utm_source=qr"><i class="fas fa-camera"></i> Club Photo</a></li>
                <li><a href="en-construction.html"><i class="fas fa-globe-europe"></i> Erasmus +</a></li>
                <li><a href="en-construction.html"><i class="fas fa-tools"></i> Maintenance</a></li>
            </ul>
        </div>
    </aside>
</div>
<footer><p>✨ Site réalisé avec excellence par les BTS CIEL ✨</p></footer>
<script>
    function toggleTheme() { const body = document.body; const themeIcon = document.getElementById('theme-icon'); body.classList.toggle('light-mode'); if (body.classList.contains('light-mode')) { themeIcon.classList.remove('fa-moon'); themeIcon.classList.add('fa-sun'); localStorage.setItem('theme', 'light'); } else { themeIcon.classList.remove('fa-sun'); themeIcon.classList.add('fa-moon'); localStorage.setItem('theme', 'dark'); } }
    window.addEventListener('DOMContentLoaded', () => { const savedTheme = localStorage.getItem('theme'); const themeIcon = document.getElementById('theme-icon'); if (savedTheme === 'light') { document.body.classList.add('light-mode'); themeIcon.classList.remove('fa-moon'); themeIcon.classList.add('fa-sun'); } });
</script>
</body>
</html>
EOF

echo "Created chat-baccalaureats.html"
