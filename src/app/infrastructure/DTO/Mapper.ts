import { IStateDetails } from '../interfaces/istate-details';

export class mapper {
     mappedData: IStateDetails[] = [];
    
    mapDTO(data: any): IStateDetails[] {
      
        data.forEach(element => {
            let tempData: IStateDetails = <IStateDetails>{};
            tempData.active = element.active;
            tempData.confirmed = element.confirmed;
            tempData.deaths = element.deaths;
            tempData.recovered = element.recovered;
            tempData.state = element.state
            tempData.statecode = element.statecode

            this.mappedData.push(tempData);
        });

        return this.mappedData;
    }
}




