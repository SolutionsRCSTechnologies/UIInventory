import { HomeService } from './home.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  inventoryTypeList:any = [];
  inventoryMasterTypeList:any[] = [{
    page1:this.inventoryTypeList
  }];
  inventoryeditaddlist : any = [];
  Count: number;
  public filterbyval :any = '';

  public filteredStates = [
    {
      name:'dd',
      class:'ggg'
    },
    {
      name:'dd',
      class:'ggg'
    },
    {
      name:'dd',
      class:'ggg'
    }

  ];

  constructor(private router: Router, private homesrvc: HomeService) { }

  ngOnInit() {
    this.getList();
  }

  getList(){
    this.homesrvc.getTypeList()
            .subscribe((res) => {
                console.dir(res);
                this.inventoryTypeList =res.inventoryList.res;
                this.Count = res.inventoryList.Count;

                this.inventoryMasterTypeList = [{
                  page1:this.inventoryTypeList
                }];
                let xyz = "page2"
                this.inventoryMasterTypeList.push({
                  xyz : this.inventoryTypeList
                  }
                );

                console.dir(this.inventoryMasterTypeList);

                // if (this.isConcern) {
                //     //this.assetForm.controls['concern'].setValue(true);
                //     //this.editConcern = true;


                //     //this.editConcerntext = "Alert: This asset has a concern consideration. Are you sure you want to update this asset record?";

                // }
                // else {
                //     // this.assetForm.controls['concern'].setValue(false);
                //     //this.editConcern = false;
                //     // this.editConcerntext = "Are you sure you want to save the changes?";

                //     this.confirmModal.show();
                // }

                this.inventoryorderTypeList = res.inventoryprodList.res;


            }, (err) => {
                
            });
  }

  onChange(item){
    item.editedFlag = 'Y';
  }

  onSave(){
    debugger
    
    this.inventoryeditaddlist = this.inventoryTypeList.filter(item=>item.editedFlag == 'Y' || item.CreatedFlag == 'Y');

    this.homesrvc.setTypeList(this.inventoryeditaddlist)
            .subscribe((res) => {
                console.dir(res);
                alert(res);
                this.getList();
              }, (err) => {
                
            });
  }

  deleteInventoryTye(prdId,inventorytype){
    this.homesrvc.deleteInventoryType(prdId,inventorytype)
            .subscribe((res) => {
                console.dir(res);
                this.getList();
              }, (err) => {
                
            });
  }

  addInventoryType(){
    let tempObj = {
      productName: '',
      companyName : '',
      basecutOff: '',
      updatedBy : 'Sourav C',
      CreatedFlag : 'Y'
    }
    this.inventoryTypeList.unshift(tempObj);
  }
  
  public closestate:boolean = false;
  public inventoryorderTypeList:any = [];
  addproductOrder(){
    let tempObj = {
      productName: '',
      expDate : '',
      count: '', 
      mrp : '',
      discount : '',
      salesprice : '',
      CreatedFlag : 'Y',
      closestate:false,
      producttypeId:''
    }
    this.inventoryorderTypeList.unshift(tempObj);
  }

  productSelection(state,item){
    this.inventoryorderTypeList[item].productName = state.productName;
    this.inventoryorderTypeList[item].closestate = false;
    this.inventoryorderTypeList[item].producttypeId = state.productId;
  }

  ontypeorderSave(){
    debugger
    let obj;    
    obj = this.inventoryorderTypeList.filter(item=>item.editedFlag == 'Y' || item.CreatedFlag == 'Y');
    
    this.homesrvc.setinventoryprodList(obj)
            .subscribe((res) => {
                console.dir(res);
                alert(res);
                this.getList();
              }, (err) => {
                
            });
  }
  updateSale(i){
    debugger
    setTimeout(() => {
      this.inventoryorderTypeList[i].editedFlag = 'Y';
      this.inventoryorderTypeList[i].salesprice = this.inventoryorderTypeList[i].mrp - this.inventoryorderTypeList[i].mrp * (this.inventoryorderTypeList[i].discount/100);
    }, 1000);
    
  }
  // public inventoryCountList:any;
  // productAuto(){
  //   this.inventoryCountList =  this.inventoryTypeList.filter(x => x.productName.indexOf(this.filterbyval));
  //   console.dir(this.inventoryCountList);
  // }

}

// Here we see how we can add to our routes dynamic id queryPrams and fragment data to our url

//dummy login system for demonstration purposes only
