import { ApiProperty } from "@nestjs/swagger";

export class AppDto {
  @ApiProperty()
  key: string;
  @ApiProperty()
  prop1: number;
}
