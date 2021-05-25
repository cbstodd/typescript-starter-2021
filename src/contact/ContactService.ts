import {Contact} from './ContactModel';

console.log('See this in your browser console: Typescript Webpack Starter Launched');

export const generateId = (): string => {
    const newArray: Uint32Array = new Uint32Array(8);
    window.crypto.getRandomValues(newArray);
    let str = '';
    for (let i = 0; i < newArray.length; i++) {
        str += (i < 2 || i > 5 ? '' : '-') + newArray[i].toString(16).slice(-4);
    }
    console.info(str);
    return str;
};

console.info('GenteratedIdOutside: ', generateId());

export class Greetings extends Contact {

    // TODO: Learn about super and constructor functions in Typescript.
    // constructor() {
    //     super Greetings(0, 0, '', '', '');
    //     // super.newContact();
    // }

    public greetingMsg(): string {
        return `Hello, ${this.firstName} ${this.lastName}, Thank you for subscribing to colinstodd.com`;
    }

    public getInfo(contactInfo: Contact): Contact {
        return contactInfo
    };

}
