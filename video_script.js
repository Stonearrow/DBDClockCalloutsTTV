/* VIDEO OVERLAY */
const VideoOverlay = (() => {
    /* OBJECTS */
    const searchInput = document.getElementById("searchInput");
    const results = document.getElementById("results");
    const mapImage = document.getElementById("map-image");
    const imageWrapper = document.getElementById("image-wrapper");
    const zoomToggle = document.getElementById("zoom-toggle");
    const infoBtn = document.getElementById("info-btn");
    const infoBox = document.getElementById("info-box");
    const clearBtn = document.getElementById("clear-btn");

    /* MAPS */
    const maps = {
        azarovs: {
            realm: "Autohaven Wreckers",
            title: "Azarovs Resting Place",
            image: "images/Autohaven/AzarovsRestingPlace.webp"
        },
        bloodlodge: {
            realm: "Autohaven Wreckers",
            title: "Blood Lodge",
            image: "images/Autohaven/BloodLodge.webp"
        },
        gasheaven: {
            realm: "Autohaven Wreckers",
            title: "Gas Heaven",
            image: "images/Autohaven/GasHeaven.webp"
        },
        wreckers: {
            realm: "Autohaven Wreckers",
            title: "Wreckers Yard",
            image: "images/Autohaven/Wreckers.webp"
        },
        wretched: {
            realm: "Autohaven Wreckers",
            title: "Wretched Shop",
            image: "images/Autohaven/WretchedShop.webp"
        },
        preschool1: {
            realm: "Springwood",
            title: "Preschool 1",
            image: "images/Badham/Preschool1.webp"
        },
        preschool2: {
            realm: "Springwood",
            title: "Preschool 2",
            image: "images/Badham/Preschool2.webp"
        },
        preschool3: {
            realm: "Springwood",
            title: "Preschool 3",
            image: "images/Badham/Preschool3.webp"
        },
        preschool4: {
            realm: "Springwood",
            title: "Preschool 4",
            image: "images/Badham/Preschool4.webp"
        },
        preschool5: {
            realm: "Springwood",
            title: "Preschool 5",
            image: "images/Badham/Preschool5.webp"
        },
        fracturedcowshed: {
            realm: "Coldwind Farm",
            title: "Fractured Cowshed",
            image: "images/Coldwind/FracturedCowshed.webp"
        },
        rancidabba: {
            realm: "Coldwind Farm",
            title: "Rancid Abbatoir",
            image: "images/Coldwind/RancidAbbatoir.webp"
        },
        rottenfields: {
            realm: "Coldwind Farm",
            title: "Rotten Fields",
            image: "images/Coldwind/RottenFields.webp"
        },
        thompsonhouse: {
            realm: "Coldwind Farm",
            title: "Thompson House",
            image: "images/Coldwind/TheThompsonHouse.webp"
        },
        tormentcreek: {
            realm: "Coldwind Farm",
            title: "Torment Creek",
            image: "images/Coldwind/TormentCreek.webp"
        },
        disturbedward: {
            realm: "Crotus Prenn Asylum",
            title: "Disturbed Ward",
            image: "images/CrotusPrenn/DisturbedWard.webp"
        },
        fathercampbells: {
            realm: "Coldwind Farm",
            title: "Father Campbell's Chapel",
            image: "images/CrotusPrenn/FatherCampbellsChapel.webp"
        },
        coaltower1: {
            realm: "MacMillan Estate",
            title: "Coal Tower 1",
            image: "images/MacMillan/CoalTower.webp"
        },
        coaltower2: {
            realm: "MacMillan Estate",
            title: "Coal Tower 2",
            image: "images/MacMillan/CoalTowerII.webp"
        },
        groaning1: {
            realm: "MacMillan Estate",
            title: "Groaning Storehouse 1",
            image: "images/MacMillan/GroaningStorehouse.webp"
        },
        groaning2: {
            realm: "MacMillan Estate",
            title: "Groaning Storehouse 2",
            image: "images/MacMillan/GroaningStorehouseII.webp"
        },
        ironworks1: {
            realm: "MacMillan Estate",
            title: "Ironworks of Misery 1",
            image: "images/MacMillan/IronworksOfMisery.webp"
        },
        ironworks2: {
            realm: "MacMillan Estate",
            title: "Ironworks of Misery 2",
            image: "images/MacMillan/IronworksOfMiseryII.webp"
        },
        shelterwoods1: {
            realm: "MacMillan Estate",
            title: "Shelter Woods 1",
            image: "images/MacMillan/ShelterWoods.webp"
        },
        shelterwoods2: {
            realm: "MacMillan Estate",
            title: "Shelter Woods 2",
            image: "images/MacMillan/ShelterWoodsII.webp"
        },
        suffopit1: {
            realm: "MacMillan Estate",
            title: "Suffocation Pit 1",
            image: "images/MacMillan/SuffocationPit.webp"
        },
        suffopit2: {
            realm: "MacMillan Estate",
            title: "Suffocation Pit 2",
            image: "images/MacMillan/SuffocationPitII.webp"
        },
        mothersdwelling: {
            realm: "Red Forest",
            title: "Mothers Dwelling",
            image: "images/RedForest/MothersDwelling.webp"
        },
        templeofpurgation: {
            realm: "Red Forest",
            title: "Temple of Purgation",
            image: "images/RedForest/TempleofPurgation.webp"
        },
        rpdeast: {
            realm: "Raccoon City",
            title: "RPD East Wing",
            image: "images/RPD/RPDEastWing.webp"
        },
        rpdwest: {
            realm: "Raccoon City",
            title: "RPD West Wing",
            image: "images/RPD/RPDWestWing.webp"
        },
        grimpantry: {
            realm: "Backwater Swamp",
            title: "Grim Pantry",
            image: "images/Swamp/GrimPantry.webp"
        },
        palerose: {
            realm: "Backwater Swamp",
            title: "Pale Rose",
            image: "images/Swamp/PaleRose.webp"
        },
        familyresidence1: {
            realm: "Yamaoka Estate",
            title: "Family Residence 1",
            image: "images/Yamaoka/FamilyResidence.webp"
        },
        familyresidence2: {
            realm: "Yamaoka Estate",
            title: "Family Residence 2",
            image: "images/Yamaoka/FamilyResidenceII.webp"
        },
        sanctumofwrath1: {
            realm: "Yamaoka Estate",
            title: "Sanctum of Wrath 1",
            image: "images/Yamaoka/SanctumofWrath.webp"
        },
        sanctumofwrath2: {
            realm: "Yamaoka Estate",
            title: "Sanctum of Wrath 2",
            image: "images/Yamaoka/SanctumofWrathII.webp"
        },
        deadsands: {
            realm: "Forgotten Boneyard",
            title: "Dead Sands",
            image: "images/ForsakenBoneyard/DeadSands.webp"
        },
        eyrieofcrows: {
            realm: "Forgotten Boneyard",
            title: "Eyrie of Crows",
            image: "images/ForsakenBoneyard/EyrieofCrows.webp"
        },
        thegame: {
            realm: "Gideon Meat Plant",
            title: "The Game",
            image: "images/Gideon/TheGame.webp"
        },
        ddseu: {
            realm: "Grave of Glenvale",
            title: "Dead Dawg Saloon EU",
            image: "images/GraveofGlenvale/DeadDawgSaloonEU.webp"
        },
        ddsna: {
            realm: "Grave of Glenvale",
            title: "Dead Dawg Saloon NA",
            image: "images/GraveofGlenvale/DeadDawgSaloonNA.webp"
        },
        fallenrefuge: {
            realm: "Withered Isle",
            title: "Fallen Refuge",
            image: "images/WitheredIsle/FallenRefuge.webp"
        },
        freddypizza: {
            realm: "Withered Isle",
            title: "Freddy Fazbear's Pizza",
            image: "images/WitheredIsle/FreddyFazbearsPizza.webp"
        },
        gardenofjoy: {
            realm: "Withered Isle",
            title: "Garden of Joy",
            image: "images/WitheredIsle/GardenofJoy.webp"
        },
        greenvillesquare: {
            realm: "Withered Isle",
            title: "Greenville Square",
            image: "images/WitheredIsle/GreenvilleSquare.webp"
        },
        forgottenruins: {
            realm: "Decimated Borgo",
            title: "Forgotten Ruins",
            image: "images/DecimatedBorgo/ForgottenRuins.webp"
        },
        shatteredsquare: {
            realm: "Decimated Borgo",
            title: "Shattered Square",
            image: "images/DecimatedBorgo/ShatteredSquare.webp"
        },
        nostromo: {
            realm: "Dvarka Deepwood",
            title: "Nostromo Wreckage",
            image: "images/DvarkaDeepwood/NostromoWreckage.webp"
        },
        toba: {
            realm: "Dvarka Deepwood",
            title: "Toba Landing",
            image: "images/DvarkaDeepwood/TobaLanding.webp"
        },
        lerys: {
            realm: "Lery's",
            title: "Lery's Memorial Institute",
            image: "images/Lerys/Lerys.webp"
        },
        ormond1: {
            realm: "Ormond",
            title: "Mount Ormond Resort 1",
            image: "images/Ormond/Ormond.webp"
        },
        ormond2: {
            realm: "Ormond",
            title: "Mount Ormond Resort 2",
            image: "images/Ormond/OrmondII.webp"
        },
        ormond3: {
            realm: "Ormond",
            title: "Mount Ormond Resort 3",
            image: "images/Ormond/OrmondIII.webp"
        },
        ormondlake: {
            realm: "Ormond",
            title: "Ormond Lake Mine",
            image: "images/Ormond/OrmondLakeMine.webp"
        },
        midwich: {
            realm: "Silent Hill",
            title: "Midwich Elementary School",
            image: "images/SilentHill/Midwich.gif"
        },
        hawkins: {
            realm: "Underground Complex",
            title: "Hawkins National Laboratory",
            image: "images/UndergroundComplex/Hawkins.webp"
        }
    };

    /* STATE DECLARATIONS */
    let zoomLevel = parseFloat(localStorage.getItem("mapZoom")) || 1;
    let panX = 0, panY = 0, isPanning = false;
    let startX = 0, startY = 0;
    let searchTimeout;

    /* ********* */
    /* FUNCTIONS */
    /* ********* */

    /* SHOW MAP */
    function showMap(key) {
        if (!maps[key]) return;

        mapImage.onload =() => {
            zoomLevel = 1;
            panX = 0;
            panY = 0;
            applyTransform();
        };
        mapImage.src = maps[key].image;
        searchInput.value = "";
        results.replaceChildren();
    }

    /* SANITIZE SEARCH */
    function sanitizeSearch(input) {
        if (input.length > 50) {
            input = input.slice(0, 50);
        }
        return input.replace(/[^a-zA-Z0-9\s'\-]/g, "");
    }
    /* SEARCH DEBOUNCE */
    searchInput.addEventListener("input", () => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(runSearch, 150);
    });
    /* SEARCH */
    function runSearch() {
        const query = sanitizeSearch(searchInput.value).toLowerCase().trim();
        results.replaceChildren();
        if (!query) return;

        Object.keys(maps).forEach(key => {
            if (maps[key].title.toLowerCase().includes(query) || maps[key].realm.toLowerCase().includes(query)) {
                const item = document.createElement("div");
                item.textContent = maps[key].title;
                item.classList.add("search-item");
                item.onclick = () => showMap(key);
                results.appendChild(item);
            }
        });
    }

    /* PANNING */
    function getPanBounds() {
        const wrapperRect = imageWrapper.getBoundingClientRect();
        const wrapperWidth = wrapperRect.width;
        const wrapperHeight = wrapperRect.height;

        // Actual displayed size of the image
        const imgRatio = mapImage.naturalWidth / mapImage.naturalHeight;
        let displayedWidth, displayedHeight;

        if (wrapperWidth / wrapperHeight > imgRatio) {
            // wrapper is wider than image ratio → image height fits
            displayedHeight = wrapperHeight * zoomLevel;
            displayedWidth = displayedHeight * imgRatio;
        } else {
            // wrapper is taller → image width fits
            displayedWidth = wrapperWidth * zoomLevel;
            displayedHeight = displayedWidth / imgRatio;
        }

        let minX, maxX, minY, maxY;

        if (displayedWidth <= wrapperWidth) {
            minX = maxX = 0;
        } else {
            minX = -(displayedWidth - wrapperWidth) / 2;
            maxX = (displayedWidth - wrapperWidth) / 2;
        }

        if (displayedHeight <= wrapperHeight) {
            minY = maxY = 0;
        } else {
            minY = -(displayedHeight - wrapperHeight) / 2;
            maxY = (displayedHeight - wrapperHeight) / 2;
        }

        return { minX, maxX, minY, maxY };
    }

    function applyTransform() {
        const bounds = getPanBounds();
        panX = Math.min(Math.max(panX, bounds.minX), bounds.maxX);
        panY = Math.min(Math.max(panY, bounds.minY), bounds.maxY);
        mapImage.style.transform = `translate3d(${panX}px, ${panY}px, 0) scale(${zoomLevel})`;
    }

    /* GET FINGER DISTANCE (MOBILE) */
    function getDistance(touches) {
        return Math.hypot(
            touches[0].clientX - touches[1].clientX,
            touches[0].clientY - touches[1].clientY
        );
    }

    /* ****** */
    /* EVENTS */
    /* ****** */
    
    /* INFO BUTTON */
    infoBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        infoBox.classList.toggle("active");
    })
    document.addEventListener("click", (e) => {
        if (!infoBox.contains(e.target) && e.target !== infoBtn) {
            infoBox.classList.remove("active");
        }
    });

    /* ZOOM WHEEL */
    imageWrapper.addEventListener("wheel", e => {
        e.preventDefault();
        zoomLevel += e.deltaY * -0.0015;
        zoomLevel = Math.min(Math.max(1, zoomLevel), 3);
        applyTransform();
        localStorage.setItem("mapZoom", zoomLevel);
    }, { passive: false });
    /* ZOOM BUTTON */
    zoomToggle.addEventListener("click", () => {
        zoomLevel = zoomLevel === 1 ? 2 : 1;
        panX = 0;
        panY = 0;
        applyTransform();
    });
    clearBtn.addEventListener("click", () => {
        searchInput.value = "";
        results.replaceChildren();
        mapImage.src = "";
        panX = 0;
        panY = 0;
        zoomLevel = 1;
        applyTransform();
    });
        
    /* PANNING - DESKTOP */
    mapImage.addEventListener("dragstart", e => {
        e.preventDefault();
    });
    imageWrapper.addEventListener("pointerdown", e => {
        if (zoomLevel <= 1) return;
        isPanning = true;
        startX = e.clientX - panX;
        startY = e.clientY - panY;
    });
    document.addEventListener("pointermove", e => {
        if (!isPanning) return;
        panX = e.clientX - startX;
        panY = e.clientY - startY;
        applyTransform();
    });
    document.addEventListener("pointerup", () => { 
        isPanning = false; 
    });

    /* **** */
    /* INIT */
    /* **** */
    const init = () => {
        applyTransform();
    };

    return { init, showMap };
})();

document.addEventListener("DOMContentLoaded", () => {
    VideoOverlay.init();

    /* TWITCH EXTENSION HELPER */
    window.Twitch.ext.onAuthorized((auth) => {
        console.log("Twitch extension");
    });
});
