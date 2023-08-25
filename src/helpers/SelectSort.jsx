export function handleSelectSort(selectedSort, setEvents, events) {
  switch (selectedSort) {
    case "by name up":
      setEvents([...events].sort((a, b) => a.title.localeCompare(b.title)));
      break;
    case "by name down":
      setEvents([...events].sort((a, b) => b.title.localeCompare(a.title)));
      break;
    case "by data up":
      setEvents([...events].sort((a, b) => a.data < b.data));
      break;
    case "by data down":
      setEvents([...events].sort((a, b) => b.data < a.data));
      break;
    case "by priority up":
      setEvents(
        [...events].sort((a, b) => {
          const priorityOrder = { High: 1, Medium: 2, Low: 3 };
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        })
      );
      break;
    case "by priority down":
      setEvents(
        [...events].sort((a, b) => {
          const priorityOrder = { Low: 1, Medium: 2, High: 3 };
          return priorityOrder[a.priority] - priorityOrder[b.priority];
        })
      );
      break;
    default:
      console.log("no sort");
  }
}
