// import { BullModule } from '@nestjs/bull';
// import { Module } from '@nestjs/common';
// import { EmailProcessor } from '../processor/email.processor';
// import { EmailService } from '../service/email.service';
// import { EmailController } from '../controller/email.controller';

// @Module({
//   imports: [
//     BullModule.registerQueue({
//       name: 'emailQueue',
//     }),
//   ],
//   controllers: [EmailController],
//   providers: [EmailProcessor, EmailService],
//   exports: [EmailService],
// })
// export class EmailModule {}
