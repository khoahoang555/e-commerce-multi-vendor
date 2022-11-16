import { ItemCategorySubOne } from './ItemCategorySubOne';

export class ItemCategory {
    constructor(
        public id: number,
        public title: string,
        public image: string,
        public listCategorySubOne: Array<ItemCategorySubOne>
    ) {}
}