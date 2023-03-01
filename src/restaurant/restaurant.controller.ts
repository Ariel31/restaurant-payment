import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('restaurants')
@Controller('restaurants')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {}

  @ApiOperation({summary: 'create new restaurant'})
  @Post()
  create(@Body() createRestaurantDto: CreateRestaurantDto) {
    return this.restaurantService.create(createRestaurantDto);
  }

  @ApiOperation({summary: 'get restaurant details'})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.restaurantService.findOne(id);
  }

  @ApiOperation({summary: 'get all restaurants data (maybe user wants to see which ones are working with us)'})
  @Get()
  findAll() {
    return;
  }

  @ApiOperation({summary: 'gets the menu of a restaurant'})
  @Get('/menu:id')
  getMenu(@Param('id') id: string) {
    return this.restaurantService.findOne(id);
  }

  @ApiOperation({summary: 'updates any restaurant details'})
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateRestaurantDto: UpdateRestaurantDto,
  ) {
    return this.restaurantService.update(id, updateRestaurantDto);
  }

  @ApiOperation({summary: 'deletes a restaurant'})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.restaurantService.remove(id);
  }
}
