import { makeApiRequst } from './etender';

class App {
    /** Entry point of our app */
    public static async start() {
        const { data: { result: { tender } } } = await makeApiRequst({
            PriceFrom: 50000,
        });
        console.log(tender[0]);
        // tender.forEach((element: any) => {
        //     console.log(element.title, element.tenderValue)
        // });
    }
}

App.start();
