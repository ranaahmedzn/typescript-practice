enum TShirtSizes {
    Medium = "M",
    Large = "L",
    ExtraLarge = "XL"
}

enum TShirtColors {
    Black = "Black",
    White = "White",
    Olive = "Olive"
}

type TShirt = {
    size: TShirtSizes;
    color: TShirtColors;
    price: number;
}

// available t-shirt sizes on the production house are: Medium, Large, Extra Large
// available t-shirt colors on the production house are: Black, White, Olive

const tshirt1: TShirt = {
    size: TShirtSizes.Medium,
    color: TShirtColors.Black,
    price: 19.99
};

const tshirt2: TShirt = {
    size: TShirtSizes.Large,
    color: TShirtColors.White,
    price: 21.99
};

const tshirt3: TShirt = {
    size: TShirtSizes.ExtraLarge,
    color: TShirtColors.Olive,
    price: 18.99
};
