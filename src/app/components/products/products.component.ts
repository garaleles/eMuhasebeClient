import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {HttpService} from "../../services/http.service";
import {SwalService} from "../../services/swal.service";
import {SharedModule} from "../../modules/shared.module";
import {ProductPipe} from "../../pipes/product.pipe";
import {ProductModel} from "../../models/product.model";
import {CategoryModel} from "../../models/category.model";
import {UnitModel} from "../../models/unit.model";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    SharedModule,
    ProductPipe,
    RouterLink
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: ProductModel[] = [];
  category: CategoryModel=new CategoryModel();
  categories: CategoryModel[] = [];
  categoryId: string = "";
  unit: UnitModel=new UnitModel();
  units: UnitModel[] = [];
  unitId: string = "";
  search: string = "";

  @ViewChild("createModalCloseBtn") createModalCloseBtn: ElementRef<HTMLButtonElement> | undefined;
  @ViewChild("updateModalCloseBtn") updateModalCloseBtn: ElementRef<HTMLButtonElement> | undefined;
  createModel: ProductModel = new ProductModel();
  updateModel: ProductModel = new ProductModel();
  constructor(
    private http: HttpService,
    private swal: SwalService
  ) { }
  ngOnInit(): void {
    this.getAll();
    this.getAllCategories();
    this.getAllUnits();
  }
  getAll() {
    this.http.post<ProductModel[]>("Products/GetAll", {}, (res) => {
      this.products = res;
    });
  }

  getAllCategories() {
    this.http.post<CategoryModel[]>("Categories/GetAll", {}, (res) => {
      this.categories = res;
    });
  }

  getAllUnits() {
    this.http.post<UnitModel[]>("units/GetAll", {}, (res) => {
      this.units = res;
    });
  }

  create(form: NgForm) {
    if (form.valid) {
      this.http.post<string>("Products/Create", this.createModel, (res) => {
        this.swal.callToast(res);
        this.createModel = new ProductModel();
        this.createModalCloseBtn?.nativeElement.click();
        this.getAll();
      });
    }
  }
  deleteById(model: ProductModel) {
    this.swal.callSwal("Ürünü Sil?", `${model.name} ürününü silmek istiyor musunuz?`, () => {
      this.http.post<string>("Products/DeleteProductById", { id: model.id }, (res) => {
        this.getAll();
        this.swal.callToast(res, "info");
      });
    })
  }
  get(model: ProductModel) {
    this.updateModel = { ...model };
  }
  update(form: NgForm) {
    if (form.valid) {
      this.http.post<string>("Products/Update", this.updateModel, (res) => {
        this.swal.callToast(res, "info");
        this.updateModalCloseBtn?.nativeElement.click();
        this.getAll();
      });
    }
  }

}

