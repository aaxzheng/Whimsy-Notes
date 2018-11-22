
  # json.preview note.body do
  #   #regex
  # end
  json.extract! note, :id, :body, :notebook_id, :title, :preview
  json.tag_ids tags.ids
  json.notebook note.notebook
