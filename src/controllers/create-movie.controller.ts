import { Controller, HttpCode, Post } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Controller("/movies")
export class CreateMovieController {
  constructor(private prisma: PrismaService) {}

  @Post()
  @HttpCode(201)
  async handle() {
    const name = "Dune 2";
    const genre = "Sci Fi";
    const year = 2024;
    const director = "Dennis Villeneuve";

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
