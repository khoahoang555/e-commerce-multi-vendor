import { ItemCategorySubTwo } from './ItemCategorySubTwo';

export class ItemCategorySubOne {
    constructor(
        public id: number,
        public name: string,
        public listCategorySubTwo: Array<ItemCategorySubTwo>
    ) {}
}