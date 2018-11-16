export const fetchTags = () => {
  return $.ajax ({
    method: "GET",
    url: "/api/tags/",
  });
};

export const fetchTag = (id) => {
  return $.ajax ({
    method: "GET",
    url: `/api/tags/${id}`,
  });
};

export const deleteTag = (id) => {
  return $.ajax ({
    method: "DELETE",
    url: `/api/tags/${id}`,
  });
};

export const updateTag = (tag) => {
  return $.ajax ({
    method: "PATCH",
    url: `/api/tags/${tag.id}`,
    data: { tag },
  });
};

export const createTag = (tag) => {
  return $.ajax ({
    method: "POST",
    url: `/api/tags`,
    data: { tag },
  });
}
