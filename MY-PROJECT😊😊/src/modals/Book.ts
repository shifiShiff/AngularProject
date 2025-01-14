export class Book{
    constructor(public Code :number,
        public Name :string,
        public Author : string ,
        public IsBorrowing :boolean,
        public DateOfBuying :Date,
        public NumOfPages:number
    ){}
}