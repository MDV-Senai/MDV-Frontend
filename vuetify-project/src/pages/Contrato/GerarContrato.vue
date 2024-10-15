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
    <div id="pdf-content" style="">
      <div class="pdf-header">
        <img
          src="../../assets/img/logocontrato.png"
          alt="Cabeçalho"
          style="width: 50%"
        />
      </div>
      <div class="container">
        <h1>ANEXO III</h1>
        <h5 class="highlight">TERMO DE COMPROMISSO DE ESTÁGIO OBRIGATÓRIO</h5>
      </div>

      <p>
        Aos ____ dias do mês de _____ de ____ , na cidade de ______ neste ato,
        as partes seguintes nomeadas:
      </p>

      <h5 class="highlight">
        UNIDADE DA SECRETARIA DE ESTADO DA SAÚDE DE SANTA CATARINA (SES/SC):
      </h5>

      <p>Unidade da SES/SC Concedente de Estágio Obrigatório:______</p>

      <div style="display: flex; justify-content: flex-start">
        <p style="margin-right: 337px">Representante Legal:_______</p>
        <p style="margin: 0">Cargo:_______</p>
      </div>

      <div style="display: flex; justify-content: flex-start">
        <p style="margin-right: 250px">
          Responsável do Setor de Estágio:_______
        </p>
        <p style="margin: 0">Cargo:_______</p>
      </div>

      <h5 class="highlight">INSTITUIÇÃO DE ENSINO:</h5>

      <p>Razão Social: ______</p>
      <p>Cooperação Técnica Nº: _______</p>
      <div style="display: flex; justify-content: flex-start">
        <p style="margin-right: 337px">Representante Legal:_______</p>
        <p style="margin: 0">Cargo:_______</p>
      </div>
      <p>Coordenador Geral de Estágio:______</p>

      <h5 class="highlight">ESTAGIÁRIO:</h5>

      <p>Nome Completo: _______</p>
      <div style="display: flex; justify-content: flex-start">
        <p style="margin-right: 283px">CPF:_______</p>
        <p style="margin: 0">Data de Nascimento:________</p>
      </div>

      <div style="display: flex; justify-content: flex-start">
        <p style="margin-right: 60px">Curso:________</p>
        <p style="margin-right: 60px">Fase/Série: ________</p>
        <p style="margin-right: 0px">Matrícula: ________</p>
      </div>

      <h5 class="highlight">PROFESSOR ORIENTADOR:</h5>

      <br />

      <table border="1" style="border-collapse: collapse; width: 100%">
        <thead>
          <tr>
            <th style="text-align: center">NOME</th>
            <th style="text-align: center">CPF</th>
            <th
              style="
                text-align: center;
                font-size: smaller;
                width: 300px;
                word-wrap: break-word;
              "
            >
              Nº de registro do órgão de classe profissional do Estado de
              Santa<br />
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

      <br />

      <p>
        Celebram entre si este Termo de Compromisso de Estágio Obrigatório, na
        forma da Lei nº 11.788 de 25 de setembro de 2008 e Lei Estadual nº
        10.864 de 29 de julho de 1998 e alterações posteriores, convencionando
        as cláusulas e condições seguintes e Portaria SES/SC nº 982 de
        07/11/2023:
      </p>

      <p>
        <strong>Cláusula 1ª -</strong> Considera-se como
        <strong>“Estágio Obrigatório”</strong>, de acordo com o disposto no Art.
        1º da Lei 11.788, ato educativo escolar supervisionado, conforme artigo
        2º da Lei 11.788, § 1º definido como tal no projeto do curso, cuja carga
        horária é requisito para aprovação e obtenção de diploma
      </p>

      <p>
        <strong>Cláusula 2ª -</strong> De acordo com a Resolução nº 04 de 07 de
        novembro de 2001 do Conselho Nacional de Educação e da Câmara de
        Educação Superior do Ministério da Educação, considera-se “Internato
        Médico” a atividade de estágio curricular obrigatório do curso de
        graduação em Medicina realizada nos últimos anos deste curso.
      </p>

      <p>
        <strong>Cláusula 3ª -</strong> Considera-se como
        <strong>“Estágio Supervisionado”</strong>, o estágio final obrigatório
        para conclusão do curso, sendo uma disciplina da grade curricular,
        normalmente durante os dois últimos períodos do curso graduação e
        pós-graduação lato sensu e stricto sensu, com carga horária definida no
        Projeto Político Pedagógico do curso. Configura-se como atividade
        curricular obrigatória, uma vez que é instituído pelas Diretrizes
        Curriculares de cada curso. O aluno desenvolve as atividades de forma
        relativamente autônoma sob a supervisão de um trabalhador do serviço, da
        mesma categoria profissional e do professor orientador das Instituições
        de Ensino Superior.
      </p>

      <p>
        <strong>Cláusula 4ª -</strong> O presente termo tem por finalidade
        particularizar a relação jurídica especial existente entre o estagiário,
        instituição de ensino e a SES/SC, constituindo-se assim em comprovante
        legal de que
        <u
          >o estágio obrigatório não acarretará vínculo empregatício dequalquer
          natureza entre as partes.</u
        >
      </p>

      <p>
        <strong>Cláusula 5ª -</strong> Este Termo de Compromisso de Estágio
        Obrigatório é regido pelo TCT supramencionado bem como pelas Normas e
        Rotinas Administrativas da Unidade Concedente da SES/SC e será executado
        conforme cronograma abaixo:
      </p>

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
            <td style="height: 30px"></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td style="text-align: left" colspan="6">
              <strong>DATAS DE RECESSO:</strong>
            </td>
          </tr>
        </tbody>
      </table>

      <p>
        <strong>Cláusula 6ª -</strong> O estágio obrigatório desenvolvido(a)
        deverá ter correlação direta com sua área de formação e estar de acordo
        com o plano de atividades apresentado à Unidade Concedente da SES/SC
      </p>
      <p>
        <strong>Cláusula 7ª -</strong> O estágio obrigatório regido pelo
        presente Termo terá carga horária total _______ horas por aluno.
      </p>
      <p>
        <strong>Cláusula 8ª -</strong> O estagiário desenvolverá na Unidade
        Concedente da SES/SC as atividades descritas no Programa de Atividades a
        seguir:
      </p>

      <br />

      <p><strong>a)</strong> ______</p>
      <p><strong>b)</strong> ______</p>
      <p><strong>c)</strong> ______</p>

      <p>
        <strong>Cláusula 9ª -</strong> O estagiário deverá observar e obedecer
        às Normas Internas da Unidade concedente da SES conduzindo-se dentro da
        ética profissional e desenvolvendo obrigatoriamente, as atividades
        previstas no Programa de Atividades deste instrumento, com zelo e
        dedicação, com a
        <u>acompanhamento do professor orientador de Estágio Obrigatório</u> nos
        setores estabelecidos para tal.
      </p>
      <p>
        <strong>Cláusula 10ª -</strong> O estagiário deverá identificar-se na
        recepção da Unidade Concedente da SES/SC, devidamente uniformizado e com
        crachá emitido pela Instituição de Ensino e validado pelo setor
        responsável pelos Estágios da respectiva Unidade Concedente da SES/SC.
      </p>

      <p>
        <strong>Cláusula 11ª -</strong> O estagiário dos cursos da área de saúde
        deverá utilizar material de trabalho próprio, conforme a especificidade
        do curso: termômetro, estetoscópio, esfigmomanômetro, tesoura, caneta
        (azul e vermelha), fita métrica, lanterna, dosímetro e caderneta para
        anotações, para prática diária, realizando assepsia adequada entre um
        atendimento e outro, inclusive a utilização de EPIs, seguindo as normas
        de biossegurança estabelecidas pela SES/SC.
      </p>

      <p>
        <strong>Cláusula 12ª -</strong> A carga horária a ser cumprida pelo
        estagiário será de, no máximo 40 (quarenta) horas semanais, desde que
        isso esteja previsto no Projeto Político Pedagógico do curso, sempre em
        compatibilidade com o horário escolar e com o funcionamento da Unidade
        Concedente da SES/SC.
      </p>
      <p>
        <strong>Cláusula 13ª -</strong> O estagiário deverá permanecer nas
        dependências da Unidade Concedente da SES/SC somente com a presença do
        professor orientador de estágios e/ou supervisor, não sendo permitida a
        permanência de estagiários fora do horário.
      </p>

      <p>
        <strong>Cláusula 14ª -</strong> O estudante pertencente ao quadro de
        servidores públicos não poderá realizar o estágio obrigatório no horário
        de trabalho.
      </p>

      <p>
        <strong>Cláusula 15ª -</strong> É de responsabilidade da Instituição de
        Ensino indicar professor orientador para realizar o acompanhamento das
        atividades do estagiário nas dependências das Unidades da SES/SCbem como
        da avaliação do mesmo.
      </p>

      <p>
        <strong>Cláusula 16ª -</strong> Cabe à Instituição de Ensino informar o
        estagiário acerca de seus direitos e obrigações constantes no TCT
        supramencionado.
      </p>

      <p>
        <strong>Cláusula 17ª -</strong> O serviço voluntário não deve, em
        hipótese alguma, ser equiparado às atividades de estágio. A Lei Federal
        9.608/98 dispõe sobre o Serviço Voluntário, o qual difere-se legalmente
        das atividades de estágio normatizada pela Lei Federal 11.788/2008 tendo
        em vista que a intenção do serviço voluntário é do profissional doar seu
        conhecimento intelectual ao órgão público e não buscar a realização do
        trabalho no intuito de aprender ou aperfeiçoar seu conhecimento.
      </p>

      <p>
        <strong>Cláusula 18ª -</strong> Não é de responsabilidade da Unidade
        Concedente da SES/SC o fornecimento de alimentação e estacionamento para
        os estagiários e professores orientadores de estágio obrigatório. A
        Unidade Concedente da SES/SC também não se responsabiliza por objetos
        pessoais dos estagiários e professores orientadores de estágio
        obrigatório.
      </p>

      <p>
        <strong>Cláusula 19ª -</strong> O estagiário está segurado contra
        acidentes pessoais, proporcionado pela apólice nº ______ , sob a
        Responsabilidade da Seguradora _______ durante o período compreendido de
        _____/______ /_______ à ______/_______ /_______ .
      </p>

      <p>
        <strong>Cláusula 20ª -</strong> Em caso de acidente de trabalho o
        estagiário deve comunicar imediatamente o respectivo professor
        orientador ou supervisor de estágio e o setor responsável pelos Estágios
        da respectiva Unidade Concedente da SES/SC, para que o atendimento
        necessário ao estagiário seja prestado, bem como para o preenchimento da
        ficha de notificação de acidente e encaminhamento para a Serviço de
        Controle de Infecção Hospitalar (SCIH) e/ou Saúde Ocupacional da Unidade
        Concedente da SES/SC.
      </p>

      <p>
        <strong>Cláusula 21ª -</strong> Não poderão exercer atividades de
        estágio noturnas, em locais insalubres, perigosos ou penosos estagiário
        menor de 18 (dezoito) anos.
      </p>

      <p>
        <strong>Cláusula 22ª -</strong> Nos termos da Lei 11.788/08 e Portaria
        SES/SC nº 982 de 07/11/2023, não poderá ocorrer início efetivo de
        estágio obrigatório antes que o Termo de Compromisso de Estágio
        Obrigatório seja assinado por todos os signatários indispensáveis.
      </p>

      <p>
        <strong>Cláusula 23ª -</strong> Por estarem de inteiro e comum acordo
        com as condições deste Termo de Compromisso, as partes assinam,
        destinando-se, o estagiário, à Instituição de Ensino e à Unidade
        Concedente da SES/SC.
      </p>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div style="display: flex; justify-content: space-between">
        <div style="text-align: center">
          <p
            style="
              border-top: 1px solid black;
              width: 340px;
              margin: 0 auto;
              font-size: 12px;
            "
          ></p>
          <p style="font-size: 16px">
            Nome do Representante Legal da Instituição de Ensino <br />
            Nome da Instituição de Ensino
          </p>
        </div>

        <div style="text-align: center">
          <p
            style="
              border-top: 1px solid black;
              width: 340px;
              margin: 0 auto;
              font-size: 12px;
            "
          ></p>
          <p style="font-size: 16px">
            Nome do Representante da Unidade Concedente SES/SC <br />
            Nome da Unidade Concedente da SES/SC
          </p>
        </div>
      </div>

      <br />
      <br />
      <br />

      <div style="text-align: center; margin-top: 50px">
        <p
          style="
            border-top: 1px solid black;
            width: 340px;
            margin: 0 auto;
            font-size: 12px;
          "
        ></p>
        <p style="font-size: 16px">Nome do Estagiário</p>
      </div>
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
        margin: [0.5, 0.5, 0.5, 0.5],
        filename: "termo_de_compromisso.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        pagebreak: { mode: ["avoid-all", "css", "legacy"] },
      };

      // Gera o PDF
      html2pdf()
        .set(options)
        .from(pdfContent)
        .save()
        .then(() => {
          pdfContent.style.display = "none";
        });
    },
  },
};
</script>

<style scoped>
.pdf-header {
  width: 100%;
  text-align: left;
  margin-bottom: 10px;
}

.pdf-body {
  padding: 10px;
}

@media print {
  .pdf-header {
    position: fixed;
    top: 0;
    width: 100%;
  }

  .pdf-body {
    margin-top: 100px;
  }
}

.container {
  text-align: center;
  margin-top: 10px;
}

.highlight {
  background-color: #e5f3d6;
  padding: 5px;
  font-size: 1em;
  margin-bottom: 20x;
  margin-top: 10px;
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