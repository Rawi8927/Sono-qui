function mostraSchermata(id) {

    document.querySelectorAll(".screen").forEach(function(screen) {
        screen.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");
}


/* =========================
   HOME
========================= */

function respira() {
    mostraSchermata("breathing");
}


function messaggio() {
    mostraSchermata("message");
    nuovoMessaggio();
}


/* =========================
   TORNA HOME
========================= */

function tornaHome() {

    fermaRespirazione();

    mostraSchermata("home");
}


/* =========================
   RESPIRAZIONE
========================= */

let breathingTimeout = null;
let breathingRunning = false;


function iniziaRespirazione() {

    if (breathingRunning) {
        return;
    }

    breathingRunning = true;

    const instruction = document.getElementById("breathingInstruction");
    const timer = document.getElementById("breathingTimer");
    const circle = document.getElementById("breathingCircle");
    const button = document.getElementById("startBreathingButton");

    button.textContent = "Fermati";
    button.onclick = fermaRespirazione;

    let phase = 0;


    function nextPhase() {

        if (!breathingRunning) {
            return;
        }


        if (phase === 0) {

            instruction.textContent = "Inspira";
            timer.textContent = "Lentamente...";

            circle.classList.remove("exhale");
            circle.classList.add("inhale");

            phase = 1;

            breathingTimeout = setTimeout(nextPhase, 4000);

        }


        else if (phase === 1) {

            instruction.textContent = "Trattieni";
            timer.textContent = "Solo per un momento";

            phase = 2;

            breathingTimeout = setTimeout(nextPhase, 2000);

        }


        else {

            instruction.textContent = "Espira";
            timer.textContent = "Piano piano...";

            circle.classList.remove("inhale");
            circle.classList.add("exhale");

            phase = 0;

            breathingTimeout = setTimeout(nextPhase, 6000);

        }

    }


    nextPhase();
}


function fermaRespirazione() {

    breathingRunning = false;

    clearTimeout(breathingTimeout);

    const instruction = document.getElementById("breathingInstruction");
    const timer = document.getElementById("breathingTimer");
    const circle = document.getElementById("breathingCircle");
    const button = document.getElementById("startBreathingButton");

    if (!instruction) {
        return;
    }

    instruction.textContent = "Preparati";
    timer.textContent = "Quando sei pronta";

    circle.classList.remove("inhale");
    circle.classList.remove("exhale");

    button.textContent = "Inizia";
    button.onclick = iniziaRespirazione;
}


/* =========================
   MESSAGGI
========================= */

function nuovoMessaggio() {

    const messaggi = [

    "Qualunque cosa tu stia provando, non devi affrontarla da sola. Io sono qui. ❤️",

    "Fai un respiro amore. Non devi sistemare tutto adesso. Pensiamo solo a questo momento. 🫂",

    "Anche nei momenti in cui non riesci a vedere una via d'uscita, ricordati che non sei sola. ❤️",

    "Vorrei poterti abbracciare forte forte proprio adesso. 🫂",

    "Non devi essere forte per forza. Con me puoi semplicemente essere te stessa. ❤️",

    "Una cosa alla volta, amore. Non abbiamo bisogno di risolvere tutto oggi. 🌙",

    "Se potessi essere lì adesso, ti stringerei e non ti lascerei andare finché non stai un po' meglio. ❤️",

    "Ricordati che questo momento passerà. Respira piano. Io sono qui. 🫂",

    "Non importa quanto sia difficile questo momento: non devi affrontarlo da sola.",

    "Chiudi gli occhi, fai un respiro e pensa a una cosa: sei amata. ❤️",

    "Puoi fermarti. Puoi riposarti. Puoi avere una giornata difficile. Va bene così. 🌙",

    "Sei molto più forte di quanto pensi, ma non devi dimostrarlo a nessuno. ❤️",

    "Adesso niente pensieri troppo grandi. Solo un respiro alla volta. 🌬️",

    "Ti mando il più grande abbraccio possibile attraverso questo piccolo schermo. 🫂",

    "Ehi... piano piano. Sono qui con te. ❤️"

];


    const casuale = Math.floor(Math.random() * messaggi.length);

    const elemento = document.getElementById("personalMessage");

    elemento.style.opacity = "0";


    setTimeout(function() {

        elemento.textContent = messaggi[casuale];

        elemento.style.opacity = "1";

    }, 200);
}


/* =========================
   CONTATTI
========================= */

function contatto() {

    const card = document.querySelector(".contact-card");

    card.innerHTML = `

        <div class="contact-heart">
            🫂
        </div>

        <p class="little-title">
            Ho bisogno di te
        </p>

        <h2>
            Sono qui per te
        </h2>

        <p class="contact-text">
            Non devi trovare le parole giuste.<br>
            Se hai bisogno di me, ci sono.
        </p>

        <div class="contact-buttons">

            <button class="contact-button" onclick="chiama()">
                <span>📞</span>
                <strong>Chiamami</strong>
                <small>Ho bisogno di sentire la tua voce</small>
            </button>

            <button class="contact-button" onclick="scrivimi()">
                <span>💬</span>
                <strong>Scrivimi su WhatsApp</strong>
                <small>Non riesco a parlare, ma vorrei sentirti vicino</small>
            </button>

            <button class="contact-button" onclick="rimaniConMe()">
                <span>🫂</span>
                <strong>Rimani qui con me</strong>
                <small>Ho solo bisogno di un momento</small>
            </button>

        </div>

    `;

    mostraSchermata("contact");

}

function chiama() {

    window.location.href = "tel:+393519682622";

}


function scrivimi() {

    window.location.href = "https://wa.me/393519682622";

}


function rimaniConMe() {

    const card = document.querySelector(".contact-card");

    card.innerHTML = `

        <div class="contact-heart">
            🫂
        </div>

        <p class="little-title">
            Va bene così
        </p>

        <h2>
            Non devi fare niente.
        </h2>

        <p class="contact-text">
            Rimani qui quanto vuoi.<br><br>
            Respira piano e prenditi il tuo tempo.<br>
            Non sei sola. ❤️
        </p>

        <button class="help-button" onclick="tornaHome()">
            Torna alla Home
        </button>

    `;

}

/* =========================
   AIUTAMI ADESSO
========================= */

let helpStep = 0;


function aiutami() {

    helpStep = 0;

    mostraSchermata("help");

    aggiornaAiuto();

}


function prossimoPasso() {

    helpStep++;

    if (helpStep > 4) {
        helpStep = 4;
    }

    aggiornaAiuto();

}


function aggiornaAiuto() {

    const icon = document.getElementById("helpIcon");
    const step = document.getElementById("helpStep");
    const title = document.getElementById("helpTitle");
    const text = document.getElementById("helpText");
    const button = document.getElementById("helpButton");


    document.querySelectorAll(".progress-dot").forEach(function(dot, index) {

        if (index < helpStep) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }

    });


    if (helpStep === 0) {

        icon.textContent = "🌙";

        step.textContent = "Fermiamoci un attimo";

        title.textContent =
            "Non devi risolvere tutto adesso.";

        text.innerHTML =
            "Facciamo una cosa alla volta.<br>" +
            "Io sono qui con te. ❤️";

        button.textContent = "Iniziamo";

        button.onclick = prossimoPasso;

    }


    else if (helpStep === 1) {

        icon.textContent = "👀";

        step.textContent = "Passo 1";

        title.textContent =
            "Guarda intorno a te.";

        text.innerHTML =
            "Trova <strong>5 cose</strong> che puoi vedere.<br>" +
            "Prenditi tutto il tempo che vuoi.";

        button.textContent = "Ho fatto";

        button.onclick = prossimoPasso;

    }


    else if (helpStep === 2) {

        icon.textContent = "👂";

        step.textContent = "Passo 2";

        title.textContent =
            "Ascolta quello che ti circonda.";

        text.innerHTML =
            "Trova <strong>4 cose</strong> che puoi sentire.<br>" +
            "Anche i suoni più piccoli vanno bene.";

        button.textContent = "Ho fatto";

        button.onclick = prossimoPasso;

    }


    else if (helpStep === 3) {

        icon.textContent = "🫶";

        step.textContent = "Passo 3";

        title.textContent =
            "Concentrati sul tuo corpo.";

        text.innerHTML =
    "Nota <strong>3 cose</strong> che puoi sentire con il tatto.<br>" +
    "La sedia, i vestiti, i peluche o il mio piccolo angolino del letto...";

        button.textContent = "Ho fatto";

        button.onclick = prossimoPasso;

    }


    else if (helpStep === 4) {

        icon.textContent = "🌬️";

        step.textContent = "Passo 4";

        title.textContent =
            "Adesso facciamo un respiro.";

        text.innerHTML =
            "Inspira lentamente...<br>" +
            "e poi lascia uscire l'aria piano piano. ❤️";

        button.textContent = "Finito ❤️";

        button.onclick = conclusioneAiuto;

    }

}

function conclusioneAiuto() {

    const icon = document.getElementById("helpIcon");
    const step = document.getElementById("helpStep");
    const title = document.getElementById("helpTitle");
    const text = document.getElementById("helpText");
    const button = document.getElementById("helpButton");


    icon.textContent = "🫂";

    step.textContent = "Ce l'hai fatta";

    title.textContent =
        "Sei arrivata fin qui. ❤️";

    text.innerHTML =
        "Non devi fare altro adesso.<br>" +
        "Prenditi un momento per te.<br><br>" +
        "Io sono qui.";


    document.querySelectorAll(".progress-dot").forEach(function(dot) {
        dot.classList.add("active");
    });


    button.textContent = "🌬️ Respira con me";

    button.onclick = function() {
        mostraSchermata("breathing");
    };

}
function soloPerTe() {

    mostraSchermata("personal");

}