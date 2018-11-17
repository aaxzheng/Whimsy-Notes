
json.notebooks
@notebooks.each do |notebook|
  json.set! notebook.id do
    json.partial! 'api/notebooks/notebook', notebook:notebook
  end
end
json.titles do
  json.array! @notebooks do |notebook|
    json.notebook notebook.title
  end
end
