

@notes.each do |note|
  json.set! note.id do
    json.partial! 'api/notes/note', note:note
  end
end
json.notes do
  json.array! @notes do |note|
    json.note note
  end
end
