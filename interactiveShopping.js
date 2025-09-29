const itemToAdd = document.getElementById('shoppingItem');
const addItemButton = document.getElementById('addbutton');
const shoppingList = document.getElementById('itemList');

addItemButton.addEventListener('click', () => {
    const newItem = itemToAdd.value.trim();

    if (newItem !== '') {
    const newListItem = document.createElement('li');
    newListItem.id = `${newItem}`;
    newListItem.innerHTML = `${newItem} <button type='button' class='editButton'>Edit Item</button> <button type='button' class='removeButton'>Remove Item</button>`;
    console.log(newListItem);
    shoppingList.appendChild(newListItem);
    itemToAdd.value = '';
    }
});

shoppingList.addEventListener('click', () => {
    if (event.target.classList.contains('removeButton')) {
        const itemToRemove = event.target.parentNode;
        shoppingList.removeChild(itemToRemove);
    }
});

shoppingList.addEventListener('click', () => {
    if (event.target.classList.contains('editButton')) {
        const liToEdit = event.target.parentNode;
        liToEdit.innerHTML = `<input type="text" id="edittedShoppingItem" name="edittedShoppingItem" placeholder="Edit Your Shopping Item" required> <button type='button' class='saveItemButton'>Save</button>`;

    }
});

shoppingList.addEventListener('click', () => {
    if (event.target.classList.contains('saveItemButton')) {
        const liToSave = event.target.parentNode;
        liToSave.innerHTML = `${document.getElementById('edittedShoppingItem').value} <button type='button' class='editButton'>Edit Item</button> <button type='button' class='removeButton'>Remove Item</button>`;
    }
});
