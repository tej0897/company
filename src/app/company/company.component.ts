import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Company } from './company';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  constructor(private companyService: CompanyService) {}

  companyObj: Company = new Company();
  companyList: Array<Company> = [];
  data: {} | any;

  ngOnInit(): void {}

  addCompany(companyData : NgForm) {
    this.companyService.addCompany(this.companyObj).subscribe(
      (data) => {
        this.data = JSON.stringify(data);
        this.companyList.push(this.data);
        console.log(data);
        companyData.reset();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  
}
