// script.js

// START REDIGERING HER: Oppdater med dine data!
// Objekt-arrayet inneholder sti, tittel og dato for hver stripe.
const comicArchive = [
    { 
        path: "Images/tegneserie-1.png", 
        title: "Ep. 1: Virus blir til", 
        date: "1. august 2025" 
    },
    { 
        path: "Images/tegneserie-2.png", 
        title: "Ep. 2: Den første feilen", 
        date: "8. august 2025" 
    },
    { 
        path: "Images/tegneserie-3.png", 
        title: "Ep. 3: Internett-oppvåkning", 
        date: "15. august 2025" 
    },
    { 
        path: "Images/tegneserie-4.png", 
        title: "Ep. 4: Jakten på kildekoden", 
        date: "22. august 2025" 
    },
    { 
        path: "Images/tegneserie-5.png", 
        title: "Ep. 5: Den snille hackeren", 
        date: "29. august 2025" 
    },
    { 
        path: "Images/tegneserie-6.png", 
        title: "Ep. 6: Store avgjørelser", 
        date: "5. september 2025" 
    },
    { 
        path: "Images/tegneserie-7.png", 
        title: "Ep. 7: Helten Virus", 
        date: "12. september 2025" 
    }, 
    // Legg til flere objekter for hver stripe her
];
// SLUTT REDIGERING HER

let currentComicIndex = comicArchive.length - 1; // Starter på den nyeste stripen

// Henter ALLE HTML-elementene vi skal manipulere
const comicImage = document.querySelector('.comic-frame img');
const comicTitleElement = document.getElementById('comic-title');
const comicDateElement = document.getElementById('comic-date');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

/**
 * Funksjon for å oppdatere ALT innhold: bilde, tittel, dato og knapper.
 */
function updateComic() {
    const currentComic = comicArchive[currentComicIndex];

    // 1. Oppdaterer bildekilden og ALT-teksten
    comicImage.src = currentComic.path;
    comicImage.alt = currentComic.title;

    // 2. Oppdaterer tittel og dato
    comicTitleElement.textContent = currentComic.title;
    comicDateElement.textContent = currentComic.date;

    // 3. Oppdaterer knappenes 'disabled'-tilstand
    prevButton.disabled = (currentComicIndex === 0);
    nextButton.disabled = (currentComicIndex === comicArchive.length - 1);
}

/**
 * Går til forrige stripe i arkivet
 */
function goToPrevious() {
    if (currentComicIndex > 0) {
        currentComicIndex--;
        updateComic();
    }
}

/**
 * Går til neste stripe i arkivet
 */
function goToNext() {
    if (currentComicIndex < comicArchive.length - 1) {
        currentComicIndex++;
        updateComic();
    }
}

// Kobler funksjonene til knappene
prevButton.addEventListener('click', goToPrevious);
nextButton.addEventListener('click', goToNext);

// Kaller funksjonen én gang når siden lastes for å vise den nyeste stripen
updateComic();