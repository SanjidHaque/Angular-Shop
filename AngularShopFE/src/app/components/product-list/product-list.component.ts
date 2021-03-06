import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';
import {MatDialog, MatSnackBar} from '@angular/material';

import {Product} from '../../models/product.model';
import {ProductDataStorageService} from '../../services/product-data-storage.service';
import {AddUpdateDialogComponent} from '../../dialogs/add-update-dialog/add-update-dialog.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private snackBar: MatSnackBar,
              private route: ActivatedRoute,
              private matDialog: MatDialog,
              private productDataStorageService: ProductDataStorageService) { }

  ngOnInit() {
    this.route.data.subscribe((data: Data) => {
      this.products = data['products'];
    });
  }

  addProduct() {
    this.matDialog.open(AddUpdateDialogComponent,
      {
        hasBackdrop: true,
        disableClose: true,
        width: '500px',
        data: {
          header: 'Add New Product',
          confirmationStatus: false,
          name: '',
          category: ''
        }
      }).afterClosed().subscribe((result: any) => {
        if (result.confirmationStatus) {

          this.productDataStorageService.addProduct(result.product)
            .subscribe((product: Product) => {

              this.products.push(product);
              this.snackBar.open('New Product Added!', '', {
                duration: 10000,
                horizontalPosition: 'right'
              });

            });
        }
    });
  }

  editProduct(product: Product) {
    this.matDialog.open(AddUpdateDialogComponent,
      {
        hasBackdrop: true,
        disableClose: true,
        width: '500px',
        data: {
          header: 'Edit Product',
          confirmationStatus: false,
          name: product.Name,
          category: product.Category
        }
      }).afterClosed().subscribe((result: any) => {

      if (result.confirmationStatus) {

        this.productDataStorageService.editProduct(result.product)
          .subscribe((response: any) => {

            product.Name = result.product.Name;
            product.Category = result.product.Category;
            this.snackBar.open('Product updated!', '', {
              duration: 5000,
              horizontalPosition: 'right'
            });

          });
      }
    });
  }

  deleteProduct(productId: number, index: number) {
    this.productDataStorageService.deleteProduct(productId)
      .subscribe((response: any) => {

        this.products.splice(index, 1);
        this.snackBar.open('Product deleted!', '', {
          duration: 5000,
          horizontalPosition: 'right'
        });

      });
  }
}

