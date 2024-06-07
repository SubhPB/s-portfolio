// Byimaan

export function chooseRandomly<T=string>(arr: T[]): T{
    const randomIndex = Math.floor(Math.random() * arr.length)
    return arr[randomIndex]
};