

@notes.each do |note|
  json.set! note.id do
    json.partial! 'api/notes/note', note:note, tags: note.tags
  end
end
# json.notes do
#   json.array! @notes
# end
