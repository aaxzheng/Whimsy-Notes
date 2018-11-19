
json.notebooks
@notebooks.each do |notebook|
  json.set! notebook.id do
    json.partial! 'api/notebooks/notebook', notebook:notebook
  end
end
json.notebooks do
  json.array! @notebooks do |notebook|
    json.notebook notebook
    json.notes do
      json.array! notebook.notes
    end
  end
end
