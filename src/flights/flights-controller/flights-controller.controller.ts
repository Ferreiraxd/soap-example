import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { FlightsService } from '../flights-service/flights-service.service';

@Controller('v1')
export class FlightsController {

    constructor(private flightService: FlightsService){}

    @Get('list-of-languages')
    getSum(@Body() params: any){
        return this.flightService.exampleFunction();
    }

    @Post('country-currency')
    postVariables(@Body() params: any){
        return this.flightService.getCountryCurrencyused(params);
    }

    @Get('country-info')
    getCountryInfo(@Body() params: any){
        return this.flightService.getCountryInfo(params);
    }
}
