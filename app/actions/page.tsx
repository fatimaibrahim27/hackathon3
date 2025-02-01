import {menu} from "@/types/menu"



export const addToCart = (menu : menu) => {
    const cart : menu[] = JSON.parse(localStorage.getItem('cart') || '[]')

    const existingProductIndex = cart.findIndex(item => item._id === menu._id)


    if(existingProductIndex > -1) {
        cart[existingProductIndex].inventory +=1
    }
    else {
        cart.push({
            ...menu, inventory:1
        })
    }

    localStorage.setItem('cart', JSON.stringify(cart))
}

export const removeFromCart = (productId : string) => {
    let cart : menu[] =JSON.parse(localStorage.getItem('cart') || '[]')
    cart = cart.filter(item => item._id !== productId)
    localStorage.setItem('cart', JSON.stringify(cart))
}

export const undateCartQuantity = (productId : string, quantity : number) => {
const cart : menu[] = JSON.parse(localStorage.getItem('cart') || '[]')
const productIndex = cart.findIndex(item => item._id === productId)

if(productIndex > -1) {
    cart[productIndex].inventory = quantity
}
}

export const getCartItems = () : menu[] => {
    return JSON.parse(localStorage.getItem('cart') || '[]')
}

