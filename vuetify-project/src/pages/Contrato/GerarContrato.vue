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
            label="Nome Completo"
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

      <!-- Campo de Data -->
      <v-row>
        <v-col>
          <v-text-field
            v-model="formData.date"
            label="Data"
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
    <div id="pdf-content" style="display: none">
      <h1>Contrato de Prestação de Serviços</h1>

      <p>
        Pelo presente contrato de prestação de serviços, firmado entre
        <strong>{{ formData.name }}</strong
        >, residente no endereço <strong>{{ formData.address }}</strong
        >, doravante denominado CONTRATANTE, e a empresa XYZ, localizada no
        endereço Rua Exemplo, nº 123, doravante denominada CONTRATADA, as partes
        acordam o seguinte:
      </p>

      <p>
        1. O CONTRATANTE, neste ato, contrata os serviços de desenvolvimento de
        software prestados pela CONTRATADA, que se compromete a realizar as
        tarefas conforme especificado em comum acordo entre as partes.
      </p>

      <p>
        2. O prazo estimado para conclusão dos serviços será de 30 (trinta)
        dias, podendo ser prorrogado mediante acordo mútuo.
      </p>

      <p>
        3. O valor total dos serviços será de R$ 5.000,00 (cinco mil reais),
        pagos da seguinte forma: 50% (cinquenta por cento) no início do projeto
        e 50% (cinquenta por cento) na entrega final.
      </p>

      <p>
        4. Este contrato entra em vigor na data de sua assinatura e é válido até
        a conclusão dos serviços, ou até sua rescisão por uma das partes.
      </p>

      <p>
        5. Para dirimir quaisquer dúvidas oriundas deste contrato, as partes
        elegem o foro da cidade de São Paulo.
      </p>

      <p>
        E por estarem de pleno acordo, as partes assinam o presente contrato.
      </p>

      <p>
        São Paulo, <strong>{{ formData.date }}</strong
        >.
      </p>

      <p>____________________________________</p>
      <p>CONTRATANTE: {{ formData.name }}</p>

      <p>____________________________________</p>
      <p>CONTRATADA: XYZ</p>
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
        phone: "",
        date: "",
      },
    };
  },
  methods: {
    generatePDF() {
      // Seleciona o conteúdo invisível
      const pdfContent = document.getElementById("pdf-content");

      // Torna o conteúdo visível
      pdfContent.style.display = "block";

      // Configuração para gerar o PDF
      const options = {
        margin: 1,
        filename: "contrato_preenchido.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
      };

      // Gera o PDF
      html2pdf()
        .set(options)
        .from(pdfContent)
        .save()
        .then(() => {
          // Esconde o conteúdo novamente após gerar o PDF
          pdfContent.style.display = "none";
        });
    },
  },
};
</script>