// Map headers to their corresponding sections
const headersections = {
    header_1: 'inicio',
    header_2: 'reparacoes',
    header_3: 'chapapintura',
    header_4: 'contactos'
};

const footersections = {
    footer_1: 'inicio',
    footer_2: 'reparacoes',
    footer_3: 'chapapintura',
    footer_4: 'contactos'
}

// Function to show the selected section and hide others
function showSection(sectionId) {
    Object.values(headersections).forEach(id => {
        document.getElementById(id).style.display = (id === sectionId) ? "block" : "none";
    });
    Object.values(footersections).forEach(id => {
        document.getElementById(id).style.display = (id === sectionId) ? "block" : "none";
    });
}

// Initial section
showSection('inicio');

// Event listeners
Object.entries(headersections).forEach(([headerId, sectionId]) => {
    const header = document.getElementById(headerId);
    header.addEventListener('click', () => {
        console.log(`${sectionId} clicked`);
        showSection(sectionId);
    });
});

Object.entries(footersections).forEach(([footerId, sectionId]) => {
    const header = document.getElementById(footerId);
    header.addEventListener('click', () => {
        console.log(`${sectionId} clicked`);
        showSection(sectionId);
    });
});