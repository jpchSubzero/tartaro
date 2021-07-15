import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductResponse } from 'src/app/interfaces/product-response';
import { EshopService } from 'src/app/services/eshop.service';
import { CategoryResponse } from '../../interfaces/category-response';
import { PricesRange } from '../../interfaces/prices-range';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, AfterViewInit {

  categories:CategoryResponse[] = [];
  products:ProductResponse[] = [];
  allProducts:ProductResponse[] = [];

  prices:PricesRange[] = [];
  
  filterByPriceValue:number = -1;
  filterByCategoryValue:number = -1;

  constructor(
    private eshopService:EshopService,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) { 
    this.prices.push(
      {low:0, high:9},
      {low:10, high:19},
      {low:20, high:29},
      {low:30, high:39}
    );
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    const criteria = this.activatedRoute.snapshot.params.criteria.toLowerCase();
    this.eshopService.getProducts().subscribe((response:ProductResponse[]) => {
      this.allProducts = response.filter(x => x.name.toLowerCase().indexOf(criteria) > 0);
      this.products = this.allProducts;
    });
    
    this.eshopService.getCategories().subscribe((response:CategoryResponse[]) => {
      this.categories = response;
    });
  }

  getProductById(product:ProductResponse):void {
    this.router.navigate(['/product', product.id]);
  }  

  applyFilter() {
    this.products = this.allProducts;
    this.filterByPrice();
    this.filterByCategory();
  }

  clearFilters() {
    this.filterByCategoryValue = -1;
    this.filterByPriceValue = -1;
    this.products = this.allProducts;
  }

  filterByPrice() {
    if (this.filterByPriceValue >= 0) {
      this.products = this.products.filter(x => x.currentPrice >= this.prices[this.filterByPriceValue].low && x.currentPrice <= this.prices[this.filterByPriceValue].high);
    }
  }  

  filterByCategory() {
    if (this.filterByCategoryValue >= 0) {
      this.products = this.products.filter(x => x.category.id == this.filterByCategoryValue);      
    }
  }  
}
