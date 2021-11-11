// Initializes the `clicks` service on path `/clicks`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '../../declarations';
import { Clicks } from './clicks.class';
import createModel from '../../models/clicks.model';
import hooks from './clicks.hooks';

// Add this service to the service type index
declare module '../../declarations' {
  interface ServiceTypes {
    'clicks': Clicks & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/clicks', new Clicks(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('clicks');

  service.hooks(hooks);
}
