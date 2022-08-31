// Declare variables
var books = [
    {title: 'to catch a mockingbird', author: 'Mike Jameson', publisher: 'penguin', year: '1992'},
    {title: 'Slender Man', author: 'H. G. Wells', publisher: 'Private', year: '1993'},
    {title: 'Rick and Morty', author: 'Don Harmon and Justin Roiland', publisher: 'Adult Swim', year: '2002'},
    {title: 'Family Guy', author: 'seth MacFarlane', publisher: 'Fox TV', year: '2015'},
    {title: 'American Dad', author: 'seth MacFarlane', publisher: 'penguin', year: '1998'},
    {title: 'to catch a predator', author: 'Mike Upton', publisher: 'some dude?', year: '1972'},
]

        // declare variables
        var searchButton = document.getElementById('search')
        var refreshButton = document.getElementById('refresh')
        var addButton = document.getElementById('add')
        var deleteButton = document.getElementById('delete')

function findBook(book, index) {
    const bookIWant = (letters) => {
        return books.filter(book => name.indexOf(books) > -1)
    }
    console.log(bookIWant('is'))
}

function displaySearch() {

}

function refreshPage() {
    
}

function addBook() {

}

function deleteBook() {

}


searchButton.addEventListener('search', button => {
    findBook(),
    displaySearch()
    console.log('search')
})

refreshButton.addEventListener('click', button => {
    refreshPage() 
    console.log('refresh')
})

addButton.addEventListener('click', button => {
    addBook()
    console.log('add')
})
deleteButton.addEventListener('click', button => {
    deleteBook()
    console.log('delete')
})
