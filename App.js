/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

const gerarNovaFrase = () => {

  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 110)

  //frases
  var frases = Array();
  frases[0] = 'Não fui eu que ordenei a você? Seja forte e corajoso! Não se apavore nem desanime, pois o Senhor, o seu Deus, estará com você por onde você andar. Josué 1:9';
  frases[1] = 'Eu disse essas coisas para que em mim vocês tenham paz. Neste mundo vocês terão aflições; contudo, tenham ânimo! Eu venci o mundo. João 16:33';
  frases[2] = 'Assim, eles já não são dois, mas sim uma só carne. Portanto, o que Deus uniu, ninguém separe. Mateus 19:6';
  frases[3] = 'Honra teu pai e tua mãe, a fim de que tenhas vida longa na terra que o Senhor, o teu Deus, te dá. Êxodo 20:12';
  frases[5] = 'Não façam cortes no corpo por causa dos mortos nem tatuagens em vocês mesmos. Eu sou o Senhor. Levítico 19:28';
  frases[6] = 'Porque eu bem sei os pensamentos que tenho a vosso respeito, diz o Senhor; pensamentos de paz, e não de mal, para vos dar o fim que esperais. Jeremias 29:11';
  frases[7] = 'Os teus olhos viram o meu corpo ainda informe; e no teu livro todas estas coisas foram escritas; as quais em continuação foram formadas, quando nem ainda uma delas havia. E quão preciosos me são, ó Deus, os teus pensamentos! Quão grandes são as somas deles! Salmos 139:16-17';
  frases[8] = 'Não se vendem dois passarinhos por um ceitil? e nenhum deles cairá em terra sem a vontade de vosso Pai. E até mesmo os cabelos da vossa cabeça estão todos contados. Não temais, pois; mais valeis vós do que muitos passarinhos. Mateus 10:29-31';
  frases[9] = 'E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus, daqueles que são chamados segundo o seu propósito. Porque os que dantes conheceu também os predestinou para serem conformes à imagem de seu Filho, a fim de que ele seja o primogênito entre muitos irmãos. Romanos 8:28-29';
  frases[10] = 'Mas vós sois a geração eleita, o sacerdócio real, a nação santa, o povo adquirido, para que anuncieis as virtudes daquele que vos chamou das trevas para a sua maravilhosa luz; 1 Pedro 2:9.';
  frases[11] = 'Porque somos feitura sua, criados em Cristo Jesus para as boas obras, as quais Deus preparou para que andássemos nelas. Efésios 2:10';
  frases[12] = 'Porque isto é bom e agradável diante de Deus nosso Salvador, Que quer que todos os homens se salvem, e venham ao conhecimento da verdade. 1 Timóteo 2:3-4';
  frases[13] = 'Pois o Senhor não rejeitará o seu povo, nem desamparará a sua herança. Salmos 94:14';
  frases[14] = 'Agora, pois, se diligentemente ouvirdes a minha voz e guardardes a minha aliança, então sereis a minha propriedade peculiar dentre todos os povos, porque toda a terra é minha. Êxodo 19:5.';
  frases[15] = 'Não to mandei eu? Esforça-te, e tem bom ânimo; não temas, nem te espantes; porque o Senhor teu Deus é contigo, por onde quer que andares. Josué 1:9';
  frases[16] = 'O Senhor, pois, é aquele que vai adiante de ti; ele será contigo, não te deixará, nem te desamparará; não temas, nem te espantes. Deuteronômio 31:8';
  frases[17] = 'Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna. João 3:16';
  frases[18] = 'Mas agora, libertados do pecado, e feitos servos de Deus, tendes o vosso fruto para santificação, e por fim a vida eterna. Romanos 6:22';
  frases[19] = '… Mas aquele que beber da água que eu lhe der nunca terá sede, porque a água que eu lhe der se fará nele uma fonte de água que salte para a vida eterna. João 4:14';
  frases[20] = 'Na casa de meu Pai há muitas moradas; se não fosse assim, eu vo-lo teria dito. Vou preparar-vos lugar. E quando eu for, e vos preparar lugar, virei outra vez, e vos levarei para mim mesmo, para que onde eu estiver estejais vós também. João 14:2-3.';
  frases[21] = 'E ouvi uma grande voz do céu, que dizia: Eis aqui o tabernáculo de Deus com os homens, pois com eles habitará, e eles serão o seu povo, e o mesmo Deus estará com eles, e será o seu Deus. E Deus limpará de seus olhos toda a lágrima; e não haverá mais morte, nem pranto, nem clamor, nem dor; porque já as primeiras coisas são passadas. Apocalipse 21:3-4.';
  frases[22] = 'Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento. Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas. Provérbios 3:5-6';
  frases[23] = 'No dia em que eu temer, hei de confiar em ti. Salmos 56:3 ';
  frases[24] = 'Confia ao Senhor as tuas obras, e teus pensamentos serão estabelecidos. Provérbios 16:3';
  frases[25] = 'E esta é a confiança que temos nele: que, se pedirmos alguma coisa, segundo a sua vontade, ele nos ouve. 1 João 5:14';
  frases[26] = 'Porque andamos por fé e não por vista. 2 Coríntios 5:7';
  frases[27] = 'Peça-a, porém, com fé, não duvidando; porque o que duvida é semelhante à onda do mar, que é levada pelo vento e lançada de uma para outra parte. Tiago 1:6';
  frases[28] = 'Em Deus está a minha salvação e a minha glória; a rocha da minha fortaleza e o meu refúgio estão em Deus. Salmos 62:7';
  frases[29] = 'Não deixará vacilar o teu pé; aquele que te guarda não tosquenejará. Salmos 121:3';
  frases[30] = 'O receio do homem armará laços, mas o que confia no Senhor será posto em alto retiro. Provérbios 29:25';
  frases[31] = 'E, assim, com confiança, ousemos dizer: O Senhor é o meu ajudador, e não temerei o que me possa fazer o homem. Hebreus 13:6';
  frases[32] = 'Não vos inquieteis com nada! Em todas as circunstâncias apresentai a Deus as vossas preocupações, mediante a oração, as súplicas e a ação de graças. Filipenses 4:6';
  frases[33] = 'Não vos preocupeis, pois, com o dia de amanhã: o dia de amanhã terá as suas preocupações próprias. A cada dia basta o seu cuidado. Mateus 6:34';
  frases[34] = 'Que teu coração deposite toda a sua confiança no Senhor! Não te firmes em tua própria sabedoria! Provérbios 3:5';
  frases[35] = 'Nada temas, porque estou contigo, não lances olhares desesperados, pois eu sou teu Deus; eu te fortaleço e venho em teu socorro, eu te amparo com minha destra vitoriosa. Isaías 41:10';
  frases[36] = 'Bem conheço os desígnios que mantenho para convosco – oráculo do Senhor -, desígnios de prosperidade e não de calamidade, de vos garantir um futuro e uma esperança. Jeremias 29:11';
  frases[37] = 'E a paz de Deus, que excede toda a inteligência, haverá de guardar vossos corações e vossos pensamentos, em Cristo Jesus. Filipenses 4:7';
  frases[38] = 'Espera no Senhor e faze o bem; habitarás a terra em plena segurança. Põe tuas delícias no Senhor, e os desejos do teu coração ele atenderá. Confia ao Senhor a tua sorte, espera nele, e ele agirá. Salmos 36:3-5';
  frases[39] = 'Não vos conformeis com este mundo, mas transformai-vos pela renovação do vosso espírito, para que possais discernir qual é a vontade de Deus, o que é bom, o que lhe agrada e o que é perfeito. Romanos 12:2';
  frases[40] = 'Como um pai tem piedade de seus filhos, assim o Senhor tem compaixão dos que o temem, porque ele sabe de que é que somos feitos, e não se esquece de que somos pó. Salmos 102:13-14';
  frases[41] = 'É a vós que eu invoco, Senhor, desde a manhã; escutai a minha voz, porque, desde o raiar do dia, vos apresento minha súplica e espero. Salmos 5:4';
  frases[42] = 'Alguém sozinho é derrotado, dois conseguem resistir e a corda tripla não se rompe facilmente. Eclesiastes 4: 12';
  frases[43] = 'Deus criou o homem à sua imagem, à imagem de Deus ele o criou, homem e mulher ele os criou. Deus os abençoou e lhes disse: “Sede fecundos, multiplicai-vos, enchei a terra e submetei-a; dominai sobre os peixes do mar, as aves do céu e todos os animais que rastejam sobre a terra. Gênesis 1:27-28';
  frases[44] = 'O que Deus uniu, o homem não separe. Marcos 10:9';
  frases[45] = 'Desfruta a vida com a mulher amada em todos os dias da vida de vaidade que Deus te concede debaixo do sol, todos os teus dias de vaidade, porque esta é a tua porção na vida e no trabalho com que te afadigas debaixo do sol. Eclesiastes 9:9';
  frases[46] = 'Acima de tudo, cultivai, com todo o ardor, o amor mútuo, porque o amor cobre uma multidão de pecados. 1 Pedro 4:8';
  frases[47] = 'Exorto-vos a andardes de modo digno da vocação com a qual fostes chamados: com toda a humildade e mansidão, com longanimidade, suportando-vos uns aos outros com amor, procurando conservar a unidade do Espírito pelo vínculo da paz. Efésios 4:1-3';
  frases[48] = 'Sede bondosos e compassivos uns com os outros, perdoando-vos mutuamente, como Deus vos perdoou em Cristo. Efésios 4:32';
  frases[49] = 'As tentações que vos acometeram tiveram medida humana. Deus é fiel; não permitirá que sejais tentados acima das vossas forças. Mas, com a tentação, ele vos dará os meios de sair dela e a força para a suportar. 1 Coríntios 10:13';
  frases[50] = 'O matrimônio seja honrado por todos, e o leito conjugal, sem mancha; porque Deus julgará os fornicadores e os adúlteros. Hebreus 13:4';
  frases[50] = 'Confia no Senhor com todo o teu coração, não te fies em tua própria inteligência; e em todos os teus caminhos, reconhece-o, e ele endireitará as tuas veredas. Provérbios 3:5-6';
  frases[51] = 'Sê firme e corajoso. Não temas e não te apavores, porque o Senhor teu Deus está contigo por onde quer que andes. Josué 1:9';
  frases[52] = 'Nós sabemos que Deus coopera em tudo para o bem daqueles que o amam, daqueles que são chamados segundo o seu desígnio. Romanos 8:28';
  frases[53] = 'Sim, eu conheço os desígnios que formei a vosso respeito – oráculo do Senhor –, desígnios de paz e não de desgraça, para vos dar um futuro e uma esperança. Jeremias 29:11';
  frases[54] = 'Porque não temos um sumo sacerdote que não possa compadecer-se das nossas fraquezas; porém um que, como nós, em tudo foi tentado, mas sem pecado. Hebreus 4:15';
  frases[55] = 'Porque os meus pensamentos não são os vossos pensamentos, nem os vossos caminhos, os meus caminhos, diz o Senhor. Isaías 55:8';
  frases[56] = 'Assim resplandeça a vossa luz diante dos homens, para que vejam as vossas boas obras e glorifiquem o vosso Pai, que está nos céus. Mateus 5:16';
  frases[57] = 'É como o óleo precioso sobre a cabeça, que desce sobre a barba, a barba de Arão, e que desce à orla das suas vestes. Salmos 133:2';
  frases[58] = 'E Jesus disse-lhe: Amarás o Senhor, teu Deus, de todo o teu coração, e de toda a tua alma, e de todo o teu pensamento. Mateus 22:37';
  frases[59] = 'Não se aparte da tua boca o livro desta Lei; antes, medita nele dia e noite, para que tenhas cuidado de fazer conforme tudo quanto nele está escrito; porque, então, farás prosperar o teu caminho e, então, prudentemente te conduzirás. Josué 1:8';
  frases[60] = 'E, tudo quanto fizerdes, fazei-o de todo o coração, como ao Senhor e não aos homens. Colossenses 3:23';
  frases[61] = 'E, chegando-se Jesus, falou-lhes, dizendo: É-me dado todo o poder no céu e na terra. Mateus 28:18';
  frases[62] = 'Não se aparte da tua boca o livro desta Lei; antes, medita nele dia e noite, para que tenhas cuidado de fazer conforme tudo quanto nele está escrito; porque, então, farás prosperar o teu caminho e, então, prudentemente te conduzirás. Josué 1:8';
  frases[63] = 'Porque Deus enviou o seu Filho ao mundo não para que condenasse o mundo, mas para que o mundo fosse salvo por ele. João 3:17';
  frases[64] = 'E em nenhum outro há salvação, porque também debaixo do céu nenhum outro nome há, dado entre os homens, pelo qual devamos ser salvos. Atos 4:12';
  frases[65] = 'Deleita-te também no Senhor, e ele te concederá o que deseja o teu coração. Salmos 37:4';
  frases[66] = 'Cheguemos, pois, com confiança ao trono da graça, para que possamos alcançar misericórdia e achar graça, a fim de sermos ajudados em tempo oportuno. Hebreus 4:16';
  frases[67] = 'Como o orvalho do Hermom, que desce sobre os montes de Sião; porque ali o Senhor ordena a bênção e a vida para sempre. Salmos 133:3';
  frases[68] = 'Tendo por certo isto mesmo: que aquele que em vós começou a boa obra a aperfeiçoará até ao Dia de Jesus Cristo. Filipenses 1:6';
  frases[69] = 'nem a altura, nem a profundidade, nem alguma outra criatura nos poderá separar do amor de Deus, que está em Cristo Jesus, nosso Senhor! Romanos 8:39';
  frases[70] = 'Bem-aventurado o varão que sofre a tentação; porque, quando for provado, receberá a coroa da vida, a qual o Senhor tem prometido aos que o amam. Tiago 1:12';
  frases[71] = 'Mas a todos quantos o receberam deu-lhes o poder de serem feitos filhos de Deus: aos que creem no seu nome. João 1:12';
  frases[72] = 'De sorte que a fé é pelo ouvir, e o ouvir pela palavra de Deus. Romanos 10:17';
  frases[73] = 'Ele te declarou, ó homem, o que é bom; e que é o que o Senhor pede de ti, senão que pratiques a justiça, e ames a beneficência, e andes humildemente com o teu Deus? Miquéias 6:8';
  frases[74] = 'Ninguém tem maior amor do que este: de dar alguém a sua vida pelos seus amigos. João 15:13';
  frases[75] = 'Deixo-vos a paz, a minha paz vos dou; não vo-la dou como o mundo a dá. Não se turbe o vosso coração, nem se atemorize. João 14:27';
  frases[76] = 'Oh! Quão bom e quão suave é que os irmãos vivam em união! Salmos 133:1';
  frases[77] = 'No princípio, era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus. João 1:1';
  frases[78] = 'O meu Deus, segundo as suas riquezas, suprirá todas as vossas necessidades em glória, por Cristo Jesus. Filipenses 4:19';
  frases[79] = 'Revesti-vos, pois, como eleitos de Deus, santos e amados, de entranhas de misericórdia, de benignidade, humildade, mansidão, longanimidade. Colossenses 3:12';
  frases[80] = 'Porque o meu jugo é suave, e o meu fardo é leve. Mateus 11:30';
  frases[81] = 'E disse-lhes Pedro: Arrependei-vos, e cada um de vós seja batizado em nome de Jesus Cristo para perdão dos pecados, e recebereis o dom do Espírito Santo. Atos 2:38';
  frases[82] = 'Na verdade, na verdade vos digo que quem ouve a minha palavra e crê naquele que me enviou tem a vida eterna e não entrará em condenação, mas passou da morte para a vida. João 5:24';
  frases[83] = 'Ora, sem fé é impossível agradar-lhe, porque é necessário que aquele que se aproxima de Deus creia que ele existe e que é galardoador dos que o buscam. Hebreus 11:6';
  frases[84] = 'Disse-lhe Jesus: Eu sou a ressurreição e a vida; quem crê em mim, ainda que esteja morto, viverá. João 11:25';
  frases[85] = 'Ora, o Deus de esperança vos encha de todo o gozo e paz em crença, para que abundeis em esperança pela virtude do Espírito Santo. Romanos 15:13';
  frases[86] = 'Tenho-vos dito isso, para que em mim tenhais paz; no mundo tereis aflições, mas tende bom ânimo; eu venci o mundo. João 16:33';
  frases[87] = 'Se, com a tua boca, confessares ao Senhor Jesus e, em teu coração, creres que Deus o ressuscitou dos mortos, serás salvo. Romanos 10:9';
  frases[88] = 'Assim que, se alguém está em Cristo, nova criatura é: as coisas velhas já passaram; eis que tudo se fez novo. 2 Coríntios 5:17';
  frases[89] = 'Ora, a fé é o firme fundamento das coisas que se esperam e a prova das coisas que se não veem. Hebreus 11:1';
  frases[90] = 'Mas buscai primeiro o Reino de Deus, e a sua justiça, e todas essas coisas vos serão acrescentadas. Mateus 6:33';
  frases[91] = 'Toda Escritura divinamente inspirada é proveitosa para ensinar, para redarguir, para corrigir, para instruir em justiça, 2 Timóteo 3:16';
  frases[92] = 'Porque o salário do pecado é a morte, mas o dom gratuito de Deus é a vida eterna, por Cristo Jesus, nosso Senhor. Romanos 6:23';
  frases[93] = 'E a paz de Deus, que excede todo o entendimento, guardará os vossos corações e os vossos sentimentos em Cristo Jesus. Filipenses 4:7';
  frases[94] = 'Quanto ao mais, irmãos, tudo o que é verdadeiro, tudo o que é honesto, tudo o que é justo, tudo o que é puro, tudo o que é amável, tudo o que é de boa fama, se há alguma virtude, e se há algum louvor, nisso pensai. Filipenses 4:8';
  frases[95] = 'Mas Deus prova o seu amor para conosco em que Cristo morreu por nós, sendo nós ainda pecadores. Romanos 5:8';
  frases[96] = 'Já estou crucificado com Cristo; e vivo, não mais eu, mas Cristo vive em mim; e a vida que agora vivo na carne vivo-a na fé do Filho de Deus, o qual me amou e se entregou a si mesmo por mim. Gálatas 2:20';
  frases[97] = 'O ladrão não vem senão a roubar, a matar e a destruir; eu vim para que tenham vida e a tenham com abundância. João 10:10';
  frases[98] = 'Mas o fruto do Espírito é: amor, gozo, paz, longanimidade, benignidade, bondade, fé, mansidão, temperança. Gálatas 5:22';
  frases[99] = 'Porque pela graça sois salvos, por meio da fé; e isso não vem de vós; é dom de Deus. Efésios 2:8';
  frases[100] = 'Portanto, ide, ensinai todas as nações, batizando-as em nome do Pai, e do Filho, e do Espírito Santo; Mateus 28:19';
  frases[101] = 'Não estejais inquietos por coisa alguma; antes, as vossas petições sejam em tudo conhecidas diante de Deus, pela oração e súplicas, com ação de graças. Filipenses 4:6';
  frases[102] = 'E não vos conformeis com este mundo, mas transformai-vos pela renovação do vosso entendimento, para que experimenteis qual seja a boa, agradável e perfeita vontade de Deus. Romanos 12:2';
  frases[103] = 'Reconhece-o em todos os teus caminhos, e ele endireitará as tuas veredas. Provérbios 3:6';
  frases[104] = 'Confia no Senhor de todo o teu coração e não te estribes no teu próprioentendimento. Provérbios 3:5';
  frases[105] = 'No princípio, criou Deus os céus e a terra. Gênesis 1:1';
  frases[106] = 'Posso todas as coisas naquele que me fortalece. Filipenses 4:13';
  frases[107] = 'E sabemos que todas as coisas contribuem juntamente para o bem daqueles que amam a Deus, daqueles que são chamados por seu decreto. Romanos 8:28';
  frases[108] = 'Porque eu bem sei os pensamentos que penso de vós, diz o Senhor; pensamentos de paz e não de mal, para vos dar o fim que esperais. Jeremias 29:11';
  frases[109] = 'Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna. João 3:16';
  

  var fraseEscolhida = frases [ numeroAleatorio ];

  Alert.alert(null, fraseEscolhida);

}

type Props = {};
export default class App extends Component<Props> {
  render() {
    const { principal, botao, textoBotao } = Estilos;
    return (
      <View style={ principal }>

        <Image source={require('./imgs/logo.png')} />
        <TouchableOpacity 
          onPress={gerarNovaFrase}
          style={ botao }>
          <Text style={ textoBotao }>Novo versículo</Text>
        </TouchableOpacity>  
        
      </View>
    );
  }
}

const Estilos = {
  principal: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#049a2e',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
};
