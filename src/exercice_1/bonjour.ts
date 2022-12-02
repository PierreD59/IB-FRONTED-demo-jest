/**
 * Une fonction qui prend un prénom en paramètre et retourne bonjour suivit du prénom
 * @param firstname 
 * @returns `bonjour ${firstname}`
 */
 export function hello(firstname:string): string
 {
     return `Bonjour ${firstname}`;
 }
 console.log(hello('Pierre'));