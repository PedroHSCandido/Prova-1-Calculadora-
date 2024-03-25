const { createApp } = Vue;

createApp({
    data() {
        return {
            display: null,
            primeiroNum: null,
            segundoNum: null,
            operador: null,
            resultado: null,
            //Inicia as variaveis que serão utilizadas
        }
    },
    methods: {
        lidarBotao(botao) {
            switch (botao) {
                case "+":
                case "-":
                case "*":
                case "/":
                    this.lidarOperador(botao);
                    break;
                case ".":
                    this.lidarDecimal();
                    break;
                case "=":
                    this.lidarIgual();
                    break;
                case "AC":
                    this.lidarClear();
                    break;
                default:
                    this.lidarNumero(botao);
                    break;
            //Case para filtrar as operações que serão realizadas
            }
        },

        lidarOperador(operador) {
            this.primeiroNum = (this.display); //Atribui o primeiro numero digitado para a variavel armazenar
            this.operador = operador; //Recebe e atribuir o simbolo da operação que será utilizada
            this.display = null
        },

        lidarDecimal() {
            console.log(".");
            if (this.display.includes(".")) {// Verifica se existe um ponto decimal
                
            } else {
                this.display += "."; // Se não houver um ponto decimal é adicionado
            }
        },
        
        lidarIgual() {
            this.segundoNum = (this.display);
            this.segundoNum = parseFloat(this.segundoNum)
            this.primeiroNum = parseFloat(this.primeiroNum)
            switch (this.operador) {

                case "+":
                    this.resultado = this.primeiroNum + this.segundoNum;
                    break;
                case "-":
                    this.resultado = this.primeiroNum - this.segundoNum;
                    break;
                case "*":
                    this.resultado= this.primeiroNum * this.segundoNum;
                    break;
                case "/":
                    this.resultado= this.primeiroNum / this.segundoNum;
                    break;
            }

            this.display = this.resultado
        },

        lidarClear() { //Zera os valores de todas variaveis
            this.display = null;
            this.primeiroNum = null;
            this.segundoNum = null;
            this.operador = null;
        },

        lidarNumero(numero) {
            console.log(numero);
            if (this.display === null) { //Verifica se ja foi inserido algum numero no display
                this.display = numero; //Se não houver nada adicionado apenas adiciona um novo numero
            } else {
                this.display += numero;//Se tiver um numero concatena para construir o numero desejado
            }
        }
    }
}).mount("#app");