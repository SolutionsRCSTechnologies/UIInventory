import { HomeService } from './home.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

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
                this.inventoryTypeList =res.res;
                this.Count = res.Count;
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

  deleteInventoryTye(prdId){
    this.homesrvc.deleteInventoryType(prdId)
            .subscribe((res) => {
                console.dir(res);
                alert(res);
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

}

// Here we see how we can add to our routes dynamic id queryPrams and fragment data to our url

//dummy login system for demonstration purposes only
