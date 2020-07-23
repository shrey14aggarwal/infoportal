import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { UsersModel } from './model/users-model';
import { Usersmodel } from './usersmodel';
import { InfoModel } from './model/info-model';


export class Info2Component{

  constructor(
    first: string,
    last: string,
    gender : string, 
    private httpClient:HttpClient
  ){}

}

export class User{
  constructor(
    public status:string,
     ) {}
  
}
@Injectable({
  providedIn: 'root'
})
export class InfoServiceService {
  

  constructor(private http: HttpClient) { }

   public getInfo() {
   
    return this.http.get<InfoModel[]>('http://localhost:8080/info');
  }

 

  public createInfo(userinfo){
   
    return this.http.post<InfoModel>('http://localhost:8080/insertInfo', userinfo);
  }

  public deleteInfo(id){
    console.log(id)

    return this.http.post<InfoModel>('http://localhost:8080/delete', id);
  }

  public getSingleInfo(id){
  
    return this.http.post<InfoModel>('http://localhost:8080/get', id);
  }

  public editInfo(userinfo){

    return this.http.post<InfoModel>('http://localhost:8080/edit', userinfo);
  }

  public getSingleUser(usermodel)
  {
    console.log(usermodel)
    return this.http.post<Usersmodel>('http://localhost:8080/getUser', usermodel);
  }

  public createUser(usermodel){

    return this.http.post<Usersmodel>('http://localhost:8080/createUser', usermodel)
  }

  checkusernameandpassword(name: string, password: string, dbname : string, dbpassword: string)
  {
  
    if(name==dbname && password ==dbpassword)
    {
      localStorage.setItem('username', dbname)
      return true;
    }
    else
    {
      localStorage.clear();
      return false;
    }
  }
}
