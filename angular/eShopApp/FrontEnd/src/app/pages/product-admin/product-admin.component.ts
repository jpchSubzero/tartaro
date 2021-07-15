import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EshopService } from '../../services/eshop.service';
import { CategoryResponse } from '../../interfaces/category-response';
import { ProductResponse } from 'src/app/interfaces/product-response';
import { ProductRequest } from 'src/app/interfaces/product-request';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent implements OnInit {

  formReactive: FormGroup = undefined!;
  public categories:CategoryResponse[] = [];
  public products:ProductResponse[] = [];
  public selectedProduct:number = 0;

  constructor(
    private formBuilder: FormBuilder,
    private eshopService:EshopService
  ) { 
    this.createForm();    
    this.eshopService.getCategories().subscribe((response:CategoryResponse[]) => {
      this.categories = response;
    });
    this.eshopService.getProducts().subscribe((response:ProductResponse[]) => {
      this.products = response;
    });
  }

  ngOnInit(): void {
  }

  createForm() {
    this.formReactive = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(5)]],
      modelName: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
      modelNumber: ['', [Validators.required, Validators.minLength(10)]],
      productImage: ['', [Validators.required, Validators.minLength(5), , Validators.maxLength(150)]],
      unitCost: ['', [Validators.required]],
      currentPrice: ['', [Validators.required]],
      unitInStock: ['', [Validators.required]],
      categoryId: ['', [Validators.required]],
      isFeatured: []
    });
  }  

  get invalidName () {
    return this.formReactive.get('name')?.invalid && this.formReactive.get('name')?.touched;
  }  

  get invalidDescription () {
    return this.formReactive.get('description')?.invalid && this.formReactive.get('description')?.touched;
  }  

  get invalidModelName () {
    return this.formReactive.get('modelName')?.invalid && this.formReactive.get('modelName')?.touched;
  }  

  get invalidModelNumber () {
    return this.formReactive.get('modelNumber')?.invalid && this.formReactive.get('modelNumber')?.touched;
  }  

  get invalidProductImage () {
    return this.formReactive.get('productImage')?.invalid && this.formReactive.get('productImage')?.touched;
  }    

  get invalidUnitCost () {
    return this.formReactive.get('unitCost')?.invalid && this.formReactive.get('unitCost')?.touched;
  }    

  get invalidCurrentPrice () {
    return this.formReactive.get('currentPrice')?.invalid && this.formReactive.get('currentPrice')?.touched;
  }    

  get invalidUnitInStock () {
    return this.formReactive.get('unitInStock')?.invalid && this.formReactive.get('unitInStock')?.touched;
  }    

  get invalidCategoryId () {
    return this.formReactive.get('categoryId')?.invalid && this.formReactive.get('categoryId')?.touched;
  }  

  saveForm() {
    console.log(this.formReactive.controls);
    if (this.formReactive.valid) {
      console.log("Formulario válido");
      const newProduct:ProductRequest = {
        id: this.products[this.selectedProduct].id,
        name: this.formReactive.controls['name'].value,
        description: this.formReactive.controls['description'].value,
        modelName: this.formReactive.controls['modelName'].value,
        modelNumber: this.formReactive.controls['modelNumber'].value,
        productImage: this.formReactive.controls['productImage'].value,
        unitCost: this.formReactive.controls['unitCost'].value,
        currentPrice: this.formReactive.controls['currentPrice'].value,
        unitInStock: this.formReactive.controls['unitInStock'].value,
        categoryId: this.formReactive.controls['categoryId'].value,
        isFeatured: this.formReactive.controls['isFeatured'].value
      }
      if (this.selectedProduct == -1) {
        this.eshopService.createProduct(newProduct).subscribe((response:ProductResponse) => {
          this.products.push(response);
          this.eshopService.products.push(response);
          this.selectedProduct = response.id;
        });
      } else {
        this.eshopService.updateProduct(newProduct).subscribe((response:ProductResponse) => {
          this.products[this.selectedProduct] = response;
          this.eshopService.products[this.selectedProduct] = response;
        });        
      }
    } else {
      console.log("Formulario inválido");
      Object.values(this.formReactive.controls).forEach(x => {
        if (x instanceof FormGroup) {
          Object.values(x.controls).forEach(y => y.markAsTouched());
        } else {
          x.markAsTouched();
        }
      });
      return;
    }      
  }

  selectProduct(product:any) {
    this.selectedProduct = product.value;
    this.formReactive.reset({
      name: this.products[this.selectedProduct].name,
      description: this.products[this.selectedProduct].description,
      modelName: this.products[this.selectedProduct].modelName,
      modelNumber: this.products[this.selectedProduct].modelNumber,
      productImage: this.products[this.selectedProduct].productImage,
      unitCost: this.products[this.selectedProduct].unitCost,
      currentPrice: this.products[this.selectedProduct].currentPrice,
      unitInStock: this.products[this.selectedProduct].unitInStock,
      categoryId: this.products[this.selectedProduct].category.id,
      isFeatured: this.products[this.selectedProduct].isFeatured
    });
  }  

  createNewProduct() {
    this.selectedProduct = -1;
  }

  deleteProduct() {
    this.eshopService.deleteProduct(this.selectedProduct).subscribe(() => {
      this.products.splice(this.selectedProduct, 1);
      this.eshopService.products.splice(this.selectedProduct, 1);
      this.selectedProduct = 0;
    });
  }

  cancelProduct() {
    this.selectedProduct = 0;
  }

}
