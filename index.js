let product = {
  id: 1,
  name: "Product A",
  status: "Manufactured"
};

function updateStatus(newStatus) {
  product.status = newStatus;
  console.log("Updated Status:", product);
}

updateStatus("Shipped");
