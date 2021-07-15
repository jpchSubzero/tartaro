import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginRequest } from '../interfaces/login-request';
import { LoginResponse } from '../interfaces/login-response';
import { LocalStorageService } from './local-storage.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { RegisterRequest } from '../interfaces/register-request';
import { ProductResponse } from '../interfaces/product-response';
import { ShoppingCartRequest } from '../interfaces/shopping-cart-request-interface';
import { ShoppingCartResponse } from '../interfaces/shopping-cart-response-interface';
import { CustomerResponse } from '../interfaces/customers-response';
import { CategoryResponse } from '../interfaces/category-response';
import { ProductRequest } from '../interfaces/product-request';
import { CategoryRequest } from '../interfaces/category-request';

@Injectable({
  providedIn: 'root'
})
export class EshopService {

  public customer:CustomerResponse = undefined!;
  public user:LoginResponse = undefined!;
  public products:ProductResponse[] = [];
  public categories:CategoryResponse[] = [];
  public userAuthorized:boolean = false;

  constructor(
    private http: HttpClient,
    private localStorage:LocalStorageService
  ) { }

  logInUser(login: LoginRequest):Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${environment.baseUrl}${environment.api}${environment.account}/login`, login);
  }

  logInCustomer(login: LoginRequest):Observable<CustomerResponse> {
    return this.http.post<CustomerResponse>(`${environment.baseUrl}${environment.api}${environment.customers}/login`, login);
  }

  signInCustomer(register: RegisterRequest):Observable<{}> {
    return this.http.post<CustomerResponse>(`${environment.baseUrl}${environment.api}${environment.customers}`, register, this.getHeadersRequest());
  }

  getCategories(): Observable<CategoryResponse[]> {
    return this.http.get<CategoryResponse[]>(`${environment.baseUrl}${environment.api}${environment.categories}`, this.getHeadersRequest());
  }

  createCategory(category:CategoryRequest) {
    return this.http.post<CategoryResponse>(`${environment.baseUrl}${environment.api}${environment.categories}`, category, this.getHeadersRequest());
  }

  updateCategory(category:CategoryRequest) {
    return this.http.put<CategoryResponse>(`${environment.baseUrl}${environment.api}${environment.categories}/${category.id}`, category, this.getHeadersRequest());
  }

  deleteCategory(category:CategoryRequest) {
    return this.http.delete<CategoryResponse>(`${environment.baseUrl}${environment.api}${environment.categories}/${category.id}`, this.getHeadersRequest());
  }

  getProducts(): Observable<ProductResponse[]> {
    return this.http.get<ProductResponse[]>(`${environment.baseUrl}${environment.api}${environment.products}`);
  }

  getProductById(id:string): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(`${environment.baseUrl}${environment.api}${environment.products}/${id}`);
  }

  createProduct(product:ProductRequest) {
    return this.http.post<ProductResponse>(`${environment.baseUrl}${environment.api}${environment.products}`, product, this.getHeadersRequest());
  }

  updateProduct(product:ProductRequest) {
    return this.http.put<ProductResponse>(`${environment.baseUrl}${environment.api}${environment.products}/${product.id}`, product, this.getHeadersRequest());
  }

  deleteProduct(idProduct:number) {
    return this.http.delete<ProductResponse>(`${environment.baseUrl}${environment.api}${environment.products}/${idProduct}`, this.getHeadersRequest());
  }

  getCartByCustomer(customer:CustomerResponse): Observable<ShoppingCartResponse> {
    const params = new HttpParams().set('customerId', customer.id.toString());
    return this.http.get<ShoppingCartResponse>(`${environment.baseUrl}${environment.api}${environment.shoppingCarts}/my_cart`, {params: params});
  }

  getFeatured():ProductResponse[] {
    if (!this.products) {
      this.getProducts().subscribe((response:ProductResponse[]) => {
        this.products = response;
        return this.products.filter(x => x.isFeatured);      
      });
    }
    return this.products.filter(x => x.isFeatured);      
  }

  saveCartItem(cartItem:ShoppingCartRequest):Observable<ShoppingCartResponse>{
    return this.http.post<ShoppingCartResponse>(`${environment.baseUrl}${environment.api}${environment.shoppingCarts}/add_item`, cartItem);
  }

  removeCartItem(cartItem:ShoppingCartRequest):Observable<ShoppingCartResponse>{
    return this.http.put<ShoppingCartResponse>(`${environment.baseUrl}${environment.api}${environment.shoppingCarts}/remove_item`, cartItem);

  }

  private getHeadersRequest():{ headers:HttpHeaders } {
    const userString = this.localStorage.readStorage(environment.storageCustomer);
    let token:LoginResponse = {
      accessToken:'',
      email:'',
      firstName:'',
      id:'',
      lastName:''
    };

    if (userString) {
      const helper = new JwtHelperService();
      token = JSON.parse(this.localStorage.readStorage(environment.storageUser));

      const isExpired = helper.isTokenExpired(token.accessToken);
  
      if (isExpired) {
        console.log('Expiró');
        this.customer = undefined!;
        this.user = undefined!;
        this.localStorage.deleteStorage(environment.storageCustomer);
        this.localStorage.deleteStorage(environment.storageUser);

      }  
    }
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization': `Bearer ${token.accessToken}`
    }
    
    return { headers: new HttpHeaders(headerDict) };
  }
}
