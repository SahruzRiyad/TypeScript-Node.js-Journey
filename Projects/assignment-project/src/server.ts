import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function main() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log('Database Successfully Connected!');
        app.listen(config.port, () => {
            console.log(`Listening from PORT: ${config.port}`);
        });
    } catch (err) {
        console.log(err);
    }
}

main();
