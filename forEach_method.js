const fruits = ['kiwi', 'mango', 'apple', 'pear'];
function appendIndex(fruits, index) {
    console.log(`${index}. ${fruits}`);
}
fruits.forEach(appendIndex);

// forEach() method accepts a function that will work on each array item.


// Very often, the function that the forEach() method needs to use is passed in directly into the method call:
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach(function(veggies, index) {
    console.log(`${index}. ${veggies}`);
})