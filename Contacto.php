<?php include 'includes/header.php'; ?>
    <main class="contenedor">
        <h3>Contactanos</h3>
        <div class="contacto-fondo"></div>
        <Form class="formulario">
            <div class="campo">
                <label class="campo__label" for="Nombre">Nombre</label>
                <input maxlength="60" class="campo__field" type="text" placeholder="Tu Nombre" id="Nombre" min="1" >
            </div>
            <div class="campo">
                <label class="campo__label" type="mail" for="EMail">E-Mail</label>
                <input maxlength="50" class="campo__field" type="email" placeholder="Tu Correo" id="EMail"  min="15">
            </div>
            <div class="campo">
                <label class="campo__label" for="Texto">Escribanos</label>
                <textarea class="campo__field campo__field--textarea" name="Barra de Texto" id="Texto" placeholder="¿Por qué quieres hacer este curso?" cols="30" rows="10"></textarea>
            </div>
            <div class="campo">
                <input type="submit" value="Enviar" class="boton boton--primario">
            </div>
        </Form>
        </div>
    </div>
    </main>
<?php include 'includes/footer.php'; ?>
