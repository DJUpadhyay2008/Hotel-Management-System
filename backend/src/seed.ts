import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { Hotel } from './hotels/entities/hotel.entity';
import { Branch } from './branches/entities/branch.entity';
import { Role } from './roles/entities/role.entity';
import { User } from './users/entities/user.entity';
import { Table } from './tables/entities/table.entity';
import * as bcrypt from 'bcryptjs';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const dataSource = app.get(DataSource);

    console.log('🌱 Seeding started...');

    // 1. Create Hotel
    const hotelRepo = dataSource.getRepository(Hotel);
    let hotel = await hotelRepo.findOneBy({ name: 'Grand Hotel' });
    if (!hotel) {
        hotel = hotelRepo.create({
            name: 'Grand Hotel',
        });
        await hotelRepo.save(hotel);
        console.log('✅ Hotel created');
    }

    // 2. Create Branch
    const branchRepo = dataSource.getRepository(Branch);
    let branch = await branchRepo.findOneBy({ name: 'Downtown Branch' });
    if (!branch) {
        branch = branchRepo.create({
            name: 'Downtown Branch',
            address: 'Downtown',
            hotel: hotel,
        });
        await branchRepo.save(branch);
        console.log('✅ Branch created');
    }

    // 3. Create Roles
    const roleRepo = dataSource.getRepository(Role);
    const roles = ['OWNER', 'MANAGER', 'CAPTAIN', 'CHEF', 'WAITER'];
    const roleMap: Record<string, Role> = {};

    for (const roleName of roles) {
        let role = await roleRepo.findOneBy({ name: roleName });
        if (!role) {
            role = roleRepo.create({ name: roleName });
            await roleRepo.save(role);
        }
        roleMap[roleName] = role;
    }
    console.log('✅ Roles created');

    // 4. Create Users
    const userRepo = dataSource.getRepository(User);

    // Super Admin / Owner
    const ownerExists = await userRepo.findOneBy({ phone: '9999999999' });
    if (!ownerExists) {
        const password = await bcrypt.hash('admin123', 10);
        const owner = userRepo.create({
            name: 'Super Owner',
            phone: '9999999999',
            password: password,
            role: roleMap['OWNER'],
            hotel: hotel,
            branch: branch,
        });
        await userRepo.save(owner);
        console.log('✅ Owner created (Phone: 9999999999, Pass: admin123)');
    }

    // Captain
    const captainExists = await userRepo.findOneBy({ phone: '8888888888' });
    if (!captainExists) {
        const password = await bcrypt.hash('captain123', 10);
        const captain = userRepo.create({
            name: 'John Captain',
            phone: '8888888888',
            password: password,
            role: roleMap['CAPTAIN'],
            hotel: hotel,
            branch: branch,
        });
        await userRepo.save(captain);
        console.log('✅ Captain created (Phone: 8888888888, Pass: captain123)');
    }

    // 5. Create Tables
    const tableRepo = dataSource.getRepository(Table);
    const tableCount = await tableRepo.count({ where: { branchId: branch.id } });
    if (tableCount === 0) {
        for (let i = 1; i <= 10; i++) {
            const table = tableRepo.create({
                tableNumber: `T${i}`,
                capacity: 4,
                qrCode: `QR_T${i}_${Date.now()}`,
                branch: branch,
            });
            await tableRepo.save(table);
        }
        console.log('✅ 10 Tables created');
    }

    console.log('🎉 Seeding completed!');
    await app.close();
}

bootstrap();
