const app = {
    data: {
        url: "http://localhost:3000/notes/",
        notes: [],
    },

    getNotes: function () {
        fetch(this.data.url, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then((r) => r.json())
            .then((response) => {
                this.data.notes = [];
                for (let note of response) {
                    this.data.notes.push(note);
                }
                this.displayNote();
            });
    },

    createNote: function () {
        const title = document.getElementById("title").value;
        const message = document.getElementById("body").value;

        const newData = {
            title: title,
            body: message,
        };
        fetch(this.data.url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newData),
        }).then((r) => r.json());

        this.getNotes();
    },

    createDisplay: function () {
        const display = document.createElement("div");
    },

    deleteNote: function (id) {
        fetch(this.data.url + id, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        })
            .then((r) => r.json())
            .then(this.getNotes());
    },

    confirmDelete: function () { },

    editNote: function (id) {
        const title = document.getElementById("title").value;
        const message = document.getElementById("body").value;

        const updatedData = {
            title: title,
            body: message,
        };
        fetch(this.data.url + id, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedData),
        }).then(this.getNotes());
        console.log(updatedData);
    },
    displayEdit: function () { },

    displayNote: function () {
        const box = document.getElementById("container");
        box.innerHTML = "";
        for (let note of this.data.notes) {
            box.innerHTML += `
            <div>
            <div>${note.title}</div>
            <div>${note.body}</div>
            <button class="updateButton" data-id=${note.id}>UPDATE</button>
            <button class="deleteButton" data-id=${note.id}>DELETE</button>
            </div>
       `;
            console.log(this.data.notes);
        }

        this.addEventListener();
    },

    addEventListener: function () {
        let deleteButtons = document.querySelectorAll(".deleteButton");
        for (let button of deleteButtons) {
            button.addEventListener("click", (event) => {
                event.preventDefault();
                this.deleteNote(button.dataset.id);
            });
        }
        let updateButtons = document.querySelectorAll(".updateButton");
        for (let update of updateButtons) {
            update.addEventListener("click", (event) => {
                event.preventDefault();
                this.editNote(update.dataset.id);
            });
        }
        let save = document.getElementById("saveButton");

        {
            save.addEventListener("click", (event) => {
                event.preventDefault();
                this.createNote();
            });
        }

    },
    main: function () {
        this.getNotes();
    },
};
app.main();
