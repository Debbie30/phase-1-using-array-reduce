const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

function reducer(batteries) {
    return batteries.reduce((total, battery) => total + battery, 0);
}

// Example usage:
const batteries = [4, 5, 3, 4, 4, 6, 5];
const totalBatteries = reducer(batteries);
console.log(totalBatteries); // Output: 31


