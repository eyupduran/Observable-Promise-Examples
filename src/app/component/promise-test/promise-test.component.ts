import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise-test',
  templateUrl: './promise-test.component.html',
  styleUrls: ['./promise-test.component.scss']
})
export class PromiseTestComponent implements OnInit {

  isStarted:boolean =false
  first:string=""
  second:string=""
  third:string=""
  success:string=""
  fail:string=""

  ngOnInit() {
  }


  //Promise zinciri=> asenkron işlemleri senkron yapmaya yarıyor.
  //içindeki metodlar sıralı çalışacaktır
  // triggerPromise(){
  //   this.function1().then(res => {
  //     this.isStarted=true
  //     this.first = res
  //     return this.function2();
  //     //bir sonraki metoda değer aktarabilmek için return edilmesi lazım
  //   }).then(res => {
  //     this.second = res
  //     return this.function3();
  //   }).then(res => {
  //     this.third = res
  //     this.success="Bütün işlemler tamam..."      
  //   }).catch(err => {
  //      this.fail="Hata oluştu "+ err     
  //   })
  // }

  triggerPromise(){
    this.performCombinedOperations().then(res=>{ ;
      this.success=res
    }).catch(err=>{
      this.fail=err
    })
  }
  
  performCombinedOperations():Promise<any>{
    return new Promise((resolve,reject)=>{
      this.function1().then(res => {
        this.isStarted=true
        this.first = res
        return this.function2();
      }).then(res => {
        this.second = res
        return this.function3();
      }).then(res => {
        this.third = res
        resolve("Bütün işlemler tamam...")      
      }).catch(err => {
         reject('Hata oluştu: ' + err); 
      })
    })
  }
 
  function1():Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve("1 çağrıldı");  
    },1000)
  });
  }

  function2():Promise<string>{
    return new Promise((resolve, reject) => {
        resolve("2 çağrıldı");  
    });
  }

  function3():Promise<string>{
    return new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve("3 çağrıldı");  
      },1000) 
    });
  }
  
}
