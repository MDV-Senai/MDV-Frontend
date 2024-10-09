<template>
  <v-container>
    <v-form ref="form">
      <!-- Título da página -->
      <v-row>
        <v-col>
          <h1>Preencha os dados abaixo:</h1>
        </v-col>
      </v-row>

      <!-- Campo de Nome -->
      <v-row>
        <v-col>
          <v-text-field
            v-model="formData.name"
            label="Nome"
            outlined
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <!-- Campo de Endereço -->
      <v-row>
        <v-col>
          <v-text-field
            v-model="formData.address"
            label="Endereço"
            outlined
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <!-- Campo de Telefone -->
      <v-row>
        <v-col>
          <v-text-field
            v-model="formData.phone"
            label="Telefone"
            outlined
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <!-- Botão para Gerar PDF -->
      <v-row>
        <v-col>
          <v-btn color="primary" @click="generatePDF">Gerar PDF</v-btn>
        </v-col>
      </v-row>
    </v-form>
    
    <!-- Conteúdo invisível que será convertido para PDF -->
    <div id="pdf-content" style="display: none;">
      <h1>Informações Preenchidas</h1>
      <p><strong>Nome:</strong> {{ formData.name }}</p>
      <p><strong>Endereço:</strong> {{ formData.address }}</p>
      <p><strong>Telefone:</strong> {{ formData.phone }}</p>
    </div>
  </v-container>
</template>

<script>
import html2pdf from "html2pdf.js";

export default {
  data() {
    return {
      formData: {
        name: "",
        address: "",
        phone: ""
      }
    };
  },
  methods: {
    generatePDF() {
      // Seleciona o conteúdo invisível
      const pdfContent = document.getElementById("pdf-content");

      // Configuração para gerar o PDF
      const options = {
        margin: 1,
        filename: "dados_preenchidos.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
      };

      // Gera o PDF
      html2pdf().set(options).from(pdfContent).save();
    }
  }
};
</script>
