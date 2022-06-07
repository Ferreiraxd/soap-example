import { Injectable, Inject } from '@nestjs/common';
import { Client } from 'nestjs-soap';

@Injectable()
export class FlightsService {
    constructor(@Inject('Soap_Client') private readonly mySoapClient: Client){}
    
    async exampleFunction(){
        return new Promise (async (resolve, reject) => {
            await this.mySoapClient.ListOfLanguagesByName( 
                null, (err, res) => {
                    if (res) {
                        resolve(res);
                    } else {
                        reject(err);
                    }
                }
            );
        })
    }

    async getCountryCurrencyused(params){
        return new Promise (async (resolve, reject) => {
            await this.mySoapClient.CountryCurrency( 
                { sCountryISOCode : "CL" }, (err, res) => {
                    if (res) {
                        resolve(res);
                    } else {
                        reject(err);
                    }
                }
            );
        })
    }

    async getCountryInfo(params: any){
        return new Promise (async (resolve, reject) => {
            await this.mySoapClient.FullCountryInfo( 
                { sCountryISOCode : params.code }, (err, res) => {
                    if (res) {
                        resolve(res);
                    } else {
                        reject(err);
                    }
                }
            );
        })
    }
}
