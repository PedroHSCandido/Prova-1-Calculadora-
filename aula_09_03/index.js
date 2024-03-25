const { createApp } = Vue;

createApp({
    data() {
        return {
            display: null,
            primeiroNum: null,
            segundoNum: null,
            operador: null
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

                 case "/":
                    this.display = this.primeiroNum/this.segundoNum; //Divide o primeiro e o segundo numero
                    break;
                case "*":
                    this.display = this.primeiroNum * this.segundoNum; //Multiplica o primeiro e o segundo numero
                    break;
                case "+":
                    this.display = this.primeiroNum + this.segundoNum; //Soma o primeiro e o segundo numero
                    break;
                case "-":
                    this.display = this.primeiroNum - this.segundoNum; //Subtrai o primeiro e o segundo numero
                    break;
            }
        },

        lidarClear() { //Zera os valores de todas variaveis
            this.display = null;
            this.primeiroNum = null;
            this.segundoNum = null;
            this.operador = null;
        },

        lidarNumero(numero) {
            console.log(numero);
            if (this.display === null) {
                this.display = numero;
            } else {
                this.display += numero;
            }
        }
    }
}).mount("#app");