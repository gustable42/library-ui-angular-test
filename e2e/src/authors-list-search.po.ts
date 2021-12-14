import { browser, by, element } from 'protractor';

export class AuthorsListSearch {
    get searchInputLabel() {return element(by.className('search-field-label')).getText(); }
    get searchField() { return element(by.className('search-field')); }
    get searchButton() { return element(by.buttonText('Buscar')) }
    get authorCards() { return element.all(by.className('author')); }

    wait(miliseconds: number) {
        browser.sleep(miliseconds);
    }

    navigateToAuthors() {
        return browser.get('/authors') as Promise<any>;
    }
}