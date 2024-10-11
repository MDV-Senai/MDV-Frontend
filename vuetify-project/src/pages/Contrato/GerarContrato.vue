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
      <div class="pdf-header">
        <img
          src="../../assets/img/logocontrato.png"
          alt="Cabeçalho"
          style="width: 50%"
        />
      </div>
      <div class="container">
        <h1>ANEXO III</h1>
        <div class="highlight">
          <h5>TERMO DE COMPROMISSO DE ESTÁGIO OBRIGATÓRIO</h5>
        </div>
      </div>

      <p>
        Aos ____ dias do mês de _____ de ____ , na cidade de ______ neste ato,
        as partes seguintes nomeadas:
      </p>

      <h2>
        UNIDADE DA SECRETARIA DE ESTADO DA SAÚDE DE SANTA CATARINA (SES/SC):
      </h2>

      <p>Unidade da SES/SC Concedente de Estágio Obrigatório:______</p>

      <p>Representante Legal:_______</p>
      <p>Cargo:_______</p>
      <p>Responsável do Setor de Estágio:_______</p>
      <p>Cargo:_______</p>

      <h2>INSTITUIÇÃO DE ENSINO:</h2>

      <p>Razão Social: ______</p>
      <p>Cooperação Técnica Nº: _______</p>
      <p>Representante Legal:________</p>
      <p>Cargo:______</p>
      <p>Coordenador Geral de Estágio:______</p>

      <h2>ESTAGIÁRIO:</h2>

      <p>Nome Completo: _______</p>
      <p>CPF:_______</p>
      <p>Data de Nascimento:________</p>
      <p>Curso:________</p>
      <p>Fase/Série: ________</p>
      <p>Matrícula: ________</p>

      <h2>PROFESSOR ORIENTADOR:</h2>

      <table border="1" style="border-collapse: collapse; width: 100%">
        <thead>
          <tr>
            <th style="text-align: center">NOME</th>
            <th style="text-align: center">CPF</th>
            <th style="text-align: center">
              Nº de registro do órgão de classe profissional do Estado de Santa
              Catarina
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="height: 30px"></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td style="height: 30px"></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td style="height: 30px"></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td style="height: 30px"></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td style="height: 30px"></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>

      <p>
        Celebram entre si este Termo de Compromisso de Estágio Obrigatório, na
        forma da Lei nº 11.788 de 25 de setembro de 2008 e Lei Estadual nº
        10.864 de 29 de julho de 1998 e alterações posteriores, convencionando
        as cláusulas e condições seguintes e Portaria SES/SC nº 982 de
        07/11/2023:
      </p>

      <p>
        Cláusula 1ª - Considera-se como “Estágio Obrigatório”, de acordo com o
        disposto no Art. 1º da Lei 11.788, ato educativo escolar supervisionado,
        conforme artigo 2º da Lei 11.788, § 1º definido como tal no projeto do
        curso, cuja carga horária é requisito para aprovação e obtenção de
        diploma
      </p>

      <p>
        Cláusula 2ª - De acordo com a Resolução nº 04 de 07 de novembro de 2001
        do Conselho Nacional de Educação e da Câmara de Educação Superior do
        Ministério da Educação, considera-se “Internato Médico” a atividade de
        estágio curricular obrigatório do curso de graduação em Medicina
        realizada nos últimos anos deste curso.
      </p>

      <p>
        Cláusula 3ª - Considera-se como “Estágio Supervisionado”, o estágio
        final obrigatório para conclusão do curso, sendo uma disciplina da grade
        curricular, normalmente durante os dois últimos períodos do curso
        graduação e pós-graduação lato sensu e stricto sensu, com carga horária
        definida no Projeto Político Pedagógico do curso. Configura-se como
        atividade curricular obrigatória, uma vez que é instituído pelas
        Diretrizes Curriculares de cada curso. O aluno desenvolve as atividades
        de forma relativamente autônoma sob a supervisão de um trabalhador do
        serviço, da mesma categoria profissional e do professor orientador das
        Instituições de Ensino Superior.
      </p>

      <p>
        Cláusula 4ª - O presente termo tem por finalidade particularizar a
        relação jurídica especial existente entre o estagiário, instituição de
        ensino e a SES/SC, constituindo-se assim em comprovante legal de que o
        estágio obrigatório não acarretará vínculo empregatício dequalquer
        natureza entre as partes.
      </p>

      <p>
        Cláusula 5ª - Este Termo de Compromisso de Estágio Obrigatório é regido
        pelo TCT supramencionado bem como pelas Normas e Rotinas Administrativas
        da Unidade Concedente da SES/SC e será executado conforme cronograma
        abaixo:
      </p>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <table border="1" style="border-collapse: collapse; width: 100%">
        <thead>
          <tr>
            <th style="text-align: center">
              SETOR DA UNIDADE CONCEDENTE DA SES
            </th>
            <th style="text-align: center">DATA DE INÍCIO</th>
            <th style="text-align: center">DATA DE TÉRMINO</th>
            <th style="text-align: center">DIAS DA SEMANA</th>
            <th style="text-align: center">HORÁRIO</th>
            <th style="text-align: center">PROFESSOR ORIENTADOR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="height: 30px"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td style="height: 30px"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td style="height: 30px"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td style="height: 30px"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td style="height: 30px"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td style="text-align: left" colspan="6">DATAS DE RECESSO:</td>
          </tr>
        </tbody>
      </table>

      <p>
        Cláusula 6ª - O estágio obrigatório desenvolvido(a) deverá ter
        correlação direta com sua área de formação e estar de acordo com o plano
        de atividades apresentado à Unidade Concedente da SES/SC
      </p>
      <p>
        Cláusula 7ª - O estágio obrigatório regido pelo presente Termo terá
        carga horária total _______ horas por aluno.
      </p>
      <p>
        Cláusula 8ª - O estagiário desenvolverá na Unidade Concedente da SES/SC
        as atividades descritas no Programa de Atividades a seguir:
      </p>
      <p>a) ______</p>
      <p>b) ______</p>
      <p>c) ______</p>

      <p>
        Cláusula 9ª - O estagiário deverá observar e obedecer às Normas Internas
        da Unidade concedente da SES conduzindo-se dentro da ética profissional
        e desenvolvendo obrigatoriamente, as atividades previstas no Programa de
        Atividades deste instrumento, com zelo e dedicação, com a acompanhamento
        do professor orientador de Estágio Obrigatório nos setores estabelecidos
        para tal.
      </p>
      <p>
        Cláusula 10ª - O estagiário deverá identificar-se na recepção da Unidade
        Concedente da SES/SC, devidamente uniformizado e com crachá emitido pela
        Instituição de Ensino e validado pelo setor responsável pelos Estágios
        da respectiva Unidade Concedente da SES/SC.
      </p>

      <p>
        Cláusula 11ª - O estagiário dos cursos da área de saúde deverá utilizar
        material de trabalho próprio, conforme a especificidade do curso:
        termômetro, estetoscópio, esfigmomanômetro, tesoura, caneta (azul e
        vermelha), fita métrica, lanterna, dosímetro e caderneta para anotações,
        para prática diária, realizando assepsia adequada entre um atendimento e
        outro, inclusive a utilização de EPIs, seguindo as normas de
        biossegurança estabelecidas pela SES/SC.
      </p>

      <p>
        Cláusula 12ª - A carga horária a ser cumprida pelo estagiário será de,
        no máximo 40 (quarenta) horas semanais, desde que isso esteja previsto
        no Projeto Político Pedagógico do curso, sempre em compatibilidade com o
        horário escolar e com o funcionamento da Unidade Concedente da SES/SC.
      </p>
      <p>
        Cláusula 13ª - O estagiário deverá permanecer nas dependências da
        Unidade Concedente da SES/SC somente com a presença do professor
        orientador de estágios e/ou supervisor, não sendo permitida a
        permanência de estagiários fora do horário.
      </p>

      <p>
        Cláusula 14ª - O estudante pertencente ao quadro de servidores públicos
        não poderá realizar o estágio obrigatório no horário de trabalho.
      </p>

      <p>
        Cláusula 15ª - É de responsabilidade da Instituição de Ensino indicar
        professor orientador para realizar o acompanhamento das atividades do
        estagiário nas dependências das Unidades da SES/SCbem como da avaliação
        do mesmo.
      </p>

      <p>
        Cláusula 16ª - Cabe à Instituição de Ensino informar o estagiário acerca
        de seus direitos e obrigações constantes no TCT supramencionado.
      </p>

      <p>
        Cláusula 17ª - O serviço voluntário não deve, em hipótese alguma, ser
        equiparado às atividades de estágio. A Lei Federal 9.608/98 dispõe sobre
        o Serviço Voluntário, o qual difere-se legalmente das atividades de
        estágio normatizada pela Lei Federal 11.788/2008 tendo em vista que a
        intenção do serviço voluntário é do profissional doar seu conhecimento
        intelectual ao órgão público e não buscar a realização do trabalho no
        intuito de aprender ou aperfeiçoar seu conhecimento.
      </p>

      <p>
        Cláusula 18ª - Não é de responsabilidade da Unidade Concedente da SES/SC
        o fornecimento de alimentação e estacionamento para os estagiários e
        professores orientadores de estágio obrigatório. A Unidade Concedente da
        SES/SC também não se responsabiliza por objetos pessoais dos estagiários
        e professores orientadores de estágio obrigatório.
      </p>

      <p>
        Cláusula 19ª - O estagiário está segurado contra acidentes pessoais,
        proporcionado pela apólice nº ______ , sob a Responsabilidade da
        Seguradora _______ durante o período compreendido de _____/______
        /_______ à ______/_______ /_______ .
      </p>

      <p>
        Cláusula 20ª - Em caso de acidente de trabalho o estagiário deve
        comunicar imediatamente o respectivo professor orientador ou supervisor
        de estágio e o setor responsável pelos Estágios da respectiva Unidade
        Concedente da SES/SC, para que o atendimento necessário ao estagiário
        seja prestado, bem como para o preenchimento da ficha de notificação de
        acidente e encaminhamento para a Serviço de Controle de Infecção
        Hospitalar (SCIH) e/ou Saúde Ocupacional da Unidade Concedente da
        SES/SC.
      </p>

      <p>
        Cláusula 21ª - Não poderão exercer atividades de estágio noturnas, em
        locais insalubres, perigosos ou penosos estagiário menor de 18 (dezoito)
        anos.
      </p>

      <p>
        Cláusula 22ª - Nos termos da Lei 11.788/08 e Portaria SES/SC nº 982 de
        07/11/2023, não poderá ocorrer início efetivo de estágio obrigatório
        antes que o Termo de Compromisso de Estágio Obrigatório seja assinado
        por todos os signatários indispensáveis.
      </p>

      <p>
        Cláusula 23ª - Por estarem de inteiro e comum acordo com as condições
        deste Termo de Compromisso, as partes assinam, destinando-se, o
        estagiário, à Instituição de Ensino e à Unidade Concedente da SES/SC.
      </p>

      <p>___________________</p>
      <p>
        Nome do Representante Legal da Insituição de Ensino Nome da Instituição
        de Ensino
      </p>

      <p>_______________________</p>
      <p>
        Nome do Representante da Unidade Concedente SES/SC Nome da Unidade
        Concedente da SES/SC
      </p>

      <p>___________________</p>
      <p>Nome do Estagiário</p>
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
        margin: [0.5, 0.5, 0.5, 0.5], // Margens ajustadas
        filename: "termo_de_compromisso.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        pagebreak: { mode: ["avoid-all", "css", "legacy"] }, // Configuração para quebra de página
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

<style scoped>
/* Estilo para o cabeçalho que aparecerá em cada página */
.pdf-header {
  width: 100%;
  text-align: left;
  margin-bottom: 10px;
}

.pdf-body {
  /* Estilos gerais para o corpo do PDF */
  padding: 10px;
}

/* Garantir que o cabeçalho apareça em cada página ao imprimir */
@media print {
  .pdf-header {
    position: fixed;
    top: 0;
    width: 100%;
  }

  .pdf-body {
    margin-top: 100px; /* Ajuste a margem para evitar sobreposição do cabeçalho */
  }
}

.container {
  text-align: center;
  margin-top: 20px;
}

.highlight {
  background-color: #e5f3d6;
  padding: 10px;
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 20px;
}

h1 {
  font-size: 1em;
  margin: 0;
}

h2 {
  margin: 0;
  font-size: 1.5em;
}
</style>