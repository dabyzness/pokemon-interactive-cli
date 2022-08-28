export class Items {
    constructor() {
        this.items = [
            { name: "potion", quantity: 5 },
            { name: "pokeball", quantity: 10 },
            { name: "rare candy", quantity: 1 },
        ];
    }
    getItem(items, value) {
        return items.filter((item) => item.name === value)[0];
    }
    updateInventory(itemName, amount) {
        const item = this.getItem(this.items, itemName);
        if (item.quantity + amount < 0) {
            console.log(`You're out of ${item.name}s!`);
            return -1;
        }
        item.quantity += amount;
    }
    getItemQuantity(itemName) {
        return this.getItem(this.items, itemName).quantity;
    }
    printItems() {
        this.items.forEach((item) => console.log(`${item.name}: ${item.quantity}\n`));
    }
}
//# sourceMappingURL=Items.js.map