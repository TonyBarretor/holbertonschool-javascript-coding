import epxress from 'express';
import routes from './routes/index';

const app = epxress();
const port = 1245;

app.use('/', routes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

export default app;
