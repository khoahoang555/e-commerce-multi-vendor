export class ItemEvent {
    constructor(
        public id: number,
        public title: string, 
        public type: number,  
        public image?: string,
        public timeCountDown?: string) {
    }

    deserialize(input: any) {
        Object.assign(this, input);
        return this;
    }
}