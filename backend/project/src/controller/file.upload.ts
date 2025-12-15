// import { Controller, Post, Req, BadRequestException } from '@nestjs/common';
// import type { FastifyRequest } from 'fastify'; // ✅ FIX 1 (import type)
// import * as fs from 'fs';
// import * as path from 'path';
 

// @Controller('upload')
// export class UploadController {
//   @Post()
//   async uploadFile(@Req() req: FastifyRequest) {
//     const data = await req.file();

//     // ✅ FIX 2 — handle undefined file
//     if (!data) {
//       throw new BadRequestException('No file provided');
//     }

//     // Ensure upload directory
//     const uploadPath = path.join(process.cwd(), 'uploads');
//     if (!fs.existsSync(uploadPath)) {
//       fs.mkdirSync(uploadPath);
//     }

//     const uniqueName =
//       Date.now() +
//       '-' +
//       Math.round(Math.random() * 1e9) +
//       path.extname(data.filename);

//     const filePath = path.join(uploadPath, uniqueName);

//     // Save file
//     await new Promise<void>((resolve, reject) => {
//       const stream = fs.createWriteStream(filePath);
//       data.file.pipe(stream);
//       stream.on('finish', resolve);
//       stream.on('error', reject);
//     });

//     return {
//       message: 'File uploaded successfully',
//       originalName: data.filename,
//       savedAs: uniqueName,
//       path: filePath,
//     };
//   }
// }












 
   

//     //  @Controller('upload')
//     //  export class UploadController {
//     //    @Post()
//     //    @UseInterceptors(FileInterceptor('file', {
//     //      storage: diskStorage({
//     //        destination: './uploads',
//     //        filename: (req, file, callback) => {
//     //          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//     //          callback(null, `${file.fieldname}-${uniqueSuffix}${extname(file.originalname)}`);
//     //        },
//     //      }),
//     //    }))
//     //    uploadFile(@UploadedFile() file: File) { // ✅ Use the imported File type
//     //      console.log(file);
//     //      return {
//     //        filename: file.filename,
//     //        path: file.path,
//     //      };
//     //    }
//     //  }
     