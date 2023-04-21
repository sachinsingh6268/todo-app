

function addTask() {
    let list = document.getElementById("list");
    const work = document.getElementById("work").value;
    const isImportant = document.getElementById("isImportant");
    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();
    const dueDateTime = document.getElementById("dueDate").value;

    const finalDue = dueDateTime.slice(0, 10) + " | " + dueDateTime.slice(11,);

    // console.log(list, work, isImportant, currentDate, currentTime, dueDateTime);


    // if (isImportant.checked == true) {
    //     console.log("It is important");
    // } else {
    //     console.log("It is not important");
    // }

    const listItem = document.createElement("li");

    listItem.classList.add("item");

    if (isImportant.checked) {
        listItem.className += " important";
    }

    listItem.innerHTML = `<span>${work}</span> <span>${currentDate} | ${currentTime}</span> <span>${finalDue}</span> <button onClick="removeListItem()">Remove</button>`;

    list.appendChild(listItem);

}