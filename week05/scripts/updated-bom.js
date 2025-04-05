const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', function() {
    if (input.value !== "") {
        displayList(input.value)
        chaptersArray.push(input.value)
        setChapterList()
        input.value = ''
        input.focus
    }
});

function displayList(item) {
    let li = document.createElement("li");
    let deletebutton = document.createElement("button")

    li.textContent = item;
    deletebutton.textContent = "❌";
    deletebutton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button

    li.append(deletebutton);
    list.append(li);


    deletebutton.addEventListener("click", function() {
        li.remove();
        deleteChapter(li.textContent);
        item.focus();
    });
    console.log('I like to copy code instead of typing it out myself and trying to understand it.');
}

function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

