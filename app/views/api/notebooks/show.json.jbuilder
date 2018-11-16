
json.set! @notebook.id do
  json.partial! 'api/notebooks/notebook', notebook: @notebook
json.note_ids @notes.ids
end
