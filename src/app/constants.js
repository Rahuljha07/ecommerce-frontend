export const ITEMS_PER_PAGE=9;
export function discountedPrice(item){
    // console.log("discounted constant item",item)
    return Math.round(item.price*(1-item.discountPercentage/100),2)
} ;