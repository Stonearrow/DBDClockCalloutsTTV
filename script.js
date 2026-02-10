document.addEventListener("DOMContentLoaded", () => {
    const banner = document.getElementById("banner");
    const menu = document.getElementById("menu");
    const mapView = document.getElementById("map-view");
    const mapTitle = document.getElementById("map-title");
    const mapImage = document.getElementById("map-image");
    const backBtn = document.getElementById("back-btn");
    const wipe = document.getElementById("wipe");
    const app = document.getElementById("app");
    const searchbar = document.getElementById("searchbar");
    const searchInput = document.getElementById("searchInput");
    const dropdowns = document.querySelectorAll(".dropdown");

    /* TWITCH EXTENSION HELPER */
    window.Twitch.ext.onAuthorized((auth) => {
        token = auth.token;
        userID = auth.userID;
        channelID = auth.channelID;
        clientID = auth.clientID;
        helixToken = auth.helixToken;
    });

    let lastDropdown = null;
    let lastScroll = 0;

    /* MAPS */
    const maps = {
        azarovs: {
            title: "Azarovs Resting Place",
            image: "images/Autohaven/Azarovs Resting Place.webp"
        },
        bloodlodge: {
            title: "Blood Lodge",
            image: "images/Autohaven/Blood Lodge.webp"
        },
        gasheaven: {
            title: "Gas Heaven",
            image: "images/Autohaven/Gas Heaven.webp"
        },
        wreckers: {
            title: "Wreckers Yard",
            image: "images/Autohaven/Wreckers.webp"
        },
        wretched: {
            title: "Wretched Shop",
            image: "images/Autohaven/Wretched Shop.webp"
        },
        preschool1: {
            title: "Preschool 1",
            image: "images/Badham/Preschool1.webp"
        },
        preschool2: {
            title: "Preschool 2",
            image: "images/Badham/Preschool2.webp"
        },
        preschool3: {
            title: "Preschool 3",
            image: "images/Badham/Preschool3.webp"
        },
        preschool4: {
            title: "Preschool 4",
            image: "images/Badham/Preschool4.webp"
        },
        preschool5: {
            title: "Preschool 5",
            image: "images/Badham/Preschool5.webp"
        },
        fracturedcowshed: {
            title: "Fractured Cowshed",
            image: "images/Coldwind/Fractured Cowshed.webp"
        },
        rancidabba: {
            title: "Rancid Abbatoir",
            image: "images/Coldwind/Rancid Abbatoir.webp"
        },
        rottenfields: {
            title: "Rotten Fields",
            image: "images/Coldwind/Rotten Fields.webp"
        },
        thompsonhouse: {
            title: "Thompson House",
            image: "images/Coldwind/The Thompson House.webp"
        },
        tormentcreek: {
            title: "Torment Creek",
            image: "images/Coldwind/Torment Creek.webp"
        },
        disturbedward: {
            title: "Disturbed Ward",
            image: "images/Crotus Prenn/Disturbed Ward.webp"
        },
        fathercampbells: {
            title: "Father Campbell's Chapel",
            image: "images/Crotus Prenn/Father Campbells Chapel.webp"
        },
        coaltower1: {
            title: "Coal Tower 1",
            image: "images/MacMillan/Coal Tower.webp"
        },
        coaltower2: {
            title: "Coal Tower 2",
            image: "images/MacMillan/Coal Tower II.webp"
        },
        groaning1: {
            title: "Groaning Storehouse 1",
            image: "images/MacMillan/Groaning Storehouse.webp"
        },
        groaning2: {
            title: "Groaning Storehouse 2",
            image: "images/MacMillan/Groaning Storehouse II.webp"
        },
        ironworks1: {
            title: "Ironworks of Misery 1",
            image: "images/MacMillan/Ironworks Of Misery.webp"
        },
        ironworks2: {
            title: "Ironworks of Misery 2",
            image: "images/MacMillan/Ironworks Of Misery II.webp"
        },
        shelterwoods1: {
            title: "Shelter Woods 1",
            image: "images/MacMillan/Shelter Woods.webp"
        },
        shelterwoods2: {
            title: "Shelter Woods 2",
            image: "images/MacMillan/Shelter Woods II.webp"
        },
        suffopit1: {
            title: "Suffocation Pit 1",
            image: "images/MacMillan/Suffocation Pit.webp"
        },
        suffopit2: {
            title: "Suffocation Pit 2",
            image: "images/MacMillan/Suffocation Pit II.webp"
        },
        mothersdwelling: {
            title: "Mothers Dwelling",
            image: "images/Red Forest/Mothers Dwelling.webp"
        },
        templeofpurgation: {
            title: "Temple of Purgation",
            image: "images/Red Forest/Temple of Purgation.webp"
        },
        rpdeast: {
            title: "RPD East Wing",
            image: "images/RPD/RPD East Wing.webp"
        },
        rpdwest: {
            title: "RPD West Wing",
            image: "images/RPD/RPD West Wing.webp"
        },
        grimpantry: {
            title: "Grim Pantry",
            image: "images/Swamp/Grim Pantry.webp"
        },
        palerose: {
            title: "Pale Rose",
            image: "images/Swamp/Pale Rose.webp"
        },
        familyresidence1: {
            title: "Family Residence 1",
            image: "images/Yamaoka/Family Residence.webp"
        },
        familyresidence2: {
            title: "Family Residence 2",
            image: "images/Yamaoka/Family Residence II.webp"
        },
        sanctumofwrath1: {
            title: "Sanctum of Wrath 1",
            image: "images/Yamaoka/Sanctum of Wrath.webp"
        },
        sanctumofwrath2: {
            title: "Sanctum of Wrath 2",
            image: "images/Yamaoka/Sanctum of Wrath II.webp"
        },
        deadsands: {
            title: "Dead Sands",
            image: "images/Forsaken Boneyard/Dead Sands.webp"
        },
        eyrieofcrows: {
            title: "Eyrie of Crows",
            image: "images/Forsaken Boneyard/Eyrie of Crows.webp"
        },
        thegame: {
            title: "The Game",
            image: "images/Gideon/The Game.webp"
        },
        ddseu: {
            title: "Dead Dawg Saloon EU",
            image: "images/Grave of Glenvale/Dead Dawg Saloon EU.webp"
        },
        ddsna: {
            title: "Dead Dawg Saloon NA",
            image: "images/Grave of Glenvale/Dead Dawg Saloon NA.webp"
        },
        fallenrefuge: {
            title: "Fallen Refuge",
            image: "images/Withered Isle/Fallen Refuge.webp"
        },
        freddypizza: {
            title: "Freddy Fazbear's Pizza",
            image: "images/Withered Isle/Freddy Fazbears Pizza.webp"
        },
        gardenofjoy: {
            title: "Garden of Joy",
            image: "images/Withered Isle/Garden of Joy.webp"
        },
        greenvillesquare: {
            title: "Greenville Square",
            image: "images/Withered Isle/Greenville Square.webp"
        },
        forgottenruins: {
            title: "Forgotten Ruins",
            image: "images/Decimated Borgo/Forgotten Ruins.webp"
        },
        shatteredsquare: {
            title: "Shattered Square",
            image: "images/Decimated Borgo/Shattered Square.webp"
        },
        nostromo: {
            title: "Nostromo Wreckage",
            image: "images/Dvarka Deepwood/Nostromo Wreckage.webp"
        },
        toba: {
            title: "Toba Landing",
            image: "images/Dvarka Deepwood/Toba Landing.webp"
        },
        lerys: {
            title: "Léry's Memorial Institute",
            image: "images/Lerys/Lerys.webp"
        },
        ormond1: {
            title: "Mount Ormond Resort 1",
            image: "images/Ormond/Ormond.webp"
        },
        ormond2: {
            title: "Mount Ormond Resort 2",
            image: "images/Ormond/Ormond II.webp"
        },
        ormond3: {
            title: "Mount Ormond Resort 3",
            image: "images/Ormond/Ormond III.webp"
        },
        ormondlake: {
            title: "Ormond Lake Mine",
            image: "images/Ormond/Ormond Lake Mine.webp"
        },
        midwich: {
            title: "Midwich Elementary School",
            image: "images/Silent Hill/Midwich.gif"
        },
        hawkins: {
            title: "Hawkins National Laboratory",
            image: "images/Underground Complex/Hawkins.webp"
        }
    };

    /* SEARCH */
    searchInput.addEventListener("input", runSearch);

    /* DROPDOWN */
    dropdowns.forEach(dropdown => {
        const btn = dropdown.querySelector(".dropdown-btn");
        btn.addEventListener("click", e => {
            e.preventDefault();

        // Close other dropdowns
        dropdowns.forEach(d => {
            if (d !== dropdown) {
                d.classList.remove("open");
            }
        });

        const isOpen = !dropdown.classList.contains("open");
        dropdown.classList.toggle("open");
        lastDropdown = isOpen ? dropdown : null;
        });
    });

    /* MAP LINKS */
    document.querySelectorAll("[data-map]").forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            lastScroll = menu.scrollTop;
            lastDropdown = Array.from(dropdowns).find(d=> d.classList.contains("open")) || null;
            const mapKey = link.dataset.map;
            runWipe("right", () => showMap(mapKey));
        });
    });

    /* BACK BUTTON */
    backBtn.addEventListener("click", () => {
        runWipe("left", showMenu);
    });

    /* SEARCH FUNCTION*/
    function runSearch() {
        const query = searchInput.value.toLowerCase().trim();
        dropdowns.forEach(dropdown => {
            const button = dropdown.querySelector(".dropdown-btn");
            const links = dropdown.querySelectorAll(".dropdown-content a");

            const buttonText = button.textContent.toLowerCase();
            const buttonMatches = buttonText.includes(query);

            let hasVisibleLinks = false;
            links.forEach(link => {
                const mapName = link.textContent.toLowerCase();
                const mapData = link.dataset.map.toLowerCase();
                const linkMatches = mapName.includes(query) || mapData.includes(query);
                const shouldShowLink = buttonMatches || linkMatches || query === "";

                link.style.display = shouldShowLink ? "" : "none";

                if (shouldShowLink) {
                    hasVisibleLinks = true;
                }
            });

            const shouldShowDropdown = buttonMatches || hasVisibleLinks || query === "";
            dropdown.style.display = shouldShowDropdown ? "" : "none";
        });
    }

    /* WIPE ANIMATION */
    function runWipe(direction, callback) {
        wipe.className = "";
        void wipe.offsetWidth; // force reflow

        wipe.classList.add(
            direction === "right" ? "wipe-in-right" : "wipe-in-left"
        );

        setTimeout(callback, 400);

        setTimeout(() => wipe.className = "", 400);
    }

    /* SWITCH VIEW */
    function showMap(mapKey) {
        const map = maps[mapKey];
        if (!map) return;

        mapImage.src = map.image;

        banner.classList.add("hidden");
        menu.classList.add("hidden");
        mapView.classList.remove("hidden");
        searchbar.classList.add("hidden");
    }

    function showMenu() {
        banner.classList.remove("hidden");
        mapView.classList.add("hidden");
        menu.classList.remove("hidden");
        searchbar.classList.remove("hidden");
        searchInput.value = "";
        runSearch();
    }

    /* SWIPE BACK - MOBILE */
    let touchStartX = 0;

    app.addEventListener("touchstart", e => {
        if (!e.touches.length) return;
        touchStartX = e.touches[0].clientX;
    }, { passive: true});

    app.addEventListener("touchend", e => {
        if (!e.changedTouches.length) return;
        const diff = e.changedTouches[0].clientX - touchStartX;

        if (diff > 80 && !mapView.classList.contains("hidden")) {
            runWipe("left", showMenu);
        }
    });
});