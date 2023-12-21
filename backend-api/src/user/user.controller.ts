import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { SignUpUserDto } from './dto/signup-user.dto';
import { SigninUserDto } from './dto/signin-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Roles } from 'src/auth/roles.decorator';
import { UserType } from './enum/user-type.enum';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  @ApiOperation({
    summary: 'User Sign Up',
    description: 'Register a new user.',
  })
  async signUp(@Body() signUpUserDto: SignUpUserDto) {
    return await this.userService.signUp(signUpUserDto);
  }

  @Post('signin')
  @ApiOperation({
    summary: 'User Sign In',
    description: 'Authenticate and sign in a user.',
  })
  async signIn(@Body() signInUserDto: SigninUserDto) {
    return await this.userService.signIn(signInUserDto);
  }

  @Get(':userId')
  @UseGuards(AuthGuard)
  @Roles(UserType.Client)
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Get User Details',
    description: 'Retrieve details of a specific user.',
  })
  async fetchUserDetails(@Param('userId') userId: string) {
    return await this.userService.fetchParticularUserDetails(userId);
  }
}
