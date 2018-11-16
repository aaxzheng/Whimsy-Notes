# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Note.destroy_all
Notebook.destroy_all
Tag.destroy_all
TagNote.destroy_all



demo = User.create(username: "demoman", password: "invisible")
shower = Notebook.create(title: "Showerthoughts", user_id: demo.id)
app = Notebook.create(title: "AppAcademy Notes", user_id: demo.id)
sheep = Note.create(body: "Do the sheep count sheep when they sleep?", user_id: demo.id, notebook_id: shower.id)
laotze = Note.create(body: "Once upon a time, I dreamt I was a butterfly, fluttering hither and thither, to all intents and
        purposes a butterfly. I was conscious only of my happiness as a butterfly, unaware that I was myself.
        Soon I awaked, and there I was, veritably myself again. Now I do not know whether I was then a man
        dreaming I was a butterfly, or whether I am now a butterfly, dreaming I am a man.", user_id: demo.id, notebook_id: shower.id)
check = Note.create(body: "Double check my proposal!", user_id: demo.id, notebook_id: app.id)
philo = Tag.create(tag: "philosophy")
whim = Tag.create(tag: "whimsical")
code = Tag.create(tag: "coding")
TagNote.create(tag_id: philo.id, note_id: laotze.id)
TagNote.create(tag_id: philo.id, note_id: sheep.id)
TagNote.create(tag_id: whim.id, note_id: sheep.id)
TagNote.create(tag_id: code.id, note_id: app.id)
