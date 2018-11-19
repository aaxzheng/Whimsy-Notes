  json.note do
  json.extract! note, :id, :body, :notebook_id, :title
  json.tag_ids tags.ids
end
