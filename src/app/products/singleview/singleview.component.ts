import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-singleview',
  templateUrl: './singleview.component.html',
  styleUrls: ['./singleview.component.css']
})
export class SingleviewComponent {

  id: any
  pdata: any = {}
  constructor(private ds: DataService, private ar: ActivatedRoute, private rout: Router) { }

  ngOnInit(): void {
    this.ar.params.subscribe((data: any) => {
      //console.log(data.id);
      this.id = data.id
      console.log(this.id);
    })
    this.ds.getProduct(this.id).subscribe({
      next: (result: any) => {
        this.pdata = result;
      }
    })
  }
  deleteProduct() {
    this.ds.removeProduct(this.id).subscribe({
      next: (result: any) => {
        this.rout.navigateByUrl("products")
      }
    })
  }
}

