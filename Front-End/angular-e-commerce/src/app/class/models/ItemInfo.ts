export class ItemInfo {
    // name: string;
    // price: number;
    // discountNumber: number;
    // discountPrice: number;
    // rating: number;
    // totalRating: number;
    // sold: number;
    // image?: string;

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