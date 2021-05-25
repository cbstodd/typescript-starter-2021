import {Contact} from './Contact';
import {Greetings} from './ContactService';

describe('TypeScript WebPack Starter Tests', () => {
    it('A good way to start buildin an awesome library is by doing Unit Tests 👌🏽', () => {
        const newContact: Contact = new Greetings(0, 0, '', '', '');
        const result: string = newContact.greetingMsg();
        expect(result >= 0 && result <= 10).toBeTruthy();
    });
});
