import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
// Service
import { GenericService } from './generic.service';


@Injectable()
export class RoleActionService extends GenericService<GetRoleActionDto, SetRoleActionDto> {
    private readonly loggedUsers: Record<number, string>;

    constructor(prisma: PrismaService) {
        super(prisma);
        this.loggedUsers = {};
    }

    async login(username: string, password: string): Promise<GetRoleActionDto | null> {
        const user = await this.prisma.user.findFirstOrThrow({
            where: { username },
        });

        if (!user) {
            throw new Error('User not found');
        }

        const roleAction = await this.prisma.roleAction.findFirst({
            where: { userId: user.id },
        });

        if (roleAction) {
            this.loggedUsers[user.id] = username;
            return roleAction;
        }

        return null;
    }
}
