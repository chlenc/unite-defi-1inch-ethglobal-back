import cron from 'node-cron';
import { processPendingPayments } from '../services/invoiceService';

export function schedulePendingCheck(): void {
  cron.schedule('* * * * * *', async () => {
    console.log('[Process Pending Payments Cron] ping pending every second');
    await processPendingPayments();
  });

}