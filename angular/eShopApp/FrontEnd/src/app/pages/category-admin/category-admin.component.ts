import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryRequest } from 'src/app/interfaces/category-request';
import { CategoryResponse } from 'src/app/interfaces/category-response';
import { EshopService } from 'src/app/services/eshop.service';

@Component({
  selector: 'app-category-admin',
  templateUrl: './category-admin.component.html',
  styleUrls: ['./category-admin.component.css']
})
export class CategoryAdminComponent implements OnInit {

  public categories:CategoryResponse[] = [];
  public selectedCategory:CategoryResponse = undefined!;
  public selectedCategoryIndex:number = 0;

  constructor(
    private eshopService:EshopService
  ) { 
    this.eshopService.getCategories().subscribe((response:CategoryResponse[]) => {
      this.categories = response;
    });
  }

  saveForm(formTemplate: NgForm) {
    if (formTemplate.valid) {
      console.log("Formulario válido");
      console.log(formTemplate.value);    
      console.log(formTemplate.controls['categoryName'].value);
      const newCategory:CategoryRequest = {
        id: this.selectedCategoryIndex > 0 ? this.categories[this.selectedCategoryIndex].id : -1,
        name: formTemplate.controls['categoryName'].value,
      }        
      if (this.selectedCategoryIndex == -1) {
        this.eshopService.createCategory(newCategory).subscribe((response:CategoryResponse) => {
          this.categories.push(response);
          this.eshopService.categories.push(response);
          this.selectedCategoryIndex = response.id;
        });
      } else {
        this.eshopService.updateCategory(newCategory).subscribe((response:CategoryResponse) => {
          this.categories[this.selectedCategoryIndex] = response;
          this.eshopService.categories[this.selectedCategoryIndex] = response;
        });        
      }        
    } else {
      console.log("Formulario inválido");
      Object.values(formTemplate.controls).forEach(x => x.markAsTouched());
      return;
    }
  }
    
  selectCategory(category:any) {
    this.selectedCategoryIndex = category.value;
    this.selectedCategory = this.categories[this.selectedCategoryIndex];
  }  

  createNewCategory() {
    this.selectedCategoryIndex = -1;
    this.selectedCategory = {
      id: this.selectedCategoryIndex,
      name: '',
      createdAt: undefined!,
      updatedAt: undefined!
    }        
  }

  deleteCategory() {
    this.eshopService.deleteCategory(this.selectedCategory).subscribe(() => {
      this.categories.splice(this.selectedCategoryIndex, 1);
      this.eshopService.products.splice(this.selectedCategoryIndex, 1);
      this.selectedCategoryIndex = 0;
    });
  }

  cancelCategory() {
    this.selectedCategoryIndex = 0;
    this.selectedCategory = undefined!;
  }

  ngOnInit(): void {
  }

}
