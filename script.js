let taskList = [];

const hourPerWeek = 168;

const handleOnSubmit = (e) => {
  const newForm = new FormData(e);

  const task = newForm.get("task");
  const hour = +newForm.get("hr");

  const entryData = {
    task: task,
    hour: hour,
    id: randomId(),
    type: "entry",
  };

  const ttlAllocatedHrs = ttlHours();

  if (ttlAllocatedHrs + hour > hourPerWeek) {
    return alert("Number of hour per weeek exceeded");
  }

  taskList.push(entryData);
  displayEntrylist();
};

const displayEntrylist = () => {
  const entryElm = document.getElementById("entryList");

  const entryList = taskList.filter((item) => item.type == "entry");
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
                  <button  onclick ="switchTask('${
                    item.id
                  }', 'bad')" class="btn btn-success">
                    <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </td>
              </tr>
  `;
  });
  entryElm.innerHTML = str;

  ttlHours();
};

const displayBadlist = () => {
  //   const badHrsElm = document.getElementById("badhours");
  const badElm = document.getElementById("badList");
  const badList = taskList.filter((item) => item.type === "bad");
  let str = "";
  badList.map((item, i) => {
    str += `
  <tr>
                <td>${i + 1}</td>
                <td>${item.task}</td>
                <td>${item.hour}hr</td>
                <td class="text-end">
                 
                  <button  onclick ="switchTask('${
                    item.id
                  }', 'entry')" class="btn btn-warning">
                    <i class="fa-solid fa-arrow-left"></i>
                  </button>

                   <button  onclick = "deleteItem('${
                     item.id
                   }')"   class="btn btn-danger">
                    <i class="fa-solid fa-trash"></i>
                  </button>

                </td>
              </tr>
  `;
  });
  badElm.innerHTML = str;

  document.getElementById("savedHour").innerHTML = badList.reduce(
    (acc, item) => acc + item.hour,
    0,
  );
};

const randomId = (length = 6) => {
  console.log(taskList);

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
    taskList = taskList.filter((item) => item.id !== id);
    displayEntrylist();
    displayBadlist();
  }
};

const switchTask = (id, type) => {
  taskList = taskList.map((item) => {
    if (item.id === id) {
      item.type = type;
    }
    return item;
  });
  displayEntrylist();
  displayBadlist();
};

const ttlHours = () => {
  const totalHours = taskList.reduce((acc, item) => {
    return acc + item.hour;
  }, 0);

  document.getElementById("ttlHours").innerHTML = totalHours;

  return totalHours;
};

// const savedHours = () => {

// };
