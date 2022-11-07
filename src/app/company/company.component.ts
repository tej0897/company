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
  companyArray: Array<Company> = [];
  data: {} | any;

  ngOnInit(): void {
    
  }



  addCompany(companyData : NgForm) {
    this.companyService.addCompany(this.companyObj).subscribe(
      (data) => {
        this.data = JSON.stringify(data);
        this.companyArray.push(this.data);
        console.log(data);
        companyData.reset();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getCompanyList(){
    this.companyService.getAllCompany().subscribe(
      (data) => {
        this.companyArray = Object.values(data);
        console.log(this.companyArray);
      },
      (err) => {
        console.log(err);
      });
  }

  deleteCompany(cid: number) {
    this.companyService.deleteCompany(cid).subscribe(data=>
      {
        let companyIndex = this.companyArray.findIndex(c=>c.companyID ==cid);
        this.companyArray.splice(companyIndex,1);
        alert("Record Deleted!");
        window.location.reload();
        this.getCompanyList();
      },
      (err) => {
        console.log(err);
      })
  }

  companym : Company = new Company();
  companyData: Array<Company> = [];
  response: any;

  getCompanyByID(bid:number){
    this.companyService.getCompanyByID(this.companym.companyID).subscribe(data=>
      {
        this.companyData = Object.values(data);
        console.log(this.companyData);
        this.data = JSON.stringify(data);
        alert("Search data Found!")
      },
      (err) => {
        console.log(err);
      })
  }
}
