import { Module } from '@nestjs/common';
import { FlightsService} from './flights-service/flights-service.service';
import { FlightsController } from './flights-controller/flights-controller.controller';
import { SoapModule, SoapModuleOptions } from 'nestjs-soap';

@Module({
    imports: [ SoapModule.forRootAsync({
        clientName: 'Soap_Client',
        useFactory: async(): Promise<SoapModuleOptions> => ({
            clientName: 'Soap_Client',
            uri: 'http://webservices.oorsprong.org/websamples.countryinfo/CountryInfoService.wso?WSDL'
        }), 
    })],
    providers: [FlightsService],
    controllers: [FlightsController]
})
export class FlightsModule {}
