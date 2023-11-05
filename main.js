const app = {
    data: {
        url: "http://localhost:3000/notes",
        notes: []
    },

    getNotes: function () {
        fetch(this.data.url, {
            method: 'GET',
            headers: { "Content-Type": "application/json" }
        })

            .then(r => r.json())
            .then(response => {
                for (let note of response) {
                    this.data.notes.push(note)

                }
                this.displayNote()
            }
            )

    },

    createNote: function () {
        fetch(this.data.url, {
            method: 'POST',
            headers: { "Content-Type": "application/json" }
        })

            .then(r => r.json())
            .then(response => {
                for (let note of response) {
                    this.data.notes.push(note)

                }
                // this.displayNote()
            }
            )

    },

    createDisplay: function () {

    },

    deleteNote: function () {
        fetch(this.data.url, {
            method: 'DELETE',
            headers: { "Content-Type": "application/json" }
        })

            .then(r => r.json())
            .then(response => {
                for (let note of response) {
                    this.data.notes.push(note)

                }
                // this.displayNote()
            }
            )

    },

    confirmDelete: function () {

    },

    editNote: function (id) {
        fetch(this.data.url, {
            method: 'PATCH',
            headers: { "Content-Type": "application/json" }
        })

            .then(r => r.json())
            .then(response => {
                for (let note of response) {
                    this.data.notes.push(note)

                }
                // this.displayNote()
            }
            )

    },

    displayEdit: function () {

    },

    displayNote: function () {
        const box = document.getElementById('container')
        for (let note of this.data.notes) {
            box.innerHTML += `
            
            <div>${note.title}</div>
            <div>${note.body}</div>
            <button data-id=${note.id}>UPDATE</button>
            <button class="deleteButton" data-id=${note.id}>DELETE</button>
            <div>${note.title}</div>
            <div>${note.body}</div>
           
            
       `
            console.log(this.data.notes)
        }
        this.addEventListener();
    },

    addEventListener: function () {
        let deleteButtons = document.querySelectorAll(".deleteButton")
        for (let button of deleteButtons) {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                this.deleteNote(button.dataset.id)
            })
        }
    },
    main: function () {
        this.getNotes()
        if (deleteButton.clicked == true) {
            this.deleteNote()
        }

    }
}
app.getNotes()

