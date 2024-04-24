import { Module } from "@nestjs/common";
import { PrismaService } from "./prisma/prisma.service";
import { CreateAccountController } from "./controllers/create-account.controller";
import { CreateMovieController } from "./controllers/create-movie.controller";

@Module({
  controllers: [CreateAccountController, CreateMovieController],
  providers: [PrismaService],
})
export class AppModule {}
