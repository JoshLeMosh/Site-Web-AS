// ééééééééééééééééééééééquipes
const teamsData = {
    hommes: [
        { name: "Équipe G1", joueurs: "Elouan,Elie,Joshua,Clement,Julian", coach: "Mme Mussou" },
        { name: "Équipe G2", joueurs: "Quentin N,Florian,Hugo,Charles,Quentin M", coach: "Mme Mussou" },
        { name: "Équipe G3", joueurs: "Evan,Priam,Enis,Antoine,Clement F", coach: "Mme Mussou" },
        { name: "Équipe G4", joueurs: "Raphael,Kylian,Steven,Yussuf Quentin M", coach: "Mme Mussou" }
    ],
    femmes: [
        { name: "Équipe F1", joueuses: "Elea,Anna,Justine,Nehhira,Elena,Ambre", coach: "Mme Mussou" },
        { name: "Équipe F2", joueuses: "Oceanne,Lilou,Molika,Mathilde,Tara", coach: "Mme Mussou" },
        { name: "Équipe F3", joueuses: "Agathe,Anais,Emilie,Soumeya,Elise,Rose", coach: "Mme Mussou" },
        
    ]
};

// cooooooooooooompétitions
const competitionsData = [
    {
        id: 1,
        date: "10 Décembre 2025",
        title: "Tournoi à Torcy",
        description: "...",
        images: ["https://images.", "https://images."]
    },
    {
        id: 2,
        date: "???",
        title: "???",
        description: "???",
        images: ["https://images."]
    },
   
];
// sooooooooooooooooooooooorties
const sortiesData = [
    {
        id: 1,
        date: "6 Décembre 2025",
        title: "Sortie Paris Volley",
        description: "Magnifique journée à Paris ,on a pu premièrement assister au match du Paris Volley, après le match on a fait une petite session autographe et pour finir, après avoir ranger le mteriel on a pu tester et jouer sur le terrain officiel du Paris Volley !",
        images:["photo/photo1.png","photo/autographe.jpeg","photo/self.jpeg","photo/terrain.jpeg"]
    },
    {
        id: 2,
        date: "???",
        title: "???",
        description: "???",
        images: []
    },
   
];

// aficher les ékip
function displayTeams() {
    const hommesContainer = document.getElementById('teams-hommes');
    const femmesContainer = document.getElementById('teams-femmes');

    teamsData.hommes.forEach(team => {
        hommesContainer.innerHTML += `
            <div class="team-card">
                <span class="team-gender homme">Garçon</span>
                <h3>${team.name}</h3>
                <p><strong>Joueurs:</strong> ${team.joueurs}</p>
                <p><strong>Entraîneur:</strong> ${team.coach}</p>
            </div>
        `;
    });

    teamsData.femmes.forEach(team => {
        femmesContainer.innerHTML += `
            <div class="team-card">
                <span class="team-gender femme">Fille</span>
                <h3>${team.name}</h3>
                <p><strong>Joueuses:</strong> ${team.joueuses}</p>
                <p><strong>Entraîneur:</strong> ${team.coach}</p>
            </div>
        `;
    });
}

// afficher les comp
function displayCompetitions() {
    const container = document.getElementById('competitions-list');
    competitionsData.forEach(comp => {
        container.innerHTML += `
            <div class="competition-item" onclick="openModal(${comp.id}, 'competition')">
                <div class="competition-date">${comp.date}</div>
                <div class="competition-title">${comp.title}</div>
                <p>Cliquez pour voir les détails et photos</p>
            </div>
        `;
    });
}

// afficher les sorty
function displaySorties() {
    const container = document.getElementById('sorties-list');
    sortiesData.forEach(sortie => {
        container.innerHTML += `
            <div class="sortie-item" onclick="openModal(${sortie.id}, 'sortie')">
                <div class="sortie-date">${sortie.date}</div>
                <div class="sortie-title">${sortie.title}</div>
                <p>Cliquez pour voir les détails et photos</p>
            </div>
        `;
    });
}

//ouvrir la modal
function openModal(id, type) {
    let item;
    if (type === 'competition') {
        item = competitionsData.find(c => c.id === id);
    } else {
        item = sortiesData.find(s => s.id === id);
    }
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');

    let imagesHTML = '';
    if (item.images && item.images.length > 0) {
        imagesHTML = '<div class="modal-images">';
        item.images.forEach(img => {
            imagesHTML += `<img src="${img}" alt="Photo ${type}">`;
        });
        imagesHTML += '</div>';
    }

    modalBody.innerHTML = `
        <h2 style="color: #667eea; margin-bottom: 1rem;">${item.title}</h2>
        <p style="color: ${type === 'competition' ? '#764ba2' : '#28a745'}; font-weight: bold; margin-bottom: 1rem;">${item.date}</p>
        <p style="line-height: 1.8; font-size: 1.1rem;">${item.description}</p>
        ${imagesHTML}
    `;

    modal.classList.add('active');
}
//fermer la modal
document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('modal').classList.remove('active');
});

document.getElementById('modal').addEventListener('click', (e) => {
    if (e.target.id === 'modal') {
        document.getElementById('modal').classList.remove('active');
    }
});

// Navigation entre les sections
document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const section = btn.dataset.section;
        
        // Retirer la classe active de tous les boutons
        document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // Retirer la classe active de toutes les sections
        document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
        document.getElementById(section).classList.add('active');
    });
});

// Initialisation au chargement de la page
displayTeams();
displayCompetitions();
displaySorties();