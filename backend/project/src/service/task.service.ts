// import { Injectable, Logger } from '@nestjs/common';
// import { Cron, CronExpression } from '@nestjs/schedule';
// import { writeFileSync, appendFileSync } from 'fs';

// @Injectable()
// export class Taskservice {
//   private readonly logger = new Logger(Taskservice.name);

//   private counter = 0; // in-memory counter example

//   // Cron job running every 5 seconds (logs counter)
//   @Cron('*/5 * * * * *')
//   handleCron() {
//     this.counter += 1;
//     this.logger.debug(`Cron job ran. Counter = ${this.counter}`);
//   }

//   // Cron job writing to a file every 10 seconds
//   @Cron('*/10 * * * * *')
//   handleFileCron() {
//     appendFileSync('cron-log.txt', `Cron ran at ${new Date()}\n`);
//     this.logger.debug('Appended to file cron-log.txt');
//   }

//   // Example: if you want to update DB (requires injecting a repository)
//   // @Cron('*/30 * * * * *')
//   // async handleDbCron() {
//   //   await this.portfolioRepo.update({ status: 'pending' }, { status: 'processed' });
//   //   this.logger.debug('Updated portfolio status in DB');
//   // }
// }
