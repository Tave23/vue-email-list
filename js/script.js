const app = new Vue({

   el: '#app',
 
   data: {
     isLoading: true,
     httpError: false,  
     listMail:[],   
   },
   methods:{
 
      generateMail(){

         for (let i = 0; i < 10; i++) {

            this.isLoading = true;
            // link del api
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((response) =>{

               // console.log(response);
               
               // salvo in "newMail" il dato
               this.newMail  = response.data.response;

               // log di mail create ogni volta
               console.log(this.newMail);
      
               this.listMail.push(this.newMail)

               this.isLoading = false;
            })
            .catch((error) =>{
               console.log('ERRORE',error);
               
               this.httpError = true;
            })

         }
         console.log('------------');
         // svuoto di nuovo l'array per non aggiungere altre mail ma crearne di nuove
         this.listMail = [];
      }
 
   },
   mounted(){

      // richiamo la funzione
     this.generateMail();
     
 
   }
 
 
 })