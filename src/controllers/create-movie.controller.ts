import { Controller, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Controller("/movies")
@UseGuards(AuthGuard("jwt"))
export class CreateMovieController {
  constructor() {}

  @Post()
  async handle() {
    return "movies ok authorized";
  }
}
