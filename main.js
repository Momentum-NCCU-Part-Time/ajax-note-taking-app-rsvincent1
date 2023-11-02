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
    displayNote: function () {
        const box = document.getElementById('container')
        for (let note of this.data.notes) {
            box.innerHTML += `
            <div>${note.title}</div>
       `
        }
    }
}
app.getNotes()

