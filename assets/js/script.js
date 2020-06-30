
const form = document.getElementById('form');

form.addEventListener('submit', handleSubmit);

function handleSubmit (event){
      event.preventDefault();
       
      const genero = getSelectedValue('gender');
      const idade = getInputNumberValue('age');
      const peso  = getInputNumberValue('weight');
      const altua = getInputNumberValue('height');
      const nivelDeAtividade = getInputNumberValue('activity_level');

      //Calculo de metabolismo basal
      const tmb=(
            genero === 'female'
            ?(665 +(9.6 * peso) + (1.8 * altua) -(4.7 * idade))
            :(66 +(13.7 * peso) + (5 * altua) -(6.8 * idade))
      );
      
      //Calculo para manter peso
      const manutencao = Math.round(tmb * Number(nivelDeAtividade));
      
      //Calculo para peder peso
      const perderPeso = manutencao - 450;
      
      //Calculo para ganhar peso
      const ganharPeso = manutencao + 450; 

      const layout = `
        
      <h2>Aqui está o resultado:</h2>

      <div class="result-content">
        <ul>
          <li>
            Seu metabolismo basal é de <strong>${tmb} calorias</strong>.
          </li>
          <li>
            Para manter o seu peso você precisa consumir em média <strong>${manutencao} calorias</strong>.
          </li>
          <li>
            Para perder peso você precisa consumir em média <strong>${perderPeso} calorias</strong>.
          </li>
          <li>
            Para ganhar peso você precisa consumir em média <strong>${ganharPeso} calorias</strong>.
          </li>
        </ul>
      </div>


      `;
    
      const resultado = document.getElementById('result');
      resultado.innerHTML = layout;

}


//Captura valor do select
function getSelectedValue(id){
       
      const select = document.getElementById(id);
      return select.options[select.selectedIndex].value;
}

//Coverte os campos de string para number
function getInputNumberValue(id){
  return Number(document.getElementById(id).value);
}