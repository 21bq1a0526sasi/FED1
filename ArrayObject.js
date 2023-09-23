<html>
<body>
<script>
const products = [
  { name: "Product 1", price: 20, category: "Electronics" },
  { name: "Product 2", price: 30, category: "Clothes" },
  { name: "Product 3", price: 40, category: "Electronics" },
  { name: "Product 4", price: 50, category: "Clothes" },
  { name: "Product 5", price: 60, category: "Clothes" },
  { name: "Product 6", price: 70, category: "Electronics" },
  { name: "Product 7", price: 80, category: "Clothes" },
  { name: "Product 8", price: 90, category: "Electronics" }
];

// Use reduce to create a dictionary with category as the key and an array of products as the value
const productsByCategory = products.reduce((acc, product) => {
  const category = product.category;
  if (!acc[category]) {
    acc[category] = [];
  }
  acc[category].push(product);
  return acc;
}, {});

// Use map to calculate the average price for each category
const avgPriceByCategory = Object.keys(productsByCategory).map(category => {
  const sum = productsByCategory[category].reduce((acc, product) => acc + product.price, 0);
  return { category: category, average: sum / productsByCategory[category].length };
});

// Use filter to only select categories with an average above a certain threshold
const highPricedCategories = avgPriceByCategory.filter(category => category.average > 50);

console.log(highPricedCategories);

</script>
</body>
</html>
