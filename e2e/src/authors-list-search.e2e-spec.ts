import { browser, logging } from 'protractor';
import { AuthorsListSearch } from './authors-list-search.po';

describe('workspace-project authors-list', () => {
    let page: AuthorsListSearch;

    beforeEach(() => {
        page = new AuthorsListSearch();
    });

    it('Deve navegar até a aba authors e verificar se a label do formulário de busca está correta', async () => {
        await page.navigateToAuthors();
        await expect<any>(page.searchInputLabel).toEqual('Search:', 'O teste não foi como esperado.');
    });

    it('Deve preencher o formulário de busca', async () => {
        await page.navigateToAuthors();
        await page.searchField.sendKeys('Tolkien');
        await expect<any>(page.searchField.getAttribute('value')).toEqual('Tolkien', 'O teste não foi como esperado.');
    });

    it('Deve listar, pelo menos, 1 autor', async () => {
        await page.navigateToAuthors();
        await page.searchField.sendKeys('Tolkien');
        await page.searchButton.click();
        await expect<any>(page.authorCards.count()).toBeGreaterThanOrEqual(1, 'O teste não foi como esperado.');
    });

    it('Deve listar 0 autores', async () => {
        await page.navigateToAuthors();
        await page.searchField.sendKeys('sakhdbahsbfhdsabhkdsa');
        await page.searchButton.click();
        await expect<any>(page.authorCards.count()).toBe(4, 'O teste não foi como esperado.');
    });
})