const app = new Vue({

   el: '#app',
 
   data: {
     numero: 10,
     isLoading: true,
     httpError: false,
     randomMail:[],
     
   },
   methods:{
 
      generateMail(){
       this.isLoading = true;
         // link del api
       axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
       .then((response) =>{

         // console.log(response);
         
         // salvo in "mail" il dato
         this.mail  = response.data.response;

         console.log(this.mail);
 
     
         this.isLoading = false;
       })
       .catch((error) =>{
         console.log('ERRORE',error);
         
         this.httpError = true;
       })
     }
 
   },
   mounted(){

      // richiamo la funzione
     this.generateMail();
     
 
   }
 
 
 })