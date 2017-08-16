import { Router, ActivatedRouteSnapshot, CanActivate} from '@angular/router';
import { Injectable } from '@angular/core';
    
// Services
import { KeyService } from './keys.service';

@Injectable()
export class routeActivatorService implements CanActivate {
    constructor(private keyService: KeyService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot){
        const key = this.keyService.hasKey(1);
        let keyExist;
        
        console.log(key)
        
        if(key == 1) {
            keyExist = true;
            this.router.navigate(['/secret'])
        } else {
            keyExist = false;
            this.router.navigate(['/error404'])
        }
        return keyExist;
    }

    
}