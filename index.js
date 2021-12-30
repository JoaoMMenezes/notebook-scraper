const app = require('express')()
const PORT = 8080

const puppeteer = require('puppeteer');

app.get('/:brand',  (req, response) => {
    // Pupeteer function
    async function getNotebooks(){
        const browser = await puppeteer.launch({headless: true});
        const page = await browser.newPage();
        await page.goto('https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops');
        
        const brand = req.params.brand

        // getting data:
        const lenovoData = await page.evaluate(function(brand){
            const nodeList = document.querySelectorAll('div.thumbnail')
            const titleArray = [...nodeList]

            // Brand filter
            const list = titleArray.filter( function(iten) {
                if (iten.children.item(1).children.item(1).children.item(0).title.includes(brand)) {
                    return true //pass
                }
                return false //skip
            }
            ).map( iten => {
                return {
                    name: iten.children.item(1).children.item(1).children.item(0).title,
                    url: iten.children.item(1).children.item(1).children.item(0).href,
                    description: iten.children.item(1).children.item(2).innerText,
                    price: iten.children.item(1).children.item(0).innerText,
                    numbersOfReviews: iten.children.item(2).children.item(0).innerText,
                    reviewRate: iten.children.item(2).children.item(1).children.length
                }
            })      
            return list
        }, brand);
        await browser.close();
        return lenovoData
    }

    getNotebooks().then(lenovoData => response.send(lenovoData))
})

app.listen(PORT, console.log(`API working on http://localhost:${PORT}`))