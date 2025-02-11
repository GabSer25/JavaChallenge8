// Task 1 - Employee Salary Calculation

// Function to calculate net salary
function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
    return `Net Salary: $${netSalary.toFixed(2)}`;
}

// Test cases
console.log(calculateSalary(5000, 500, 0.1)); // Expected output: "Net Salary: $5000.00"
console.log(calculateSalary(7000, 1000, 0.15)); // Expected output: "Net Salary: $6950.00"

// Task 2 - Product Price After Discount

// Function expression to calculate the final price after discount
const calculateDiscount = function(price, discountRate) {
    let finalPrice = price - (price * discountRate);
    return `Final Price: $${finalPrice.toFixed(2)}`;
}

// Test cases
console.log(calculateDiscount(100, 0.2)); // Expected output: "Final Price: $80.00"
console.log(calculateDiscount(250, 0.15)); // Expected output: "Final Price: $212.50"

// Task 3 - Service Fee Calculation

// Arrow function to calculate service fee based on service type
const calculateServiceFee = (amount, serviceType) => {
    let feePercentage = serviceType === "Premium" ? 0.15 : serviceType === "Standard" ? 0.10 : 0.05;
    let serviceFee = amount * feePercentage;
    return `Service Fee: $${serviceFee.toFixed(2)}`;
}

// Test cases
console.log(calculateServiceFee(200, "Premium")); // Expected output: "Service Fee: $30.00"
console.log(calculateServiceFee(500, "Standard")); // Expected output: "Service Fee: $50.00"

