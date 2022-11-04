import { Module } from '@nestjs/common';
import { PaymentsModule } from './payments/payments.module';
import { RestaurantModule } from './restaurant/restaurant.module';

@Module({
  imports: [PaymentsModule, RestaurantModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
