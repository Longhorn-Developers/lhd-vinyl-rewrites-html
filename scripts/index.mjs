import { albumsById } from "./albums.mjs";

const searchBox = document.querySelector(".search-input");
const clearButton = document.querySelector(".clear-button");
const albumGrid = document.querySelector(".album-grid");

/**
 * @param {import("./albums.mjs").Album} album - The album object to check.
 * @param {string} searchText - The search text to match against.
 * @returns {boolean} Returns true if the album matches the search text, false otherwise.
 */
function matchesSearchText(album, searchText) {
    return album.title.toLowerCase().includes(searchText) || album.artist.toLowerCase().includes(searchText);
}

/**
 * Makes every album in the grid visible.
 */
function resetAlbumGrid() {
    for (const album of albumGrid.children) {
        album.classList.remove("hidden");
    }
}

/**
 * Hides albums that do not match the search text, and shows those that do.
 * @param {string} searchText - The search text to filter the albums by.
 */
function filterAlbumGrid(searchText) {
    for (const album of albumGrid.children) {
        const albumId = album.dataset.albumId;
        const albumData = albumsById.get(albumId);
        if (!albumData) {
            console.error(`Album data not found for ID: ${albumId}`);
            album.classList.add("hidden");
            continue;
        }

        if (matchesSearchText(albumData, searchText)) {
            album.classList.remove("hidden");
        } else {
            album.classList.add("hidden");
        }
    }
}

/**
 * Handles searching, filtering the results of the album grid.
 */
searchBox.addEventListener("input", function (e) {
    const searchText = e.target.value.toLowerCase().trim().replace(/\s+/g, " ");

    if (searchText.length > 0) {
        clearButton.classList.remove("hidden");
        filterAlbumGrid(searchText);
    } else {
        clearButton.classList.add("hidden");
        resetAlbumGrid();
    }
});

/**
 * Handles clicks on the clear button.
 */
clearButton.addEventListener("click", function () {
    searchBox.value = "";
    clearButton.classList.add("hidden");
    resetAlbumGrid();
});
