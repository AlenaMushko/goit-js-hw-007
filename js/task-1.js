
const categoriesList = document.querySelector('#categories');

const categoryItems = categoriesList.querySelectorAll('li.item');
const categoriesCount = categoryItems.length;

console.log('Number of categories:', categoriesCount);

categoryItems.forEach(item => {
    const categoryName = item.querySelector('h2').textContent;
    const elementsCount = item.querySelectorAll('li').length;
    console.log('Category:', categoryName);
    console.log('Elements:', elementsCount);
});


Object.assign(categoriesList.style, {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    listStyle: 'none',
});
