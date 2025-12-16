// import { Processor, Process } from '@nestjs/bull';
// import type { Job } from 'bull';

// @Processor('emailQueue')
// export class EmailProcessor {

//   @Process('sendEmail')
//   async handleSendEmail(job: Job) {
//     const { to, subject, text } = job.data;

//     console.log('📧 Sending email');
//     console.log({ to, subject, text });

//     // here you will add nodemailer later

//     return {
//       status: 'Email sent',
//       to,
//     };
//   }
// }
