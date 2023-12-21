import { app } from './server/server';

app.listen(process.env.PORT || 3100, () => console.log('Running!'));