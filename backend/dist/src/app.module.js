"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const hotels_module_1 = require("./hotels/hotels.module");
const branches_module_1 = require("./branches/branches.module");
const users_module_1 = require("./users/users.module");
const roles_module_1 = require("./roles/roles.module");
const auth_module_1 = require("./auth/auth.module");
const categories_module_1 = require("./categories/categories.module");
const menu_items_module_1 = require("./menu-items/menu-items.module");
const tables_module_1 = require("./tables/tables.module");
const orders_module_1 = require("./orders/orders.module");
const suppliers_module_1 = require("./suppliers/suppliers.module");
const ingredients_module_1 = require("./ingredients/ingredients.module");
const recipes_module_1 = require("./recipes/recipes.module");
const billing_module_1 = require("./billing/billing.module");
const reporting_module_1 = require("./reporting/reporting.module");
const gateway_gateway_1 = require("./gateway/gateway.gateway");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'postgres',
                    host: configService.get('DATABASE_HOST'),
                    port: configService.get('DATABASE_PORT'),
                    username: configService.get('DATABASE_USER'),
                    password: configService.get('DATABASE_PASSWORD'),
                    database: configService.get('DATABASE_NAME'),
                    autoLoadEntities: true,
                    synchronize: true,
                }),
                inject: [config_1.ConfigService],
            }),
            hotels_module_1.HotelsModule,
            branches_module_1.BranchesModule,
            users_module_1.UsersModule,
            roles_module_1.RolesModule,
            auth_module_1.AuthModule,
            categories_module_1.CategoriesModule,
            menu_items_module_1.MenuItemsModule,
            tables_module_1.TablesModule,
            orders_module_1.OrdersModule,
            suppliers_module_1.SuppliersModule,
            ingredients_module_1.IngredientsModule,
            recipes_module_1.RecipesModule,
            billing_module_1.BillingModule,
            reporting_module_1.ReportingModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, gateway_gateway_1.GatewayGateway],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map