const addBtn = document.getElementById("addBtn");
const container = document.getElementById("notesContainer");

// Load saved notesz
window.onload = () => {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.forEach(text => createNote(text));
};

addBtn.addEventListener("click", () => createNote(""));

function createNote(text) {
    const note = document.createElement("div");
    note.classList.add("note");

    const textarea = document.createElement("textarea");
    textarea.value = text;

    const deleteBtn = document.createElement("span");

    deleteBtn.innerText = "❌";
    deleteBtn.classList.add("deleteBtn");

    deleteBtn.onclick = () => {
        note.remove();
        saveNotes();
    };

    textarea.oninput = saveNotes;

    note.appendChild(deleteBtn);
    note.appendChild(textarea);
    container.appendChild(note);

}

function saveNotes() {
    const notes = [];
    document.querySelectorAll("textarea").forEach(note => {
        notes.push(note.value);
    });
    localStorage.setItem("notes", JSON.stringify(notes));
}