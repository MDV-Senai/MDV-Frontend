<template>
  <v-main id="imagem">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo">Consultar Instituição de Ensino</v-card>
    </div>
    <div id="fundoCards">
     <v-container>
      <v-card flat>
      <v-card-title class="d-flex align-center pe-2">

      Instituição

        <v-spacer></v-spacer>

        <v-text-field
          v-model="search"
          density="compact"
          label="Consultar"
          prepend-inner-icon="mdi-magnify"
          variant="solo-filled"
          flat
          hide-details
          single-line
        ></v-text-field>
      </v-card-title>

      <v-divider></v-divider>
      <v-data-table :headers="headers" :items="filteredBoats" height="400" item-value="name">
        <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.name }}</td>
            <td>{{ item.speed }}</td>
            <td>
              <v-dialog max-width="800">
  <template v-slot:activator="{ props: activatorProps }">
    <v-btn
      v-bind="activatorProps"
    
      text="Consultar"
     variant="outlined"
            color="pink-darken-4"
    ></v-btn>
  </template>

  <template v-slot:default="{ isActive }">
    <v-card title="Informações Da Instituição" class="d-flex justify-center text-center"> 
      <div>
        <v-row  class = "mx-5">
<v-col cols="12" md="12">
        <v-text-field label="Instituição" id="instituicao" value="Instituição de Ensino" reandoly
              class="text-pink-darken-1" color="pink-darken-4"></v-text-field>
     </v-col>
        </v-row>
     <v-row  class = "mx-5"> 

      <v-col cols="12" md="6">
              <v-text-field label="CNPJ" id="cnpj" value="00.000.000/0001-00" reandoly
              class="text-pink-darken-1" color="pink-darken-4"></v-text-field>
               </v-col>
                <v-col cols="12" md="6">
               <v-text-field label="Inscrição Estadual" id="inscricao" value="00.000.000-0" reandoly
              class="text-pink-darken-1" color="pink-darken-4"></v-text-field>
     </v-col>
     </v-row>
               
     
   
 
               
     
      </div>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          text="Close Dialog"
          @click="isActive.value = false"
        ></v-btn>
      </v-card-actions>
    </v-card>
  </template>
</v-dialog>
             
            </td>

          </tr>
          
        </template>
      </v-data-table>
    </v-card>
    </v-container>
    </div>
  </v-main>

  <Footer />
</template>

<script>



export default {
  data() {
    return {
      
      search: '',
    
      boats: [
        {
          name: "Unisenai"
        },
        {
          name: "Univille"
        },
         {
          name: "Uniaselvi"
        },
         {
          name: "Cruzeiro do Sul"
        },
      ],
    };
  },

  computed: {
    
    filteredBoats() {
    if (!this.boats) {
      return this.virtualBoats;
    }
    const searchTerm = this.search.toLowerCase();
    return this.boats.filter(boat =>
      boat.name.toLowerCase().includes(searchTerm) ||
      String(boat.speed).includes(searchTerm)
    );
  },
},
  methods: {
    

    handleButtonClick(item) {
     

    },
  },
};
</script>


<style scoped>
#imagem {
  background-image: url("../assets/img/fundoDesenhos.svg");
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
}

#card_titulo {
  font-size: 30px;
  width: 90%;
  height: 100px;
  color: gray;
}

#form {
  width: 90%;
}

@media (max-width: 768px) {
  #inputResponsivo {
    /* flex-direction: column; */
  }
}

#fundoCards {
  background-color: white;
  border-radius: 8px;
  width: 90%;
  margin: 2% auto;
  display: flex;
  text-align: center;
  flex-direction: column;
  /* justify-content: center;
    align-items: center; */
}
</style>

