import { Body, Controller, Delete, Get, Param, Post, Put, Res } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Response } from 'express';
// GenericController
import { GenericController } from './generic.controller';


@ApiTags('Auth')
@Controller('auth')
class AuthController {
    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService,
    ) {}

    @Post('login')
    @ApiOperation({
        summary: 'Login a user',
        operationId: 'loginUser',
    })
    @ApiResponse({
        status: 200,
        description: 'User successfully logged in',
        type: String, // Token only
    })
    async login(@Body() loginDto: LoginDto, @Res() res: Response): Promise<Response<GetUserDto | null | undefined>> {
        const user = await this.authService.login(loginDto);
        return res.status(200).json(user);
    }
}