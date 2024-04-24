import { Controller, HttpCode, Post } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Controller("/accounts")
export class CreateAccountController {
  constructor(private prisma: PrismaService) {}

  @Post()
  @HttpCode(201)
  async handle() {
    const name = "John Doe";
    const email = "johndoe@example.com";
    const password = "12345";

    await this.prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
  }
}
