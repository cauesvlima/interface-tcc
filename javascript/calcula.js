    //Guardando o valor de dna na variável
        var dna = document.querySelector("#input-dna")
        console.log('tavindo')
        var rnam = document.querySelector("#idrnam")

    //Execuções de Eventos com funções
        document.querySelector("#calcular").addEventListener('click', calcular)
        document.querySelector("#limpar").addEventListener('click', limpar)
        dna.addEventListener('keyup',corrigirdna)
        rnam.addEventListener('keyup',corrigirrnam)

    //Função limitando digitação
        function corrigirdna(ev){

            const input = ev.target;
            input.value = input.value.replace(/B|[D-F]|[H-S]|[U-Z]|\ /gi, '')

        }

        function corrigirrnam(ev){

            const input = ev.target;
            input.value = input.value.replace(/B|[D-F]|[H-T]|[V-Z]|\ /gi, '')

        }

    //Função de limpar a digitação
        function limpar(){

            dna.value = ""
            rnam.value = ""

        }


    //Função o calculo de Chargaff
        function calcular(){   

            rnam=""

            for(var i = 0; dna.value.length > i; i++){

                if(dna.value[i].search(/A/i) !== -1){

                    rnam +='U'

                } else if(dna.value[i].search(/T/i) !== -1){

                    rnam+= 'A'

                } else if(dna.value[i].search(/C/i) !== -1){

                    rnam+= 'G'

                } else if(dna.value[i].search(/G/i) !== -1){

                    rnam+= 'C'

                } else {

                    rnam+= ''

                }

            }

            var spanm = document.querySelector('#idspanm')

            spanm.innerHTML = 'RNA mensageiro '+rnam

            var rnat=''

            for(var i = 0; rnam.length > i; i++){

                if(rnam[i].search(/A/i) !== -1){

                    rnat +='U'

                } else if(rnam[i].search(/U/i) !== -1){

                    rnat+= 'A'

                } else if(rnam[i].search(/C/i) !== -1){

                    rnat+= 'G'

                } else if(rnam[i].search(/G/i) !== -1){

                    rnat+= 'C'

                } else {

                    rnat+= ''

                }

            }

            var teste = []

            var c = 0
            for(var i = 0;i<rnat.length/3;i++){

                teste[i] =rnat[c]+rnat[c+1]+rnat[c+2]
                c = c + 3
            }

            var spant = document.querySelector('#idspant')

            spant.innerHTML = 'RNA transmissor '+teste

        }


