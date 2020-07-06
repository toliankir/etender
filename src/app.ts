import { makeApiRequst } from './etender';

class App {
    /** Entry point of our app */
    public static async start() {
        const { data: result } = await makeApiRequst();
        console.log(result);
    }
}

App.start();