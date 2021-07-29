var options ={
    1:`<h2 class="title">Bienvenido a la calculadora de medias</h2>
            <form action="">
                <label for="">Por favor, ingrese <strong>UNO POR UNO</strong> los datos de los cuales desea calcular la media
                    aritmetica
                    <input id="inputNumbers" type="number"></label>
                <input type="button" onclick="addValue()" value="Agregar nuevo valor">
                <div class="buttons">
            
                    <input type="button" onclick="printMedia()" value="Calcular media aritmetica">
                    <input type="button" onclick="cleanList()" value="Borrar todos los valores">
                </div>
            </form>
            <h2>Su lista se vera reflejada aqui:</h2>
            <div style="display: flex; align-items: center;">[<p id="listaHTML"></p>]</div>
            <p id="resultado"></p>`,
    2:`<h2 class="title">Bienvenido a la calculadora de medianas</h2>
            <form action="">
                <label for="">Por favor, ingrese <strong>UNO POR UNO</strong> los datos de los cuales desea calcular la
                    <strong>MEDIANA</strong>
                    <input id="inputNumbers" type="number"></label>
                <input type="button" onclick="addValue()" value="Agregar nuevo valor">
                <div class="buttons">
            
                    <input type="button" onclick="printMediana()" value="Calcular mediana">
                    <input type="button" onclick="cleanList()" value="Borrar todos los valores">
                </div>
            </form>
            <h2>Su lista se vera reflejada aqui:</h2>
            <div style="display: flex; align-items: center;">[<p id="listaHTML"></p>]</div>
            <p id="resultado"></p>`,
    3:`<h2 class="title">Bienvenido a la calculadora de moda</h2>
            <form action="">
                <label for="">Por favor, ingrese <strong>UNO POR UNO</strong> los datos de los cuales desea calcular la
                    <strong>MODA</strong>
                    <input id="inputNumbers" type="number"></label>
                <input type="button" onclick="addValue()" value="Agregar nuevo valor">
                <div class="buttons">
            
                    <input type="button" onclick="printModa()" value="Calcular moda">
                    <input type="button" onclick="cleanList()" value="Borrar todos los valores">
                </div>
            </form>
            <h2>Su lista se vera reflejada aqui:</h2>
            <div style="display: flex; align-items: center;">[<p id="listaHTML"></p>]</div>
            <p id="resultado"></p>`
}