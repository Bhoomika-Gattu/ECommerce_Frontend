export class Product {

    constructor(
        public id: number,
        public name: string,
        public title: string,
        public description: string,
        public price: number,
        public imageUrl: string,
        public isActive: string,
        public quantity: number,
        public createdDate: Date,
        public updatedDate: Date
    ){}
}
