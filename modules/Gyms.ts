export interface Gym {
  readonly location: string;
  completed: boolean;
  readonly difficulty: number;
}

export class Gyms {
  gyms: Gym[];

  constructor() {
    this.gyms = [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ];
  }

  filterGymsArr(gyms: Gym[], key: keyof Gym, value: number | boolean): Gym[] {
    return gyms.filter((gym: Gym) =>
      key === "completed" ? gym[key] === true : gym[key] < value
    );
  }

  getCompletedGyms(): number {
    return this.filterGymsArr(this.gyms, "completed", true).length;
  }
}
