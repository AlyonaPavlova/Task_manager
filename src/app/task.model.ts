export class Item {
  constructor (
    public task: string,
    public description: string,
    public date: string,
    public done: boolean = false,
    public id?: number
  ) {}
}

export interface Items {
  items: Item[]
}
