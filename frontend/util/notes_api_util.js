export const fetchNotes = () => {
  return $.ajax ({
    method: "GET",
    url: "/api/notes/",
  });
};

export const fetchNote = (id) => {
  return $.ajax ({
    method: "GET",
    url: `/api/notes/${id}`,
  });
};

export const deleteNote = (id) => {
  return $.ajax ({
    method: "DELETE",
    url: `/api/notes/${id}`,
  });
};

export const updateNote = (note) => {
  return $.ajax ({
    method: "PATCH",
    url: `/api/notes/${note.id}`,
    data: { note },
  });
};

export const createNote = (notebook,note) => {
  return $.ajax ({
    method: "POST",
    url: `/api/notebooks/${notebook.id}/notes`,
    data: {note},
  });
}
