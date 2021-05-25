import {Contact} from './contact/ContactModel';
import {generateId, Greetings} from './contact/ContactService';

const newUID: string = generateId();
const date: number = Date.now();

const newContact1: Contact = new Greetings(
    {'age': 37},
    {'createdAt': date},
    {'firstName': 'Colin'},
    {'lastName': 'Stodd'},
    {'uid': newUID.toString()}
);

console.table(newContact1);

// newContact1.greetingMsg();
// newContact1.getInfo();


