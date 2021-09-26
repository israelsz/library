class Book {
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

let library = [];

function createBook() {
    let title = bookTitleInput.value;
    let author = bookAuthorInput.value;
    let pages = bookPagesInput.value;
    let read = bookReadInput.checked;

    let book = new Book(title, author, pages, read);

    library.push(book);
}

function displayForm() {
    darkBackground.classList.add("activate");
    form.classList.add("open");
}

function closeForm() {
    darkBackground.classList.remove("activate");
    form.classList.remove("open");
    bookTitleInput.value = "";
    bookAuthorInput.value = "";
    bookPagesInput.value = 0;
    bookReadInput.checked = false;
}

function removeBook() {
    library.splice(this.i, 1);
    updateDisplay();
}

function updateDisplay() {
    //Delete everything
    bookSection.innerHTML = ""

    //Add all array
    for (let i = 0; i < library.length; i++) {
        const bookCard = document.createElement("div");
        bookCard.classList.add("bookCard");

        const title = document.createElement("h2");
        title.textContent = library[i].title;
        title.classList.add("cardText");

        const author = document.createElement("h3");
        author.textContent = library[i].author;
        author.classList.add("cardText");

        const pages = document.createElement("h3");
        pages.textContent =  `Pages: ${library[i].pages}` ;
        pages.classList.add("cardText");

        const readed = document.createElement("h3");

        if(library[i].read) {
            readed.textContent = "Readed ! c:"
        } else {
            readed.textContent = "Not readed :c"
        }

        readed.classList.add("cardText");

        const btnRemove = document.createElement("button")
        btnRemove.textContent = "Remove";
        btnRemove.classList.add("btnRemove");
        btnRemove.addEventListener("click", removeBook);
        
        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        bookCard.appendChild(readed);
        bookCard.appendChild(btnRemove);
        
        bookSection.appendChild(bookCard);
    }
}

function addBook() {
    createBook();
    updateDisplay();
    closeForm();
}

const btnDisplayForm = document.getElementById("btnDisplayForm");
const btnCloseForm = document.getElementById("btnCloseForm");
const darkBackground = document.querySelector(".backgroundForm");
const form = document.querySelector(".formContainer");

const bookTitleInput = document.getElementById("bookTitle");
const bookAuthorInput = document.getElementById("bookAuthor");
const bookPagesInput = document.getElementById("bookPages");
const bookReadInput = document.getElementById("bookRead");
const btnAddBook = document.getElementById("btnNewBook");

const bookSection = document.getElementById("bookSection");

btnDisplayForm.addEventListener("click", displayForm);
btnCloseForm.addEventListener("click", closeForm);
btnNewBook.addEventListener("click", addBook);
