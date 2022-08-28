export interface Item {
  readonly name: string;
  quantity: number;
}

export class Items {
  items: Item[];

  constructor() {
    this.items = [
      { name: "potion", quantity: 5 },
      { name: "pokeball", quantity: 10 },
      { name: "rare candy", quantity: 1 },
    ];
  }

  getItem(items: Item[], value: string): Item {
    return items.filter((item: Item) => item.name === value)[0];
  }

  updateInventory(itemName: string, amount: number): number | void {
    const item: Item = this.getItem(this.items, itemName);

    if (item.quantity + amount < 0) {
      console.log(`You're out of ${item.name}s!`);
      return -1;
    }

    item.quantity += amount;
  }

  getItemQuantity(itemName: string): number {
    return this.getItem(this.items, itemName).quantity;
  }

  printItems() {
    this.items.forEach((item: Item) =>
      console.log(`${item.name}: ${item.quantity}\n`)
    );
  }
}
