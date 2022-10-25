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
        public discountNumber: number, 
        public discountPrice: number, 
        public rating: number, 
        public totalRating: number, 
        public sold: number, 
        public image?: string) {
        // this.name = name;
        // this.price = price;
        // this.discountNumber = discountNumber;
        // this.discountPrice = discountPrice;
        // this.rating = rating;
        // this.totalRating = totalRating;
        // this.sold = sold;
        // this.image = image;
    }

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}