import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Controller("/movies")
export class CreateMovieController {
  constructor(private prisma: PrismaService) {}

  @Post()
  @HttpCode(201)
  async handle(@Body() body: any) {
    const { name, genre, year, director } = body;
    await this.prisma.movie.create({
      data: {
        name,
        genre,
        year,
        director,
      },
    });
  }
}
