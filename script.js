let entryList = [];

const handleOnSubmit = (e) => {
  const newForm = new FormData(e);

  const task = newForm.get("task");
  const hour = newForm.get("hr");

  const entryData = {
    task: task,
    hour: hour,
    id: randomId(),
  };

  entryList.push(entryData);
  displayEntrylist();
};

const displayEntrylist = () => {
  const entryElm = document.getElementById("entryList");
  let str = "";
  entryList.map((item, i) => {
    str += `
  <tr>
                <td>${i + 1}</td>
                <td>${item.task}</td>
                <td>${item.hour}hr</td>
                <td class="text-end">
                  <button  onclick = "deleteItem('${
                    item.id
                  }')"   class="btn btn-danger">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                  <button class="btn btn-success">
                    <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </td>
              </tr>
  `;
  });
  entryElm.innerHTML = str;
};

const randomId = (length = 6) => {
  console.log(entryList);

  const str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let id = "";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * str.length);

    id += str[randomIndex];
  }
  return id;
};

const deleteItem = (id) => {
  if (window.confirm("Are you sure yo want to delete this entry ?")) {
    entryList = entryList.filter((item) => item.id !== id);
    displayEntrylist();
  }
};
