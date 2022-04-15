export const onDeleteHandler = (e, id, notes) => {
  e.preventDefault();
  const newNotes = notes.filter((el) => id !== el.id);
  return newNotes;
};
export const onMarkedHandler = (e, id, notes) => {
  e.preventDefault();
  const newNotes = [...notes];
  newNotes.forEach((el) => {
    if (id === el.id) {
      el.marked = !el.marked;
    }
  });
  return newNotes;
};

export const getItemsFromLocalStorage = () => {
  const localNotes = JSON.parse(window.localStorage.getItem("notes"));
  return localNotes !== null ? localNotes : []; //we return an empty array here if theres no localstorage for state initialization
};
