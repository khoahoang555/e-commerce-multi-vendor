export class ItemInfo {
    constructor(
        public name: string, 
        public price: number,  
        public rating: number, 
        public totalRating: number, 
        public sold: number, 
        public progress: number,
        public discountNumber?: number, 
        public discountPrice?: number,
        public image?: string) {
    }

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}