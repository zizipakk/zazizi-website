let currentContent = {};
let currentLanguage = "en";

/*
 * Load language from localStorage
 */
function getSavedLanguage() {

    return localStorage.getItem("lang") || "en";
}

/*
 * Persist language
 */
function saveLanguage(lang) {

    localStorage.setItem("lang", lang);
}

/*
 * Get nested JSON value
 */
function getValue(obj, path) {

    return path.split(".")
        .reduce((o, key) => o?.[key], obj);
}

/*
 * Render simple text content
 */
function renderTextContent(content) {

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.dataset.i18n;

            const value =
                getValue(content, key);

            if (value !== undefined) {

                element.textContent = value;
            }
        });
}

/*
 * Generic card renderer
 */
function renderCards(
    containerId,
    items
) {

    const container =
        document.getElementById(containerId);

    if (!container) return;

    container.innerHTML = "";

    items.forEach(item => {

        const card =
        `
        <article class="card fade-in">

            <h3>${item.title}</h3>

            <p>${item.description}</p>

        </article>
        `;

        container.insertAdjacentHTML(
            "beforeend",
            card
        );

    });

    setupFadeAnimation();
}

/*
 * Populate dynamic sections
 */
function renderDynamicSections(content) {

    renderCards(
        "challenges-container",
        content.challenges.items
    );

    renderCards(
        "services-container",
        content.services.items
    );

    renderCards(
        "expertise-container",
        content.expertise.items
    );

    renderCards(
        "principles-container",
        content.principles.items
    );

    renderCards(
        "references-container",
        content.references.items
    );
}

/*
 * Main loader
 */
async function loadLanguage(lang) {

    try {

        const response =
            await fetch(
                `content/${lang}.json`
            );

        const content =
            await response.json();

        currentContent =
            content;

        currentLanguage =
            lang;

        renderTextContent(content);

        renderDynamicSections(content);

        saveLanguage(lang);

    } catch(error) {

        console.error(
            "Language loading failed",
            error
        );
    }
}

/*
 * Called by language buttons
 */
function switchLanguage(lang) {

    loadLanguage(lang);
}

/*
 * Start
 */
document.addEventListener(
    "DOMContentLoaded",
    () => {

        const saved =
            getSavedLanguage();

        loadLanguage(saved);
    }
);