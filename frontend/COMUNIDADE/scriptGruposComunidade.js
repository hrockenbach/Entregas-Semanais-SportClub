document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch('http://localhost:3006/api/get/postagens');
        const results = await response.json();

        if (results.success) {
            const GruposComunidade = document.getElementById('gruposContainer');

            results.data.forEach(comunidade => {

                // <section class="retangulo">

            //     <div class="grupos">

            //     <img src="../COMUNIDADE/img.comunidade/Ellipse 5.png" id="foto">

            //     <div class="infos">
            //         <p id="titulo"> VOVOZINHOS DO FUT </p>
            //         <p> 18 integrantes </p>
            //         <p> Se junte a nós! </p>

            //     </div>

            // </div>
            // </div>

                const card = document.createElement('section');
                card.className = 'retangulo';

                const divGrupos = document.createElement('div')
                divGrupos.className = "grupos"

                const img = document.createElement('img');
                img.src = `http://localhost:3006/uploads/${comunidade.imagem}`;
                img.className="img-grupo"
                const infosDiv = document.createElement('div');
                infosDiv.className = 'infos';

                const nome = document.createElement('p');
                nome.textContent = comunidade.nome_grupo;

                const descricao = document.createElement('p');
                // descricao.textContent = `${comunidade.integrantes} integrantes`;
                descricao.textContent = comunidade.descricao;

                const outroTexto = document.createElement('p');
                outroTexto.textContent = comunidade.outroTexto;

                infosDiv.appendChild(nome);
                infosDiv.appendChild(descricao);
                infosDiv.appendChild(outroTexto);

                divGrupos.appendChild(img);
                divGrupos.appendChild(infosDiv);

                card.appendChild(divGrupos)

                GruposComunidade.appendChild(card);
            });
        } else {
            console.log('Erro:', results.sql);
        }
    } catch (error) {
        console.error('Erro ao buscar postagens:', error);
    }
});
