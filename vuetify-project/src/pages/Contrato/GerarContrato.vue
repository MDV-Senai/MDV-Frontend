<template>
  <div id="imagem" :height="height">
    <Header />
    <div class="d-flex justify-center align-center">
      <v-card class="d-flex justify-center align-center" id="card_titulo">
        <h3>Gerar Contrato</h3>
      </v-card>
    </div>
    <div id="fundoCards">
      <v-form ref="form" id="form" class="mx-auto">
        <!-- Área de Informações do Contrato -->
        <v-row class="d-flex justify-center mt-8">
          <v-col cols="12" md="6">
            <v-text-field
              label="Cidade Geração contrato"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              v-model="formData.cidadeGeracao"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Número Cooperação Técnica Instituição de Ensino"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              v-model="formData.numeroCooperacaoTecnicaInstituicaoEnsino"
            ></v-text-field>
          </v-col>
        </v-row>
        <!-- Área de Orientador -->
        <v-row class="d-flex justify-center mt-8">
          <v-col cols="12" md="4">
            <v-autocomplete
              v-model="selectedProfessor"
              :items="filteredProfessor"
              :item-title="formatarProfessor"
              item-value="id"
              label="Professor Orientador"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              @input="filtrarProfessor"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="CPF do Professor Orientador"
              maxlength="14"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              v-mask="'###.###.###-##'"
              v-model="formData.cpfProfessorOrientador"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Nº Registro do Orgão de Classe Profissional SC"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              v-model="formData.numRegistroOrgaoClasseEstadoProfOrientador"
            ></v-text-field>
          </v-col>
        </v-row>

        <!-- Área de Informações do Estagiário -->
        <v-row class="d-flex justify-center mt-8">
          <v-col cols="12" md="4">
            <v-autocomplete
              v-model="selectedEstagiario"
              :items="filteredEstagiarios"
              :item-title="formatarEstagiario"
              item-value="id"
              label="Estagiário"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              @input="filtrarEstagiarios"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Fase/Série do Estagiário"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              v-model="formData.faseSerieEstagiario"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-autocomplete
              v-model="selectedSolicitacao"
              :items="filteredSolicitacao"
              :item-title="formatarSolicitacao"
              item-value="id"
              label="Solicitação de Vaga"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              @input="filtrarSolicitacao"
            ></v-autocomplete>
          </v-col>
        </v-row>

        <!-- Área de Informações do Seguro -->
        <v-row class="d-flex justify-center mt-8">
          <v-col cols="12" md="6">
            <v-text-field
              label="Nome da Seguradora"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              v-model="formData.nomeSeguradora"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="6">
            <v-text-field
              label="Data Início da Vigência do Seguro"
              type="date"
              maxlength="10"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              v-model="formData.dataInicioVigenciaSeguro"
            ></v-text-field>
          </v-col>
        </v-row>

        <!-- Área de Informações do Estágio -->
        <v-row class="d-flex justify-center mt-8">
          <v-col cols="12" md="4">
            <v-text-field
              label="Carga Horária Total do Estágio Por Aluno"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              v-model="formData.cargaHorariaTotalEstagio"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Horário de Entrada do Estágio"
              type="time"
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              v-model="formData.horarioEntradaEstagio"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Horário de Saída do Estágio"
              type="time"
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              v-model="formData.horarioSaidaEstagio"
            ></v-text-field>
          </v-col>
        </v-row>

        <!-- Área de Datas -->
        <v-row class="d-flex justify-center mt-8">
          <v-col cols="12" md="4">
            <v-text-field
              label="Data de Início do Estágio"
              type="date"
              maxlength="10"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              v-model="formData.dataInicioEstagio"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              label="Data de Fim do Estágio"
              type="date"
              maxlength="10"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              v-model="formData.dataFimEstagio"
            ></v-text-field>
          </v-col>
          <v-col cols="12" md="4">
            <v-select
              label="Curso do Estágio"
              :items="cursos"
              item-title="cursoHomologado.nomeCurso"
              item-value="cursoHomologado"
              v-model="selectedCurso"
              clearable
              class="text-grey-darken-4"
              variant="outlined"
            ></v-select>
          </v-col>
          <v-col cols="12" md="12">
            <v-textarea
              label="Datas de Recesso do Estágio"
              maxlength="255"
              counter
              clearable
              class="text-grey-darken-4"
              variant="outlined"
              v-model="formData.datasRecesso"
            ></v-textarea>
          </v-col>
        </v-row>

        <!-- Área de Dias da Semana -->
        <h4 class="text-left">Selecione os dias de estágio</h4>
        <v-card class="pt-8">
          <v-container fluid>
            <v-row id="inputResponsivo" class="d-flex justify-center ml-12">
              <v-col class="d-flex align-center">Dom</v-col>
              <v-col class="d-flex align-center">Seg</v-col>
              <v-col class="d-flex align-center">Ter</v-col>
              <v-col class="d-flex align-center">Qua</v-col>
              <v-col class="d-flex align-center">Qui</v-col>
              <v-col class="d-flex align-center">Sex</v-col>
              <v-col class="d-flex align-center">Sab</v-col>
            </v-row>

            <v-row id="inputResponsivo" class="d-flex justify-center ml-12">
              <v-col class="d-flex align-center">
                <v-checkbox v-model="domingo"></v-checkbox>
              </v-col>
              <v-col class="d-flex align-center">
                <v-checkbox v-model="segunda"></v-checkbox>
              </v-col>
              <v-col class="d-flex align-center">
                <v-checkbox v-model="terca"></v-checkbox>
              </v-col>
              <v-col class="d-flex align-center">
                <v-checkbox v-model="quarta"></v-checkbox>
              </v-col>
              <v-col class="d-flex align-center">
                <v-checkbox v-model="quinta"></v-checkbox>
              </v-col>
              <v-col class="d-flex align-center">
                <v-checkbox v-model="sexta"></v-checkbox>
              </v-col>
              <v-col class="d-flex align-center">
                <v-checkbox v-model="sabado"></v-checkbox>
              </v-col>
            </v-row>
          </v-container>
        </v-card>

        <!-- Botão para Gerar PDF -->
        <v-btn
          append-icon="mdi-chevron-right"
          variant="outlined"
          class="my-10"
          width="183"
          height="62"
          id="botaoGerar"
          @click="cadastrarContrato"
        >
          Gerar Contrato
        </v-btn>
      </v-form>
    </div>

    <!-- Conteúdo invisível que será convertido para PDF style="display: none" -->
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
        <h5 class="highlight">TERMO DE COMPROMISSO DE ESTÁGIO OBRIGATÓRIO</h5>
      </div>

      <p>
        {{ formData.dataGeracaoContrato }}, na cidade de
        {{ formData.cidadeGeracao }}, neste ato, as partes seguintes nomeadas:
      </p>

      <h5 class="highlight">
        UNIDADE DA SECRETARIA DE ESTADO DA SAÚDE DE SANTA CATARINA (SES/SC):
      </h5>

      <p>
        Unidade da SES/SC Concedente de Estágio Obrigatório:
        {{ organizacao.razaoSocial }}
      </p>

      <div style="display: flex; justify-content: flex-start">
        <p style="margin-right: 337px">
          Representante Legal: {{ organizacao.responsavelLegal }}
        </p>
        <p style="margin: 0">Cargo: Diretor</p>
      </div>

      <div style="display: flex; justify-content: flex-start">
        <p
          v-if="
            solicitacao &&
            solicitacao.setor &&
            solicitacao.setor.nomeCoordenador
          "
          style="margin-right: 250px"
        >
          Responsável do Setor de Estágio:
          {{ solicitacao.setor.nomeCoordenador }}
        </p>
        <p style="margin: 0">Cargo: Coordenador</p>
      </div>

      <h5 class="highlight">INSTITUIÇÃO DE ENSINO:</h5>

      <p
        v-if="
          solicitacao &&
          solicitacao.instituicaoEnsino &&
          solicitacao.instituicaoEnsino.razaoSocial
        "
      >
        Razão Social: {{ solicitacao.instituicaoEnsino.razaoSocial }}
      </p>
      <p>
        Cooperação Técnica Nº:
        {{ formData.numeroCooperacaoTecnicaInstituicaoEnsino }}
      </p>
      <div style="display: flex; justify-content: flex-start">
        <p
          v-if="
            solicitacao &&
            solicitacao.instituicaoEnsino &&
            solicitacao.instituicaoEnsino.responsavelLegal
          "
          style="margin-right: 337px"
        >
          Representante Legal:
          {{ solicitacao.instituicaoEnsino.responsavelLegal }}
        </p>
        <p style="margin: 0">Cargo: Diretor</p>
      </div>
      <p>Coordenador Geral de Estágio: {{ professor.nome }}</p>

      <h5 class="highlight">ESTAGIÁRIO:</h5>

      <p>Nome Completo: {{ estagiario.nome }}</p>
      <div style="display: flex; justify-content: flex-start">
        <p style="margin-right: 283px">CPF: {{ estagiario.documento }}</p>
        <p style="margin: 0">
          Data de Nascimento: {{ formatDate(estagiario.dataNascimento) }}
        </p>
      </div>

      <div style="display: flex; justify-content: flex-start">
        <p style="margin-right: 60px">
          Curso: {{ selectedCurso?.nomeCurso || "________" }}
        </p>
        <p style="margin-right: 60px">
          Fase/Série: {{ formData.faseSerieEstagiario }}
        </p>
        <p style="margin-right: 0px">Matrícula: {{ estagiario.matricula }}</p>
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
                width: 200px;
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
            <td style="height: 30px">{{ professor.nome }}</td>
            <td>{{ formData.cpfProfessorOrientador }}</td>
            <td>{{ formData.numRegistroOrgaoClasseEstadoProfOrientador }}</td>
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
            <td
              v-if="
                solicitacao && solicitacao.setor && solicitacao.setor.nomeSetor
              "
              style="height: 30px"
            >
              {{ solicitacao.setor.nomeSetor }}
            </td>
            <td>{{ formatDate(formData.dataInicioEstagio) }}</td>
            <td>{{ formatDate(formData.dataFimEstagio) }}</td>
            <td>{{ diasSelecionados }}</td>
            <td>
              {{ formData.horarioEntradaEstagio }} -
              {{ formData.horarioSaidaEstagio }}
            </td>
            <td>{{ professor.nome }}</td>
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
              <strong>DATAS DE RECESSO: {{ formData.datasRecesso }}</strong>
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
        presente Termo terá carga horária total
        {{ formData.cargaHorariaTotalEstagio }} horas por aluno.
      </p>
      <p>
        <strong>Cláusula 8ª -</strong> O estagiário desenvolverá na Unidade
        Concedente da SES/SC as atividades descritas no Programa de Atividades a
        seguir:
      </p>

      <br />

      <p
        v-if="
          solicitacao && solicitacao.setor && solicitacao.setor.atividades[0]
        "
      >
        <strong>a)</strong> {{ solicitacao.setor.atividades[0].nome }}
      </p>
      <p
        v-if="
          solicitacao && solicitacao.setor && solicitacao.setor.atividades[1]
        "
      >
        <strong>b)</strong> {{ solicitacao.setor.atividades[1].nome }}
      </p>
      <p
        v-if="
          solicitacao && solicitacao.setor && solicitacao.setor.atividades[2]
        "
      >
        <strong>c)</strong> {{ solicitacao.setor.atividades[2].nome }}
      </p>

      <br />

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

      <p
        v-if="
          estagiario &&
          estagiario.apoliceSeguro &&
          estagiario.apoliceSeguro.dataFim
        "
      >
        <strong>Cláusula 19ª -</strong> O estagiário está segurado contra
        acidentes pessoais, proporcionado pela apólice nº
        {{ estagiario.apoliceSeguro.numero }} , sob a Responsabilidade da
        Seguradora {{ formData.nomeSeguradora }} durante o período compreendido
        de {{ formatDate(formData.dataInicioVigenciaSeguro) }} à
        {{ formatDate(estagiario.apoliceSeguro.dataFim) }}.
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
  </div>
</template>

<script>
import { ref, onMounted, computed, watch } from "vue";
import Swal from "sweetalert2";
import html2pdf from "html2pdf.js";
import { useResponsiveHeight } from "../../composables/useResponsiveHeight.js";
import { fetchOrganizacaoConcedente } from "../../services/OrganizacaoService.js";
import { fetchInstituicoesPorId } from "../../services/InstituicoesService.js";
import { cadastrarContratos } from "../../services/ContratosService";
import {
  fetchSolicitacaoVaga,
  fetchSolicitacaoVagaPorId,
} from "../../services/VagasService.js";
import {
  fetchEstagiarios,
  fetchEstagiarioPorId,
} from "../../services/EstagiariosService.js";

import {
  fetchCoordenadorCurso,
  fetchCoordenadorPorId,
} from "../../services/CoordenadorCursoService.js";

export default {
  setup() {
    const errorMessage = ref("");
    const { height } = useResponsiveHeight();
    const organizacao = ref({});
    const estagiarios = ref([]);
    const solicitacoes = ref([]);
    const professores = ref([]);
    const cursos = ref([]);
    const selectedProfessor = ref(null);
    const selectedEstagiario = ref(null);
    const selectedSolicitacao = ref(null);
    const selectedCurso = ref(null);
    const searchQueryEstg = ref("");
    const searchQueryProf = ref("");
    const searchQuerySol = ref("");
    const estagiario = ref({});
    const solicitacao = ref({});
    const professor = ref({});
    const instituicao = ref({});

    // Variáveis para cada checkbox do dia da semana
    const domingo = ref(false);
    const segunda = ref(false);
    const terca = ref(false);
    const quarta = ref(false);
    const quinta = ref(false);
    const sexta = ref(false);
    const sabado = ref(false);

    const diasSelecionados = computed(() => {
      const dias = [];
      if (domingo.value) dias.push("Dom");
      if (segunda.value) dias.push("Seg");
      if (terca.value) dias.push("Ter");
      if (quarta.value) dias.push("Qua");
      if (quinta.value) dias.push("Qui");
      if (sexta.value) dias.push("Sex");
      if (sabado.value) dias.push("Sab");

      return dias.join(", ");
    });

    const loadOrg = async () => {
      const response = await fetchOrganizacaoConcedente();
      if (response && response.length > 0) {
        organizacao.value = response[0];
      }
    };

    const loadEstg = async () => {
      const response = await fetchEstagiarios();
      estagiarios.value = response;
    };

    const loadSol = async () => {
      const response = await fetchSolicitacaoVaga();
      solicitacoes.value = response;
    };

    const loadProf = async () => {
      const response = await fetchCoordenadorCurso();
      professores.value = response;
    };

    const loadProfessor = async () => {
      if (selectedProfessor.value) {
        const response = await fetchCoordenadorPorId(selectedProfessor.value);
        if (response) {
          professor.value = response;
        } else {
          console.error("Erro ao buscar professor.");
        }
      }
    };

    const loadSolicitacao = async () => {
      if (selectedSolicitacao.value) {
        const response = await fetchSolicitacaoVagaPorId(
          selectedSolicitacao.value
        );
        if (response) {
          solicitacao.value = response;
        } else {
          console.error("Erro ao buscar solicitacao.");
        }
      }
    };

    const loadEstagiario = async () => {
      if (selectedEstagiario.value) {
        const response = await fetchEstagiarioPorId(selectedEstagiario.value);
        if (response) {
          estagiario.value = response;
        } else {
          console.error("Erro ao buscar estagiário.");
        }
      }
    };

    const loadInstituicao = async () => {
      try {
        const response = await fetchInstituicoesPorId(
          solicitacao.value.instituicaoEnsino.id
        );
        if (response) {
          instituicao.value = response;
          cursos.value = instituicao.value.cursos; // Atualiza cursos corretamente usando .value
        } else {
          console.error("Erro ao buscar instituição.");
        }
      } catch (error) {
        console.error("Erro na requisição:", error);
      }
    };

    const filteredEstagiarios = computed(() => {
      return estagiarios.value.filter((estagiario) => {
        const searchValue =
          searchQueryEstg.value && typeof searchQueryEstg.value === "string"
            ? searchQueryEstg.value.toLowerCase()
            : "";

        return (
          estagiario.nome.toLowerCase().includes(searchValue) ||
          estagiario.documento.toLowerCase().includes(searchValue)
        );
      });
    });

    const filteredSolicitacao = computed(() => {
      return solicitacoes.value.filter((solicitacao) => {
        const searchValue =
          searchQueryEstg.value && typeof searchQueryEstg.value === "string"
            ? searchQueryEstg.value.toLowerCase()
            : "";

        return (
          solicitacao.instituicaoEnsino.razaoSocial
            .toLowerCase()
            .includes(searchValue) ||
          solicitacao.setor.nomeSetor.toLowerCase().includes(searchValue)
        );
      });
    });

    const filteredProfessor = computed(() => {
      return professores.value.filter((professor) => {
        const searchValue =
          searchQueryProf.value && typeof searchQueryProf.value === "string"
            ? searchQueryProf.value.toLowerCase()
            : "";

        return professor.nome.toLowerCase().includes(searchValue);
      });
    });

    const filtrarEstagiarios = (query) => {
      searchQueryEstg.value = query;
    };

    const filtrarSolicitacao = (query) => {
      searchQuerySol.value = query;
    };

    const filtrarProfessor = (query) => {
      searchQueryProf.value = query;
    };

    const formatarEstagiario = (estagiario) => {
      return estagiario ? `${estagiario.nome} - ${estagiario.documento}` : "";
    };

    const formatarSolicitacao = (solicitacao) => {
      return solicitacao
        ? `${solicitacao.instituicaoEnsino.razaoSocial} - ${solicitacao.setor.nomeSetor}`
        : "";
    };

    const formatarProfessor = (professor) => {
      return professor ? `${professor.nome}` : "";
    };

    watch(selectedEstagiario, loadEstagiario);
    watch(selectedSolicitacao, loadSolicitacao);
    watch(selectedProfessor, loadProfessor);
    watch(loadSolicitacao, (newValue, oldValue) => {
      setTimeout(() => {
        loadInstituicao(newValue);
      }, 1000);
    });

    onMounted(() => {
      loadOrg();
      loadEstg();
      setDate();
      loadSol();
      loadProf();
    });

    const formData = ref({
      cidadeGeracao: "",
      numeroCooperacaoTecnicaInstituicaoEnsino: "",
      faseSerieEstagiario: "",
      numRegistroOrgaoClasseEstadoProfOrientador: "",
      nomeSeguradora: "",
      cargaHorariaTotalEstagio: "",
      horarioEntradaEstagio: "",
      horarioSaidaEstagio: "",
      dataInicioEstagio: "",
      dataInicioVigenciaSeguro: "",
      dataFimEstagio: "",
      datasRecesso: "",
      cpfProfessorOrientador: "",
      dataGeracaoContrato: "",
    });

    // Função para definir a data atual no formato desejado
    const setDate = () => {
      const dataAtual = new Date();
      const dia = dataAtual.getDate();
      const mes = dataAtual.toLocaleString("pt-BR", { month: "long" });
      const ano = dataAtual.getFullYear();
      formData.value.dataGeracaoContrato = `Aos ${dia} dias do mês de ${mes} de ${ano}`;
    };

    const generatePDF = async () => {
      const pdfContent = document.getElementById("pdf-content");
      pdfContent.style.display = "block";

      const options = {
        margin: [0.5, 0.5, 0.5, 0.5],
        filename: "termo_de_compromisso.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        pagebreak: { mode: ["avoid-all", "css", "legacy"] },
      };

      // Gera o PDF e pega o Blob do arquivo gerado
      const pdfBlob = await html2pdf()
        .set(options)
        .from(pdfContent)
        .toPdf()
        .get("pdf")
        .then(function (pdf) {
          return pdf.output("blob");
        });

      pdfContent.style.display = "none";

      const contrato = montarContrato();
      contrato.file = pdfBlob;

      // Criar link de download e simular o clique
      const link = document.createElement("a");
      link.href = URL.createObjectURL(pdfBlob);
      link.download = "termo_de_compromisso.pdf";
      link.click();

      return contrato;
    };

    // Função para resetar o formulário
    const resetForm = () => {
      // Limpa os dados do formData
      formData.value = {
        cidadeGeracao: "",
        numeroCooperacaoTecnicaInstituicaoEnsino: "",
        faseSerieEstagiario: "",
        numRegistroOrgaoClasseEstadoProfOrientador: "",
        nomeSeguradora: "",
        cargaHorariaTotalEstagio: "",
        horarioEntradaEstagio: "",
        horarioSaidaEstagio: "",
        dataInicioEstagio: "",
        dataInicioVigenciaSeguro: "",
        dataFimEstagio: "",
        datasRecesso: "",
        cpfProfessorOrientador: "",
        dataGeracaoContrato: "", // Definido pelo setDate()
      };

      // Redefine a data do contrato
      setDate();

      // Limpa seleções de solicitação, curso e dias da semana
      selectedSolicitacao.value = null;
      selectedCurso.value = null;
      selectedEstagiario.value = null;
      selectedProfessor.value = null;

      // Limpa os checkboxes dos dias da semana
      domingo.value = false;
      segunda.value = false;
      terca.value = false;
      quarta.value = false;
      quinta.value = false;
      sexta.value = false;
      sabado.value = false;
    };

    const formatDate = (dateString) => {
      if (!dateString) return "";
      const date = new Date(dateString);
      if (isNaN(date)) return "";

      const day = String(date.getUTCDate()).padStart(2, "0");
      const month = String(date.getUTCMonth() + 1).padStart(2, "0");
      const year = date.getUTCFullYear();

      return `${day}/${month}/${year}`;
    };

    const montarContrato = () => {
      return {
        solicitacaoVagaId: solicitacao.value.id,
        alunoId: estagiario.value.id,
        cidadeGeracao: formData.value.cidadeGeracao,
        dataGeracaoContrato: new Date().toISOString().split("T")[0],
        numeroCooperacaoTecnicaInstituicaoEnsino:
          formData.value.numeroCooperacaoTecnicaInstituicaoEnsino,
        faseSerieEstagiario: formData.value.faseSerieEstagiario,
        numRegistroOrgaoClasseEstadoProfOrientador:
          formData.value.numRegistroOrgaoClasseEstadoProfOrientador,
        nomeSeguradora: formData.value.nomeSeguradora,
        dataInicioVigenciaSeguro: formData.value.dataInicioVigenciaSeguro,
        cargaHorariaTotalEstagio: formData.value.cargaHorariaTotalEstagio,
        horarioEntradaEstagio: formData.value.horarioEntradaEstagio,
        horarioSaidaEstagio: formData.value.horarioSaidaEstagio,
        dataInicioEstagio: formData.value.dataInicioEstagio,
        dataFimEstagio: formData.value.dataFimEstagio,
        datasRecesso: formData.value.datasRecesso,
        cpfProfessorOrientador: formData.value.cpfProfessorOrientador.replace(
          /\D/g,
          ""
        ),
        diasSemanaEstagio: diasSelecionados.value,
        file: null,
      };
    };

    const cadastrarContrato = async () => {
      errorMessage.value = "";
      try {
        // Gera o PDF (salva localmente e retorna o Blob)
        const contrato = await generatePDF();

        // Faz a requisição ao backend
        const response = await cadastrarContratos(contrato);

        if (response.status === 201) {
          Swal.fire({
            title: "Contrato Gerado!",
            text: "O contrato foi gerado com sucesso.",
            icon: "success",
            confirmButtonText: "Ok",
          }).then(() => {
            window.location.reload();
            resetForm();
          });
        } else {
          Swal.fire({
            title: "Ocorreu um problema ao gerar o contrato.",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      } catch (error) {
        Swal.fire({
          title: "Ocorreu um problema ao gerar o contrato.",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    };

    return {
      formData,
      generatePDF,
      height,
      domingo,
      segunda,
      terca,
      quarta,
      quinta,
      sexta,
      sabado,
      formatDate,
      diasSelecionados,
      organizacao,
      estagiarios,
      estagiario,
      solicitacoes,
      solicitacao,
      selectedSolicitacao,
      selectedEstagiario,
      searchQueryEstg,
      searchQuerySol,
      filteredEstagiarios,
      filteredSolicitacao,
      professores,
      professor,
      selectedProfessor,
      searchQueryProf,
      filteredProfessor,
      filtrarProfessor,
      formatarProfessor,
      filtrarEstagiarios,
      formatarEstagiario,
      formatarSolicitacao,
      filtrarSolicitacao,
      instituicao,
      cursos,
      selectedCurso,
      cadastrarContrato,
    };
  },
};
</script>

<style scoped >
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