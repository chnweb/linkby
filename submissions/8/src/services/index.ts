import { Application } from '../declarations';
import accounts from './accounts/accounts.service';
import campaigns from './campaigns/campaigns.service';
import clicks from './clicks/clicks.service';
// Don't remove this comment. It's needed to format import lines nicely.

export default function (app: Application): void {
  app.configure(accounts);
  app.configure(campaigns);
  app.configure(clicks);
}
